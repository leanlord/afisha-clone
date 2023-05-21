const index = {
  local: {
    apiBaseURI: "http://localhost:3001",
  },
  prod: {
    apiBaseURI: "http://v1382990.hosted-by-vdsina.ru:3001",
  },
};

let config;
switch (process.env.VUE_APP_CONFIG) {
  case "local":
    config = index.local;
    break;
  case "prod":
    config = index.prod;
    break;
  default:
    config = index.local;
}

export default Object.freeze(config);
