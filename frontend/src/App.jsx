import { useState } from "react";
import Form from "./components/Form";
import Output from "./components/Output";
import Loader from "./components/Loader";
import { GoogleGenAI } from "@google/genai";

export default function App() {
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL ='https://cover-letter-ndhq.vercel.app';

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const generate = async (formData) => {
    setLoading(true);

    const res = await fetch(`${API_URL}/api/generate`, {
      method: "POST",
      body: formData
    });


    const data = await res.json();
    setLetter(data.letter);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Cover Letter Generator</h1>
      <Form onGenerate={generate} />
      {loading && <Loader />}
      {letter && <Output text={letter} />}
    </div>
  );
}
