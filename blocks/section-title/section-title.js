export default function decorate(block) {
  const [titleDiv] = block.children;
  titleDiv.classList.add('section-title-wrapper');
  const [title] = titleDiv.children;
  title.classList.add('section-title-text');
}
