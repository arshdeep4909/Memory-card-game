//Selectors
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

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
    //attaching the name to each card created
    card.setAttribute("name", item.name);

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
  const clickedCard = e.target.parentElement;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  // we add flipped to the card because we are going to use it
  // to create a function which checks two cards when flipped
  // if they are same or not
  //Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none"; //makes them unclickable
        // so they just sit upright
      });
    } else {
      console.log("unmatched");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
        // we add time out as we delay the animation otherwise
        // if the second card does not match the first card is flipped
        //back instantly
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        setTimeout(() => {
          restart("Please try again");
        }, 100);
      }
    }
  }
  // run a check to see if we won the game
  if (toggleCard.length === 16) {
    restart("winner winner chicken dinner");
  }
};

//Restart

const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  (section.style.pointerEvents = "none"),
    cardData.forEach((item, index) => {
      cards[index].classList.remove("toggleCard");
      //so that we can click on
      cards[index].style.pointerEvents = "all";
      //randomizing again as the game resets
      setTimeout(() => {
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
      }, 100);
    });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => {
    window.alert(text), 100;
  });
};
cardGenerator();
