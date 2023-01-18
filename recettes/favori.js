var btn = document.querySelector('input');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value ==="nfav") {
    btn.src = "Star doré.png";
   btn.value ="fav"
  } else {
    btn.src = "star add.png";
    btn.value ="nfav"
  }
}