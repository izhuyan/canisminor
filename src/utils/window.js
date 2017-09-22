const Height = (min = 0) => {
  return { minHeight: `${parseInt(window.innerHeight, 10) - min}px` };
};

export { Height };
