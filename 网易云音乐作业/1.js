const images = document.querySelectorAll('#slider img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let current = 0;

function slider(index) {
  // 将所有图片的 display 设置为 'none'
  images.forEach(image => {
    image.style.display = 'none';
  });
  // 将当前图片的 display 设置为 'block'
  images[index].style.display = 'block';
}
prev.addEventListener('click', () => {
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    slider(current);
  });
  
  next.addEventListener('click', () => {
    current++;
    if (current >= images.length) {
      current = 0;
    }
    slider(current);
  });
  setInterval(() => {
    next.click();
  }, 3);
    