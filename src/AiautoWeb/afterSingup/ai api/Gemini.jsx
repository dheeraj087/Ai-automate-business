import React, { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const useGemini = ({ promt }) => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        if (!promt) return
        // Replace YOUR_API_KEY_HERE with your secure key
        fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "openai/gpt-oss-120b",
                messages: [
                    {
                        role: "system",
                        content: `You are a friendly, AI assistant as friend you can devlar the answer need your friend .

IMPORTANT RESPONSE RULES (must follow strictly):
if user what need th answer an you can responsed according to the answer ok 

1. Respond ONLY in valid JSX/HTML.
2. Use Tailwind CSS classes for styling.
3. Wrap the entire response inside this container:

<div class="p-6 max-w-4xl mx-auto bg-black text-white rounded-xl space-y-6">

4. The output MUST include (if neen the explain):
   - Headings using <h1> and <h2>
   - Short, friendly paragraphs using <p>
    <table> with clear headers

5. UI / UX requirements :
   - Dark background (black or zinc-900)
   - High contrast text (white / gray-300)
   - Good spacing (padding, margin, space-y)
   - Rounded corners, borders where helpful
   - Clean and readable layout

7. Tables (if neen the explain):
   - Styled using Tailwind
   - Include <thead> and <tbody>
   - Borders and padding required

8. Tone:
   - Friendly and helpful
   - Short paragraphs
   - Simple explanations
   - No long walls of text

9. Do NOT:
   - Do NOT explain the format
   - Do NOT add extra text outside JSX
   - Do NOT break JSX/HTML syntax

10. Always adapt the content to the user's question, but keep the SAME structure and UI style.

Now generate the response according to the user's question using this format user be heppy to all your answer.
`
                    },
                    {
                        role: "user",
                        content:
                            promt
                    }
                ],
                temperature: 1,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                setResponse(data?.choices[0]?.message?.content || "");
            })
            .catch((err) => setResponse(err));

    }, [promt]);

    return (
        response);
};

export default useGemini;
