# MoniCrop Website

A web application for monitoring crops through collected data stored in Firebase. MoniCrop enables users to track crop health, visualize data trends, manage workplace information, and provide feedback.

![COSC 348   CMPE 495A Wireframes (3)](https://github.com/emansarahafi/MoniCropWebsite/assets/85173630/da259ddb-8702-4bd4-9bc2-c5d18071583c)

## Features

- **User Authentication**: Sign up, sign in, password reset, and account management
- **Data Visualization**: Interactive charts for soil and crop data using Chart.js
- **Workplace Management**: Track and display workplace details and items
- **Search & Filter**: Search through collected data with filtering options
- **Feedback System**: Integrated Telegram bot for user feedback
- **Responsive Design**: Clean, modern UI with organized component architecture

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase (Authentication, Firestore Database)
- **Data Visualization**: Chart.js with Moment.js
- **Communication**: Telegram Bot API
- **Deployment**: GitHub Actions

## Project Structure

```
MoniCropWebsite/
├── index.html                  # Landing page
├── pages/                      # Application pages (13 HTML files)
├── scripts/                    # JavaScript modules
│   ├── firebase-init.js       # Firebase configuration
│   ├── utils.js               # Shared utilities (navigation, auth, validation)
│   └── [page-scripts].js      # Page-specific logic
├── styles/                     # CSS files
│   ├── common.css             # Reset, variables, typography
│   ├── components.css         # Reusable UI components
│   ├── forms.css              # Shared form patterns
│   ├── layouts.css            # Data page layouts
│   └── [page-styles].css      # Page-specific styles
├── assets/                     # Images and icons
│   ├── icons/                 # SVG icons
│   └── images/                # Logo and graphics
└── .github/workflows/          # CI/CD configuration
```

## Setup

### Prerequisites

- Firebase project with Authentication and Firestore enabled
- (Optional) Telegram Bot for feedback feature

### Installation

1. Clone the repository:

```bash
git clone https://github.com/emansarahafi/MoniCropWebsite.git
cd MoniCropWebsite
```

2. Configure Firebase and Telegram:

   **For GitHub Pages deployment (recommended):**
   - Follow the detailed guide in [SETUP_SECRETS.md](SETUP_SECRETS.md)
   - Add Firebase and Telegram credentials as GitHub Secrets
   - Secrets are automatically injected during deployment

   **For local development:**
   - Open `scripts/firebase-init.js` and replace placeholder values
   - Open `scripts/customer-feedback.js` and replace bot credentials
   - ⚠️ Never commit actual credentials to the repository

3. Deploy:

   - **GitHub Pages**: Push to `main` branch (secrets injected automatically)
   - **Local**: Open `index.html` in a browser

## GitHub Secrets Setup

This project uses GitHub Secrets to securely manage Firebase and Telegram credentials. See [SETUP_SECRETS.md](SETUP_SECRETS.md) for detailed instructions on:

- Adding all required secrets to your repository
- Verifying the deployment workflow
- Troubleshooting common issues
- Local development options

## Deployment

The project includes a GitHub Actions workflow for automated deployment. Configure your hosting service in `.github/workflows/` if needed.

## Architecture Highlights

### CSS Architecture

- **4-layer loading**: common → components → patterns (forms/layouts) → page-specific
- **530 lines of shared styles** eliminate ~1200+ lines of duplication
- All CSS variables centralized in `common.css`

### JavaScript Architecture  

- **Modular design**: Each page has its dedicated script
- **Shared utilities**: Common functions in `utils.js` (navigation, auth, validation, db helpers)
- **Firebase integration**: Centralized configuration with consistent API usage

## Pages

- **Landing** (`index.html`): Sign in/up entry point
- **Authentication**: Sign in, sign up, forgot password
- **Main Dashboard** (`main-page.html`): Navigation hub
- **Account Management**: View, edit, disable/delete account
- **Data Pages**: View data charts, search results, workplace details
- **Feedback**: Submit and receive feedback confirmation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of COSC 348 / CMPE 495A coursework.

## Acknowledgments

- Firebase for backend services
- Chart.js for data visualization
- Telegram Bot API for feedback integration
