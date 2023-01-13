var likeButton = document.getElementById("like-button");
var likeCount = document.getElementById("like-count");
var count = 1100;

likeButton.addEventListener("click", function() {
  count++;
  likeCount.innerHTML = count;
});