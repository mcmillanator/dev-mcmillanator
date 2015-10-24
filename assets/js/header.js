;(
  function () {
    var header,
        headerRec,
        about,
        about_bottom;
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
      about_bottom  = about[0].getBoundingClientRect().bottom;
      scroll = document.body.scrollTop;
      if (0 + headerRec.bottom >= about_bottom) {
        header.className = "header header-background";
      } else if (headerRec.bottom < about_bottom) {
        header.className = "header";
      }
    }
  }
());
