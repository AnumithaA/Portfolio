// Everything about you that appears in the hero, about page, nav and contact section.
// Facts come from your resume and your answers. Edit freely.

export const profile = {
  name: "Anumitha Asokan",
  firstName: "Anumitha",
  tagline: "B.Tech CSE (AI & ML) student, curious about how machines learn.",
  intro:
    "Mostly interested in AI, Machine Learning and everything in between these. Come on in and have a look around.",

  // Rotating typewriter phrases in the hero.
  typewriterPhrases: [
    "Generative AI",
    "Machine Learning",
    "Multi-Agent Reinforcement Learning",
    "Deep Learning",
  ],

  // Path inside /public. Swap the file in /public with your updated resume,
  // keeping the same name (or change this path).
  resumePath: "/Anumitha_Asokan_Resume.pdf",
  resumeFileName: "Anumitha_Asokan_Resume.pdf",

  aboutParagraphs: [
    "Hi, I'm Anumitha, a Computer Science student at VIT Chennai specialising in AI & ML.",
    "What got me into AI and ML is how much it awes me that a machine can learn from random datasets and reach results on data it has never seen before. It isn't a being with a brain, and yet it learns. I want to understand that better, and I'm learning more about it every day.",
    "Away from the screen I like art, craft, crochet and reading books, which is probably why this portfolio looks like a scrapbook.",
  ],

  // Little "polaroid" notes in the About section
  likes: [
    { label: "Art", note: "sketching and doodling" },
    { label: "Craft", note: "making things by hand" },
    { label: "Crochet", note: "one stitch at a time" },
    { label: "Books", note: "always reading something" },
  ],
};

export const contact = {
  email: "anumitha.asokan@gmail.com",
  closingMessage:
    "Thanks for flipping through. If something here caught your eye, I'd love to hear from you.",
};

export const socials = [
  { id: "github", label: "GitHub", url: "https://github.com/AnumithaA" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/anumitha-asokan-296118298/" },
  { id: "leetcode", label: "LeetCode", url: "https://leetcode.com/u/Anumitha_A/" },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "More" },
  { id: "contact", label: "Contact" },
];
