document.addEventListener("load", mainFunction());
// assign vars with correct element dimentions and create scroll event
function mainFunction() {
  header          = document.getElementById("header");
  skills          = document.getElementById("skills");
  skillsPH        = document.getElementById("skills-placeholder");
  skillsList      = document.getElementById("skills-list");
  projects        = document.getElementById("projects");
  projectsSection = document.getElementById("projects-section");
  projectsPH      = document.getElementById("projects-placeholder");
  window.addEventListener("scroll", changeClass);
}


window.addEventListener("scroll", getElements);

function getElements(){
  dynamicClasses(header, skills, skillsList, skillsPH, "skills-heading", "skills-heading-fixed");
  dynamicClasses(header, projects, projectsSection, projectsPH, "skills-heading", "skills-heading-fixed");
}

function dynamicClasses(el1, el2, el3, placeholder, class1, class2) {
  el1         = el1.getBoundingClientRect();
  el2Rec      = el2.getBoundingClientRect();
  el3         = el3.getBoundingClientRect();
  if ( el3.top >= el1.bottom + el2Rec.height) {
    el2.className = class1;
    placeholder.style.height = 0;
  } else if (el2Rec.top <= el1.bottom + el2Rec.height) {
    el2.className = class1 + " " + class2;
    placeholder.style.height = el2Rec.height + "px";
  }
}
