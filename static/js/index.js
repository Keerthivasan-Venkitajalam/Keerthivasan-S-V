const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");

const isMobile = () => window.innerWidth <= 750;

const isMobileMenu = () => {
    menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
    menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger &&
    menuTrigger.addEventListener(
        "click",
        () => menu && menu.classList.toggle("hidden")
    );

window.addEventListener("resize", isMobileMenu);


document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
  <footer class="footer">
      <div class="footer__inner">
        <div class="footer__content"></div>
      </div>
  </footer>
  `
);

let footer = document.querySelector(".footer__content");
footer.innerHTML = `<span
>© ${new Date().getFullYear()} • <a href="index.html">Keerthivasan (Keerthivasan S V) Venkitajalam</a> •
<a
  href="index.html"
  target="_blank"
  title="rss"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentcolor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-rss"
  >
    <path d="M4 11a9 9 0 019 9"></path>
    <path d="M4 4a16 16 0 0116 16"></path>
    <circle cx="5" cy="19" r="1"></circle></svg></a
></span>`;