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

// --- MARINETTE ---
const marinetteLi = document.querySelector('li[data-name="Puppet"]');
let marinetteAudio = document.getElementById("marinette-audio");

if (!marinetteAudio) {
  marinetteAudio = document.createElement("audio");
  marinetteAudio.id = "marinette-audio";
  marinetteAudio.src = "MarinneteVoice.mp3";
  marinetteAudio.preload = "auto";
  document.body.appendChild(marinetteAudio);
}

const playMarinette = () => {
  try {
    marinetteAudio.currentTime = 0;
    marinetteAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Marinette:", err);
    });
  } catch (err) {
    console.warn("Erro Marinette:", err);
  }
};

if (marinetteLi) {
  const bigImgMarinette = marinetteLi.querySelector(":scope > img");
  if (bigImgMarinette) {
    bigImgMarinette.addEventListener("click", playMarinette);
  }
}

// --- GOLDEN FREDDY ---
const goldenFreddyLi = document.querySelector('li[data-name="Golden Freddy"]');
let goldenFreddyAudio = document.getElementById("goldenfreddy-audio");

if (!goldenFreddyAudio) {
  goldenFreddyAudio = document.createElement("audio");
  goldenFreddyAudio.id = "goldenfreddy-audio";
  goldenFreddyAudio.src = "ricofreddyvoice_ZkDHtk2o.mp3";
  goldenFreddyAudio.preload = "auto";
  document.body.appendChild(goldenFreddyAudio);
}

const playGoldenFreddy = () => {
  try {
    goldenFreddyAudio.currentTime = 0;
    goldenFreddyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Golden Freddy:", err);
    });
  } catch (err) {
    console.warn("Erro Golden Freddy:", err);
  }
};

if (goldenFreddyLi) {
  const bigImgGoldenFreddy = goldenFreddyLi.querySelector(":scope > img");
  if (bigImgGoldenFreddy) {
    bigImgGoldenFreddy.addEventListener("click", playGoldenFreddy);
  }
}

// --- MANGLE ---
const mangleLi = document.querySelector('li[data-name="Mangle"]');
let mangleAudio = document.getElementById("mangle-audio");

if (!mangleAudio) {
  mangleAudio = document.createElement("audio");
  mangleAudio.id = "mangle-audio";
  mangleAudio.src = "mangadaVoice.mp3";
  mangleAudio.preload = "auto";
  document.body.appendChild(mangleAudio);
}

const playMangle = () => {
  try {
    mangleAudio.currentTime = 0;
    mangleAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Mangle:", err);
    });
  } catch (err) {
    console.warn("Erro Mangle:", err);
  }
};

if (mangleLi) {
  const bigImgMangle = mangleLi.querySelector(":scope > img");
  if (bigImgMangle) {
    bigImgMangle.addEventListener("click", playMangle);
  }
}

// --- NIGHTMARE FREDDY ---
const nightmareFreddyLi = document.querySelector('li[data-name="Nightmare Freddy"]');
let nightmareFreddyAudio = document.getElementById("nightmarefreddy-audio");

if (!nightmareFreddyAudio) {
  nightmareFreddyAudio = document.createElement("audio");
  nightmareFreddyAudio.id = "nightmarefreddy-audio";
  nightmareFreddyAudio.src = "NightmaresVoice.mp3";
  nightmareFreddyAudio.preload = "auto";
  document.body.appendChild(nightmareFreddyAudio);
}

const playNightmareFreddy = () => {
  try {
    nightmareFreddyAudio.currentTime = 0;
    nightmareFreddyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Nightmare Freddy:", err);
    });
  } catch (err) {
    console.warn("Erro Nightmare Freddy:", err);
  }
};

if (nightmareFreddyLi) {
  const bigImgNightmareFreddy = nightmareFreddyLi.querySelector(":scope > img");
  if (bigImgNightmareFreddy) {
    bigImgNightmareFreddy.addEventListener("click", playNightmareFreddy);
  }
}

// --- NIGHTMARE ---
const nightmareLi = document.querySelector('li[data-name="Nightmare"]');
let nightmareAudio = document.getElementById("nightmare-audio");

if (!nightmareAudio) {
  nightmareAudio = document.createElement("audio");
  nightmareAudio.id = "nightmare-audio";
  nightmareAudio.src = "NightmaresVoice.mp3";
  nightmareAudio.preload = "auto";
  document.body.appendChild(nightmareAudio);
}

const playNightmare = () => {
  try {
    nightmareAudio.currentTime = 0;
    nightmareAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Nightmare:", err);
    });
  } catch (err) {
    console.warn("Erro Nightmare:", err);
  }
};

if (nightmareLi) {
  const bigImgNightmare = nightmareLi.querySelector(":scope > img");
  if (bigImgNightmare) {
    bigImgNightmare.addEventListener("click", playNightmare);
  }
}

// --- CIRCUS BABY ---
const circusBabyLi = document.querySelector('li[data-name="Circus baby"]');
let circusBabyAudio = document.getElementById("circusbaby-audio");

if (!circusBabyAudio) {
  circusBabyAudio = document.createElement("audio");
  circusBabyAudio.id = "circusbaby-audio";
  circusBabyAudio.src = "CircusBabyVoice.mp3";
  circusBabyAudio.preload = "auto";
  document.body.appendChild(circusBabyAudio);
}

const playCircusBaby = () => {
  try {
    circusBabyAudio.currentTime = 0;
    circusBabyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Circus Baby:", err);
    });
  } catch (err) {
    console.warn("Erro Circus Baby:", err);
  }
};

if (circusBabyLi) {
  const bigImgCircusBaby = circusBabyLi.querySelector(":scope > img");
  if (bigImgCircusBaby) {
    bigImgCircusBaby.addEventListener("click", playCircusBaby);
  }
}

// --- BALLORA ---
const balloraLi = document.querySelector('li[data-name="Ballora"]');
let balloraAudio = document.getElementById("ballora-audio");

if (!balloraAudio) {
  balloraAudio = document.createElement("audio");
  balloraAudio.id = "ballora-audio";
  balloraAudio.src = "BalloraVoice.mp3";
  balloraAudio.preload = "auto";
  document.body.appendChild(balloraAudio);
}

const playBallora = () => {
  try {
    balloraAudio.currentTime = 0;
    balloraAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Ballora:", err);
    });
  } catch (err) {
    console.warn("Erro Ballora:", err);
  }
};

if (balloraLi) {
  const bigImgBallora = balloraLi.querySelector(":scope > img");
  if (bigImgBallora) {
    bigImgBallora.addEventListener("click", playBallora);
  }
}

// --- FUNTIME FREDDY ---
const funtimeFreddyLi = document.querySelector('li[data-name="Funtime Freddy"]');
let funtimeFreddyAudio = document.getElementById("funtimefreddy-audio");

if (!funtimeFreddyAudio) {
  funtimeFreddyAudio = document.createElement("audio");
  funtimeFreddyAudio.id = "funtimefreddy-audio";
  funtimeFreddyAudio.src = "FuntimeFreddyVoice.mp3";
  funtimeFreddyAudio.preload = "auto";
  document.body.appendChild(funtimeFreddyAudio);
}

const playFuntimeFreddy = () => {
  try {
    funtimeFreddyAudio.currentTime = 0;
    funtimeFreddyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Funtime Freddy:", err);
    });
  } catch (err) {
    console.warn("Erro Funtime Freddy:", err);
  }
};

if (funtimeFreddyLi) {
  const bigImgFuntimeFreddy = funtimeFreddyLi.querySelector(":scope > img");
  if (bigImgFuntimeFreddy) {
    bigImgFuntimeFreddy.addEventListener("click", playFuntimeFreddy);
  }
}

  // --- FUNTIME FOXY ---
const funtimeFoxyLi = document.querySelector('li[data-name="Funtime Foxy"]');
let funtimeFoxyAudio = document.getElementById("funtimefoxy-audio");

if (!funtimeFoxyAudio) {
  funtimeFoxyAudio = document.createElement("audio");
  funtimeFoxyAudio.id = "funtimefoxy-audio";
  funtimeFoxyAudio.src = "FuntimeFoxyVoice.mp3";
  funtimeFoxyAudio.preload = "auto";
  document.body.appendChild(funtimeFoxyAudio);
}

const playFuntimeFoxy = () => {
  try {
    funtimeFoxyAudio.currentTime = 0;
    funtimeFoxyAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Funtime Foxy:", err);
    });
  } catch (err) {
    console.warn("Erro Funtime Foxy:", err);
  }
};

if (funtimeFoxyLi) {
  const bigImgFuntimeFoxy = funtimeFoxyLi.querySelector(":scope > img");
  if (bigImgFuntimeFoxy) {
    bigImgFuntimeFoxy.addEventListener("click", playFuntimeFoxy);
  }
}

// --- ENNARD ---
const ennardLi = document.querySelector('li[data-name="Ennard"]');
let ennardAudio = document.getElementById("ennard-audio");

if (!ennardAudio) {
  ennardAudio = document.createElement("audio");
  ennardAudio.id = "ennard-audio";
  ennardAudio.src = "EnnardVoice.mp3";
  ennardAudio.preload = "auto";
  document.body.appendChild(ennardAudio);
}

const playEnnard = () => {
  try {
    ennardAudio.currentTime = 0;
    ennardAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Ennard:", err);
    });
  } catch (err) {
    console.warn("Erro Ennard:", err);
  }
};

if (ennardLi) {
  const bigImgEnnard = ennardLi.querySelector(":scope > img");
  if (bigImgEnnard) {
    bigImgEnnard.addEventListener("click", playEnnard);
  }
}

// --- GLAMROCK CHICA ---
const glamrockChicaLi = document.querySelector('li[data-name="Glamrock Chica"]');
let glamrockChicaAudio = document.getElementById("glamrockchica-audio");

if (!glamrockChicaAudio) {
  glamrockChicaAudio = document.createElement("audio");
  glamrockChicaAudio.id = "glamrockchica-audio";
  glamrockChicaAudio.src = "GlamrockChica.mp3";
  glamrockChicaAudio.preload = "auto";
  document.body.appendChild(glamrockChicaAudio);
}

const playGlamrockChica = () => {
  try {
    glamrockChicaAudio.currentTime = 0;
    glamrockChicaAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Glamrock Chica:", err);
    });
  } catch (err) {
    console.warn("Erro Glamrock Chica:", err);
  }
};

if (glamrockChicaLi) {
  const bigImgGlamrockChica = glamrockChicaLi.querySelector(":scope > img");
  if (bigImgGlamrockChica) {
    bigImgGlamrockChica.addEventListener("click", playGlamrockChica);
  }
}

// --- MIMIC ---
const mimicLi = document.querySelector('li[data-name="Mimic"]');
let mimicAudio = document.getElementById("mimic-audio");

if (!mimicAudio) {
  mimicAudio = document.createElement("audio");
  mimicAudio.id = "mimic-audio";
  mimicAudio.src = "MimicVoice.mp3";
  mimicAudio.preload = "auto";
  document.body.appendChild(mimicAudio);
}

const playMimic = () => {
  try {
    mimicAudio.currentTime = 0;
    mimicAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio do Mimic:", err);
    });
  } catch (err) {
    console.warn("Erro Mimic:", err);
  }
};

if (mimicLi) {
  const bigImgMimic = mimicLi.querySelector(":scope > img");
  if (bigImgMimic) {
    bigImgMimic.addEventListener("click", playMimic);
  }
}

// --- ROXANNE WOLF ---
const roxanneWolfLi = document.querySelector('li[data-name="Roxanne Wolf"]');
let roxanneWolfAudio = document.getElementById("roxannewolf-audio");

if (!roxanneWolfAudio) {
  roxanneWolfAudio = document.createElement("audio");
  roxanneWolfAudio.id = "roxannewolf-audio";
  roxanneWolfAudio.src = "RoxanneVoice.mp3";
  roxanneWolfAudio.preload = "auto";
  document.body.appendChild(roxanneWolfAudio);
}

const playRoxanneWolf = () => {
  try {
    roxanneWolfAudio.currentTime = 0;
    roxanneWolfAudio.play().catch(err => {
      console.warn("Erro ao tentar tocar áudio da Roxanne Wolf:", err);
    });
  } catch (err) {
    console.warn("Erro Roxanne Wolf:", err);
  }
};

if (roxanneWolfLi) {
  const bigImgRoxanneWolf = roxanneWolfLi.querySelector(":scope > img");
  if (bigImgRoxanneWolf) {
    bigImgRoxanneWolf.addEventListener("click", playRoxanneWolf);
  }
}
