export type ProjectCategory = "Portfolio" | "Editorial" | "Resume" | "Multilingual";

export type WebProject = {
  id: string;
  number: string;
  title: string;
  type: string;
  category: ProjectCategory;
  year: string;
  description: string;
  href: string;
  preview: "home" | "blog" | "resume" | "zh";
  stack: string[];
};

export const projectCategories: ProjectCategory[] = ["Portfolio", "Editorial", "Resume", "Multilingual"];

// These entries showcase real sections of Chavez's existing website.
export const webProjects: WebProject[] = [
  {
    id: "personal-website",
    number: "01",
    title: "Chavez Poon",
    type: "Personal website",
    category: "Portfolio",
    year: "2026",
    description: "A personal portfolio bringing together biography, selected media work, writing, and contact information in one focused experience.",
    href: "https://www.chavezpoon.com/",
    preview: "home",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "writing-reflections",
    number: "02",
    title: "Writing & reflections",
    type: "Blog experience",
    category: "Editorial",
    year: "2026",
    description: "An editorial home for long-form writing, with post previews, a date-based archive, article contents, and sharing controls.",
    href: "https://www.chavezpoon.com/blog/",
    preview: "blog",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "digital-resume",
    number: "03",
    title: "Digital resume",
    type: "Professional profile",
    category: "Resume",
    year: "2026",
    description: "A structured resume page designed for screen reading, with a clear experience timeline, skills, language levels, and contact details.",
    href: "https://www.chavezpoon.com/resume.html",
    preview: "resume",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "traditional-chinese",
    number: "04",
    title: "繁體中文（香港）",
    type: "Language experience",
    category: "Multilingual",
    year: "2026",
    description: "A Traditional Chinese landing page that introduces the planned Hong Kong Chinese edition and links visitors back to the English site.",
    href: "https://www.chavezpoon.com/zh-hk/",
    preview: "zh",
    stack: ["HTML", "CSS", "JavaScript"]
  }
];
