"use strict";

//프로젝트 필터링 관련 로직 처리
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", e => {
  const filter = e.target.dataset.category;
  if (filter == null) {
    return;
  }

  // Active 메뉴를 재설정
  handleActiveSelection(e.target);

  // 프로젝트 필터링
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach(project => {
    if (filter === "All" || filter === project.dataset.project) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  // 프로젝트 애니메이션 효과
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}

// 프로젝트 수
const countAll = projects.length;

function countProjectsByCategory(category) {
  return [...projects].filter(p => p.dataset.project === category).length;
}

// 각 카테고리 버튼의 숫자를 업데이트하는 함수
function updateCategoryCount(category) {
  const count =
    category === "All" ? countAll : countProjectsByCategory(category);

  const button = document.querySelector(
    `.category[data-category='${category}']`
  );
  const spanElement = button.querySelector(".category__count");

  if (spanElement) {
    spanElement.textContent = count;
  }
}

// 'All', 'Front-end', 'Back-end' 카테고리의 숫자를 업데이트함.
updateCategoryCount("All");
updateCategoryCount("Front-end");
updateCategoryCount("Back-end");
