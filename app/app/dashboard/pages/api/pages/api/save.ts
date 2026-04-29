import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default async function handler(req, res) {
  const { salary, score } = req.body;

  await pool.query(
    "INSERT INTO calculations (salary, score) VALUES ($1,$2)",
    [salary, score]
  );

  res.json({ success: true });
}
