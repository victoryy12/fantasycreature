const infoForm = document.getElementById('infoForm');
const infoCard = document.getElementById('infoCard');
const creatureName = document.getElementById('creatureName');
const speciesName = document.getElementById('speciesName');
const abilityName = document.getElementById('abilityName');
const originName = document.getElementById('originName');
const creatureImage = document.getElementById('creatureImage');
const back = document.getElementById('back');

const speciesImages = {
  AsianDragon: "images/AsianDragon.jpeg",
  EuropeanDragon: "images/EuropeanDragon.jpeg",
  Goblin: "images/Goblin.jpeg",
  Mummy: "images/Mummy.jpeg",
  Golem: "images/Golem.jpeg",
  Banshee: "images/Banshee.jpeg",
  RedCap: "images/RedCap.jpeg",
  Gollum: "images/Gollum.jpeg",
  Roc: "images/Roc.jpeg",
  Kraken: "images/Kraken.jpeg"
};

const speciesDisplayNames = {
  AsianDragon: "Asian Dragon",
  EuropeanDragon: "European Dragon",
  Goblin: "Goblin",
  Mummy: "Mummy",
  Golem: "Golem",
  Banshee: "Banshee",
  RedCap: "Red Cap",
  Gollum: "Gollum",
  Roc: "Roc",
  Kraken: "Kraken"
};

const speciesKeyMap = {};
for (const key in speciesImages) {
  speciesKeyMap[key.toLowerCase()] = key;
}

//lowercase key map
infoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const creature = document.getElementById('creature').value;
  const species = document.getElementById('species').value;
  const ability = document.getElementById('ability').value;
  const origin = document.getElementById('origin').value;

  //lowercase key map
  const speciesKey = speciesKeyMap[speciesRaw.trim().toLowerCase()];
  const displaySpecies = speciesDisplayNames[species] || species;

  creatureName.textContent = creature;
  speciesName.textContent = displaySpecies;
  abilityName.textContent = ability;
  originName.textContent = origin;

  const imageUrl = speciesImages[species];
  if (imageUrl) {
    creatureImage.src = imageUrl;
    creatureImage.alt = species + " image";
    creatureImage.style.display = "block";
  } else {
    creatureImage.style.display = "none";
  }

  infoForm.style.display = 'none';
  infoCard.style.display = 'block';
});

back.addEventListener('click', function () {
  infoCard.style.display = 'none';
  infoForm.style.display = 'block';
});

