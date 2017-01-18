playlist = {'stuff': 5};

function updatePlaylist(list, artist, song){
  return list[artist] = song;
};

function removeFromPlaylist(list, artist){
  delete(list[artist]);
  return list;
};
