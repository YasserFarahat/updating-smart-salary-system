import { calculateSalary } from "@/lib/salaryEngine";
import { analyzeCandidate } from "@/lib/ai";

export default async function handler(req, res) {
  const result = calculateSalary(req.body);
  const ai = await analyzeCandidate(req.body, result.salary);

  res.json({
    salary: result.salary,
    score: result.score,
    ai
  });
}
