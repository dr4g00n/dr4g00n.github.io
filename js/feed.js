/* DANGLING_PTR — site interactions (no dependencies) */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------- sticky nav */
  var head = document.getElementById("siteHead");
  if (head) {
    var onScroll = function () {
      head.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --------------------------------------------------------- mobile menu */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    var setMenu = function (open) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", function () {
      setMenu(burger.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setMenu(false);
        burger.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 780 && menu.classList.contains("is-open")) {
        setMenu(false);
      }
    });
  }

  /* ------------------------------------------------------------- reveals */
  var revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (el) {
        el.classList.add("is-in");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealItems.forEach(function (el) {
        io.observe(el);
      });

      /* failsafe: never leave above-the-fold content invisible */
      window.setTimeout(function () {
        revealItems.forEach(function (el) {
          if (el.classList.contains("is-in")) return;
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("is-in");
          }
        });
      }, 1600);
    }
  }

  /* ------------------------------------------------------------ filtering */
  var chips = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll(".card[data-tags]");
  if (chips.length && cards.length) {
    var applyFilter = function (chip) {
      if (!chip) return;
      var tag = chip.getAttribute("data-filter");
      chips.forEach(function (c) {
        var active = c === chip;
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", active ? "true" : "false");
      });
      cards.forEach(function (card) {
        var match =
          tag === "all" ||
          card.getAttribute("data-tags").split(/\s+/).indexOf(tag) !== -1;
        card.hidden = !match;
      });
    };

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyFilter(chip);
      });
    });

    /* deep link: /?tag=ui */
    var wanted = new URLSearchParams(window.location.search).get("tag");
    if (wanted) {
      chips.forEach(function (chip) {
        if (chip.getAttribute("data-filter") === wanted) applyFilter(chip);
      });
    }
  }

  /* -------------------------------------------------------------- lightbox */
  var lb = document.getElementById("lightbox");
  var workCards = Array.prototype.slice.call(
    document.querySelectorAll(".card[data-work]")
  );

  if (lb && workCards.length) {
    var lbImg = document.getElementById("lbImg");
    var lbIdx = document.getElementById("lbIdx");
    var lbTitle = document.getElementById("lbTitle");
    var lbMeta = document.getElementById("lbMeta");
    var lbClose = lb.querySelector("[data-lb-close]");
    var lbPrev = lb.querySelector("[data-lb-prev]");
    var lbNext = lb.querySelector("[data-lb-next]");
    var current = 0;
    var lastFocus = null;

    var pad = function (n) {
      return (n < 10 ? "0" : "") + n;
    };

    var render = function () {
      var el = workCards[current];
      var src = el.getAttribute("data-img");
      lbImg.src = src;
      lbImg.alt = el.getAttribute("data-title");
      lbIdx.textContent = pad(current + 1) + " / " + pad(workCards.length);
      lbTitle.textContent = el.getAttribute("data-title");
      lbMeta.textContent = el.getAttribute("data-meta");
    };

    var openAt = function (i) {
      if (i < 0 || i >= workCards.length) return;
      current = i;
      lastFocus = document.activeElement;
      render();
      lb.classList.add("is-open");
      lb.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      lbClose.focus();
    };

    var closeLb = function () {
      lb.classList.remove("is-open");
      lb.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      lbImg.removeAttribute("src");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    var step = function (dir) {
      current = (current + dir + workCards.length) % workCards.length;
      render();
    };

    workCards.forEach(function (card, i) {
      card.addEventListener("click", function (e) {
        e.preventDefault();
        openAt(i);
      });
    });

    /* deep link: /?work=3 */
    var deep = new URLSearchParams(window.location.search).get("work");
    if (deep !== null && !isNaN(parseInt(deep, 10))) {
      openAt(parseInt(deep, 10) - 1);
    }

    document.querySelectorAll("[data-open]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openAt(parseInt(el.getAttribute("data-open"), 10));
      });
    });

    lbClose.addEventListener("click", closeLb);
    lbPrev.addEventListener("click", function () {
      step(-1);
    });
    lbNext.addEventListener("click", function () {
      step(1);
    });

    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb__stage")) {
        closeLb();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "Tab") {
        var focusables = [lbClose, lbPrev, lbNext];
        var i = focusables.indexOf(document.activeElement);
        if (i === -1) return;
        e.preventDefault();
        var next = (i + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length;
        focusables[next].focus();
      }
    });
  }

  /* ------------------------------------------------------------ year stamp */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
