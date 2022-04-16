import React from 'react';

const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=4396055c44e34a1baacccc62fd5cd6e0&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login() {
  return (
    <div>
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
