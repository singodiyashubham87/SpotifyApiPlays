import { useState } from "react";
import getAccessToken from "./utils/getAccessToken";
import getArtists from "./utils/getArtists";

function App() {
  const [artists, setArtists] = useState([]);

  const getToken = async () => await getAccessToken();

  const getArtist = async () => {
    const artists = await getArtists();
    setArtists(artists);
  };

  return (
    <div className="h-[100dvh] w-[100dvw] flex justify-center items-center border-2 border-white">
      <div className="h-[100%] w-[70%] flex flex-col gap-4 justify-center items-stretch text-[3rem] font-semibold">
        <button
          onClick={getToken}
          className="text-black bg-red-300 rounded-[0.625rem] border-2 border-black px-8 hover:bg-red-400"
        >
          Get Access Token
        </button>
        <button
          onClick={getArtist}
          className="text-black bg-blue-300 rounded-[0.625rem] border-2 border-black px-8 hover:bg-blue-400"
        >
          Get Artist Data
        </button>
        {artists &&
          artists.map((artist) => {
            return (
              <>
              <div className="mb-4 border-2 border-white text-center">
                <h4 className="text-[2.5rem]">{`Artist Name = ${artist.name}`}</h4>
                <h6 className="text-[2rem]">{`Total Followers = ${artist.followers.total}`}</h6>
                <a className="text-[1.5rem]" href={artist.external_urls.spotify}>Artist URL</a>
              </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
