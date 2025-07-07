document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const status = document.getElementById("uploadStatus");
  status.classList.remove("hidden");
  status.innerText = "✅ Uploaded successfully (demo only)";
});
