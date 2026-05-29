window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const bg = document.querySelector('.background');
  if(bg){
    bg.style.transform = `translateY(${scroll * 0.1}px)`;
  }
});