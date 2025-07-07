document.addEventListener("DOMContentLoaded", () => {
  console.log("Home page loaded.");
  const scrollBtn = document.querySelector("a[href='#trending']");
  scrollBtn?.addEventListener("click", () => {
    console.log("Explore clicked");
  });
});
