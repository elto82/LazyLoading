/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//crear imagen

//agregar imagen a #imagen

const minimun =1;
const maximun = 122;
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;

const createImageNode = () => {
  const container = document.createElement("div")
  container.className = "p-4"

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`; //todo

  container.appendChild(imagen)

  return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images")

mountNode.append(
  nuevaImagen,
  nuevaImagen,
  nuevaImagen,
  nuevaImagen,
  
  );
