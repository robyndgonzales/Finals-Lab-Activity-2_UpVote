# Project 1: UpVote! (Fullstack Vue Guide - Chapter 1)

## Project Architecture & Directory Layout
```text
project-1-upvote/
├── index.html        # Root DOM mount target, loads Bulma, Vue 3, and CSS
├── seed.js           # Seed.submissions mock array dataset
├── main.js           # Vue 3 application instance, computed sorting, and submission-component
├── package.json      # NPM scripts to launch a local server
└── public/
    └── styles.css    # Custom CSS rules and the .blue-border conditional class
```

## How to Run
1. Open `index.html` using any static file server:
   ```bash
   npx serve .
   ```
2. Navigate to `http://localhost:3000`.
3. Click the upvote button beside any submission to observe automatic real-time re-sorting!
