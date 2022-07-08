const isIntersecting = (entry) => {
  return entry.inIntersecting;
};

const accion = () => {
  console.log("hey");
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
