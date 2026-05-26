function Redirect(x) {
    if (x == "Tiktok-D") {
       window.location.href = "https://www.tiktok.com/@darowimu"
    }
    if (x == "Tiktok-A") {
        window.location.href = "https://www.tiktok.com/@AronIsBrainless"
    }
    if (x == "X") {
        window.location.href = "https://x.com/@AronIsBrainless"
    }
    if (x == "IG") {
        window.location.href = "https://www.instagram.com/aronisbrainless/"
    }
    if (x == "MAL") {
        window.location.href = "https://www.myanimelist.net/profile/Darowimu"
    }
    if (x == "YT") {
        window.location.href = "https://www.youtube.com/@Darowimu"
    }
    if (x == "Twitch") {
        window.location.href = "https://www.twitch.tv/Darowimu"
    }
    if (x == "Bluesky") {
        window.location.href = "https://bsky.app/profile/darowimu.bsky.social"
    }
}
const profilePic = document.getElementById('profilePic');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateProfilePic(e) {
  if (e.matches) {
    profilePic.src = "/img/dark.png";
  } else {
    profilePic.src = "/img/light.png";
  }
}

// 1. Run the function immediately to set the correct image on load
updateProfilePic(darkModeQuery);

// 2. Listen for system theme changes while the user is on the page
darkModeQuery.addEventListener('change', updateProfilePic);
