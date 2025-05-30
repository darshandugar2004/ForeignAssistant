
import { useState, useEffect, useCallback } from 'react';

// Declare global types for Web Speech API if not available from lib.dom.d.ts
// This ensures TypeScript recognizes SpeechRecognition, SpeechRecognitionEvent, etc.
declare global {
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult; // Index signature
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative; // Index signature
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string; // Typically a SpeechRecognitionErrorCode or other error string
    readonly message: string;
  }

  interface SpeechRecognition extends EventTarget {
    grammars: any; // Adjust if SpeechGrammarList is needed and defined
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI?: string;

    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;

    abort(): void;
    start(): void;
    stop(): void;
  }

  interface Window {
    SpeechRecognition?: {
      prototype: SpeechRecognition;
      new(): SpeechRecognition;
    };
    webkitSpeechRecognition?: { // For Safari and older Chrome/Edge
      prototype: SpeechRecognition;
      new(): SpeechRecognition;
    };
  }
}


interface SpeechRecognitionHook {
  isListening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  error: string | null;
  isSupported: boolean;
}

const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      setIsSupported(true);
      const newRecognitionInstance: SpeechRecognition = new SpeechRecognitionAPI();
      newRecognitionInstance.continuous = false;
      newRecognitionInstance.interimResults = false;
      newRecognitionInstance.lang = 'en-US'; // Can be changed based on user preference

      newRecognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
        setIsListening(false); 
      };

      newRecognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
        setError(event.error);
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      newRecognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(newRecognitionInstance);
    } else {
      setError("Speech recognition not supported in this browser.");
      setIsSupported(false);
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognition && !isListening) {
      setTranscript('');
      setError(null);
      try {
        recognition.start();
        setIsListening(true);
      } catch (e: any) {
        setError(`Failed to start speech recognition: ${e.message || e.name || 'Unknown error'}`);
        console.error('Speech recognition start error:', e);
        setIsListening(false);
      }
    }
  }, [recognition, isListening]);

  const stopListening = useCallback(() => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition, isListening]);

  return { isListening, transcript, startListening, stopListening, error, isSupported };
};

export default useSpeechRecognition;
