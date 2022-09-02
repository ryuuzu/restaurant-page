import "./products.css";
import productsData from "./products.json5";
import czMeal from "./images/cz-meal.png";
import hc2 from "./images/hc-2.jpg";
import hc6 from "./images/hc-6.png";
import pnMeal from "./images/pn-meal.png";
import sr1 from "./images/sr-1.png";
import sr5 from "./images/sr-5.png";

const imageJSON = {
	"hc-2": hc2,
	"hc-6": hc6,
	"sr-1": sr1,
	"sr-5": sr5,
	"cz-meal": czMeal,
	"pn-meal": pnMeal,
};

export default function getProducts() {
	const main = document.createElement("main");

	const productsDiv = document.createElement("div");
	productsDiv.classList.add("products-grid");

	productsData.forEach((product) => {
		const productDiv = document.createElement("div");
		productDiv.classList.add("product-cell");

		const productImage = new Image();
		productImage.src = imageJSON[product.imgsrc];
		productImage.classList.add("product-image");
		productDiv.appendChild(productImage);

		const productTitle = document.createElement("span");
		productTitle.textContent = product.name;
		productTitle.classList.add("product-title");
		productDiv.appendChild(productTitle);

		const productPrice = document.createElement("span");
		productPrice.textContent = `Rs. ${product.price}.00`;
		productPrice.classList.add("product-price");
		productDiv.appendChild(productPrice);

		const productAdd = document.createElement("button");
		productAdd.textContent = "Add to Cart";
		productAdd.classList.add("product-cart");
		productDiv.appendChild(productAdd);

		productsDiv.appendChild(productDiv);
	});

	main.appendChild(productsDiv);
	return main;
}
