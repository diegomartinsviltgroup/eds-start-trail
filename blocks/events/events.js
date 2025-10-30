export default function decorate(block) {
  const items = Array.from(block.children);

  items.forEach((item) => {
    item.classList.add('events-items-wrapper');
    const [image, title, text, cta] = item.children;
    image?.classList.add('events-item-image');
    title?.classList.add('events-item-title');
    text?.classList.add('events-item-text');
    cta?.classList.add('events-item-cta');
  });
}
