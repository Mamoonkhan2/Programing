import imglyRemoveBackground from "./node_modules/@imgly/background-removal";

// Point to your local file in the root directory
let image_src = "./images.png"; 

imglyRemoveBackground(image_src).then((blob) => {
  // Create a URL for the resulting transparent PNG
  const url = URL.createObjectURL(blob);
  
  // Set the src of your HTML image element
  document.getElementById("preview").src = url;
}).catch((error) => {
  console.error("Background removal failed:", error);
});