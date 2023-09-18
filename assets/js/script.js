const animNum = (EL) => {
  if (EL._isAnimated) return;
  EL._isAnimated = true;

  $(EL)
    .prop("Counter", 0)
    .animate(
      {
        Counter: EL.dataset.num,
      },
      {
        duration: 3000,
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
};

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) animNum(entry.target);
  });
};

$("[data-num]").each((i, EL) => {
  const observer = new IntersectionObserver(inViewport);
  observer.observe(EL);
});
