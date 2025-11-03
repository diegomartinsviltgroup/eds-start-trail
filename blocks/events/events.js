export default function decorate(block) {
  const items = Array.from(block.children);
  items.forEach((item) => {
    const [image, title, text, cta] = item.children;
    item.classList.add("events-items-wrapper");
    image?.classList.add("events-item-image");
    title?.classList.add("events-item-title");
    text?.classList.add("events-item-text");
    const innerCta = cta.querySelector("p");
    const isEvent = innerCta.classList.contains("button-container");
    if (isEvent) {
      cta?.classList.add("events-item-cta");
    } else {
      cta.remove();
      text?.classList.remove("events-item-text");
      text?.classList.add("events-item-cta-exclusive");
      image?.classList.remove("events-item-image");
      image?.classList.add("events-item-title");
      title?.classList.remove("events-item-title");
      title?.classList.add("events-item-text");
      item.classList.add("cta");
    }
  });
}
