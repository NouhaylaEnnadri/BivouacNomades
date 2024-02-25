showContent("foum");
function showContent(city) {
  const contentSection = document.getElementById("contentSection");
  const filename = city.toLowerCase().replace(/\s+/g, "") + "tours.html";

  // Fetch content from the dynamically named HTML file
  fetch(filename)
    .then((response) => response.text())
    .then((htmlContent) => {
      contentSection.innerHTML = htmlContent;
    })
    .catch((error) => console.error("Error fetching content:", error));
}
