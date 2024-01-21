import camera from "./camera.js";

const hasselblad = new camera(
  "Hasselblad",
  "500 C/M",
  1963,
  "medium format",
  "Carl Zeiss 80mm f/2.8 Planar T",
  120
);

// console.log('My Camera',hasselblad);

const content1 = `<p>My camera is a ${hasselblad.brand} ${hasselblad.model} made in ${hasselblad.year}
 making it 60 years old.<br>
It's a ${hasselblad.format} camera with a
 ${hasselblad.lens} lens using ${hasselblad.filmType} film.</p>`;



/**
 * Add a navigation section to the DOM
 */
const navContent = `
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Backpacks</a></li>
<li><a href="#">Other things</a></li>
<li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navlist = document.createElement("ul");
navlist.innerHTML = navContent;
mainNav.append(navlist);

document.querySelector(".siteheader").append(mainNav);
