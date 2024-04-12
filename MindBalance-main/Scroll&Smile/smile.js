window.addEventListener("load", () => {
    const SMILE = document.querySelector(".smile");
    const EYEWHITE = document.querySelectorAll(".eyewhite");
    const BIGSMILE = document.querySelectorAll(".bigsmile");
    const NOSMILE = document.querySelector(".nosmile");
    const BACK_LINK = document.querySelector(".back-link");
  
    const scrollAndSmile = () => {
      currentScroll =
        window.scrollY /
        (document.documentElement.offsetHeight - window.innerHeight);
      SMILE.style.opacity = currentScroll;
  
      EYEWHITE.forEach((eye) => {
        eye.style.opacity = currentScroll;
      });
  
      if (currentScroll > 0.01) {
        NOSMILE.style.opacity = "0";
        NOSMILE.style.width = "0";
      } else {
        NOSMILE.style.opacity = "1";
        NOSMILE.style.width = "8vmin";
      }
  
      BIGSMILE.forEach((e) => {
        if (currentScroll < 0.97) {
          e.style.opacity = "0";
          e.style.width = "0";
        } else {
          e.style.opacity = "1";
          e.style.width = "4vmin";
        }
      });
  
      if (currentScroll > 0.1) {
        BACK_LINK.style.opacity = 1;
        BACK_LINK.style.cursor = "pointer";
        BACK_LINK.style.right = "15%";
      } else {
        BACK_LINK.style.opacity = 0;
        BACK_LINK.style.cursor = "unset";
        BACK_LINK.style.right = "-200vw";
      }
    };
  
    window.addEventListener("scroll", scrollAndSmile);
  });