// Renders the sidebar nav + figure gallery from FIGURES (figures.js).

(function () {
  const navList = document.getElementById("nav-list");
  const gallery = document.getElementById("gallery");

  // Page description (from figures.js)
  if (typeof PAGE_DESCRIPTION === "string" && PAGE_DESCRIPTION) {
    const intro = document.createElement("p");
    intro.className = "page-description";
    intro.textContent = PAGE_DESCRIPTION;
    gallery.appendChild(intro);
  }

  // Build figures + nav
  FIGURES.forEach((fig) => {
    // Sidebar link
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + fig.id;
    a.textContent = fig.title;
    a.dataset.target = fig.id;
    li.appendChild(a);
    navList.appendChild(li);

    // Figure block
    const section = document.createElement("section");
    section.className = "figure";
    section.id = fig.id;

    const h2 = document.createElement("h2");
    h2.textContent = fig.title;
    section.appendChild(h2);

    if (fig.caption) {
      const cap = document.createElement("p");
      cap.className = "caption";
      cap.textContent = fig.caption;
      section.appendChild(cap);
    }

    const media = document.createElement("div");
    media.className = "figure-media";
    if (/\.(mp4|webm|mov)$/i.test(fig.src)) {
      // Video sources autoplay silently and loop, like a GIF.
      const video = document.createElement("video");
      video.src = fig.src;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.controls = true;
      video.setAttribute("preload", "metadata");
      media.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = fig.src;
      img.alt = fig.title;
      img.loading = "lazy";
      media.appendChild(img);
    }
    section.appendChild(media);

    if (fig.meta) {
      const meta = document.createElement("p");
      meta.className = "figure-meta";
      meta.textContent = fig.meta;
      section.appendChild(meta);
    }

    gallery.appendChild(section);
  });

  // Scroll-spy: highlight the nav item for the figure currently in view
  const links = Array.from(navList.querySelectorAll("a"));
  const sections = FIGURES.map((f) => document.getElementById(f.id));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((l) =>
            l.classList.toggle("active", l.dataset.target === id)
          );
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((s) => s && observer.observe(s));
})();
