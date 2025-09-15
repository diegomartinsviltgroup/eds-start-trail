function addEventListeners(block) {
  block.querySelector('.button').addEventListener('mouseover', () => {
    block.querySelector('.image').classList.add('zoom');
  });

  block.querySelector('.button').addEventListener('mouseout', () => {
    block.querySelector('.image').classList.remove('zoom');
  });
}

export default function decorate(block) {
  block.querySelector('picture').classList.add('image-wrapper');

  block.querySelector('.image-wrapper img').classList.add('image');

  block.querySelector(':scope > div:last-child').classList.add('content');

  block.querySelector('h1, h2, h3, h4, h5, h6').classList.add('title');

  block.querySelectorAll('p').forEach((p) => {
    p.classList.add('terms-and-conditions');
  });

  addEventListeners(block);
}
