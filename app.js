//Selectors
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// Linking text
playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fkat wings" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zepelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fkat wings" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zepelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
];

// randomizing cards

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//card generator function

const cardGenerator = () => {
  const cardData = randomize();
  //Genearte the HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    //adding classes for css
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the tiem to image source
    face.src = item.imgSrc;

    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      CheckCards(e);
    });
  });
};

//Check Cards
const CheckCards = (e) => {
  const clickCard = e.target.parentElement;
  console.log(clickCard);
};

cardGenerator();
