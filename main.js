'use strict;'
const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
};

const renderNavbar = () => {
  let domString = `<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto">
        <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
        <a id="shopsAll" class="nav-link" href="/shop.html">Shop</a>
        <a class="nav-link" href="/bios.html">About Us</a>
        <a class="nav-link" href="/reviews.html">Reviews</a>
        <a class="nav-link" href="/order.html">Order</a>
        
      </div>
    </div>
  </nav>`;
  printToDom("navbar", domString);
};
const shopCardsArray = [
  {
    style: "Forester Corduroys",
    forWhom: "Kids",
    onSale: true,
    description: "An overall for the coolest kid on the block",
    imageUrl: "/shopImages/kidsgreen.jpeg",
    price: 34.99,
  },
  {
    style: "Shade Of Brown",
    forWhom: "Men",
    onSale: true,
    description:
      "Featuring a slim and straight fit with a medium rise and a straight leg, the men's cord jeans offer a tailored take on a classic cord, topping it off with signature trims.",
    imageUrl: "/shopImages/shadeofbrown.jpg",
    price: 39.99,
  },
  {
    style: "The Party Pants",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate party pants. Instantly become the life of the party with these rockin corduroys",
    imageUrl: "/shopImages/partypants.jpeg",
    price: 99.99,
  },
  {
    style: "Cowboy's Overall",
    forWhom: "Men",
    onSale: true,
    description:
      "The rowdiest overalls in all the west. From horseback to stick-ups at the bank, these corduroys will do it all!",
    imageUrl: "/shopImages/cowboy.jpg",
    price: 33.99,
  },
  {
    style: "Womens Mid Rise",
    forWhom: "Women",
    onSale: false,
    description:
      "A figure-balancing shape in soft-yet-substantial corduroy. Perfect for anyone",
    imageUrl: "/shopImages/wmidrise.jpeg",
    price: 65.99,
  },
  {
    style: "The Johna Wayne",
    forWhom: "Women",
    onSale: false,
    description:
      "The ultimate ribcage cord flare jean in camel. Ready to take over the wild west!",
    imageUrl: "/shopImages/womensbrown.jpeg",
    price: 44.99,
  },
  {
    style: "Wild West Corduroys",
    forWhom: "Women",
    onSale: true,
    description:
      "Saying, cute, comfortable, and durable pants, doesn't have to mean three different pairs. DOn't miss out!",
    imageUrl: "/shopImages/fittedwomens.jpg",
    price: 45.99,
  },
  {
    style: "Root Tootin Roys",
    forWhom: "Women",
    onSale: false,
    description:
      "Your favorite Sport Knit Pants in supple knit corduroy. Comfortable and cool.",
    imageUrl: "/shopImages/gold.jpeg",
    price: 81.99,
  },
  {
    style: "Oregon Trail Roys",
    forWhom: "Kids",
    onSale: false,
    description:
      "If these corduroys can survive the oregon trail, then so can you!",
    imageUrl: "/shopImages/oregontrail.jpg",
    price: 85.99,
  },
  {
    style: "Navy Cords",
    forWhom: "Kids",
    onSale: true,
    description:
      "A cool Navy blue, with functional pockets and a style that everyone will enjoy",
    imageUrl: "/shopImages/navymens.jpeg",
    price: 25.99,
  },
  {
    style: "The Classic",
    forWhom: "Men",
    onSale: false,
    description:
      "Throwback cord and modern cut meet in the daggers pigment corduroy jeans.",
    imageUrl: "/shopImages/classiccorduroy.jpg",
    price: 69.99,
  },
  {
    style: "Cool Cats",
    forWhom: "Kids",
    onSale: true,
    description:
      "Corduroys that will make your kids WAY cooler than you. You have been warned.",
    imageUrl: "/shopImages/kids2.jpeg",
    price: 39.99,
  },
  {
    style: "Cord Shorts",
    forWhom: "Women",
    onSale: true,
    description:
      "Corduroy shorts with enough pockets fpr all of your essentials!",
    imageUrl: "/shopImages/shorts.jpeg",
    price: 64.99,
  },
  {
    style: "Real Teal",
    forWhom: "Men",
    onSale: false,
    description:
      "Designed with 5-pocket denim styling, details include a zip fly with a metal button closure, coin pocket at the left hip and metal rivets at the pockets.",
    imageUrl: "/shopImages/realteal.jpg",
    price: 59.99,
  },
  {
    style: "Overall Cords",
    forWhom: "Kids",
    onSale: false,
    description: "An overall for the coolest kid on the block",
    imageUrl: "/shopImages/kidsoverall.jpeg",
    price: 85.99,
  },
];
const buttonEvents = () => {
  if (document.getElementById("shop")) {
    renderShopCards(shopCardsArray);
    document
      .getElementById("searchBarInput")
      .addEventListener("keyup", searchFunction);
    document
      .getElementById("addCardToShopButton")
      .addEventListener("click", captureNewProduct);
      document
      .getElementById("addCardToShopButton")
      .addEventListener("click", renderShopCardsOnSubmit);
  }
  if (document.getElementById("reviews")) {
    renderReviews();
  }
  if (document.getElementById("dropdown")) {
    document
      .getElementById("allButton")
      .addEventListener("click", renderAllCards);
    document
      .getElementById("mensButton")
      .addEventListener("click", renderMensCards);
    document
      .getElementById("womensButton")
      .addEventListener("click", renderWomensCards);
    document
      .getElementById("kidsButton")
      .addEventListener("click", renderKidsCards);
  }
};

const renderShopCards = (array) => {
  let domString = "";
  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="img-container" style="background-image: url(${array[i].imageUrl})">
    </div>
    <div class="card-body">
      <h3 class="card-title">${array[i].style}</h3>
      <p class="card-text">${array[i].description}</p>
      <h5 class="card-price">$${array[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
  
};
const renderShopCardsOnSubmit = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
    </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
  
};
const renderMensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Men") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
      <div class="card-body">
        <h3 class="card-title">${shopCardsArray[i].style}</h3>
        <p class="card-text">${shopCardsArray[i].description}</p>
        <h5 class="card-price">$${shopCardsArray[i].price}</h5>
      </div>
    </div>
    `;
    }
    printToDom("shopCardsSection", domString);
  }
};
const renderWomensCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Women") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
    }
    printToDom("shopCardsSection", domString);
  }
};
const renderKidsCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    if (shopCardsArray[i].forWhom === "Kids") {
      domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
    }
    printToDom("shopCardsSection", domString);
  }
};
const renderAllCards = () => {
  let domString = "";
  for (let i = 0; i < shopCardsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
      <div class="img-container" style="background-image: url(${shopCardsArray[i].imageUrl})">
      </div>
    <div class="card-body">
      <h3 class="card-title">${shopCardsArray[i].style}</h3>
      <p class="card-text">${shopCardsArray[i].description}</p>
      <h5 class="card-price">$${shopCardsArray[i].price}</h5>
    </div>
  </div>
  `;
  }
  printToDom("shopCardsSection", domString);
};

const reviewsArray = [
  {
    name: "John Wayne",
    product: "classic pants",
    rating: 5,
    product: "Corduroys",
    comment: "Hey Pawdna. I love them.",
    avatar: "10.jpg",
  },
  {
    name: "Gayle Davis",
    rating: 3,
    product: "Corduroys",
    comment: "Could've been better.",
    avatar: "12.jpg",
  },
  {
    name: "Nell Oday",
    rating: 5,
    product: "Corduroys",
    comment: "Best I ever got.",
    avatar: "8.jpeg",
  },
  {
    name: "Gabby Hayes",
    rating: 2,
    product: "Corduroys",
    comment: "I would've given three stars but the service wasn't good either.",
    avatar: "5.jpg",
  },
];

const renderReviews = () => {
  let domString = "";
  for (let i = 0; i < reviewsArray.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="images/reviewAvatars/${reviewsArray[i].avatar}" class="card-img-top" alt="">
    <div class="card-body">
      <h3 class="card-title">${reviewsArray[i].name}</h3>
      <p class="card-text">${reviewsArray[i].product}</p>
      <h5 class="card-price">${reviewsArray[i].comment}</h5>
      <div class="row lead">
        <div id="stars" class="starrr"></div>
        You gave a rating of <span id="count">${reviewsArray[i].rating}</span> star(s)
      </div>
    </div>
  </div>
  `;
  }
  printToDom("reviewsSection", domString);
};

const searchFunction = (e) => {
  const searchId = e.target.value.toLowerCase();
  const filteredPants = shopCardsArray.filter((shopCardsArray) => {
    return (
      shopCardsArray.style.toLowerCase().includes(searchId) ||
      shopCardsArray.description.toLowerCase().includes(searchId)
    );
  });
  renderShopCards(filteredPants);
};
const captureNewProduct = (e) => {
  let buttonId = e.target.id;
  if (buttonId === "addCardToShopButton") {
    const pantsStyle = document.querySelector("#styleInput").value;
    const forWhomInput = document.querySelector("#forWhomInfo").value;
    const priceInput = document.querySelector("#priceInfo").value;
    const imageInput = document.querySelector("#imageAddress").value;
    const descriptionInput1 = document.querySelector("#descriptionInput").value;
    let newCardObject = {
      style: pantsStyle,
      forWhom: forWhomInput,
      onSale: false,
      description: descriptionInput1,
      imageUrl: imageInput,
      price: priceInput,
    };
    shopCardsArray.push(newCardObject);
  }
 
};

const init = () => {
  renderNavbar();
  buttonEvents();
};

init();
