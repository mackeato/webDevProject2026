const API_URL = "http://localhost:3000/api/venues";

let venues = [];

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    venues = data;
    renderVenues(venues);
  })
  .catch((err) => console.error("Error fetching venues:", err));

function renderVenues(list) {
  const container = document.getElementById("venueGrid");

  container.innerHTML = "";

  list.forEach((venue) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-body">
        <h3 class="card-title">${venue.name}</h3>
        <p><strong>Typ:</strong> ${venue.type || "Okänd"}</p>
        <p><strong>District:</strong> ${venue.district || "-"}</p>
        <a href="https://${venue.url}" target="_blank">Besök sida</a>
      </div>
    `;

    container.appendChild(card);
  });
}
