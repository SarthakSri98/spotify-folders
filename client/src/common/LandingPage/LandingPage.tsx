import React from 'react';

// import useAuth from 'hooks/useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: "4396055c44e34a1baacccc62fd5cd6e0",
})

export default function LandingPage({code}) {
  // const accessToken = useAuth(code)

  return (
    <div>
      Landing Page {code}
    </div>
  )
}
