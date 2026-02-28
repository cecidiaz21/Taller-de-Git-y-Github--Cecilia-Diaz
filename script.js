  const products = [
    { id: 1, name: "Zapatillas deportivas", price: 120, img: "https://picsum.photos/300?1" },
    { id: 2, name: "Remera deportiva", price: 40, img: "https://picsum.photos/300?2" },
    { id: 3, name: "Mochila urbana", price: 80, img: "https://picsum.photos/300?3" },
    { id: 4, name: "Auriculares", price: 60, img: "https://picsum.photos/300?4" }
  ];

  const cart = [];

  function renderProducts() {
    const container = document.getElementById("productos");
    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <div class="price">$${p.price}</div>
        <button onclick="addToCart(${p.id})">Agregar</button>
      `;
      container.appendChild(div);
    });
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
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

  function scrollToProducts() {
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  }

  renderProducts();


