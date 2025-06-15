import express from "express";
import dotenv from "dotenv";
import { promptContent } from "../../utils/prompt.js";
import { GoogleGenAI } from "@google/genai";
dotenv.config();

const agentRouter = express.Router();

agentRouter.post("/review", async (req, res) => {
  const { animalName, code, codeLanguage } = req.body;

  if (!animalName) {
    return res.status(400).json({
      error: `Animal name is required`,
    });
  }

  if (!code) {
    return res.status(400).json({
      error: `Code is required`,
    });
  }

  if (!codeLanguage) {
    return res.status(400).json({
      error: `Code language is required`,
    });
  }

  const prompt = promptContent(animalName, code, codeLanguage);

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: `gemini-2.0-flash`,
      contents: prompt,
      temperature: 0.7,
    });

    res.status(200);
    res.json({
      response: response.candidates[0].content.parts[0].text,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

export default agentRouter;
