
import { Chat } from "@google/genai";

export enum AppSection {
  Restaurants = "Restaurants",
  Recipes = "Recipes",
  Language = "Language",
}

export interface Recipe {
  id: string;
  name:string;
  description: string;
  image: string;
  cuisine: string; // e.g., "North Indian", "Italian"
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
}

export interface FrequentPhrase {
  id: string;
  english: string;
  mandarin: string;
  pinyin: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  audioUrl?: string; 
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  address?: string;
  notes?: string;
  image: string;
  googleMapsUrl?: string; // Added Google Maps URL
}

// Props for chat components
export interface ChatComponentProps {
  chatInstance: Chat | null;
  setChatInstance: React.Dispatch<React.SetStateAction<Chat | null>>;
  systemInstruction: string;
  modelName?: string;
  placeholderText: string;
  initialBotMessage?: string;
}