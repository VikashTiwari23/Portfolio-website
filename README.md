# Vikash Tiwari — Portfolio

A responsive single-page portfolio built with React, TypeScript, Tailwind CSS, and Mantine. It includes an animated hero, project cards with detail modals, skills, experience timeline, resume viewer, and a contact form.

## Features

- Sticky, responsive header with working section links and active-link highlighting
- Mobile navigation drawer that closes after a link is selected
- About hero with typewriter text, particles, and profile photo fallback
- Project cards with screenshots, technology badges, and detail modals
- Skills grid, experience timeline, and downloadable resume viewer
- Contact form with validation that opens a prefilled `mailto:` message
- Sidebar social/email links on larger screens

## Tech stack

- React 18 + TypeScript (Create React App)
- Tailwind CSS
- Mantine UI
- AOS scroll animations
- react-pdf
- Typewriter Effect
- Vanta + custom particles
- react-icon-cloud

## Getting started

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the development server. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm test` | Runs the Create React App test runner. |
| `npm run eject` | Ejects CRA configuration (one-way operation). |

## Project structure

```text
src/
  App.tsx                 Theme provider and app entry
  User.tsx                Profile, projects, skills, and experience content
  index.css               Tailwind layers and global styles
  components/
    Header.tsx            Navigation links and active section tracking
    SideBar.tsx           Mobile drawer navigation
    About.tsx             Hero section and resume modal trigger
    Projects.tsx          Project grid
    ProjectCard.tsx       Individual project card
    FullProjectModel.tsx  Project detail modal
    Skills.tsx            Skills section
    Experience.tsx        Experience timeline
    Contact.tsx           Contact form and mailto handler
    FloatingInput.tsx     Reusable form inputs
    ResumeViewer.tsx      PDF resume modal
    Mail.tsx              Fixed email link
    Social.tsx            Fixed social links
public/
  index.html
  avatar.jpg
  VikashTiwari.jpeg
  Vikash_Tiwari_.pdf
  car-rental.png
  course-management.jpg
  product-management.jpg
  gmail-clone.jpg
  Icons/                  Skill icons
```

## Customize

- **Content:** edit `src/User.tsx` for bio, projects, skills, experience, and contact email (`info.email`).
- **Colors and breakpoints:** edit `tailwind.config.js`.
- **Images and resume:** replace files in `public/`.
- **Profile photo:** the hero and timeline use `VikashTiwari.jpeg` first and fall back to `avatar.jpg` if it fails to load.

## Contact form

The Send button validates the fields and opens the visitor's email app with a prefilled subject and body. It uses `mailto:`, so no backend, API key, or environment variable is required.

## Build and deploy

```bash
npm run build
```

The output is in `build/`. For Vercel, import the repository and use:

- **Framework:** Create React App
- **Build command:** `npm run build`
- **Output directory:** `build`
- **Environment variables:** none required

## Notes

- The build emits a few pre-existing ESLint warnings from Vanta, Particles, and icon-cloud hook usage; they do not block production builds.
- `src/App.test.tsx` is still the default Create React App starter test and should be updated before relying on tests.
