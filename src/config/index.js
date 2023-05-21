const index = {
  local: {
    apiBaseURI: "http://localhost:3001",
  },
  prod: {
    apiBaseURI: "https://646a435f183682d614520d36.mockapi.io/api",
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
