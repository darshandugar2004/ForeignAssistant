
import React from 'react';
import { FrequentPhrase } from '../../types';
import { FREQUENT_PHRASES_TAIWAN } from '../../constants';
import SpeakerIcon from '../icons/SpeakerIcon';
import useTextToSpeech from '../../hooks/useTextToSpeech';

interface FrequentPhraseCardProps {
  phrase: FrequentPhrase;
  onSpeakClick: (text: string, lang: string) => void;
  ttsSupported: boolean;
  isSpeaking: boolean;
}

const FrequentPhraseCard: React.FC<FrequentPhraseCardProps> = ({ phrase, onSpeakClick, ttsSupported, isSpeaking }) => (
  <div className="bg-[#F7A49E] p-4 rounded-lg shadow-md border border-transparent"> {/* New card color */}
    <p className="font-semibold text-[#4e4c4f]">{phrase.english}</p>
    <p className="text-[#4e4c4f]">{phrase.mandarin} <span className="text-xs text-[#4e4c4f]/80">({phrase.pinyin})</span></p>
    {ttsSupported && (
      <button 
        onClick={() => onSpeakClick(phrase.mandarin, 'zh-TW')} // Specify Mandarin (Taiwan)
        className="mt-2 text-xs text-[#4e4c4f] hover:text-[#232220] flex items-center disabled:opacity-50"
        aria-label={`Speak "${phrase.mandarin}"`}
        disabled={isSpeaking}
      >
        <SpeakerIcon size={14} className="mr-1"/> Speak Mandarin
      </button>
    )}
  </div>
);

const LanguageAssistantSection: React.FC = () => {
  const { speak: speakText, isSupported: ttsSupported, isSpeaking, getVoiceInfo } = useTextToSpeech();

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#232220] mb-2">Language Helper</h2>
        <p className="text-[#4e4c4f]">
          Don't worry about language barriers.
          For translations or other language questions, use the chat assistant icon.
        </p>
      </div>
      
      <div className="mt-10 pt-6 border-t border-[#F7A49E]/50"> {/* Adjusted border for new palette */}
        <h3 className="text-2xl font-semibold text-[#232220] mb-4 text-center">Frequently Used Phrases</h3>
        {ttsSupported && getVoiceInfo('zh-TW') && (
          <p className="text-xs text-center text-[#9f8d8d] mb-4">
            Mandarin voice: {getVoiceInfo('zh-TW')}
          </p>
        )}
        {!ttsSupported && (
            <p className="text-xs text-center text-red-500 mb-4">
                Text-to-speech is not supported on your browser for these phrases.
            </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FREQUENT_PHRASES_TAIWAN.map(phrase => (
            <FrequentPhraseCard 
              key={phrase.id} 
              phrase={phrase} 
              onSpeakClick={speakText}
              ttsSupported={ttsSupported}
              isSpeaking={isSpeaking}
            />
          ))}
        </div>
      </div>

       {/* <div className="mt-8 text-center text-[#9f8d8d] italic"> */}
        {/* <p>Need to translate something or have other language questions? Click the chat icon to ask your assistant!</p> */}
      {/* </div> */}
    </div>
  );
};

export default LanguageAssistantSection;
