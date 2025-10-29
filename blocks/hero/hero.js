export default function decorate(block) {
  const items = Array.from(block.children);
  const container = document.createElement('div');
  container.classList.add('hero-carousel');
  items.forEach((element) => {
    const [title, imageX, text, button] = element.children;
    text.classList.add('hero-text');
    element.classList.add('hero-slide');
    title.classList.add('hero-title');
    imageX.classList.add('hero-image-x');
    button.classList.add('hero-button');
    const p = document.querySelector('.hero-title');
    const h1 = document.createElement('h1');
    title.appendChild(h1);
    h1.textContent = p.textContent;
    p.querySelector('p').remove();
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('hero-content-container');
    contentContainer.appendChild(title);
    contentContainer.appendChild(text);
    contentContainer.appendChild(button);
    element.appendChild(contentContainer);
    container.appendChild(element);
  });

  block.appendChild(container);
}
