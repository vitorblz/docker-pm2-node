module.exports = {
  apps: [
    {
      name: "app-dev",
      script: "./src/index.ts",
      instances: 4,
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "app",
      script: "./dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
