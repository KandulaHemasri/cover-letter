// import express from "express";
// import multer from "multer";
// import fetch from "node-fetch";
// import { parsePdf } from "../utils/pdfParser.js";

// const router = express.Router();
// const upload = multer();

// router.post("/", upload.single("resume"), async (req, res) => {
//   try {
//     const { name, role, company, skills } = req.body;

//     let resumeText = "";
//     if (req.file) {
//       resumeText = await parsePdf(req.file.buffer);
//     }

//     const prompt = `
// Write a professional cover letter.

// Candidate: ${name}
// Role: ${role}
// Company: ${company}
// Skills: ${skills}

// Resume:
// ${resumeText}

// Use proper paragraphs and professional tone.
// `;

//     const response = await fetch(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           model: "gpt-4o-mini",
//           messages: [{ role: "user", content: prompt }]
//         })
//       }
//     );

//     const data = await response.json();

//     if (!data.choices?.length) {
//       return res.status(500).json({
//         error: data.error?.message || "AI failed",
//         raw: data
//       });
//     }

//     res.json({ letter: data.choices[0].message.content });

//   } catch (err) {
//     console.error("ERROR:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;




import express from "express";
import multer from "multer";
import { parsePdf } from "../utils/pdfParser.js";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("resume"), async (req, res) => {
  try {

    console.log(req.body)
    const { name, role, company, skills } = req.body;

    let resumeText = "";
    if (req.file) {
      resumeText = await parsePdf(req.file.buffer);
      console.log(resumeText)
    }

    const prompt = `
Write a professional cover letter.

Candidate: ${name}
Role: ${role}
Company: ${company}
Skills: ${skills}

Resume:
${resumeText}

Use proper paragraphs and professional tone.
`;



const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY
});




  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  console.log(response.text);


    // const data = await response.json();

    // if (!data.choices?.length) {
    //   return res.status(500).json({
    //     error: data.error?.message || "AI failed",
    //     raw: data
    //   });
    // }

    // console.log(data)
    
    res.json({ letter: response.text });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;