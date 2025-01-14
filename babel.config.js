module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        "root": ["./src"],
        "alias": {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@theme": "./src/theme",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@theme": "./src/theme",
          "@routes": "./src/routes",
          "@storage": "./src/storage",
        },
      },
    ],
  ]
};
