export function createScrollbar(container) {
  const state = {
    wrapper: null,
    thumb: null,
    body: null,
    upButton: null,
    downButton: null
  };

  let dragging = false;
  let dragStartY = 0;
  let startScrollTop = 0;
  let dragRatio = 1;

  function updateThumbPosition() {
    const body = state.body;

    const maxScroll = body.scrollHeight - body.clientHeight;
    if (maxScroll <= 0) {
      state.thumb.style.transform = "translateY(0px)";
      return;
    }

    const trackHeight =
      body.clientHeight - state.thumb.offsetHeight - 32;

    const progress = body.scrollTop / maxScroll;

    state.thumb.style.transform =
      `translateY(${progress * trackHeight}px)`;
  }

  function startDrag(event) {
    dragging = true;
    dragStartY = event.clientY;
    startScrollTop = state.body.scrollTop;

    const maxScroll =
      state.body.scrollHeight - state.body.clientHeight;

    const track =
      state.body.clientHeight - state.thumb.offsetHeight - 32;

    dragRatio = maxScroll / Math.max(track, 1);

    document.body.classList.add("is-grabbing");
  }

  function drag(event) {
    if (!dragging) return;

    state.body.scrollTop =
      startScrollTop +
      (event.clientY - dragStartY) * dragRatio;
  }

  function stopDrag() {
    dragging = false;
    document.body.classList.remove("is-grabbing");
  }

  function scrollUp() {
    state.body.scrollTop -= 100;
  }

  function scrollDown() {
    state.body.scrollTop += 100;
  }

  function refresh() {
    const body = state.body;

    const clientHeight = body.clientHeight;
    const scrollHeight = body.scrollHeight;

    const ratio = clientHeight / scrollHeight;

    if (ratio >= 1) {
      state.wrapper.classList.add("classic-scrollbar__bar--disabled");
      return;
    }

    state.wrapper.classList.remove("classic-scrollbar__bar--disabled");

    const track = clientHeight - 32;
    const thumbHeight = Math.max(ratio * track, 16);

    state.thumb.style.height = `${thumbHeight}px`;

    updateThumbPosition();
  }

  (() => {
    state.wrapper = container.querySelector(".classic-scrollbar__bar");
    state.body = container.querySelector(".classic-scrollbar__body");

    if (!state.wrapper || !state.body) {
      console.error("Scrollbar init failed:", state);
      return;
    }

    // --- added classic DOM structure support ---
    const p = state.wrapper.querySelectorAll(":scope > div");

    state.upButton = state.wrapper.querySelector(".scroll-up") || p[0];
    state.thumb = state.wrapper.querySelector(".classic-scrollbar__bar-thumb") || p[1];
    state.downButton = state.wrapper.querySelector(".scroll-down") || p[2];

    if (!state.thumb) {
      console.error("Scrollbar init failed (missing thumb):", state);
      return;
    }

    // scroll binding
    state.body.addEventListener("scroll", updateThumbPosition);

    // buttons
    state.upButton?.addEventListener("click", scrollUp);
    state.downButton?.addEventListener("click", scrollDown);

    // drag
    state.thumb.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);

    // --- added from classic snippet ---
    state.thumb.addEventListener("mousemove", (v) => {
      const y = v.clientY - state.thumb.getBoundingClientRect().top;
      state.thumb.style.setProperty("--Jscrollbar-pos", `${y}px`);
    });

    updateThumbPosition();
    refresh();
  })();

  return { refresh };
}
