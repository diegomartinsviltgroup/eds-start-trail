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
    const innerHTML = p.innerHTML?.trim();

    // If the paragraph starts with Terms and conditions: then style it as such
    if (innerHTML?.startsWith('Terms and conditions:')) {
      /* If a paragraph starts with '*', add a special CSS class. */
      p.classList.add('terms-and-conditions');
    }
  });

  addEventListeners(block);
}
