import axios from "axios";
import getAccessToken from "./getAccessToken";

async function getArtists(){
    const access_token = await getAccessToken();
    const headers = {
        'Authorization': `Bearer ${access_token}`
    };
    const params = {
        ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6'
      };
    const res = await axios.get("https://api.spotify.com/v1/artists",{headers, params});
    const artists = res.data.artists;
    return artists;
}

export default getArtists;