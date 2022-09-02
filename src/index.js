import "./style.css";
import logoImage from "./kfc-logo.png";
import footerData from "./footer_data.json5";
import getHome from "./home/home";
import getProducts from "./products/products";
import getAbout from "./about/about";

const contentDiv = document.querySelector("#content");

function getHeader() {
	const header = document.createElement("header");

	const headerDiv = document.createElement("div");
	headerDiv.classList.add("header-title");

	const kfcLogo = new Image();
	kfcLogo.src = logoImage;
	kfcLogo.alt = "KFC Logo";
	headerDiv.appendChild(kfcLogo);

	const h1Name = document.createElement("h1");
	h1Name.textContent = "KFC";
	headerDiv.appendChild(h1Name);

	headerDiv.addEventListener("click", () => {
		initializeForNewPage();
		header.insertAdjacentElement("afterend", getHome());
	});

	header.appendChild(headerDiv);

	const ulPageLinks = document.createElement("ul");

	const liPageLink1 = document.createElement("li");
	liPageLink1.textContent = "Browse";
	ulPageLinks.appendChild(liPageLink1);

	liPageLink1.addEventListener("click", (e) => {
		initializeForNewPage();
		e.target.classList.add("active");
		header.insertAdjacentElement("afterend", getProducts());
	});

	const liPageLink2 = document.createElement("li");
	liPageLink2.textContent = "About";
	ulPageLinks.appendChild(liPageLink2);

	liPageLink2.addEventListener("click", (e) => {
		initializeForNewPage();
		e.target.classList.add("active");
		header.insertAdjacentElement("afterend", getAbout());
	});

	const liPageLink3 = document.createElement("li");
	liPageLink3.textContent = "Contact";
	ulPageLinks.appendChild(liPageLink3);

	header.appendChild(ulPageLinks);

	function initializeForNewPage() {
		liPageLink1.classList.remove("active");
		liPageLink2.classList.remove("active");
		liPageLink3.classList.remove("active");
		const oldMain = document.querySelector("main");
		contentDiv.removeChild(oldMain);
	}

	return header;
}

function getFooter() {
	const footer = document.createElement("footer");

	const footerDiv = document.createElement("div");
	footerDiv.classList.add("footer-grid");

	footerData.forEach((x) => {
		const footerGridCell = document.createElement("div");
		footerGridCell.classList.add("cell");
		if (x === "Image") {
			const kfcLogo = new Image();
			kfcLogo.src = logoImage;
			kfcLogo.alt = "KFC Logo";
			footerGridCell.appendChild(kfcLogo);
			footerGridCell.classList.add("image");
		} else {
			let propertyName = Object.getOwnPropertyNames(x)[0];
			const cellTitle = document.createElement("div");
			cellTitle.textContent = propertyName;
			cellTitle.classList.add("cell-title");

			const cellItems = document.createElement("ul");
			cellItems.classList.add("cell-items");
			x[propertyName].forEach((cellItem) => {
				const cellItemHolder = document.createElement("li");
				cellItemHolder.textContent = cellItem;
				cellItems.appendChild(cellItemHolder);
			});

			footerGridCell.appendChild(cellTitle);
			footerGridCell.appendChild(cellItems);
		}
		footerDiv.appendChild(footerGridCell);
	});

	footer.appendChild(footerDiv);

	return footer;
}

contentDiv.appendChild(getHeader());
contentDiv.appendChild(getHome());
contentDiv.appendChild(getFooter());
