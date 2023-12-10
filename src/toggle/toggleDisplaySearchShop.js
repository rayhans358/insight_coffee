function toggleDisplaySearchShop() {
  // kasi Toggle class active display-menu
  let navbarNav = document.querySelector('.navbar-nav');

  // ketika display-menu di klik
  document.querySelector('#display-menu').onclick = (event) => {
    navbarNav.classList.toggle('active');
    event.preventDefault();
  }

  // kasi Toggle class active search-button
  let searchForm = document.querySelector('.search-form');
  let searchBox = document.querySelector('#search-box');

  // ketika search-form di klik
  document.querySelector('#search-button').onclick = (event) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    event.preventDefault();
  }

  // kasi Toggle class active shopping-cart
  let shoppingCart = document.querySelector('.shopping-cart');

  // ketika search-form di klik
  document.querySelector('#shopping-cart-button').onclick = (event) => {
    shoppingCart.classList.toggle('active');
    event.preventDefault();
  }

  // apabila klik di luar sidebar maka navbar akan hilang
  const display = document.querySelector('#display-menu');
  const searchButton = document.querySelector('#search-button');
  const shoppingCartButton = document.querySelector('#shopping-cart-button');

  // ketika mouse klik di luar side bar
  document.addEventListener('click', function (clickonsite) {
    if (!display.contains(clickonsite.target) && !navbarNav.contains(clickonsite.target)) {
      navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(clickonsite.target) && !searchForm.contains(clickonsite.target)) {
      searchForm.classList.remove('active');
    }

    if (!shoppingCartButton.contains(clickonsite.target) && !shoppingCart.contains(clickonsite.target)) {
      shoppingCart.classList.remove('active');
    }
  });

  // Add tablet media query to layout changes
  const tabletMediaQuery = window.matchMedia('(max-width: 768px)');

  function handleTabletMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      document.querySelector('#display-menu').style.display = 'block';
    } else {
      document.querySelector('#display-menu').style.display = 'none';
    }
  }

  handleTabletMediaQueryChange(tabletMediaQuery);
  tabletMediaQuery.addListener(handleTabletMediaQueryChange);
}

export default toggleDisplaySearchShop;