;(
  function () {
    var header,
        headerRec,
        about,
        aboutRec;
    // prevent js from loading too early
    document.addEventListener("load", mainFunction());
    // assign vars with correct element dimentions and create scroll event
    function mainFunction() {
      header        = document.getElementById("header");
      headerRec = header.getBoundingClientRect();
      about         = document.getElementsByClassName("about");
      window.addEventListener("scroll", changeClass);
    }
    function changeClass() {
      aboutRec  = about[0].getBoundingClientRect();
      scroll = document.body.scrollTop;
      if (0 + headerRec.bottom >= aboutRec.bottom) {
        header.className = "header header-background";
      } else if (headerRec.bottom < aboutRec.bottom) {
        header.className = "header";
      }
    }
  }
());
