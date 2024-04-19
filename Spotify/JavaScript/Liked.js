let songList1 = JSON.parse(localStorage.getItem("songs"));
let likedAlbums1 = JSON.parse(localStorage.getItem("likedAlbums"));
console.log(likedAlbums1);
const doduLieu1 = () => {
    let html = "";
    html = likedAlbums1.map((e,i) => {
        return ` <a href="Music.aspx?album=${e}" class="liked-item">
    <span>${i + 1}</span>
    <p>${e}. Album</p>
    <i class="fa-regular fa-heart"></i>
  </a>`;
    });
    document.querySelector(".liked-albums").innerHTML = html.join("");
};

doduLieu1();

let likedSong1 = JSON.parse(localStorage.getItem("likedSongs"));
let likedSongList = songList1.filter(e => {
    return likedSong1.includes(e.id);
});

likedSongList.forEach(e => e.album = "playlist")
localStorage.setItem("playlist", JSON.stringify(likedSongList));