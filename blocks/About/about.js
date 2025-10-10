export default function decorate(block) {
  const items = Array.from(block.children);
  const [imageDiv, title, text, cta] = items;

  imageDiv.classList.add("about__image--wrapper");
  title.classList.add("about__title--wrapper");
  text.classList.add("about__text--wrapper");
  cta.classList.add("about__cta--wrapper");
}
