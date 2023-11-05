
function toggleDisplaySearchShop() {
  // kasi Toggle class active display-menu
  let navbarNav = document.querySelector('.navbar-nav');

  // ketika display-menu di klik
  document.querySelector('#display-menu').onclick = () => {
    navbarNav.classList.toggle('active');
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
/*
function toggleDisplaySearchShop() {
  const navbarNav = document.querySelector('.navbar-nav');
  const searchForm = document.querySelector('.search-form');
  const searchBox = document.querySelector('#search-box');
  const shoppingCart = document.querySelector('.shopping-cart');
  const display = document.querySelector('#display-menu');
  const searchButton = document.querySelector('#search-button');
  const shoppingCartButton = document.querySelector('#shopping-cart-button');

  function handleDisplayMenuClick() {
    navbarNav.classList.toggle('active');
  }

  function handleSearchButtonClick(event) {
    searchForm.classList.toggle('active');
    searchBox.focus();
    event.preventDefault();
  }

  function handleShoppingCartButtonClick(event) {
    shoppingCart.classList.toggle('active');
    event.preventDefault();
  }

  function handleDocumentClick(clickOnSite) {
    if (!display.contains(clickOnSite.target) && !navbarNav.contains(clickOnSite.target)) {
      navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(clickOnSite.target) && !searchForm.contains(clickOnSite.target)) {
      searchForm.classList.remove('active');
    }

    if (!shoppingCartButton.contains(clickOnSite.target) && !shoppingCart.contains(clickOnSite.target)) {
      shoppingCart.classList.remove('active');
    }
  }

  document.querySelector('#display-menu').onclick = handleDisplayMenuClick;
  document.querySelector('#search-button').onclick = handleSearchButtonClick;
  document.querySelector('#shopping-cart-button').onclick = handleShoppingCartButtonClick;
  document.addEventListener('click', handleDocumentClick);

  // Add media query to handle tablet layout changes
  const tabletMediaQuery = window.matchMedia('(max-width: 768px)');

  function handleTabletMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      // Tablet layout, enable your functionality
      document.querySelector('#display-menu').style.display = 'block';
    } else {
      // Non-tablet layout, disable your functionality
      document.querySelector('#display-menu').style.display = 'none';
    }
  }

  handleTabletMediaQueryChange(tabletMediaQuery); // Initial check
  tabletMediaQuery.addListener(handleTabletMediaQueryChange); // Listen for changes
}
*/

export default toggleDisplaySearchShop;