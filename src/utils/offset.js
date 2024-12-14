export const Offset = (el, value) => {
  const y = el.getBoundingClientRect().top + window.scrollY + value;
  window.scrollTo({ top: y, behavior: "smooth" });
};
