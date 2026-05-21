const contenedor = document.getElementById('productos');

async function cargarLista() {
  try {
    contenedor.innerHTML = `<p class="text-center">Cargando...</p>`;

    // Trae 9 pokémon de la API
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
    const data = await res.json();

    // Para cada pokémon, haz fetch a su URL para obtener detalles
    const promesas = data.results.map(p => fetch(p.url).then(r => r.json()));
    const pokemones = await Promise.all(promesas);

    // Pinta todas las cards en el grid
    contenedor.innerHTML = pokemones.map(p => `
      <div class="col-md-4 col-sm-6">
        <div class="card h-100 shadow-sm">
          <img src="${p.sprites.front_default}" class="card-img-top p-3" alt="${p.name}">
          <div class="card-body text-center">
            <h5 class="card-title text-uppercase">${p.name}</h5>
            <p class="card-text">
           ${p.types.map(t => {
      const color = tipoColores[t.type.name] || 'bg-secondary';
      return `<span class="badge ${color} me-1">${t.type.name}</span>`;
    }).join('')}
            <p class="card-text"><strong>Altura:</strong> ${p.height / 10} m</p>
            <p class="card-text"><strong>Peso:</strong> ${p.weight / 10} kg</p>
          </div>
        </div>
      </div>
    `).join('');

  } catch (err) {
    contenedor.innerHTML = `<p class="text-center text-danger">Error: ${err.message}</p>`;
  }
}




const tipoColores = {
  normal: 'bg-secondary',
  fire: 'bg-danger',
  water: 'bg-primary',
  electric: 'bg-warning text-dark',
  grass: 'bg-success',
  ice: 'bg-info text-dark',
  fighting: 'bg-danger',
  poison: 'bg-purple',
  ground: 'bg-brown',
  flying: 'bg-info',
  psychic: 'bg-pink',
  bug: 'bg-success',
  rock: 'bg-secondary',
  ghost: 'bg-dark',
  dragon: 'bg-indigo',
  dark: 'bg-dark',
  steel: 'bg-secondary',
  fairy: 'bg-pink'
};
// Carga 9 pokémon al abrir la página
cargarLista();

// Si quieres mantener el buscador, déjalo así:
document.getElementById('buscar').addEventListener('click', async () => {
  const nombre = document.getElementById('busqueda').value.toLowerCase();
  if (!nombre) return cargarLista();

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    if (!res.ok) throw new Error('Pokémon no encontrado');
    const p = await res.json();

    contenedor.innerHTML = `
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card h-100 shadow-sm">
      <img src="${p.sprites.front_default}" class="card-img-top p-3" alt="${p.name}">
      <div class="card-body text-center">
        <h5 class="card-title text-uppercase">${p.name}</h5>
        <p class="card-text">
          ${p.types.map(t => {
      const color = tipoColores[t.type.name] || 'bg-secondary';
      return `<span class="badge ${color} me-1">${t.type.name}</span>`;
    }).join('')}
        </p>
        <p class="card-text"><strong>Altura:</strong> ${p.height / 10} m</p>
        <p class="card-text"><strong>Peso:</strong> ${p.weight / 10} kg</p>
      </div>
    </div>
  </div>
`;
  } catch (err) {
    contenedor.innerHTML = `<p class="text-center text-danger">Error: ${err.message}</p>`;
  }
});