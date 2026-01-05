gsap.registerPlugin(ScrollTrigger);

// Page fade
gsap.from("body", { opacity: 0, duration: 1.5 });

// Typewriter
const text = "Not All Heroes Wear Capes.";
let i = 0;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Section reveal
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Gallery animation
gsap.utils.toArray(".photo-card").forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1.2,
    delay: i * 0.08,
    ease: "power3.out"
  });
});

// Music
const music = document.getElementById("bgMusic");
const btn = document.getElementById("playMusic");

btn.addEventListener("click", () => {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  btn.style.display = "none";
});



