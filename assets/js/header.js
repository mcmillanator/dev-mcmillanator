;(
  function () {
    var header,
        about,
        about_bottom;
    // prevent js from loading too early
    document.addEventListener("load", mainFunction());
    // assign vars with correct element dimentions and create scroll event
    function mainFunction() {
      header        = document.getElementById("header");
      header_height = header.getBoundingClientRect().height;
      about         = document.getElementsByClassName("about");
      about_bottom  = about[0].getBoundingClientRect().bottom;
      window.addEventListener("scroll", changeClass);
    }
      function changeClass() {
          scroll = document.body.scrollTop;
          if (scroll >= about_bottom - header_height) {
            header.className = "header header-background";
          } else if (scroll < about_bottom - header_height) {
            header.className = "header";
          } else {

          }
      }
}
());
