"use client";

import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [result, setResult] = useState<any>(null);

  const calculate = async () => {
    const res = await axios.post("/api/calculate", {
      experience: 5,
      education: "Master",
      skillsScore: 85,
      interviewScore: 80,
      testScore: 75,
      locationFactor: 0.8,
      minSalary: 4000,
      maxSalary: 9000
    });

    setResult(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <button onClick={calculate}>Run Analysis</button>

      {result && (
        <div>
          <h2>Salary: ${result.salary}</h2>
          <p>Score: {result.score}</p>
          <p>{result.ai}</p>

          <a href={/api/report?salary=${result.salary}}>
            <button>Download PDF</button>
          </a>
        </div>
      )}
    </div>
  );
}
