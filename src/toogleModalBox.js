// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (event) => {
    itemDetailModal.style.display = "flex";
    event.preventDefault();
  }
});


// close icon modal button
document.querySelector(".modal .close-icon").onclick = (event) => {
  itemDetailModal.classList.add("closing"); // menambahkan class .closing untuk memulai animasi penutupan

  itemDetailModal.addEventListener("animationend", function() {
    itemDetailModal.style.display = "none";
    itemDetailModal.classList.remove("closing"); // menghapus class .closing untuk memulai animasi penutupan
  }, { once: true }); // { once: true } adalah sebuah code untuk memastikan kita bahwa event listener hanya dipanggil sekali
  event.preventDefault();
}

// if click outside close icon
window.onclick = (event) => {
  if (event.target === itemDetailModal) {
    itemDetailModal.classList.add("closing"); 

    itemDetailModal.addEventListener("animationend", function() {
      itemDetailModal.style.display = "none";
      itemDetailModal.classList.remove("closing");
    }, { once: true });
  }
};