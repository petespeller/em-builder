$(document).ready(function(){

/* Plugin that alerts and adds red border to text input if the 
input is left empty */
$.fn.warning = function() {
  $(this).blur(function() {
    if (!this.value) {
      $(this).addClass('warning').next('.warning-msg').slideDown();
      //alert('This field must not be blank.');
    } else {
      $(this).removeClass('warning');
    }
  });
};

// Calling the warning plugin on text inputs
$('#emInput').warning();
$('#burl').warning();
$('#shortLink').warning();
$('#btnText').warning();

// On button click, first check boxes have content then do something else.
$('#create').click(function() {
//Stores the value of input text areas in variables
  var emInput = document.getElementById('emInput').value;
  var burl = document.getElementById('burl').value;
  var shortLink = document.getElementById('shortLink').value;
  //var btnText = document.getElementById('btnText').value;
  
  // Checks each variable length is not 0
  if (emInput.length === 0) {
  alert("All text boxes must be filled.");
  }else if (burl.length === 0) {
  alert("All text boxes must be filled.");
  } else if (shortLink.length === 0) {
  alert("All text boxes must be filled.");
  } else {
  // rest of the function goes in here
  };
  
});
});

