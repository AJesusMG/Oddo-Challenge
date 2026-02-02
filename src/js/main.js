const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced) {

  const track = document.querySelector(".awards-track");

  const original = Array.from(track.children);
  original.forEach(el => track.appendChild(el.cloneNode(true)));

  const cards = gsap.utils.toArray(".awards-card");
  const awardCards = gsap.utils.toArray(".award-card");

  const getHalfWidth = () => track.scrollWidth / 2;

  let half = getHalfWidth();
  const wrapX = gsap.utils.wrap(-half, 0);

  const marqueeTl = gsap.to(track, {
    x: -half,
    duration: 15,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: (x) => wrapX(parseFloat(x)) + "px"
    }
  });

  const ampBase = 14;
  const amps = cards.map((_, i) => {
    const k = 0.85 + (i % 5) * 0.06;
    return ampBase * k;
  });

  gsap.set(cards, { y: (i) => (i % 2 === 0 ? -amps[i] : amps[i]) });

  const pauseAll = () => { marqueeTl.pause(); };
  const playAll = () => { marqueeTl.play(); };

  awardCards.forEach(el => {
    el.addEventListener("pointerenter", pauseAll);
    el.addEventListener("pointerleave", playAll);
    el.addEventListener("focusin", pauseAll);
    el.addEventListener("focusout", playAll);
  });

  window.addEventListener("resize", () => {
    half = getHalfWidth();
    marqueeTl.vars.x = -half;
    marqueeTl.invalidate().restart();
  });
}
