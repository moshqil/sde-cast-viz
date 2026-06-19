// Storm-decoration switcher for the header.
// Lets you preview lightning/storm options live on the page, then pick one.
// Once you've chosen, tell me the number and I'll hard-code it and drop the switcher.

(function () {
  const OPTIONS = {
    1: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g filter="url(#s1)" opacity=".8">
        <path d="M870 -10 L835 95 L880 95 L815 230 L850 120 L805 120 L870 -10Z" fill="#e8d5ff"/>
      </g>
      <defs><filter id="s1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,

    2: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g filter="url(#s2)">
        <path d="M760 -10 L742 70 L765 70 L735 170 L752 92 L730 92 L760 -10Z" fill="#e8d5ff" opacity=".55"/>
        <path d="M905 -10 L882 100 L912 100 L865 240 L900 120 L872 120 L905 -10Z" fill="#d6bcff" opacity=".85"/>
        <path d="M1010 10 L995 80 L1014 80 L988 165 L1003 98 L985 98 L1010 10Z" fill="#e8d5ff" opacity=".5"/>
      </g>
      <defs><filter id="s2" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="1.6"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,

    3: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g filter="url(#s3)" stroke="#e8d5ff" stroke-width="3"
         stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M880 -10 L855 60 L885 80 L840 130 L870 150 L825 235" opacity=".9"/>
        <path d="M885 80 L925 95" opacity=".7"/>
        <path d="M840 130 L800 138" opacity=".6"/>
        <path d="M870 150 L905 178" opacity=".6"/>
      </g>
      <defs><filter id="s3" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,

    4: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g stroke="#b794f6" stroke-width="1.4" opacity=".35" stroke-linecap="round">
        <path d="M700 -10 L680 60"/><path d="M740 -10 L720 60"/>
        <path d="M780 -10 L760 60"/><path d="M960 30 L940 110"/>
        <path d="M1000 20 L980 100"/><path d="M1040 40 L1020 120"/>
        <path d="M820 100 L800 180"/><path d="M1060 -10 L1040 60"/>
      </g>
      <g filter="url(#s4)">
        <path d="M895 -10 L872 95 L902 95 L855 235 L890 120 L862 120 L895 -10Z" fill="#e8d5ff" opacity=".85"/>
      </g>
      <defs><filter id="s4" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4.5"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,

    5: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g opacity=".9">
        <path d="M820 70 a40 40 0 0 1 6-79 52 52 0 0 1 100 -12 41 41 0 0 1 33 91 Z"
              fill="#2a1846" stroke="#b794f6" stroke-width="2" stroke-linejoin="round"/>
        <g filter="url(#s5)">
          <path d="M905 70 L885 120 L910 120 L878 185 L902 132 L880 132 L905 70Z" fill="#e8d5ff"/>
        </g>
      </g>
      <defs><filter id="s5" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,

    6: `<svg viewBox="0 0 1100 220" preserveAspectRatio="xMaxYMid slice" fill="none">
      <g style="animation: rainfall 1.1s linear infinite;" stroke="#b794f6"
         stroke-width="1.4" opacity=".3" stroke-linecap="round">
        <path d="M720 -20 L700 50"/><path d="M770 -20 L750 50"/>
        <path d="M970 -20 L950 50"/><path d="M1020 -20 L1000 50"/>
        <path d="M840 -20 L820 50"/><path d="M1060 -20 L1040 50"/>
      </g>
      <g filter="url(#s6)" style="animation: flash 4s ease-in-out infinite;">
        <path d="M895 -10 L872 95 L902 95 L855 235 L890 120 L862 120 L895 -10Z" fill="#e8d5ff"/>
      </g>
      <defs><filter id="s6" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter></defs>
    </svg>`,
  };

  const LABELS = {
    1: "Bold fork", 2: "Triple bolts", 3: "Branching",
    4: "Bolt + rain", 5: "Cloud + bolt", 6: "Animated",
  };

  const header = document.querySelector(".site-header");
  if (!header) return;

  const deco = document.createElement("div");
  deco.className = "storm-deco";
  header.insertBefore(deco, header.firstChild);

  const sw = document.createElement("div");
  sw.className = "storm-switch";
  const hint = document.createElement("span");
  hint.className = "storm-hint";
  hint.textContent = "lightning";
  sw.appendChild(hint);

  function render(n) {
    n = String(n);
    if (!OPTIONS[n]) n = "1";
    deco.innerHTML = OPTIONS[n];
    try { localStorage.setItem("storm", n); } catch (e) {}
    sw.querySelectorAll("button").forEach((b) =>
      b.classList.toggle("active", b.dataset.n === n)
    );
  }

  Object.keys(OPTIONS).forEach((n) => {
    const b = document.createElement("button");
    b.textContent = n;
    b.dataset.n = n;
    b.title = LABELS[n];
    b.addEventListener("click", () => render(n));
    sw.appendChild(b);
  });
  header.appendChild(sw);

  const url = new URL(location.href);
  let initial = url.searchParams.get("storm");
  if (!initial) { try { initial = localStorage.getItem("storm"); } catch (e) {} }
  render(initial || "1");
})();
