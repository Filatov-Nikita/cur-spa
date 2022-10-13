import ky from "ky";

const apiServer = ky.create({
  prefixUrl: "https://raul.2apps.ru/",
  timeout: 30000,
});

const apiSPAServer = ky.create({
  headers: {
    Authorization: "Bearer 1|EeSyBc58yYvpNUnbwk4rZRf9bX9uwmSQPQioPGEA",
  },
  prefixUrl: "https://preza.danat.su/api/",
  timeout: 30000,
});
export { apiServer, apiSPAServer };
