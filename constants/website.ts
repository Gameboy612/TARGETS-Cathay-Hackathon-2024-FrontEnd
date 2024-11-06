
let WEBSITE_URL = "http://localhost:5000"
let API_URL = WEBSITE_URL + "/endpoint"

export function setWebsiteURL(url: string) {
    WEBSITE_URL = url
    API_URL = WEBSITE_URL + "/endpoint"
}

export function getWebsiteURL() {
    return WEBSITE_URL
}

export function getAPIURL() {
    return API_URL
}