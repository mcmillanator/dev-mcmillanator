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
      header        = document.getElementById("header");
      skills        = document.getElementById("skills");
      skillsPH      = document.getElementById("skills-placeholder");
      skillsList    = document.getElementById("skills-list");
      about         = document.getElementsByClassName("about");
      aboutInfo     = document.getElementsByClassName("about-info")[0];
      // window.addEventListener("scroll", changeClass);
      window.addEventListener("scroll", staticClass);
    }

    function staticClass(){
      dynamicallyStatic(header, skills, skillsList, skillsPH);
    }

    function dynamicallyStatic(el1, el2, el3, placeholder) {
      el1         = el1.getBoundingClientRect();
      el2Rec      = el2.getBoundingClientRect();
      el3         = el3.getBoundingClientRect();
      console.log("checking");
      if ( el3.top >= el1.bottom + el2Rec.height) {
        console.log("false");
        el2.style.position = "initial";
        placeholder.style.height = 0;
      } else if (el2Rec.top <= el1.bottom + el2Rec.height) {
        console.log("true");
        el2.style.position = "fixed";
        el2.style.top = "40px";
        placeholder.style.height = el2Rec.height + "px";
      }
    }
    function changeClass() {
      // console.log("checking");
      headerRec      = header.getBoundingClientRect();
      aboutRec       = about[0].getBoundingClientRect();
      aboutInfoRec   = aboutInfo.getBoundingClientRect();
      // skillsRec      = skills.getBoundingClientRect();
      // skillsPHRec    = skills.getBoundingClientRect();
      // skillsListRec  = skillsList.getBoundingClientRect();
      scroll         = document.body.scrollTop;

      if (headerRec.bottom >= aboutRec.bottom) {
        header.className = "header header-background";
      } else if (headerRec.bottom < aboutRec.bottom) {
        header.className = "header";
      }

      if (aboutInfoRec.top > headerRec.bottom) {
        aboutInfo.className = "about-info ";
      } else {
        aboutInfo.className = "about-info blur";
      }

      // if (skillsListRec.top >= headerRec.bottom + skillsRec.height) {
      //   skills.className    = "skills-heading";
      //   skillsPH.style.height = 0;
      //   // console.log("no skills");
      // } else if (skillsRec.top <= headerRec.bottom + skillsRec.height || (skillsRec.top >= headerRec.bottom)) {
      //   skills.className    = "skills-heading skills-heading-fixed";
      //   skillsPH.style.height = skillsRec.height + "px";
      //   // console.log("skills");
      // }
    }
  }
());
