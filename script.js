let classifica = [
  { nome: "Rossi", punti: 50 },
  { nome: "Bianchi", punti: 40 },
  { nome: "Verdi", punti: 30 }
];

function aggiornaTabella() {
  const tbody = document.querySelector("#classifica tbody");
  tbody.innerHTML = "";

  classifica.sort((a, b) => b.punti - a.punti);

  classifica.forEach((c, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${c.nome}</td>
        <td>${c.punti}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

function aggiungiCorridore() {
  let nome = prompt("Nome corridore:");
  let punti = parseInt(prompt("Punti:"));

  if (nome && !isNaN(punti)) {
    classifica.push({ nome, punti });
    aggiornaTabella();
  }
}

aggiornaTabella();
