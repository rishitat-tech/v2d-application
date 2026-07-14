# V2D Application

V2D Application is a React and Vite based resource hub for MV, EGO, Object Scanning, Dashboard User Guide, and training quizzes.

## Tech Stack

Frontend: React, Vite, React Router, Tailwind CSS, Google model-viewer for GLB 3D model previews.

Backend: This project currently does not use a backend server. Quiz results are stored in the browser using localStorage, so results are only saved on the current browser/device. If centralized quiz results are needed later, a backend or database can be added using Firebase, Supabase, Express/Node, Google Sheets API, or another database/API service.

## Features

- V2D home page
- Resource Hub
- MV resource section
- EGO resource section
- Object Scanning resource section
- Dashboard User Guide page
- Interactive quizzes
- Quiz score calculation
- Saved quiz results in browser localStorage
- CSV export for quiz results
- Local HTML guide documents
- PDF guide support
- Video popup player
- Image previews
- GLB 3D model previews
- Search within resource sections
- Category tabs for resources

## Clone and Run

Clone the repository with: git clone https://github.com/rishitat-tech/v2d-application.git

Go into the project folder with: cd v2d-application

Install dependencies with: npm install

Run locally with: npm run dev

Open the local URL shown in terminal, usually http://localhost:5173

Build for production with: npm run build

Preview production build with: npm run preview

Deploy manually with: vercel --prod

Production URL: https://v2d-alpha.vercel.app

## Project Structure

src/App.jsx defines the main routes.
src/main.jsx starts the React app.
src/layout/DashboardLayout.jsx controls the sidebar, header, and main layout.
src/pages/Home.jsx is the main home page.
src/pages/V2DResourceHub/V2DHome.jsx is the Resource Hub landing page.
src/pages/V2DResourceHub/ResourceSection.jsx renders MV, EGO, and Object Scanning resource pages.
src/pages/V2DResourceHub/DashboardGuide.jsx renders the Dashboard User Guide page.
src/pages/V2DResourceHub/Quiz.jsx contains quiz questions, answers, scoring, saved results, and CSV export.
src/pages/V2DResourceHub/v2dData.js stores most resource card data.
public/docs stores HTML/PDF documents.
public/videos stores local videos.
public/images stores images.
public/models stores GLB models.

## Resource Sections

Current resource sections are MV, EGO, and Object Scanning.

Supported categories are Overview, Videos, Docs, Good Examples, Bad Examples, Checklist, and FAQ.

Supported resource types are text, doc, link, video, image, model, example, checklist, and faq.

## Updating Resources

Most resource updates happen in src/pages/V2DResourceHub/v2dData.js. A resource object includes id, section, category, title, description, type, tags, lastUpdated, and url.

Example: { id: 999, section: "MV", category: "Docs", title: "MV Data Collection Guide", description: "Guide for MV data collection.", type: "doc", tags: ["mv", "guide"], lastUpdated: "To be updated", url: "/docs/mv-data-collection-guide.html" }

## Adding Documents

Add HTML or PDF files to public/docs. Example: public/docs/mv-data-collection-guide.html. Then update the related resource in v2dData.js with url: "/docs/mv-data-collection-guide.html". For PDFs, use a path like url: "/docs/dashboard-user-guide.pdf".

## Adding Videos

Add video files to public/videos. Recommended folders are public/videos/mv, public/videos/ego, and public/videos/object-scanning. Example: public/videos/mv/mv-good-example-1.mp4. Then update v2dData.js with type: "video" and url: "/videos/mv/mv-good-example-1.mp4". Videos open in an in-app popup player.

## Adding Images

Add images to public/images. For Object Scanning, use public/images/object-scanning. Example: public/images/object-scanning/object-bad-example-1.png. Then update v2dData.js with type: "image" and the correct image URL. Images display directly inside the resource card.

## Adding GLB Models

Add GLB files to public/models/object-scanning. Example: public/models/object-scanning/object-good-example-1.glb. Then update v2dData.js with type: "model" and url: "/models/object-scanning/object-good-example-1.glb". GLB models display directly inside the resource card using Google model-viewer.

## Updating Quiz Questions

Quiz questions are stored in src/pages/V2DResourceHub/Quiz.jsx inside const quizBank. Each quiz question has question, options, and answer. The answer must exactly match one of the options. Current quiz sections include MV Quiz, EGO Quiz, and Object Scanning Quiz.

## Quiz Results

Quiz results are saved in browser localStorage. Saved fields include quiz title, name, email, score, total questions, percentage, submitted time, selected answers, and correct answers. The quiz page includes CSV export. Because there is no backend, results are not shared across browsers or devices.

## Large File Notes

Vercel has a 100 MB per-file upload limit. Before deploying, check large files with: find public -type f -size +95M -exec ls -lh {} \\; Check folder sizes with: du -sh public/videos public/models public/images public/docs. Compress videos before deployment if needed. Example ffmpeg command: ffmpeg -y -i input-video.mp4 -vcodec libx264 -crf 34 -preset medium -vf "scale=min(1280\\,iw):-2" -acodec aac -b:a 96k output-video.mp4

## Common Commands

npm install
npm run dev
npm run build
npm run preview
vercel --prod
git status
git add .
git commit -m "Update V2D application"
git push

## Future Improvements

Possible future improvements include centralized quiz results with a backend/database, admin login, a resource upload panel, quiz analytics, external video hosting, role-based access, and automated resource update workflow.
