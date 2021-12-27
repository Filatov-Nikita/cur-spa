import ky from "ky";

const apiServer = ky.create({
    prefixUrl: "https://raul.2apps.ru/",
    timeout: 30000
})

const apiSPAServer = ky.create({
    headers: {
        Authorization: "Bearer 1|3CXZVtmaXhctyXInyDVCQ0ULsk23wMsLSsnBUO5o"
    },
    prefixUrl: process.env.API,
    timeout: 30000
})
export {apiServer, apiSPAServer};