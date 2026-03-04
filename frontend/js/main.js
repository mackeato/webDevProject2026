const API_URL = "http://localhost:3000/api/venues";

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("venue-list");

    // Clear existing content before rendering (important if you rerender later)
    container.innerHTML = "";

    data.forEach((venue) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <div class="card-img">
          ${
            venue.image_url
              ? `<img src="${venue.image_url}" alt="${venue.name}"
                   style="width:100%;height:100%;object-fit:cover;">`
              : "Bild saknas"
          }
        </div>

        <div class="card-body">
          <div class="card-top">
            <h3 class="card-title">${venue.name}</h3>
            <span class="badge">${venue.type || "Okänd"}</span>
          </div>

          <p class="card-desc">${venue.description || ""}</p>

          <div class="card-meta">
            <div><strong>Adress:</strong> ${venue.address || "-"}</div>
            <div><strong>Öppettider:</strong> ${
              venue.opening_hours || "-"
            }</div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Failed to fetch venues:", err));
