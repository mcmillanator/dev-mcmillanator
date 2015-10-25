;(
  function () {
    var header,
        headerRec,
        about,
        aboutRec,
        aboutInfo,
        aboutInfoRec;
    // prevent js from loading too early
    document.addEventListener("load", mainFunction());
    // assign vars with correct element dimentions and create scroll event
    function mainFunction() {
      header        = document.getElementById("header");
      headerRec     = header.getBoundingClientRect();
      about         = document.getElementsByClassName("about");
      aboutInfo     = document.getElementsByClassName("about-info")[0];
      window.addEventListener("scroll", changeClass);
    }
    function changeClass() {
      aboutRec        = about[0].getBoundingClientRect();
      aboutInfoRec   = aboutInfo.getBoundingClientRect();
      scroll = document.body.scrollTop;
      if (headerRec.bottom >= aboutRec.bottom) {
        header.className = "header header-background";
      } else if (headerRec.bottom < aboutRec.bottom) {
        header.className = "header";
      }
      if (aboutInfoRec.top+20 >= headerRec.bottom) {
        aboutInfo.className = "about-info ";
      } else {
        aboutInfo.className = "about-info blur";
      }
    }
  }
());
