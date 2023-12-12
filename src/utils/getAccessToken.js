import axios from "axios";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;


async function getAccessToken(){
    const data = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
    const header = {
        'Content-Type': "application/x-www-form-urlencoded"
    }

    const res = await axios.post("https://accounts.spotify.com/api/token", data, header);
    const accessToken = res.data.access_token;
    return accessToken;
}

export default getAccessToken;