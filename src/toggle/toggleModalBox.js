// Modal Box
function toggleModalBox() {
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");

  itemDetailButtons.forEach((btn) => {
    btn.onclick = (event) => {
      itemDetailModal.style.display = "flex";
      event.preventDefault();
    }
  });

  const closeIcon = document.querySelector(".modal .close-icon");
  if (closeIcon) {
    closeIcon.onclick = (event) => {
      itemDetailModal.classList.add("closing"); 

      itemDetailModal.addEventListener("animationend", function() {
        itemDetailModal.style.display = "none";
        itemDetailModal.classList.remove("closing");
      }, { once: true });

      event.preventDefault();
    }
  }

  window.onclick = (event) => {
    if (event.target === itemDetailModal) {
      itemDetailModal.classList.add("closing"); 

      itemDetailModal.addEventListener("animationend", function() {
        itemDetailModal.style.display = "none";
        itemDetailModal.classList.remove("closing");
      }, { once: true });
    }
  }
};

export default toggleModalBox;