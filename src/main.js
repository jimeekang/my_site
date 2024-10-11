// Header에 페이지 아래로 스크로시 다크 스타일링 적용
const header = document.querySelector(".header");
let headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (currentScroll > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// home 섹션을 아래로 스크롤시 투명하게 만들기
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  home.style.opacity = 1 - currentScroll / homeHeight;
});
