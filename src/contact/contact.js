import "./contact.css";

const outletInfos = [
	{
		name: "Durbar Marg",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2143459633426!2d85.3172779!3d27.710667500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190165dcf4c9%3A0xcab486ba0be097d6!2sKFC%20Durbar%20Marg!5e0!3m2!1sen!2snp!4v1662122782630!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "Bouddha",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9108793145897!2d85.35838079999999!3d27.720037800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bd9b9839cbf%3A0x236e84d2ba5accdd!2sKFC%20Boudha!5e0!3m2!1sen!2snp!4v1662122801623!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "LABIM Mall, Pulchowk",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2912949679444!2d85.3168074!3d27.677390400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb96c074dd%3A0xaf3b4dee35530d97!2sKFC%20Pulchowk!5e0!3m2!1sen!2snp!4v1662122834971!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Maharajgunj",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.287106841515!2d85.3394914!3d27.73928919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1923a7d53443%3A0x3231069c8466b5e3!2sKFC%20Maharajgunj!5e0!3m2!1sen!2snp!4v1662122845966!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Thimi",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.372966300983!2d85.39731669999999!3d27.674865300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a8839056e21%3A0x31a1e902482ff312!2sKFC%20Thimi!5e0!3m2!1sen!2snp!4v1662122867396!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "Central Lakeside, Pokhara",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.891548363021!2d83.9569743!3d28.210607399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951e5c590ec1%3A0x9ecc41d6eb1cab36!2sKFC%20Pokhara!5e0!3m2!1sen!2snp!4v1662122873768!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "CG Landmark Mall, Bharatpur",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9814921878647!2d84.42869270000001!3d27.686966899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb89807ae35b%3A0x217fad6bbe93d502!2sKFC%20Bharatpur!5e0!3m2!1sen!2snp!4v1662122884987!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Kalanki",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8813986368054!2d85.28466999999999!3d27.690060300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19977104bf1d%3A0xb7aef6beeb7accff!2sKFC%20Kalanki!5e0!3m2!1sen!2snp!4v1662122908576!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Naxal",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9593545594166!2d85.3315782!3d27.7185412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1961e91830fb%3A0x5c264a094b49b40f!2sKFC%20Naxal!5e0!3m2!1sen!2snp!4v1662122988996!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Itahari",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9593545594166!2d85.3315782!3d27.7185412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1961e91830fb%3A0x5c264a094b49b40f!2sKFC%20Naxal!5e0!3m2!1sen!2snp!4v1662122917228!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Nepalgunj",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.241453937817!2d87.2367846!3d26.672759200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d3eb98281c1%3A0x719116ee45cd653c!2sKFC%20Itahari!5e0!3m2!1sen!2snp!4v1662122925183!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "BBSM Hetauda",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3519.9270791851895!2d81.6459693!3d28.0877671!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399867086861185b%3A0xfa20b9bc0c3624e2!2sKFC%20Nepalgunj!5e0!3m2!1sen!2snp!4v1662122930652!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
	{
		name: "Eyeplex Mall, Baneshwor",
		map_frame: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8085692045847!2d85.3363708!3d27.6923109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196bfecdbcef%3A0x290090539c413a05!2sKFC%20Baneshwor!5e0!3m2!1sen!2snp!4v1662123008007!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	},
];

export default function getContact() {
	const main = document.createElement("main");

	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");

	const contactFormHolder = document.createElement("div");
	const contactForm = document.createElement("form");
	// too lazy to create individual items
	contactForm.innerHTML = `
    <fieldset class="contact-form">
    <legend class="form-title">Fill this form and we will reach you soon.</legend>
    <input type="text" placeholder="Full Name" name="full_name" id="full_name" />
    <input type="email" name="email" id="email" placeholder="Email" />
    <textarea name="message" id="message" cols="40" rows="10" placeholder="Your Message"></textarea>
	<button type="button">Submit</button>
    </fieldset>
    `;
	contactFormHolder.appendChild(contactForm);

	const outletLocationHolder = document.createElement("div");
	outletLocationHolder.classList.add("outlet-locations");

	const outletLocationsList = document.createElement("select");
	outletLocationsList.classList.add('outlet-list')
	const outletLocation = document.createElement("div");
	outletLocation.classList.add("outlet-location");

	outletInfos.forEach((outletInfo) => {
		const outletOption = document.createElement("option");
		outletOption.textContent = outletInfo.name;
		outletOption.value = outletInfo.name;
		outletLocationsList.appendChild(outletOption);
	});
	outletLocationsList.addEventListener("change", (e) => {
		let locationToDisplay = outletInfos.filter(
			(outletInfo) => outletInfo.name === e.target.value
		)[0];
		outletLocation.innerHTML = locationToDisplay.map_frame;
	});
	outletLocation.innerHTML = outletInfos.filter(
		(outletInfo) => outletInfo.name === outletLocationsList.value
	)[0].map_frame;

	outletLocationHolder.appendChild(outletLocationsList);
	outletLocationHolder.appendChild(outletLocation);

	contactContainer.appendChild(contactFormHolder);
	contactContainer.appendChild(outletLocationHolder);

	main.appendChild(contactContainer);

	return main;
}
