
import { GoogleGenAI, Chat, GenerateContentResponse, GenerateContentParameters } from "@google/genai";
import { GEMINI_API_KEY } from '../constants';

let ai: GoogleGenAI | null = null;

const getAIInstance = (): GoogleGenAI => {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key is not configured. Please set the API_KEY environment variable.");
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  }
  return ai;
};

export const createChatSession = (systemInstruction: string, modelName: string = 'gemini-2.5-flash-preview-04-17'): Chat => {
  const currentAI = getAIInstance();
  return currentAI.chats.create({
    model: modelName,
    config: {
      systemInstruction: systemInstruction,
      // For low latency assistant, disable thinking if appropriate for the section.
      // For now, let's keep default thinking enabled for better quality.
      // thinkingConfig: { thinkingBudget: 0 } // Example if disabling thinking
    },
  });
};

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    if (error instanceof Error) {
      return `I'm having a little trouble right now, Jeenu. ${error.message}`;
    }
    return "I'm having a little trouble right now, Jeenu. Please try again in a bit.";
  }
};

export const generateContent = async (prompt: string, systemInstruction?: string, modelName: string = 'gemini-2.5-flash-preview-04-17'): Promise<string> => {
  try {
    const currentAI = getAIInstance();
    const request: GenerateContentParameters = {
      model: modelName,
      contents: prompt,
    };
    if (systemInstruction) {
      request.config = { systemInstruction };
    }

    const response: GenerateContentResponse = await currentAI.models.generateContent(request);
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
     if (error instanceof Error) {
      return `I'm having a little trouble right now, Jeenu. ${error.message}`;
    }
    return "I'm having a little trouble right now, Jeenu. Please try again in a bit.";
  }
};
