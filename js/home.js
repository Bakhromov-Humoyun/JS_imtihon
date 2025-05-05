let sell_cards = document.querySelector(".sell_cards");
let sell_cards2 = document.querySelector(".as");
let as_1 = document.querySelector(".as-1");
let as_2 = document.querySelector(".as-2");
let as_3 = document.querySelector(".as-3");
let as_4 = document.querySelector(".as-4");
let as_5 = document.querySelector(".as-5");
let as_6 = document.querySelector(".as-6");
let as_7 = document.querySelector(".as-7");

let sell_cards3 = document.querySelector(".ass");
function getCard(product) {
  let Card = document.createElement("div");
  Card.className = "sell_card";

  let CardLike = document.createElement("div");
  CardLike.className = "like_card";

  let CardLikeImg = document.createElement("img");
  CardLikeImg.src = "../images/like_button.svg";
  CardLikeImg.alt = "no Img ?";

  let CardSaleText = document.createElement("div");
  CardSaleText.className = "sale";
  CardSaleText.innerText = `-${product.discount}%`;

  let CardHeader = document.createElement("div");
  CardHeader.className = "card_header";

  let CardHeaderImg = document.createElement("img");
  CardHeaderImg.src = product.images[0];
  CardHeaderImg.alt = "no Img ?";

  let CardHeaderInform = document.createElement("div");
  CardHeaderInform.className = "card_inofrm";

  let Cardinformto = document.createElement("div");
  Cardinformto.className = "card_inform--to";

  let CardinformtoH5 = document.createElement("h5");
  CardinformtoH5.innerText = product.price + " ₽";

  let CardinformtoP = document.createElement("p");
  CardinformtoP.innerText = "Обычная";

  let Cardinformfor = document.createElement("div");
  Cardinformfor.className = "card_inform_for";

  let CardinformforH5 = document.createElement("h5");
  CardinformforH5.innerText = product.price + " ₽";

  let CardinformforP = document.createElement("p");
  CardinformforP.innerText = "Обычная";

  let CardHeaderH4 = document.createElement("h4");
  CardHeaderH4.innerHTML = product.name;

  let CardFooter = document.createElement("div");
  CardFooter.className = "card_footer";

  let CardFooterGreat = document.createElement("div");
  CardFooterGreat.className = "greatly";

  let p = document.createElement("p");
  p.innerText = product.description;

  for (let i = 0; i < 5; i++) {
    let star = document.createElement("img");
    star.src =
      i < product.rating ? "../images/yorug_stra.png" : "../images/star.svg";
    star.alt = "no Img ?";
    CardFooterGreat.append(star);
  }

  let CardFooterBtn = document.createElement("div");
  CardFooterBtn.className = "btn_1";

  let CardFooterA = document.createElement("a");
  CardFooterA.href = "./pages/Корзина.html";
  CardFooterA.innerText = "В корзину";

  CardFooterBtn.append(CardFooterA);
  CardFooter.append(p, CardFooterGreat, CardFooterBtn);
  CardLike.append(CardLikeImg);

  CardHeaderInform.append(Cardinformto, Cardinformfor);
  Cardinformto.append(CardinformtoH5, CardinformtoP);
  Cardinformfor.append(CardinformforH5, CardinformforP);
  CardHeader.append(CardHeaderImg, CardHeaderH4, CardHeaderInform);

  Card.append(CardSaleText, CardHeader, CardFooter, CardLike);

  return Card;
}
products
  .filter((el) => el.discount > 0)
  .slice(-4)
  .map((product) => {
    let card = getCard(product);
    sell_cards.append(card);
  });

products.slice(-4).map((product) => {
  let card = getCard(product);
  sell_cards2.append(card);
});
products.slice(4, 8).map((product) => {
  let card = getCard(product);
  as_1.append(card);
});
products.slice(12, 16).map((product) => {
  let card = getCard(product);
  as_2.append(card);
});
products.slice(3, 7).map((product) => {
  let card = getCard(product);
  as_3.append(card);
});
products.slice(-4).map((product) => {
  let card = getCard(product);
  as_4.append(card);
});
products.slice(15, 19).map((product) => {
  let card = getCard(product);
  as_5.append(card);
});
products.slice(25, 29).map((product) => {
  let card = getCard(product);
  as_6.append(card);
});
products.slice(1, 5).map((product) => {
  let card = getCard(product);
  as_7.append(card);
});
products
  .toSorted((a, b) => b.rating - a.rating)
  .slice(0, 4)
  .map((product) => {
    let card = getCard(product);
    sell_cards3.append(card);
  });

  