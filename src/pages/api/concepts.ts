import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { slugify } from "@/utils/slugify";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const conceptsDir = path.join(process.cwd(), "src/concepts");
    const categories = fs.readdirSync(conceptsDir);
    const concepts: Record<string, { title: string; slug: string }[]> = {};

    categories.forEach((category) => {
      const conceptFiles = fs.readdirSync(path.join(conceptsDir, category));
      concepts[category] = conceptFiles.map((file) => {
        const title = file.replace(".md", "").replace(/-/g, " ");
        return {
          title,
          slug: slugify(title),
        };
      });
    });

    res.status(200).json(concepts);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar los conceptos" });
  }
}
