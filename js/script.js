function PageTransitions() {
  function changeBg() {
    var header = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
      header.classList.remove('bgColor');
    } else {
      header.classList.add('bgColor');
    }
  }

  window.addEventListener('scroll', changeBg);
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById('header').style.top = '0';
    } else {
      document.getElementById('header').style.top = '-20%';
    }
    prevScrollPos = currentScrollPos;
  };

  const themeBtn = document.querySelector('#main-theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
  const headerthemeBtn = document.querySelector('#header-theme-btn');
  headerthemeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

  PageTransitions();

  const navbar = document.querySelector('.navbar');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');

  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);

  function show() {
    document.getElementById("navbar").style.height = "120vh";
    document.getElementById("navbar").style.width = "100%";
    navbar.style.display = 'flex';
    navbar.style.position = 'absolute';
    navbar.style.flexDirection = 'column-reverse';

    // Disable scrolling
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById("navbar").style.height = "0%";
    document.getElementById("navbar").style.width = "0%";
    navbar.style.display = 'none';

    // Enable scrolling
    document.body.style.overflow = 'auto';
  }
