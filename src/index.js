import "./style.css";
import logoImage from "./kfc-logo.png";
import footerData from "./footer_data.json5";
import getHome from "./home/home";


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

	header.appendChild(headerDiv);

	const ulPageLinks = document.createElement("ul");
	["Browse", "About", "Contact"].forEach((x) => {
		const liPageLink = document.createElement("li");
		liPageLink.textContent = x;
		ulPageLinks.appendChild(liPageLink);
	});

	header.appendChild(ulPageLinks);

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

const contentDiv = document.querySelector("#content");
contentDiv.appendChild(getHeader());
contentDiv.appendChild(getHome());
contentDiv.appendChild(getFooter());
