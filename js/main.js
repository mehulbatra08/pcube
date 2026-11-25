const menu = document.getElementById("menubtn");
const links = document.getElementById("navlinks");
const enquiryForm = document.getElementById("enquiryForm");

if (menu && links) {
  menu.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
}

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const subject = encodeURIComponent(
      "P Cube Fitness Website Enquiry - " +
        (formData.get("interest") || "General")
    );
    const lines = [
      "Name: " + formData.get("name"),
      "Phone: " + formData.get("phone"),
      "Email: " + (formData.get("email") || "Not provided"),
    ];
    const interest = formData.get("interest");
    if (interest) {
      lines.push("Interest: " + interest);
    }
    const location = formData.get("location");
    if (location) {
      lines.push("Preferred location: " + location);
    }
    const city = formData.get("city");
    if (city) {
      lines.push("City: " + city);
    }
    const investment = formData.get("investment");
    if (investment) {
      lines.push("Planned investment: " + investment);
    }
    lines.push("Message: " + (formData.get("message") || "None"));

    const body = encodeURIComponent(lines.join("\n"));
    const isFranchisePage = /franchise\.html$/i.test(window.location.pathname);
    const recipient = isFranchisePage
      ? "franchise@pcubefitness.com"
      : "info@pcubefitness.com";

    window.location.href =
      "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
  });
}

const reels = document.querySelectorAll(".reel");

reels.forEach((reel) => {
  const video = reel.querySelector("video");
  const play = reel.querySelector(".reel-play");

  if (!video || !play) return;

  play.addEventListener("click", () => {
    reels.forEach((other) => {
      if (other === reel) return;
      const otherVideo = other.querySelector("video");
      other.classList.remove("is-playing");
      if (otherVideo) {
        otherVideo.pause();
        otherVideo.controls = false;
      }
    });

    reel.classList.add("is-playing");
    video.controls = true;
    const start = video.play();
    if (start) start.catch(() => {});
  });

  video.addEventListener("ended", () => {
    reel.classList.remove("is-playing");
    video.controls = false;
    video.currentTime = 0;
  });
});

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-slider]").forEach((slider, index) => {
  const slides = [...slider.querySelectorAll(".club-slide")];
  const count = slider.querySelector(".club-count");
  const nextBtn = slider.querySelector(".club-next");
  const prevBtn = slider.querySelector(".club-prev");
  let current = 0;
  let timer;

  if (!slides.length || !nextBtn || !prevBtn) return;

  const show = (n) => {
    current = (n + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-on", i === current));
    if (count) count.textContent = current + 1 + " / " + slides.length;
  };

  const next = () => show(current + 1);
  const prev = () => show(current - 1);
  const stop = () => clearInterval(timer);
  const start = () => {
    if (!motionOk || slides.length < 2) return;
    stop();
    timer = setInterval(next, 4200);
  };

  nextBtn.addEventListener("click", () => {
    next();
    start();
  });
  prevBtn.addEventListener("click", () => {
    prev();
    start();
  });

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", start);

  let touchX = 0;
  slider.addEventListener("touchstart", (event) => {
    touchX = event.changedTouches[0].clientX;
  }, { passive: true });
  slider.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - touchX;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
    start();
  }, { passive: true });

  show(0);
  setTimeout(start, index * 350);
});
