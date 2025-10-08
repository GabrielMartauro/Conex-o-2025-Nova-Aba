// script.js - SpringTrapper só toca áudio no clique da imagem grande
document.addEventListener("DOMContentLoaded", () => {
  const li = document.querySelector('li[data-name="Springtrap"]');
  const audioId = "springtrapper-audio";
  let audio = document.getElementById(audioId);

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
      audio.play().catch(err => {
        console.warn("Erro ao tentar tocar áudio:", err);
      });
    } catch (err) {
      console.warn("Erro:", err);
    }
  };

  if (!li) {
    console.warn('Não encontrei o li[data-name="Springtrap"]');
    return;
  }

  // pega só a imagem maior (fora do label)
  const bigImg = li.querySelector(":scope > img"); 
  if (bigImg) {
    bigImg.addEventListener("click", playAudio);
  }

  console.log("SpringTrapper: som só no clique da imagem grande.");
});


                      
                  // --- FOXY ---


// --- FOXY ---
const foxyLi = document.querySelector('li[data-name="Foxy"]');
let foxyAudio = document.getElementById("foxy-audio");

if (!foxyAudio) {
  foxyAudio = document.createElement("audio");
  foxyAudio.id = "foxy-audio";
  foxyAudio.src = "FoxyVoice.mp3"; // <- nome corrigido
  foxyAudio.preload = "auto";
  document.body.appendChild(foxyAudio);
}

const playFoxy = () => {
  try {
    foxyAudio.currentTime = 0;
    foxyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio de Foxy:", err);
    });
  } catch (err) {
    console.warn("Erro Foxy:", err);
  }
};

if (foxyLi) {
  const bigImgFoxy = foxyLi.querySelector(":scope > img");
  if (bigImgFoxy) {
    bigImgFoxy.addEventListener("click", playFoxy);
  }
}


// --- FREDDY ---
const freddyLi = document.querySelector('li[data-name="Freddy"]');
let freddyAudio = document.getElementById("freddy-audio");

if (!freddyAudio) {
  freddyAudio = document.createElement("audio");
  freddyAudio.id = "freddy-audio";
  freddyAudio.src = "FreddyVoice.mp3";
  freddyAudio.preload = "auto";
  document.body.appendChild(freddyAudio);
}

const playFreddy = () => {
  try {
    freddyAudio.currentTime = 0;
    freddyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Freddy:", err);
    });
  } catch (err) {
    console.warn("Erro Freddy:", err);
  }
};

if (freddyLi) {
  const bigImgFreddy = freddyLi.querySelector(":scope > img");
  if (bigImgFreddy) {
    bigImgFreddy.addEventListener("click", playFreddy);
  }
}


// --- BONNIE ---
const bonnieLi = document.querySelector('li[data-name="Bonnie"]');
let bonnieAudio = document.getElementById("bonnie-audio");

if (!bonnieAudio) {
  bonnieAudio = document.createElement("audio");
  bonnieAudio.id = "bonnie-audio";
  bonnieAudio.src = "Bonniezada.mp3";
  bonnieAudio.preload = "auto";
  document.body.appendChild(bonnieAudio);
}

const playBonnie = () => {
  try {
    bonnieAudio.currentTime = 0;
    bonnieAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Bonnie:", err);
    });
  } catch (err) {
    console.warn("Erro Bonnie:", err);
  }
};

if (bonnieLi) {
  const bigImgBonnie = bonnieLi.querySelector(":scope > img");
  if (bigImgBonnie) {
    bigImgBonnie.addEventListener("click", playBonnie);
  }
}

// --- CHICA ---
const chicaLi = document.querySelector('li[data-name="Chica"]');
let chicaAudio = document.getElementById("chica-audio");

if (!chicaAudio) {
  chicaAudio = document.createElement("audio");
  chicaAudio.id = "chica-audio";
  chicaAudio.src = "Chicorita.mp3";
  chicaAudio.preload = "auto";
  document.body.appendChild(chicaAudio);
}

const playChica = () => {
  try {
    chicaAudio.currentTime = 0;
    chicaAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Chica:", err);
    });
  } catch (err) {
    console.warn("Erro Chica:", err);
  }
};

if (chicaLi) {
  const bigImgChica = chicaLi.querySelector(":scope > img");
  if (bigImgChica) {
    bigImgChica.addEventListener("click", playChica);
  }
}




  




