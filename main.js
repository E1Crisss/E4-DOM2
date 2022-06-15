const menuPizzas = [
  {
    id: 1,
    nombre: "Muzarella",
    ingredientes: ["Muzarella", " Aceituna"],
    precio: 500,
    imagen:
      "./img/p-muzzarella.jpg"
  },
  {
    id: 2,
    nombre: "Muzarella con Morron",
    ingredientes: ["Muzarella", " Aceituna", " Morron"],
    precio: 550,
    imagen: "./img/p-napo.jpg",
  },
  {
    id: 3,
    nombre: "Corazon de Pollo",
    ingredientes: ["Queso Cremoso ", " Muzarella", " Albahaca"],
    precio: 600,
    imagen: "./img/p-corazonPollo.jpg",
  },
  {
    id: 4,
    nombre: "Palmitos",
    ingredientes: ["Muzarella", " Salsa Golf", " Tomate Cherry"],
    precio: 650,
    imagen: "./img/p-palmitos.jpg",
  },
  {
    id: 5,
    nombre: "Panceta",
    ingredientes: ["Muzarella", " Huevo Frito"],
    precio: 700,
    imagen: "./img/p-panceta.jpg",
  },
  {
    id: 6,
    nombre: "Especial de la Casa",
    ingredientes: [
      "Muzarella",
      "Carne de lomo Arabe",
      " Tiras de Morron",
      "Huevo Frito",
    ],
    precio: 750,
    imagen: "./img/p-especial.webp",
  },
];

const $nmbPizza = document.querySelector("#nmbPizza"),
  $pcoPizza = document.querySelector("#pcoPizza"),
  $imgCard = document.querySelector("#imgCard"),
  $ingrePizza = document.querySelector("#ingrePizza"),
  $btn = document.querySelector("#btn");

const captValor = () => {
  const $idValor = document.querySelector("#idValor").value;

  const menu = menuPizzas.find((pizzas) => pizzas.id == $idValor);
  if (menu) {
    $nmbPizza.innerHTML = menu.nombre;
    $imgCard.setAttribute("src", menu.imagen);
    $ingrePizza.innerHTML = `<b>Los ingredientes son:</b> <br> ${menu.ingredientes}`;
    $pcoPizza.innerHTML = ` ${menu.precio}`;
  } else {
    $nmbPizza.classList.add("alert");
    $nmbPizza.innerHTML = "ERROR";
    // $imgCard.setAttribute("src", menu.imagen);
    $ingrePizza.innerHTML = "Ingrese del 1 al 6";
    $pcoPizza.innerHTML = "";
  }
};

const clearM = () => {
  document.querySelector("#idValor").value = "";
};

$btn.addEventListener("click", (e) => {
  captValor();
  clearM();
});

localStorage.setItem("Mozo Lindo", JSON.stringify(menuPizzas));
