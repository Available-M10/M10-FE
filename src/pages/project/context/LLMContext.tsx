import { createContext, useContext, useState } from "react";

interface LLMContextType {
  chatNode: string;
  prompt: string;
  setLLMData: (chatNode: string, prompt: string) => void;
}

const LLMContext = createContext<LLMContextType>({
  chatNode: "",
  prompt: "",
  setLLMData: () => {},
});

export const LLMProvider = ({ children }: { children: React.ReactNode }) => {
  const [chatNode, setChatNode] = useState("");
  const [prompt, setPrompt] = useState("");

  const setLLMData = (node: string, p: string) => {
    setChatNode(node);
    setPrompt(p);
  };

  return (
    <LLMContext.Provider value={{ chatNode, prompt, setLLMData }}>
      {children}
    </LLMContext.Provider>
  );
};

export const useLLM = () => useContext(LLMContext);
