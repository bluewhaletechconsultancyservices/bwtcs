# Blue Whale Tech Consultancy Services — bwtcs.com

A modern, multipage React website for **Blue Whale Tech Consultancy Services** (bwtcs.com).  
**Contact:** Hr@bwtcs.com Built with React Router for seamless navigation and a clean, professional design inspired by modern web best practices.

## Features

- **Multipage Navigation**: Home, About, Services, and Contact pages
- **React Router**: Smooth client-side routing
- **Modern Design**: Clean, minimalist design with gradient accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Contact Form**: Collects consultancy information with validation:
  - Consultancy Name (required)
  - Contact Number (required)
  - Email Address (required)
  - Additional Information (optional)
- **Interactive Components**: Animated navigation, hover effects, and smooth transitions

## Pages

1. **Home**: Hero section with call-to-action buttons and feature highlights
2. **About**: Company mission, values, and background information
3. **Services**: Detailed service offerings and process overview
4. **Contact**: Contact form and company contact information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd consultancy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Hosting on GitHub Pages

### Option 1: Using gh-pages package (Recommended)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"homepage": "https://yourusername.github.io/consultancy",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Go to your repository Settings → Pages and select the `gh-pages` branch.

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Create a new branch called `gh-pages`:
```bash
git checkout -b gh-pages
```

3. Copy the contents of the `build` folder to the root of the `gh-pages` branch

4. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. Enable GitHub Pages in repository settings (Settings → Pages → select `gh-pages` branch)

### Option 3: Using GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Project Structure

```
consultancy/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Navbar.css
│   │   ├── Footer.js       # Footer component
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page
│   │   ├── Home.css
│   │   ├── About.js        # About page
│   │   ├── About.css
│   │   ├── Services.js     # Services page
│   │   ├── Services.css
│   │   ├── Contact.js      # Contact page
│   │   └── Contact.css
│   ├── App.js              # Main app component with routing
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Customization

- **Colors**: Modify the gradient colors in CSS files (currently using #667eea and #764ba2)
- **Content**: Edit the page components in `src/pages/`
- **Styling**: Update CSS files in respective component/page folders
- **Form Handling**: Modify `Contact.js` to integrate with your backend API

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- React Scripts 5.0.1

## Notes

- Form submissions are currently logged to the browser console
- To save submissions, integrate with a backend service (e.g., Formspree, Netlify Forms, Firebase, or your own API)
- The app uses React Router's BrowserRouter - for GitHub Pages, you may need to use HashRouter if you encounter routing issues

## License

This project is open source and available for use.
