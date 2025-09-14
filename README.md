<div align="center">
  <h1>✨ Modern Monorepo Starter</h1>
  <p>🚀 A powerful monorepo with modern web and mobile applications, sharing code and resources for maximum efficiency.</p>
  
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=#D04A37" />
  </p>
</div>

## 🚀 Features

### 🌐 Web Application
📂 `workspace/web/`  
⚡ Blazing fast React application powered by Vite  
🎨 Responsive design that works on all devices  
🛠️ Modern development experience with HMR

### 📱 Mobile Application
📂 `workspace/mobile/`  
📱 Cross-platform mobile app with React Native & Expo  
🔧 Write once, run on both iOS and Android  
🚀 Over-the-air updates with Expo

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:

- **Node.js 18+** - [Download](https://nodejs.org/)
- **Yarn** (recommended) or npm
- **For iOS development**: Xcode (Mac only)
- **For Android development**: Android Studio
- **Expo Go** (for testing on physical devices)

### 🛠 Installation

1. **Clone and enter the project**
   ```bash
   git clone https://github.com/Himanshuch8055/mono-repo.git
   cd mono-repo
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   yarn
   
   # Install web app dependencies
   cd workspace/web && yarn
   
   # Install mobile app dependencies
   cd ../mobile && yarn
   ```

3. **Set up environment**
   - Copy `.env.example` to `.env` in both `web` and `mobile` directories
   - Update the environment variables as needed

### 🏃‍♂️ Running the Apps

#### Web App
```bash
# Start development server
cd workspace/web
yarn dev
```

#### Mobile App
```bash
# Start Expo development server
cd workspace/mobile
yarn start
```

> 💡 Scan the QR code with Expo Go (Android) or Camera app (iOS) to test on your device!

## 🏗️ Project Structure

```
monorepo/
├── .github/           # GitHub workflows and templates
├── workspace/
│   ├── mobile/       # React Native + Expo mobile app
│   ├── web/          # React + Vite web app
│   └── shared/       # Shared code between applications
├── .gitignore        # Git ignore rules
└── package.json      # Root package.json with shared scripts
```

## 🛠 Built With

### Web Stack
- ⚛️ React 18 with Hooks
- ⚡ Vite for ultra-fast builds
- 🎨 Styled Components for styling
- 🔄 React Router for navigation

### Mobile Stack
- 📱 React Native & Expo
- 🧭 React Navigation
- 📲 Expo SDK for cross-platform features
- 🔄 Over-the-air updates

### Shared
- 🧩 Reusable components
- 🔄 Shared business logic
- 🎨 Common design system
- 📦 Utility functions

## 🤝 Contributing

We love contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit your changes: `git commit -m 'Add some amazing feature'`
4. 🚀 Push to the branch: `git push origin feature/amazing-feature`
5. 🔄 Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Huge thanks to these amazing projects that make development a breeze:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - Build native mobile apps using React
- [Expo](https://expo.dev/) - The fastest way to build React Native apps
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

## ✨ Show Your Support

Give a ⭐️ if this project helped you!
