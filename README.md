# Anumitha Asokan: Portfolio

A vintage editorial / scrapbook portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Run it

```bash
npm install
npm run dev        # development at http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build
```

Requires Node 18 or newer.

## Where to change things

All of your content lives in `src/data/`, separate from the components:

| File | What it controls |
| --- | --- |
| `profile.js` | Name, tagline, intro, typewriter phrases, About text, hobbies, **email**, **GitHub / LinkedIn links**, nav items, resume path |
| `education.js` | Education timeline |
| `skills.js` | Skill groups and tags |
| `projects.js` | Every project: overview, problem, approach, features, tech, results, **GitHub / demo links** |
| `experience.js` | Internships |
| `achievements.js` | Certifications, leadership, anything else (just add items) |

### Filling in the placeholders

- **GitHub and LinkedIn:** paste the URLs into `socials` in `src/data/profile.js`.
- **Project repositories:** set `github: "https://..."` on each project in `src/data/projects.js`.
- **Live demos:** none right now. Add `demo: "https://..."` to a project and a "Live demo" button appears automatically.
- Any link left as `""` shows as a dashed "link coming soon" button instead of a dead link.

### Updating your resume

Replace `public/Anumitha_Asokan_Resume.pdf` with the new PDF using the same file name (or change `resumePath` and `resumeFileName` in `profile.js`). Then update the data files to match.

### Project status and results

Projects are marked "Completed" as you asked. Results are only shown for projects that have some in `projects.js`; leave `results: []` to hide that block.

## Contact form

The form builds a `mailto:` link and opens the visitor's own email app with the message filled in. No account or server is needed. Your phone number is not shown anywhere on the site.

## Design notes

- Palette lives in `tailwind.config.js` (paper, sage, olive, dust, brick, sky, mustard, ink).
- Section background colours (and the gradients between them) live in `src/theme.js`.
- Each page heading has its own plant (`botanical="..."` on `SectionHeading`): wildflower, oak, pine, maple, ginkgo, olive, fern. They are drawn in `src/components/Botanicals.jsx`, along with the corner flower clusters.
- Fonts: Bowlby One (display), DM Sans (body), Special Elite (typewriter labels), Caveat (handwriting), loaded from Google Fonts in `index.html`.
- Doodles are inline SVG in `src/components/Doodles.jsx`.
- Animations respect `prefers-reduced-motion`: the loader is skipped, typing becomes static text, and parallax, floating and scroll animations are turned off.
- The project gallery is `src/components/Projects.jsx`; the detail view is `ProjectModal.jsx`.
