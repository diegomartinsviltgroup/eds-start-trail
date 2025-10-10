export default function decorate(block) {
  const items = Array.from(block.children);
  items.forEach((item) => {
    item.classList.add("feature__item--wrapper");
    const [text, imageDiv] = item.children;
    imageDiv.classList.add("feature__item--image-wrapper");
    text.remove();
  });
}
