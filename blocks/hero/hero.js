export default function decorate(block) {
  const items = Array.from(block.children);
  const container = document.createElement("div");
  container.classList.add("hero-carousel");

  items.forEach((element) => {
    const [title, imageX, button] = element.children;

    element.classList.add("hero-slide");
    title.classList.add("hero-title");
    imageX.classList.add("hero-image-x");
    button.classList.add("hero-button");

    container.appendChild(element);
  });

  block.appendChild(container);
}
