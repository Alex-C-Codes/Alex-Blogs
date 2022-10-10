/*
$("#checkbox-container :checkbox").on("change", function(){
    alert("The checkbox with the ID '" + this.id + "' changed");
});

localStorage.setItem("favoriteVillan", "Dr. Hannibal Lecter");

console.log(localStorage.getItem("favoriteVillan"));

localStorage.removeItem("favoriteVillan");

console.log(localStorage.getItem("favoriteVillan"));

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues'));
if (checkboxValues === null){
  checkboxValues = {};
}

$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
});
*/