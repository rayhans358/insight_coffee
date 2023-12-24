function toggleDisplaySearchShop() {
  let navbarNav = document.querySelector('.navbar-nav'); 
  let searchForm = document.querySelector('.search-form');
  let shoppingCart = document.querySelector('.shopping-cart');
  const display = document.querySelector('#display-menu'); 
  const searchButton = document.querySelector('#search-button'); 
  const shoppingCartButton = document.querySelector('#shopping-cart-button'); 

  if (display && navbarNav) {
    display.onclick = (event) => {
      navbarNav.classList.toggle('active');
      event.preventDefault();
    }
  };

  if (searchButton && searchForm) {
    const searchBox = document.querySelector('#search-box');
    searchButton.onclick = (event) => {
      searchForm.classList.toggle('active');
      if (searchBox) {
        searchBox.focus();
      }
      event.preventDefault();
    }
  };

  if (shoppingCartButton && shoppingCart) {
    shoppingCartButton.onclick = (event) => {
      shoppingCart.classList.toggle('active');
      event.preventDefault();
    }
  };

  function handleDocumentClick(clickonsite) {
    if (display && !display.contains(clickonsite.target) && navbarNav && !navbarNav.contains(clickonsite.target)) {
      navbarNav.classList.remove('active');
    };

    if (searchButton && !searchButton.contains(clickonsite.target) && searchForm && !searchForm.contains(clickonsite.target)) {
      searchForm.classList.remove('active');
    };

    if (shoppingCartButton && !shoppingCartButton.contains(clickonsite.target) && shoppingCart && !shoppingCart.contains(clickonsite.target)) {
      shoppingCart.classList.remove('active');
    };
  };

  if (display && navbarNav && searchButton && searchForm && shoppingCartButton && shoppingCart) {
    document.addEventListener('click', handleDocumentClick);
  };
  

  const tabletMediaQuery = window.matchMedia('(max-width: 768px)');

  function handleTabletMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
      document.querySelector('#display-menu').style.display = 'block';
    } else {
      document.querySelector('#display-menu').style.display = 'none';
    }
  };

  handleTabletMediaQueryChange(tabletMediaQuery);
  tabletMediaQuery.addListener(handleTabletMediaQueryChange);
};

export default toggleDisplaySearchShop;