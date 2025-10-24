export default function decorate(block) {
  const items = Array.from(block.children);
  items.forEach((item) => {
    item.classList.add("events__items--wrapper");
    const [image, title, text, cta] = item.children;
    image?.classList.add("events__item--image");
    title?.classList.add("events__item--title");
    text?.classList.add("events__item--text");
    cta?.classList.add("events__item--cta");
  });
}
