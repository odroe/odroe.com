module.exports = {
  apps: [
    {
      name: "odroe.com",
      script: "npx",
      args: "next start --port 3000",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development"
      } 
    }
  ],
}