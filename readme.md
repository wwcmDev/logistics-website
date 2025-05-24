Logistics Solutions Website Project For Xiteb Practical Assignment
Overview
This project is a responsive logistics website built using HTML, CSS (SCSS), and JavaScript, with Vite as the build tool, enabling Hot Module Replacement (HMR) for a seamless development experience. The website includes Bootstrap 5 for layout and Owl Carousel for sliders. The following features have been updated based on user requests:

Testimonials Section: Replaced custom navigation with Owl Carousel for a smoother testimonial slider.
Latest News Section: Redesigned to match a reference image with a 2x2 grid, circular dates, and styled news cards.
Vite HMR Integration: Ensured all updates work with Vite's HMR for real-time development feedback.

Project Files
1. index.html

Description: The main HTML file containing the website structure, including the header, slider, welcome section, logistics solutions, services, statistics, testimonials-why, client logos, latest news, and footer.
Updates:
Integrated Owl Carousel for the testimonials-why section with two testimonials.
Updated the latest-news section with a 2x2 grid, circular dates, and styled news cards.


Content: Includes Bootstrap 5, Owl Carousel, Font Awesome, and jQuery dependencies via CDN.

2. src/css/styles.scss

Description: SCSS file for styling the website, compiled to CSS by Vite.
Updates:
Styled the Owl Carousel in the testimonials-why section with red quote boxes and navigation arrows.
Redesigned the latest-news section with a cyan background, circular dates, and light gray text boxes.


Notes: Vite processes SCSS automatically when imported in main.js.

3. src/js/main.js

Description: JavaScript file for interactivity, including Owl Carousel initialization and Counter-Up animations.
Updates:
Added Owl Carousel initialization for the testimonials-carousel with navigation arrows.
Ensured SCSS import for Vite processing.


HMR: Changes to this file are hot-reloaded by Vite during development.

Installation and Usage
Prerequisites

Node.js and npm installed (Node.js v22+ recommended for Vite).
Vite installed globally or as a dev dependency (npm install vite --save-dev).


Setup

Clone the repository or create a new project directory.
Copy the updated index.html, src/css/styles.scss, and src/js/main.js files into the project.
Initialize a Vite project (if not already set up):npm create vite@latest . -- --template vanilla


Install dependencies:npm install


Install additional dependencies for SCSS and libraries:npm install sass --save-dev

Note: jQuery, Owl Carousel, and other libraries are loaded via CDN in index.html.
Start the Vite development server with HMR:npm run dev


Open http://localhost:3000 in your browser to see the website with HMR enabled.

Build

Run the build command to generate the dist/ folder:npm run build


Preview the production build : npm run preview



Vite HMR

Hot Module Replacement (HMR): Vite's HMR is enabled by default during development (npm run dev). Changes to src/css/styles.scss and src/js/main.js are reflected in the browser without a full page reload.
Verification:
Edit src/css/styles.scss (e.g., change the .latest-news background color) and save—styles update instantly.
Edit src/js/main.js (e.g., adjust Owl Carousel settings) and save—JavaScript updates are applied without refreshing.



Time Spent

Designing: 1.5 hours
Analyzing reference images and planning layout updates for testimonials-why and latest-news sections.
Designing color schemes, typography, and grid structures to match references.


Development: 8.0 hours
Implementing HTML updates for Owl Carousel and latest news grid.
Writing and refining SCSS for styling.
Updating JavaScript for Owl Carousel initialization.


Vite HMR Integration: 0.5 hours
Verifying compatibility with Vite's project structure.
Ensuring HMR works for SCSS and JS updates.
Updating README.md with Vite-specific instructions.


Total Time: 10.0 hours

Notes

Images in public/images/ (e.g., truck.jpg) must exist for the latest-news section to render correctly.
Customize content (testimonials, news items) by editing index.html.
If SCSS compilation fails, ensure sass is installed (npm install sass --save-dev).
Vite's HMR may require a browser refresh if external CDN scripts (e.g., jQuery) interfere—consider importing libraries via npm for better HMR support in future updates.


