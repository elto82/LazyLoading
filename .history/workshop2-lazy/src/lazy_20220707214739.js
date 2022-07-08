const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target // contenedor(div)
  const imagen = container.querySelector("img");
/*   console.log(nodo.nodeName);
 */  //unlisten
 debugger;
  observer.unobserve(nodo)
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
