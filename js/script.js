(function(){
var link = document.querySelector(".button-search-hotel");
var popup = document.querySelector(".form-show");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=check-in-date]");
link.addEventListener("click", function(evt) {
popup.classList.toggle("modal-show");
checkin.focus();
});
})()