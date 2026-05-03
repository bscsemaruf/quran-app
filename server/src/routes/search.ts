import { Router } from "express";
import quran from "../data/quran.json";

const router = Router();

router.get("/", (req, res) => {
  const q = (req.query.q as string)?.toLowerCase();

  if (!q) return res.json([]);

  const result = (quran as any[]).filter(
    (a) => a.translation.toLowerCase().includes(q) || a.arabic.includes(q),
  );

  res.json(result.slice(0, 50));
});

export default router;
