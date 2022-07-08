const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = () => {
  console.log("hey");
  //unlisten
  observer.unobserve(nodo)
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
