
import React, { useState, useEffect } from 'react';
import { Chat } from '@google/genai';
import Navbar from './components/Navbar';
import RestaurantSection from './components/sections/RestaurantSection.tsx';
import RecipeSection from './components/sections/RecipeSection.tsx';
import LanguageAssistantSection from './components/sections/LanguageAssistantSection';
import FloatingChatButton from './components/shared/FloatingChatButton';
import GlobalChatModal from './components/shared/GlobalChatModal.tsx';
import { AppSection } from './types';
import { APP_NAME, GLOBAL_CHAT_SYSTEM_PROMPT } from './constants';
import { createChatSession } from './services/geminiService';

const LOCAL_STORAGE_KEY = 'jeenuTaiwanHelperActiveSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(() => {
    const storedSection = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedSection && Object.values(AppSection).includes(storedSection as AppSection)) {
      return storedSection as AppSection;
    }
    return AppSection.Restaurants; // Default section
  });

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [globalChatInstance, setGlobalChatInstance] = useState<Chat | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeSection);
  }, [activeSection]);

  useEffect(() => {
    // Initialize global chat instance once
    if (!globalChatInstance) {
      try {
        const newChat = createChatSession(GLOBAL_CHAT_SYSTEM_PROMPT);
        setGlobalChatInstance(newChat);
      } catch (error) {
        console.error("Failed to initialize global chat session:", error);
        // Optionally, inform the user via an alert or a status message if chat isn't available
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.Restaurants:
        return <RestaurantSection />;
      case AppSection.Recipes:
        return <RecipeSection />;
      case AppSection.Language:
        return <LanguageAssistantSection />;
      default:
        localStorage.setItem(LOCAL_STORAGE_KEY, AppSection.Restaurants);
        return <RestaurantSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBEFED]">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-grow container mx-auto px-2 py-4 sm:px-4 sm:py-8">
        <div className="bg-[#FBEFED] backdrop-blur-sm shadow-xl rounded-xl p-4 md:p-6 min-h-[calc(100vh-120px)]">
           {renderSection()}
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-[#4e4c4f]">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Made with care for Jeenu.</p>
      </footer>
      
      <FloatingChatButton onClick={() => setIsChatModalOpen(true)} />
      
      {globalChatInstance && ( // Only render modal if chat instance is successfully created
        <GlobalChatModal
          isOpen={isChatModalOpen}
          onClose={() => setIsChatModalOpen(false)}
          chatInstance={globalChatInstance}
          setChatInstance={setGlobalChatInstance} // Though global, ChatInterface might need to re-init on critical errors
          systemInstruction={GLOBAL_CHAT_SYSTEM_PROMPT}
          placeholderText="Ask about restaurants, recipes or language..."
          initialBotMessage="Hi Jyoti! I'm your all-in-one assistant. How can I help you."
        />
      )}
    </div>
  );
};

export default App;