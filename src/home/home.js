import bannerImage from "./kfc-nepal-popcorn-nachos-banner.jpg";

export default function getHome() {
	const main = document.createElement("main");

	const kfcBanner = new Image();
	kfcBanner.src = bannerImage;
	kfcBanner.alt = "KFC New Dish Nachos";
	main.appendChild(kfcBanner);

	const orderRefDiv = document.createElement("div");
	orderRefDiv.classList.add("order-ref");
	orderRefDiv.textContent =
		"Order Today and Get 10% OFF on your first order.";

	const orderRefButton = document.createElement("button");
	orderRefButton.textContent = "Order Now";
	orderRefDiv.appendChild(orderRefButton);

	main.appendChild(orderRefDiv);

	return main;
}
