import imglyRemoveBackground from "@imgly/background-removal";

// 'image_src' can be an ImageData, ArrayBuffer, Blob, URL, or string
let image_src = "./images.png";

imglyRemoveBackground(image_src).then((blob) => {
  // The result is a blob encoded as PNG with a transparent background
  const url = URL.createObjectURL(blob);
  // Use the URL for an HTML Image element
  document.getElementById("preview").src = url;
});
