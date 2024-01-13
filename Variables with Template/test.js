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

 document.body.innerHTML = content1;
