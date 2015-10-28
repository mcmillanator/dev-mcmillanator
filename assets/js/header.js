;(
  function () {
    var header,
        headerRec,
        about,
        aboutRec,
        aboutInfo,
        aboutInfoRec,
        skills,
        skillsRec,
        skillsPH,
        skillsPHRec;
    // prevent js from loading too early
    document.addEventListener("load", mainFunction());
    // assign vars with correct element dimentions and create scroll event
    function mainFunction() {
      header          = document.getElementById("header");
      skills          = document.getElementById("skills");
      skillsPH        = document.getElementById("skills-placeholder");
      skillsList      = document.getElementById("skills-list");
      about           = document.getElementById("about");
      aboutInfo       = document.getElementById("about-info");
      projects        = document.getElementById("projects");
      projectsSection = document.getElementById("projects-section");
      projectsPH      = document.getElementById("projects-placeholder");
      window.addEventListener("scroll", changeClass);
      window.addEventListener("scroll", getElements);
    }

    function getElements(){
      dynamicClasses(header, skills, skillsList, skillsPH, "skills-heading", "skills-heading-fixed");
      dynamicClasses(header, projects, projectsSection, skillsPH, "skills-heading", "skills-heading-fixed");
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
    function changeClass() {
      headerRec      = header.getBoundingClientRect();
      aboutRec       = about.getBoundingClientRect();
      aboutInfoRec   = aboutInfo.getBoundingClientRect();

      if (headerRec.bottom >= aboutRec.bottom) {
        header.className = "header header-background";
      } else {
        header.className = "header";
      }

      if (aboutInfoRec.top >= headerRec.bottom) {
        aboutInfo.className = "about-info ";
      } else {
        aboutInfo.className = "about-info blur";
      }
    }
  }
());
