
document.addEventListener("DOMContentLoaded", () => {

  // ---------------- MEDIA SETTINGS ----------------
  // Choose "image" or "video"
  const MEDIA_TYPE = "image";

  // Keep your media files inside the assets folder.
  const PHOTO_FILE = "assets/sofi-memory.jpg";
  const VIDEO_FILE = "assets/sofi-memory.mp4";


  // ---------------- PAGE ELEMENTS ----------------

  const openingScene = document.getElementById("openingScene");
  const openButton = document.getElementById("openButton");

  const nextScene = document.getElementById("nextScene");
  const knowButton = document.getElementById("knowButton");

  const thirdScene = document.getElementById("thirdScene");
  const lightButton = document.getElementById("lightButton");
  const watchButton = document.getElementById("watchButton");
  const continueButton = document.getElementById("continueButton");

  const tvPhoto = document.getElementById("tvPhoto");
  const tvVideo = document.getElementById("tvVideo");
  const tvWelcome = document.getElementById("tvWelcome");

  const fourthScene = document.getElementById("fourthScene");
  const cakeButton = document.getElementById("cakeButton");
  const cakeContainer = document.getElementById("cakeContainer");
  const confetti = document.getElementById("confetti");
  const birthdayWishArea = document.getElementById("birthdayWishArea");
  const moreButton = document.getElementById("moreButton");

  const fifthScene = document.getElementById("fifthScene");


  // ---------------- CHECK HTML ELEMENTS ----------------

  if (
    !openingScene ||
    !openButton ||
    !nextScene ||
    !knowButton ||
    !thirdScene ||
    !lightButton ||
    !watchButton ||
    !continueButton ||
    !tvPhoto ||
    !tvVideo ||
    !tvWelcome ||
    !fourthScene ||
    !cakeButton ||
    !cakeContainer ||
    !confetti ||
    !birthdayWishArea ||
    !moreButton ||
    !fifthScene
  ) {
    console.error("One or more HTML elements are missing. Check the IDs.");
    return;
  }


  // ---------------- PAGE 1 -> PAGE 2 ----------------

  let pageOneStarted = false;

  openButton.addEventListener("click", () => {
    if (pageOneStarted) return;
    pageOneStarted = true;

    openButton.disabled = true;
    openButton.textContent = "A LITTLE SURPRISE... ♡";

    // Door appears
    openingScene.classList.add("opening");

    // Camera moves towards the door
    setTimeout(() => {
      openingScene.style.transformOrigin = "78% 65%";
      openingScene.style.transition = "transform 1.2s ease";
      openingScene.style.transform = "scale(1.25)";
    }, 500);

    // Door opens
    setTimeout(() => {
      openingScene.classList.add("door-open");
    }, 1500);

    // Camera zooms into the doorway
    setTimeout(() => {
      openingScene.style.transition = "transform 1.5s ease";
      openingScene.style.transformOrigin = "78% 65%";
      openingScene.style.transform = "scale(2.5)";
    }, 2300);

    // Sofi doll enters
    setTimeout(() => {
      openingScene.classList.add("doll-enter");
    }, 2600);

    // Final camera zoom
    setTimeout(() => {
      openingScene.style.transition = "transform 1.8s ease-in, opacity 1.5s ease";
      openingScene.style.transformOrigin = "78% 65%";
      openingScene.style.transform = "scale(5)";
      openingScene.style.opacity = "0";
    }, 3800);

    // Page 2 appears after entering the door
    setTimeout(() => {
      openingScene.style.display = "none";
      nextScene.classList.add("show");
    }, 5700);
  });


  // ---------------- PAGE 2 -> PAGE 3 ----------------

  let pageTwoStarted = false;

  knowButton.addEventListener("click", () => {
    if (pageTwoStarted) return;
    pageTwoStarted = true;

    knowButton.disabled = true;
    knowButton.textContent = "HERE WE GO... ♡";

    nextScene.style.transition = "opacity .8s ease";
    nextScene.style.opacity = "0";

    setTimeout(() => {
      nextScene.classList.remove("show");
      nextScene.style.display = "none";

      thirdScene.classList.add("show");
    }, 850);
  });


  // ---------------- PAGE 3: SWITCH ON LIGHT ----------------

  let lightsAreOn = false;

  lightButton.addEventListener("click", () => {
    if (lightsAreOn) return;
    lightsAreOn = true;

    lightButton.disabled = true;
    lightButton.textContent = "LIGHTS ON... ♡";

    // Turn on the room lights
    thirdScene.classList.add("lights-on");

    // Show watch button after the room is revealed
    setTimeout(() => {
      lightButton.classList.add("hidden");
      watchButton.classList.remove("hidden");
    }, 1700);
  });


  // ---------------- PAGE 3: PLAY PHOTO / VIDEO ON TV ----------------

  let mediaHasStarted = false;

  watchButton.addEventListener("click", async () => {
    if (mediaHasStarted) return;
    mediaHasStarted = true;

    watchButton.disabled = true;
    watchButton.textContent = "PLAYING YOUR SURPRISE... ♡";

    // Hide Jerry while TV media plays
    thirdScene.classList.add("media-playing");

    // Hide welcome message
    tvWelcome.style.display = "none";

    if (MEDIA_TYPE === "video") {

      tvVideo.src = VIDEO_FILE;
      tvVideo.classList.add("active");
      tvVideo.load();

      try {
        await tvVideo.play();
      } catch (error) {
        console.error("Video could not autoplay:", error);
      }

    } else {

      tvPhoto.src = PHOTO_FILE;
      tvPhoto.classList.add("active");

      tvPhoto.onerror = () => {
        console.error("Photo not found. Check PHOTO_FILE path.");
        tvWelcome.style.display = "block";
        tvWelcome.innerHTML =
          "<p>Photo not found. Check your image file path.</p>";
      };
    }

    // Show continue button after media starts
    setTimeout(() => {
      watchButton.classList.add("hidden");
      continueButton.classList.remove("hidden");
    }, 1200);
  });


  // ---------------- PAGE 3 -> PAGE 4 ----------------

  let pageFourOpened = false;

  continueButton.addEventListener("click", () => {
    if (pageFourOpened) return;
    pageFourOpened = true;

    // Stop video if it is playing
    tvVideo.pause();

    thirdScene.style.transition = "opacity 1s ease";
    thirdScene.style.opacity = "0";

    setTimeout(() => {
      thirdScene.classList.remove("show");
      thirdScene.style.display = "none";

      fourthScene.classList.add("show");
    }, 1000);
  });


  // ---------------- PAGE 4: CUT THE CAKE ----------------

  let cakeHasBeenCut = false;

  cakeButton.addEventListener("click", () => {
    if (cakeHasBeenCut) return;
    cakeHasBeenCut = true;

    cakeButton.disabled = true;
    cakeButton.textContent = "HAPPY BIRTHDAY SOFI! ♡";

    // Cake cutting animation
    cakeContainer.classList.add("cut");

    // Colourful confetti burst
    const colors = [
      "#ff5d9e",
      "#ffd166",
      "#8be9fd",
      "#c7a0ff",
      "#ffffff",
      "#ff91c8",
      "#9df5b2"
    ];

    confetti.innerHTML = "";

    for (let i = 0; i < 75; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";

      piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.setProperty(
        "--x",
        `${(Math.random() - 0.5) * 650}px`
      );

      piece.style.setProperty(
        "--y",
        `${(Math.random() - 0.5) * 550}px`
      );

      piece.style.setProperty(
        "--r",
        `${Math.random() * 900 - 450}deg`
      );

      piece.style.animationDelay = `${Math.random() * 0.5}s`;

      confetti.appendChild(piece);
    }

    confetti.classList.add("burst");

    // Show birthday wish after cake celebration
    setTimeout(() => {
      birthdayWishArea.classList.add("show");

      // Scroll to birthday message
      setTimeout(() => {
        birthdayWishArea.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 300);

    }, 900);

    // Show More button after message animation
    setTimeout(() => {
      moreButton.classList.remove("hidden");
    }, 8500);
  });


  // ---------------- PAGE 4 -> PAGE 5 ----------------

  let pageFiveOpened = false;

  moreButton.addEventListener("click", () => {
    if (pageFiveOpened) return;
    pageFiveOpened = true;

    moreButton.disabled = true;
    moreButton.textContent = "ONE LAST THING... ♡";

    fourthScene.style.transition = "opacity 1.2s ease";
    fourthScene.style.opacity = "0";

    setTimeout(() => {
      fourthScene.classList.remove("show");
      fourthScene.style.display = "none";

      fifthScene.classList.add("show");
    }, 1200);
  });

});
