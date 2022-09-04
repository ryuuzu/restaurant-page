import "./disclaimer.css";

export default function getDisclaimer() {
	const disclaimerDiv = document.createElement("div");
	disclaimerDiv.classList.add("disclaimer");

	const disclaimerText = document.createElement("span");
	disclaimerText.classList.add("disclaimer-text");
	disclaimerText.innerHTML = `DISCLAIMER: This is a mock-up KFC Nepal site created by <a href="https://github.com/ryuuzu" target="_blank">Utsav Gurmachhan</a>. For real site, please visit <a href="https://kfc.com.np" target="_blank">https://kfc.com.np</a>`;

	const disclaimerCloseBtn = document.createElement("button");
	disclaimerCloseBtn.classList.add("close-btn");
	disclaimerCloseBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/></svg>`;

	const svgBtn = disclaimerCloseBtn.querySelector("svg");
	svgBtn.addEventListener("click", (e) => {
		disclaimerDiv.style.bottom = `-${disclaimerDiv.clientHeight}px`;
	});

	disclaimerDiv.appendChild(disclaimerText);
	disclaimerDiv.appendChild(disclaimerCloseBtn);

	return disclaimerDiv;
}
