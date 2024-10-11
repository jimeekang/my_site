// Header에 페이지 아래로 스크로시 다크 스타일링 적용
const header = document.querySelector(".header");
let headerHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  let currentScroll = window.scrollY.toFixed(0);
  if (currentScroll > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }

  /*
  if (currentScroll > headerHeight) {
    header.style.backgroundColor = "#1b1e26";
    header.style.transition = "all 250ms";
  } else {
    header.style.backgroundColor = "#050a13";
  }
  */
});
