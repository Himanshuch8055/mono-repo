const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Get Expo's default Metro config
const config = getDefaultConfig(__dirname);

// 1️⃣ Watch the Shared folder so changes trigger reloads
config.watchFolders = [path.resolve(__dirname, "../shared")];

// 2️⃣ Ensure Metro resolves modules from both local and root node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../../node_modules"),
];

// 3️⃣ (Optional) If you want to alias shared to the Shared folder
config.resolver.extraNodeModules = {
  shared: path.resolve(__dirname, "../shared"),
};

module.exports = config;
