import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const token = jwt.sign(
    { email: req.body.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
}
