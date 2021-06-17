let products;

function renderTab(products, category) {
  let html = "";
  const productsByCategory = products.filter(
    (product) => product.category === category
  );
  for (const product of productsByCategory) {
    html += `
        <div class="shop-elements">
          <img src="img/${product.image}" alt="${product.title}" class="freshimg">
          <h2>${product.title}</h2>
          <p>${product.price} ${product.currency}</p>
          <button class="buybutton">Buy now</button>
        </div>
      `;
  }
  const productsContainer = document.querySelector(".shop-block");
  productsContainer.innerHTML = html;
}

const radio = document.getElementsByName("type");

for (var i = 0; i < radio.length; i++) {
  radio[i].onchange = testRadio;
}

function testRadio() {
  renderTab(products, this.value);
}

// function fetchProdukts() {
//     fetch('../js/products-list.json')
//         .then(response => response.json() )
//         .then(productsFromServer => products = productsFromServer)
//         .then( () => renderProducts());
// }

async function fetchProdukts() {
  const response = await fetch("products-list.json");
  products = await response.json();
  renderTab(products, "fruit");
}

fetchProdukts();
