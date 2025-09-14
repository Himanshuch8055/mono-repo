# Modern Monorepo

A modern monorepo containing web and mobile applications built with cutting-edge technologies.

## 🚀 Projects

### Web Application
Located in `workspace/web/`
- Built with React + Vite
- Modern, fast, and responsive web experience

### Mobile Application
Located in `workspace/mobile/`
- Built with React Native and Expo
- Cross-platform mobile experience for iOS and Android

## 🛠️ Development

### Prerequisites
- Node.js 18+
- Yarn 1.22+ or npm 8+
- For mobile development: Xcode (iOS) and/or Android Studio (Android)
- Expo CLI (for mobile development)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Himanshuch8055/mono-repo.git
   cd mono-repo
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   yarn
   
   # Install web app dependencies
   cd workspace/web
   yarn
   
   # Install mobile app dependencies
   cd ../mobile
   yarn
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env` in each project directory if available
   - Configure environment variables as needed

### Running the Applications

#### Web Application
```bash
cd workspace/web
yarn dev
```

#### Mobile Application
```bash
cd workspace/mobile
yarn start
```

## 🏗️ Project Structure

```
monorepo/
├── .github/           # GitHub workflows and templates
├── workspace/
│   ├── mobile/       # React Native + Expo mobile app
│   └── web/          # React + Vite web app
├── shared/           # Shared code between applications
├── .gitignore        # Git ignore rules
└── package.json      # Root package.json with shared scripts
```

## 📦 Dependencies

- **Web**: React 18, Vite, React Router
- **Mobile**: React Native, Expo, React Navigation
- **Shared**: Common utilities and components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Vite](https://vitejs.dev/)
