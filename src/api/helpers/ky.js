import ky from "ky";

const apiServer = ky.create({
    prefixUrl: "https://raul.2apps.ru/",
    timeout: 30000
})

const apiSPAServer = ky.create({
    headers: {
        Authorization: "Bearer 1|3CXZVtmaXhctyXInyDVCQ0ULsk23wMsLSsnBUO5o"
    },
    prefixUrl: "http://62.109.10.150/api/",
    timeout: 30000
})
export {apiServer, apiSPAServer};