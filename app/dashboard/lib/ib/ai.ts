import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeCandidate(data: any, salary: number) {
  const prompt = `
You are an HR expert.

Candidate:
Experience: ${data.experience}
Skills: ${data.skillsScore}
Interview: ${data.interviewScore}

Salary: ${salary}

Return:
- Market position
- Recommendation
`;

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return res.choices[0].message.content;
}
