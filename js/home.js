let sell_cards = document.querySelector(".sell_cards");
function getCard() {
  let Card = document.createElement("div");
  Card.className = "sell_card";

  let CardLike = document.createElement("div");
  CardLike.className = "like_card";

  let CardLikeImg = document.createElement("img");
  CardLikeImg.src = "../images/like_button.svg";
  CardLikeImg.alt = "no Img ?";

  let CardSaleText = document.createElement("div");
  CardSaleText.className = "sale";
  CardSaleText.innerText = "-50%";

  let CardHeader = document.createElement("div");
  CardHeader.className = "card_header";

  let CardHeaderImg = document.createElement("img");
  CardHeaderImg.src = "../images/card_1.png";
  CardHeaderImg.alt = "no Img ?";

  let CardHeaderInform = document.createElement("div");
  CardHeaderInform.className = "card_inofrm";

  let Cardinformto = document.createElement("div");
  Cardinformto.className = "card_inform--to";

  let CardinformtoH5 = document.createElement("h5");
  CardinformtoH5.innerText = "50,50 ₽";

  let CardinformtoP = document.createElement("p");
  CardinformtoP.innerText = "Обычная";

  let Cardinformfor = document.createElement("div");
  Cardinformfor.className = "card_inform_for";

  let CardinformforH5 = document.createElement("h5");
  CardinformforH5.innerText = "44,50 ₽";

  let CardinformforP = document.createElement("p");
  CardinformforP.innerText = "Обычная";

  let CardHeaderH4 = document.createElement("h4");
  CardHeaderH4.innerHTML = "Г/Ц Блинчики с мясом вес, <br /> Россия";

  let CardFooter = document.createElement("div");
  CardFooter.className = "card_footer";

  let CardFooterGreat = document.createElement("div");
  CardFooterGreat.className = "greatly";

  let CardFooterImg = document.createElement("img");
  CardFooterImg.src = "../images/yorug_stra.png";
  CardFooterImg.alt = "no Img ?";

  let CardFooterImg1 = document.createElement("img");
  CardFooterImg1.src = "../images/yorug_stra.png";
  CardFooterImg1.alt = "no Img ?";

  let CardFooterImg2 = document.createElement("img");
  CardFooterImg2.src = "../images/star.svg";
  CardFooterImg2.alt = "no Img ?";

  let CardFooterImg3 = document.createElement("img");
  CardFooterImg3.src = "../images/star.svg";
  CardFooterImg3.alt = "no Img ?";

  let CardFooterImg4 = document.createElement("img");
  CardFooterImg4.src = "../images/star.svg";
  CardFooterImg4.alt = "no Img ?";

  let CardFooterBtn = document.createElement("div");
  CardFooterBtn.className = "btn_1";

  let CardFooterA = document.createElement("a");
  CardFooterA.href = "./pages/Корзина.html";
  CardFooterA.innerText = "В корзину";

  CardFooterGreat.append(
    CardFooterImg,
    CardFooterImg1,
    CardFooterImg2,
    CardFooterImg3,
    CardFooterImg4
  );
  CardLike.append(CardLikeImg);
  Card.append(CardLike);
  Card.append(CardSaleText);
  CardHeader.append(CardHeaderImg);
  CardHeader.append(CardHeaderInform);
  CardHeaderInform.append(Cardinformto);
  Cardinformto.append(CardinformtoH5, CardinformtoP);
  CardHeaderInform.append(Cardinformfor);
  Cardinformfor.append(CardinformforH5, CardinformforP);
  CardHeader.append(CardHeaderH4);
  Card.append(CardHeader, CardFooter);
  CardFooter.append(CardFooterGreat, CardFooterBtn);
  CardFooterBtn.append(CardFooterA);
  sell_cards.append(Card);

  return sell_cards;
}
getCard();
getCard();
getCard();
getCard();
