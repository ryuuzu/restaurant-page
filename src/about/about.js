import "./about.css";
import aboutKFC from "./about.json5";
import kfcYears from "./kfc-years.png";
import kfcCountries from "./kfc-countries.png";
import kfcRestaurant from "./kfc-restaurant.png";

export default function getAbout() {
	const main = document.createElement("main");

	const aboutText = document.createElement("div");
	aboutText.classList.add("about-text");

	const aboutHeading = document.createElement("h1");
	aboutHeading.textContent = "About KFC";
	aboutHeading.classList.add("about-heading");
	aboutText.appendChild(aboutHeading);

	const aboutContent = document.createElement("div");
	aboutContent.innerHTML =
		"KFC&copy;, a subsidiary of Yum! Brands, is the world's most popular chicken restaurant chain specializing in Original Recipe, Extra Crispy, Kentucky Grilled Chicken&copy;, Extra Crispy&trade; Strips and Extra Crispy&trade; Boneless, with home-style sides, Hot Wings&trade;, and freshly made chicken sandwiches. Most loved and fastest growing retail chains in the world.";
	aboutContent.classList.add("about-content");
	aboutText.appendChild(aboutContent);

	const kfcStats = document.createElement("div");
	kfcStats.classList.add("kfc-stats");

	const yearsServed = document.createElement("div");
	const timeImage = new Image();
	timeImage.src = kfcYears;
	timeImage.classList.add("kfc-stat-image");
	yearsServed.appendChild(timeImage);

	const timeText = document.createElement("div");
	timeText.classList.add("kfc-stat-text");
	const timeValue = document.createElement("span");
	timeValue.classList.add("highlight");
	timeValue.textContent = new Date().getFullYear() - aboutKFC.start;

	timeText.appendChild(timeValue);

	timeText.innerHTML += `years (Since ${aboutKFC.start})`;
	yearsServed.appendChild(timeText);
	yearsServed.classList.add("kfc-stat");

	kfcStats.appendChild(yearsServed);

	const totalRestaurants = document.createElement("div");
	const restaurantImage = new Image();
	restaurantImage.src = kfcRestaurant;
	restaurantImage.classList.add("kfc-stat-image");
	totalRestaurants.appendChild(restaurantImage);

	const restaurantText = document.createElement("div");
	restaurantText.classList.add("kfc-stat-text");
	const restaurantValue = document.createElement("span");
	restaurantValue.classList.add("highlight");
	restaurantValue.textContent = new Intl.NumberFormat("en-NP").format(
		aboutKFC.restaurants
	);
	restaurantText.appendChild(restaurantValue);
	restaurantText.innerHTML += "Restaurants";

	totalRestaurants.appendChild(restaurantText);
	totalRestaurants.classList.add("kfc-stat");

	kfcStats.appendChild(totalRestaurants);

	const totalCountries = document.createElement("div");
	const contriesImage = new Image();
	contriesImage.src = kfcCountries;
	contriesImage.classList.add("kfc-stat-image");
	totalCountries.appendChild(contriesImage);

	const contriesText = document.createElement("div");
	contriesText.classList.add("kfc-stat-text");
	const contriesValue = document.createElement("span");
	contriesValue.classList.add("highlight");
	contriesValue.textContent = new Intl.NumberFormat("en-NP").format(
		aboutKFC.countries
	);
	contriesText.appendChild(contriesValue);
	contriesText.innerHTML += `Countries`;
	totalCountries.appendChild(contriesText);
	totalCountries.classList.add("kfc-stat");

	kfcStats.appendChild(totalCountries);

	main.appendChild(aboutText);
	main.appendChild(kfcStats);

	return main;
}
