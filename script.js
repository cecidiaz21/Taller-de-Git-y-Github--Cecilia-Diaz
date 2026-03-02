  // ahora agrupamos los productos por categoría para que cada sección muestre tres artículos
  const categories = [
    {
      name: "Zapatillas deportivas",
      products: [
        { id: 1, name: "Zapatillas deportivas", price: 120, img: "img/zapa-1.jpg"},
        { id: 2, name: "Zapatillas deportivas", price: 150, img: "img/zapa-2.jpg"},
        { id: 3, name: "Zapatillas deportivas", price: 190, img: "img/zapa-3.jpg"}
      ]
    },
    {
      name: "Zapatillas urbanas",
      products: [
        { id: 4, name: "Zapatillas urbanas", price: 100, img: "img/urbana-1.jpg"},
        { id: 5, name: "Zapatillas urbanas", price: 210, img: "img/urbana-2.jpg"},
        { id: 6, name: "Zapatillas urbanas", price: 250, img: "img/urbana-3.jpg"}
      ]
    },
     {
      name: "Remeras deportivas",
      products: [
        { id: 7, name: "Remeras deportivas", price: 95, img: "img/reme-depo-1.jpg"},
        { id: 8, name: "Remeras deportivas", price: 110, img: "img/reme-depo-2.jpg"},
        { id: 9, name: "Remeras deportivas", price: 50, img: "img/reme-depo-3.jpg"}
      ]
    },
    {
      name: "Remeras urbanas",
      products: [
        { id: 10, name: "Remeras urbanas", price: 80, img: "img/reme-urbana-1.jpg"},
        { id: 11, name: "Remeras urbanas", price: 100, img: "img/reme-urbana-2.jpg"},
        { id: 12, name: "Remeras urbanas", price: 60, img: "img/reme-urbana-3.jpg"}
      ]
    }

  ];

  const cart = [];

  function renderProducts() {
    const container = document.getElementById("productos");
    container.innerHTML = ""; // limpia por si se llama varias veces

    categories.forEach(cat => {
      const catDiv = document.createElement("div");
      catDiv.className = "category";

      const title = document.createElement("h2");
      title.textContent = cat.name;
      catDiv.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "products-grid";

      cat.products.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <img src="${p.img}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <div class="price">$${p.price}</div>
          <button onclick="addToCart(${p.id})">Agregar</button>
        `;
        grid.appendChild(div);
      });

      catDiv.appendChild(grid);
      container.appendChild(catDiv);
    });
  }

  function findProductById(id) {
    for (const cat of categories) {
      const p = cat.products.find(p => p.id === id);
      if (p) return p;
    }
    return null;
  }

  function addToCart(id) {
    const product = findProductById(id);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }

  function updateCart() {
    const items = document.getElementById("cart-items");
    const total = document.getElementById("total");

    items.innerHTML = "";
    let sum = 0;

    cart.forEach(p => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.textContent = `${p.name} - $${p.price}`;
      items.appendChild(div);
      sum += p.price;
    });

    total.textContent = sum;
  }

  function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
  }

  function checkout() {
    const payment = document.getElementById("payment-method").value;
    const shipping = document.getElementById("shipping-method").value;
    const total = document.getElementById("total").textContent;
    alert(`Resumen de compra:\nTotal: $${total}\nPago: ${payment}\nEnvío: ${shipping}`);
    // aquí podrías enviar los datos a un servidor etc.
  }

  function scrollToProducts() {
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  }

  renderProducts();

  // registro del botón de checkout
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("checkout-btn");
    if (btn) btn.addEventListener("click", checkout);
  });