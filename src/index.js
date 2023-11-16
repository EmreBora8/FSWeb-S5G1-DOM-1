const siteContent = {
	// BU NESNEYİ DEĞİŞTİRMEYİN
	nav: {
		"nav-item-1": "Servisler",
		"nav-item-2": "Ürünler",
		"nav-item-3": "Vizyon",
		"nav-item-4": "Özellikler",
		"nav-item-5": "Hakkımızda",
		"nav-item-6": "İletişim",
	},
	cta: {
		h1: "Bu DOM Mükemmel",
		button: "Başlayın",
	},
	"ana-içerik": {
		"özellikler-h4": "Özellikler",
		"özellikler-içerik":
			"Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"hakkımızda-h4": "Hakkında",
		"hakkımızda-içerik":
			"Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"servisler-h4": "Servisler",
		"servisler-içeriği":
			"Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"ürünler-h4": "Ürünler",
		"ürünler-içeriği":
			"Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vizyon-h4": "Vizyon",
		"vizyon-içeriği":
			"Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	iletisim: {
		"iletişim-h4": "İletişim",
		adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
		telefon: "+90 (123) 456-7899",
		email: "satis@birsirketsitesi.com.tr",
	},
	footer: {
		copyright: "Copyright Bir Şirket Sitesi 2022",
	},
	images: {
		"logo-img": "http://localhost:9000/img/logo.png",
		"cta-img": "http://localhost:9000/img/cta.png",
		"accent-img": "http://localhost:9000/img/accent.png",
	},
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navlinks = document.querySelectorAll("header nav a");

navlinks.forEach((element, index) => {
	element.textContent = siteContent.nav["nav-item-" + (index + 1)];
	element.classList.add("italic");
});

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector(".cta button").textContent = siteContent.cta.button;

const parLinks = document.getElementsByTagName("p");

parLinks[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];

parLinks[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

parLinks[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];

parLinks[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

parLinks[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

parLinks[5].textContent = siteContent.iletisim.adres;

parLinks[6].textContent = siteContent.iletisim.telefon;

parLinks[7].textContent = siteContent.iletisim.email;

const h4Links = document.getElementsByTagName("h4");

h4Links[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Links[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
h4Links[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
h4Links[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4Links[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
h4Links[5].textContent = siteContent.iletisim["iletişim-h4"];

const imgLink = document.querySelectorAll("img");

imgLink[0].src = siteContent.images["logo-img"];
imgLink[1].src = siteContent.images["cta-img"];
imgLink[2].src = siteContent.images["accent-img"];

const footLink = document.querySelectorAll("footer a");
footLink[0].textContent = siteContent.footer.copyright;
footLink[0].className = "bold";
