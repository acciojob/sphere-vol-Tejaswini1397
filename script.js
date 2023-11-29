function volume_sphere() {
    //Write your code here
	
   var radius = parseFloat(document.getElementById('radius').value);

  // Check if the entered value is a valid number
  if (isNaN(radius)) {
    alert("Please enter a valid number for the radius.");
    return false;
  }

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume input field
  document.getElementById('volume').value = volume.toFixed(2);

  // Prevent the form from submitting and refreshing the page
  return false;
} 


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
