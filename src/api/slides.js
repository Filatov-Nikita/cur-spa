import { apiServer, apiSPAServer } from "src/api/helpers/ky";

export function getSlides(){
    return apiServer("slides/data.json").json();
}

export function getActiveMeeting(){
    return apiSPAServer("active-meeting").json();
}