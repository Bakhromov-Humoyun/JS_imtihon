let cards = document.querySelector(".sell_cardsed");
let input = document.querySelector("input");
let productCount = document.querySelector(".product-count");
function getProducts(el) {
  return ` <div class="sell_card">
  <div class="sale">-${el.discount}%</div>
  <div class="card_header">
    <img src="${el.images[0]}" alt="${el.name}" />
    <h4>${el.name}</h4>
    <div class="card_inofrm">
      <div class="card_inform--to">
        <h5>${el.price} $</h5>
        <p>${el.category}</p>
      </div>
      <div class="card_inform_for">
        <h5>${el.rating} !$</h5>
        <p>${el.category}</p>
      </div>
    </div>
  </div>
  <div class="card_footer">
    <p>
     ${el.description}
    </p>
    <div class="greatly">
      <img src="../images/yorug_stra.png" alt="no Img ?" /><img
        src="../images/yorug_stra.png"
        alt="no Img ?"
      /><img src="../images/yorug_stra.png" alt="no Img ?" /><img
        src="../images/yorug_stra.png"
        alt="no Img ?"
      /><img src="../images/yorug_stra.png" alt="no Img ?" />
    </div>
    <div class="btn_1">
      <a href="./pages/Корзина.html">В корзину ${el.id}</a>
    </div>
  </div>
  <div class="like_card">
    <img src="../images/like_button.svg" alt="no Img ?" />
  </div>
</div> 
`;
}

function getData(data = products) {
  cards.innerHTML = "";
  data.map((el) => {
    cards.innerHTML += getProducts(el);
  });
  productCount.innerText = data.length;
  if (data.length === 0) {
    cards.innerHTML = `<img src="../images/aka.avif" alt="no Img ?" />`;
    cards.style = `width:100%; margin : 0 auto;`;
  }
}
getData();
input.addEventListener("input", function () {
  let search = this.value.toLowerCase().trim();
  let searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
  getData(searchProducts);
});
