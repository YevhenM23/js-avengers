const bars = document.querySelectorAll(
  '.skills-text-top, .skills-point-top, .skills-text-bottom, .skills-point-bottom'
);

bars.forEach(bar => {
  let scrollAmount = 0;

  function scrollSkills() {
    scrollAmount -= 1;
    bar.style.transform = `translateX(${scrollAmount}px)`;
    if (Math.abs(scrollAmount) >= bar.scrollWidth / 2) {
      scrollAmount = 0;
    }
    requestAnimationFrame(scrollSkills);
  }
  scrollSkills();
});
