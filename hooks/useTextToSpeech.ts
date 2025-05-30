import { useState, useEffect, useCallback } from 'react';

interface UseTextToSpeechReturn {
  speak: (text: string, lang?: string) => void;
  isSpeaking: boolean;
  isSupported: boolean;
  getVoiceInfo: (lang: string) => string | null; 
}

const useTextToSpeech = (): UseTextToSpeechReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setIsSupported(true);
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
          // For debugging:
          // console.log("Available voices:", availableVoices.map(v => ({name: v.name, lang: v.lang, default: v.default, local: v.localService})));
        }
      };
      
      // Voices may load asynchronously
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
      
      return () => {
        if (window.speechSynthesis) {
           window.speechSynthesis.onvoiceschanged = null;
        }
      };
    }
  }, []);

  const getVoiceForLang = useCallback((targetLang: string): SpeechSynthesisVoice | null => {
    if (voices.length === 0) return null;

    const normalizedTargetLang = targetLang.split('-')[0]; // e.g., 'en' from 'en-US'
    const langSpecificVoices = voices.filter(voice => voice.lang.startsWith(normalizedTargetLang));

    if (langSpecificVoices.length === 0) {
        // Fallback to broader language match if specific like 'en-US' yields nothing but 'en' might
        const broaderMatch = voices.filter(voice => voice.lang.startsWith(normalizedTargetLang.substring(0,2)));
        if (broaderMatch.length > 0) langSpecificVoices.push(...broaderMatch);
        if (langSpecificVoices.length === 0) return null; 
    }
    

    let preferredVoice: SpeechSynthesisVoice | null = null;

    if (normalizedTargetLang === 'en') { 
      // Prioritize known "good" or "female" voices for English
      preferredVoice = langSpecificVoices.find(voice => voice.name === 'Google US English') ||
                       langSpecificVoices.find(voice => voice.name.includes('Microsoft Zira') && voice.lang.startsWith('en-US')) || 
                       langSpecificVoices.find(voice => voice.name.includes('Microsoft Eva') && voice.lang.startsWith('en-US')) || 
                       langSpecificVoices.find(voice => voice.name.toLowerCase().includes('apple eva') && voice.lang.startsWith('en-US')) ||
                       langSpecificVoices.find(voice => voice.name.toLowerCase().includes('female') && voice.lang.startsWith('en-US')) ||
                       langSpecificVoices.find(voice => voice.name.toLowerCase().includes('female') && voice.lang.startsWith('en')) ||
                       null;
      
      if (!preferredVoice) {
        preferredVoice = langSpecificVoices.find(voice => voice.localService && voice.lang.startsWith('en-US')) ||
                         langSpecificVoices.find(voice => voice.localService && voice.lang.startsWith('en')) ||
                         langSpecificVoices.find(voice => voice.lang.startsWith('en-US')) || // Any en-US
                         langSpecificVoices[0]; // First available English
      }
    } else { 
      // For non-English, prioritize local, then default for that language
      preferredVoice = langSpecificVoices.find(voice => voice.localService && voice.default) ||
                       langSpecificVoices.find(voice => voice.localService) ||
                       langSpecificVoices.find(voice => voice.default) ||
                       langSpecificVoices[0] ||
                       null;
    }
    return preferredVoice;
  }, [voices]);
  
  const getVoiceInfo = useCallback((lang: string): string | null => {
    const voice = getVoiceForLang(lang);
    return voice ? `${voice.name} (${voice.lang})` : `Default for ${lang}`;
  }, [getVoiceForLang]);

  const speak = useCallback((text: string, lang: string = 'en-US') => {
    if (!isSupported || !text || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; 

    const voiceForUtterance = getVoiceForLang(lang);
    if (voiceForUtterance) {
      utterance.voice = voiceForUtterance;
    }

    if (lang.startsWith('en')) {
        utterance.rate = 0.9;  // Slightly slower for English, can sound softer
        // utterance.pitch = 1.0; // Default is 1. Adjust if needed.
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      if (window.speechSynthesis && window.speechSynthesis.speaking) { 
        window.speechSynthesis.cancel();
      }
    };
    utterance.onerror = (event) => {
      console.error("SpeechSynthesisUtterance.onerror:", event);
      setIsSpeaking(false);
      if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };

    window.speechSynthesis.cancel(); 
    window.speechSynthesis.speak(utterance);
  }, [isSupported, getVoiceForLang]);

  return { speak, isSpeaking, isSupported, getVoiceInfo };
};

export default useTextToSpeech;