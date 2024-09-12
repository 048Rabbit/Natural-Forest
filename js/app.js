document.addEventListener("mousemove", (m) => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(m.clientX - window.innerWidth / 2) * .005}deg;
      --move-y: ${(m.clientY - window.innerHeight / 2) * -.01}deg;
      `,
  });
});
