export default function decorate(block) {
  const items = Array.from(block.children);
  const [imageDiv, title, text, cta] = items;

  imageDiv.classList.add('about-image-wrapper');
  title.classList.add('about-title-wrapper');
  text.classList.add('about-text-wrapper');
  cta.classList.add('about-cta-wrapper');
}
