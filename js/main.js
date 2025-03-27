// Tab functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const mapViews = document.querySelectorAll(".map-view");
const storeInfos = document.querySelectorAll(".store-info");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const location = button.getAttribute("data-location");

    // Update active tab
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update active map
    mapViews.forEach((map) => map.classList.remove("active"));
    document.getElementById(`${location}-map`).classList.add("active");

    // Update active store info
    storeInfos.forEach((info) => info.classList.remove("active"));
    document.getElementById(`${location}-info`).classList.add("active");
  });
});

// Make markers clickable to show store info
const markers = document.querySelectorAll(".marker");

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    const mapView = marker.closest(".map-view");
    const locationId = mapView.id.split("-")[0];

    // Show corresponding store info
    storeInfos.forEach((info) => info.classList.remove("active"));
    document.getElementById(`${locationId}-info`).classList.add("active");

    // Highlight corresponding tab
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(`[data-location="${locationId}"]`)
      .classList.add("active");
  });
});
