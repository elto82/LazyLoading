/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//crear imagen

//agregar imagen a #imagen

{
  /* <div class="p-4">
<img 
class="mx-auto"
width="320"            
src="https://randomfox.ca/images/1.jpg" 
alt="image of fox random"></div>
</div>   */
}

const createImageNode = () => {
  const container = document.createElement("div")
  container.className = "p-4"

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = "https://randomfox.ca/images/2.jpg"; //todo

  container.appendChild(imagen)

  return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images")
mountNode.appendChild(nuevaImagen);
