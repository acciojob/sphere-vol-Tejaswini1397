function volume_sphere() {
    //Write your code here
	 const radius = parseFloat(document.getElementById('radius').value);

      // Calculate the volume of the sphere
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

      // Display the result
      alert(`The volume of the sphere is: ${volume.toFixed(2)}`);
      
      // Prevent the form from submitting and refreshing the page
      return false
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
