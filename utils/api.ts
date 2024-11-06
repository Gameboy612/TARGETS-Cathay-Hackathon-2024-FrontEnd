import { getAPIURL, getWebsiteURL } from "@/constants/website";

/**
 * Sends an html request with the input json to the backend server.
 * @param {*} json JSON (in object form)
 * @returns The response in object form.
 */
export const API = async (endpoint: string, json: any)=> {
    try {
        const response = await fetch(getWebsiteURL() + endpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
            });

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return {
            "success": false,
            "response": "Server Down!"
        };
    }
};
  

export const GetAPI = async (endpoint: string) => {
    try {
        const response = await fetch(getWebsiteURL() + endpoint);

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return {
            "success": false,
            "response": "Server Down!"
        };
    }
}