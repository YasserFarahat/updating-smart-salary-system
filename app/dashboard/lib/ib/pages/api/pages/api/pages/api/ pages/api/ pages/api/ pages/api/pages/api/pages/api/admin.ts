import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default async function handler(req, res) {
  const { secret } = req.body;

  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const data = await pool.query(
    "SELECT salary, score, created_at FROM calculations ORDER BY created_at DESC"
  );

  res.json(data.rows);
}
🎛️ 2. صفحة Admin Dashboard
📁 app/admin/page.tsx
"use client";

import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [secret, setSecret] = useState("");
  const [data, setData] = useState<any[]>([]);

  const loadData = async () => {
    const res = await axios.post("/api/admin", { secret });
    setData(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>

      <input
        type="password"
        placeholder="Admin Secret"
        onChange={(e) => setSecret(e.target.value)}
      />

      <button onClick={loadData}>Load Data</button>

      <ul>
        {data.map((item, i) => (
          <li key={i}>
            Salary: {item.salary} | Score: {item.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
