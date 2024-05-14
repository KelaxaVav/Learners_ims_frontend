
const loadStyleSheet = (url) => {
  const link = document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";

  document.head.appendChild(link);
};

export default loadStyleSheet;
