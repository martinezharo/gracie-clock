const CLOCK = document.querySelector(`#clock`);
const F_S = document.querySelector('#fs');
const CONTAINERS = document.querySelectorAll('.blur')

const ARR_IMG = [
  'images/17521881198918.jpg',
  'images/2023_erastour_gracieabrams-009.jpg',
  'images/225d00dee24a74962021d0dd7c9c147c.jpg',
  'images/2b1bb9500d0b114f42f381f517c89973.jpg',
  'images/33c23cfb42f5c0680aa5691ec9f2b414.jpg',
  'images/35R75AB7QNDZTGML72J2TZMH6M.avif',
  'images/3CG85TE.jpg',
  'images/Abrams3-1560x2009.jpg',
  'images/GRACIE8-1560x1211.jpg',
  'images/Gracie-Abrams.webp',
  'images/Taylor-Swift-and-Eras-Tour-Opener-Gracie-Abrams-Complete-Friendship-Timeline-516.webp',
  'images/artworks-SjzAPvPi00y3bRS7-4zqIGA-t500x500.jfif',
  'images/b66951897d61ae45d3521436c3f83761.webp',
  'images/c773dab8bf641ea0c7520b85b5c8d006.jpg',
  'images/efabda0c2f8f20485e229e1772ff79df.jpg',
  'images/glastonbury-england-june-27.avif',
  'images/gracie-abrams-zz-240701-02-6ea284.webp',
  'images/gracie.jpg',
  'images/hero-16305-1631204043.jpg',
  'images/image-19.webp',
  'images/image.jpg',
  'images/tumblr_530488f133d6c4cd4d09ea835eb7dd62_34ce68f8_1280.jpg',
  'images/tumblr_5c82dffe511a5ac741cecadd636dd0cc_6e1905ce_1280.jpg',
  'images/tumblr_69bb5914926d50416130c5803e2ba7e7_489a5558_1280.jpg',
  'images/tumblr_ab19dcf00b0476e087c2acf2a2d25f11_525b9d73_1280.jpg',
  'images/tumblr_cb3392a16df8003792ca679315cb7dcd_3209f06e_1280.jpg',
  'images/tumblr_e322ba81c6acbe5678d3b4d154e60539_31e3f7f9_1280.jpg',
  'images/tumblr_f233ef7f992696b9b8d3aa1081bb3666_0a9fa41e_1280.jpg',
  'images/tumblr_fddceb84756a0b0413ea1fcff547ca5f_0868b929_1280.jpg'
];

// Reloj y cambio imagenes

ARR_IMG.forEach(url => {
  const img = new Image();
  img.src = url;
});

let index = 0;

function setImage() {

  document.body.style.backgroundImage = `url('${ARR_IMG[index]}')`
  index = (index + 1) % ARR_IMG.length;
}

setInterval(() => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  CLOCK.textContent = `${hours}.${minutes}.${seconds}`;
  setImage()
}, 1000);

// Pantalla completa

function hideElements() {
  CONTAINERS.forEach(element => element.style.display = 'none');
  document.documentElement.requestFullscreen();
}

F_S.addEventListener("click", () => hideElements());

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    CONTAINERS.forEach(element => element.style.display = 'block');
  }
});