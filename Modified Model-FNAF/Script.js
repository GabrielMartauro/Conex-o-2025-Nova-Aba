document.addEventListener("DOMContentLoaded", () => {
    const li = document.querySelector('li[data-name="Springtrap"]');
    const audioId = "springtrapper-audio";
    let audio = document.getElementById(audioId);
  
    // If audio element is missing for any reason, create it
    if (!audio) {
      audio = document.createElement("audio");
      audio.id = audioId;
      audio.src = "SpringTrapperVoice.mp3";
      audio.preload = "auto";
      document.body.appendChild(audio);
    }
  
    const playAudio = () => {
      try {
        audio.currentTime = 0;
        const p = audio.play();
        if (p && typeof p.then === "function") {
          p.catch(err => {
            console.warn("Playback prevented or failed:", err);
          });
        }
      } catch (err) {
        console.warn("Error trying to play audio:", err);
      }
    };
  
    if (!li) {
      console.warn('Could not find li[data-name="Springtrap"] — check the data-name in your HTML.');
      return;
    }
  
    // Play on any mouseenter over images inside the li (covers both label img and the second img)
  // pega só a imagem maior (fora do label)
  const bigImg = li.querySelector(":scope > img"); 
  if (bigImg) {
    bigImg.addEventListener("mouseenter", playAudio);
  }
  
  
    // Also play when the radio for this item becomes checked (selection)
    const radio = li.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          // small delay to ensure UI updates first
          setTimeout(playAudio, 50);
        }
      });
    }
  
    // If user clicks the label, trigger play (covers some mobile interactions)
    const label = li.querySelector("label");
    if (label) {
      label.addEventListener("click", () => {
        setTimeout(playAudio, 50);
      });
    }
  
    // Extra: touch support (mobile)
    li.addEventListener("touchstart", () => {
      playAudio();
    }, { passive: true });
  
    console.log("SpringTrapper audio hooks attached.");
  });
  





  




