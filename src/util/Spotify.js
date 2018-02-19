const clientID = 'f7ca8366948a44f4bf658a76518d0c1f';
const clientSecret = 'c583151dfa54461bb7f10ea050ec41b7';
const redirect_uri = 'http://localhost:3000/';
let accessToken = '';
let expirationTime = '';

const Spotify = {
  getAccessToken(accessToken) {
    if (accessToken) {
      return accessToken;
    } else {
      accessToken = (`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirect_uri}&response_type=token`).match(/access_token=([^&]*)/);
      expirationTime =  (`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirect_uri}&response_type=token`).match(/expires_in=([^&]*)/); //step 79 & 80
      window.setTimeout(() => accessToken = '', expirationTime * 1000);
      window.history.pushState('Access Token', null, '/');
    }
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then (jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  },

  savePlaylist(playlistName, playListTracks) {
    if (playlistName & playListTracks) {  //step 90
      let currentAccessToken = accessToken; //step 91
      let headers = {
        headers: {
          Authorization: currentAccessToken
          }
        };
      let currentUserID = '';
      return fetch(`https://api.spotify.com/v1/me`, {  //step 92
        headers: headers
      }).then(response => {
        return response.json();
      }).then (jsonResponse => {
        currentUserID = jsonResponse.track.id;
        return fetch(`https://api.spotify.com/v1/users/${currentUserID}/playlists`, {
          method: 'POST',
          headers: `${headers}`,
          body: JSON.stringify(`${currentUserID}`)
        }).then (response => {
          return response.json();
        }).then (jsonResponse => {
          let playlistID = jsonResponse.playlistID //step 94
        })
      })
    }
  }
};

export default Spotify;
