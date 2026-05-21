const form = document.getElementById('productForm');
const tableBody = document.getElementById('productTable');
const searchInput = document.getElementById('searchInput');
const totalItems = document.getElementById('totalItems');
const formTitle = document.getElementById('formTitle');

let products = JSON.parse(localStorage.getItem('pokedex')) || [
  {id: 1, name: "Bulbasaur", category: "Planta", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},
  {id: 2, name: "Ivysaur", category: "Planta", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
  {id: 3, name: "Venusaur", category: "Planta", price: 450, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
  {id: 4, name: "Charmander", category: "Fuego", price: 130, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
  {id: 5, name: "Charmeleon", category: "Fuego", price: 220, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},
  {id: 6, name: "Charizard", category: "Fuego", price: 600, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
  {id: 7, name: "Squirtle", category: "Agua", price: 125, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},
  {id: 8, name: "Wartortle", category: "Agua", price: 210, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},
  {id: 9, name: "Blastoise", category: "Agua", price: 470, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},
  {id: 10, name: "Caterpie", category: "Planta", price: 50, stock: 10, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"},
  {id: 11, name: "Metapod", category: "Planta", price: 60, stock: 8, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"},
  {id: 12, name: "Butterfree", category: "Planta", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"},
  {id: 13, name: "Weedle", category: "Planta", price: 50, stock: 9, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"},
  {id: 14, name: "Kakuna", category: "Planta", price: 60, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"},
  {id: 15, name: "Beedrill", category: "Planta", price: 160, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"},
  {id: 16, name: "Pidgey", category: "Planta", price: 55, stock: 10, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"},
  {id: 17, name: "Pidgeotto", category: "Planta", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"},
  {id: 18, name: "Pidgeot", category: "Planta", price: 250, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"},
  {id: 19, name: "Rattata", category: "Siniestro", price: 50, stock: 12, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"},
  {id: 20, name: "Raticate", category: "Siniestro", price: 110, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"},
  {id: 21, name: "Spearow", category: "Planta", price: 55, stock: 8, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"},
  {id: 22, name: "Fearow", category: "Planta", price: 130, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"},
  {id: 23, name: "Ekans", category: "Siniestro", price: 80, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"},
  {id: 24, name: "Arbok", category: "Siniestro", price: 170, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"},
  {id: 25, name: "Pikachu", category: "Eléctrico", price: 180, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"},
  {id: 26, name: "Raichu", category: "Eléctrico", price: 320, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"},
  {id: 27, name: "Sandshrew", category: "Planta", price: 90, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"},
  {id: 28, name: "Sandslash", category: "Planta", price: 190, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"},
  {id: 29, name: "Nidoran♀", category: "Planta", price: 85, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"},
  {id: 30, name: "Nidorina", category: "Planta", price: 160, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"},
  {id: 31, name: "Nidoqueen", category: "Planta", price: 350, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"},
  {id: 32, name: "Nidoran♂", category: "Planta", price: 85, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"},
  {id: 33, name: "Nidorino", category: "Planta", price: 160, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"},
  {id: 34, name: "Nidoking", category: "Planta", price: 360, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"},
  {id: 35, name: "Clefairy", category: "Psíquico", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"},
  {id: 36, name: "Clefable", category: "Psíquico", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"},
  {id: 37, name: "Vulpix", category: "Fuego", price: 110, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"},
  {id: 38, name: "Ninetales", category: "Fuego", price: 260, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"},
  {id: 39, name: "Jigglypuff", category: "Psíquico", price: 100, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"},
  {id: 40, name: "Wigglytuff", category: "Psíquico", price: 240, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"},
  {id: 41, name: "Zubat", category: "Siniestro", price: 60, stock: 9, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"},
  {id: 42, name: "Golbat", category: "Siniestro", price: 140, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"},
  {id: 43, name: "Oddish", category: "Planta", price: 80, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"},
  {id: 44, name: "Gloom", category: "Planta", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"},
  {id: 45, name: "Vileplume", category: "Planta", price: 320, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"},
  {id: 46, name: "Paras", category: "Planta", price: 75, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"},
  {id: 47, name: "Parasect", category: "Planta", price: 160, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"},
  {id: 48, name: "Venonat", category: "Planta", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"},
  {id: 49, name: "Venomoth", category: "Planta", price: 180, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"},
  {id: 50, name: "Diglett", category: "Planta", price: 70, stock: 8, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"},
  {id: 51, name: "Dugtrio", category: "Planta", price: 160, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"},
  {id: 52, name: "Meowth", category: "Siniestro", price: 95, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"},
  {id: 53, name: "Persian", category: "Siniestro", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"},
  {id: 54, name: "Psyduck", category: "Agua", price: 100, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"},
  {id: 55, name: "Golduck", category: "Agua", price: 220, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"},
  {id: 56, name: "Mankey", category: "Planta", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"},
  {id: 57, name: "Primeape", category: "Planta", price: 190, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"},
  {id: 58, name: "Growlithe", category: "Fuego", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"},
  {id: 59, name: "Arcanine", category: "Fuego", price: 380, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"},
  {id: 60, name: "Poliwag", category: "Agua", price: 75, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"},
  {id: 61, name: "Poliwhirl", category: "Agua", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"},
  {id: 62, name: "Poliwrath", category: "Agua", price: 340, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"},
  {id: 63, name: "Abra", category: "Psíquico", price: 90, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"},
  {id: 64, name: "Kadabra", category: "Psíquico", price: 190, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"},
  {id: 65, name: "Alakazam", category: "Psíquico", price: 420, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"},
  {id: 66, name: "Machop", category: "Planta", price: 95, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"},
  {id: 67, name: "Machoke", category: "Planta", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"},
  {id: 68, name: "Machamp", category: "Planta", price: 400, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"},
  {id: 69, name: "Bellsprout", category: "Planta", price: 80, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"},
  {id: 70, name: "Weepinbell", category: "Planta", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"},
  {id: 71, name: "Victreebel", category: "Planta", price: 330, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"},
  {id: 72, name: "Tentacool", category: "Agua", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"},
  {id: 73, name: "Tentacruel", category: "Agua", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"},
  {id: 74, name: "Geodude", category: "Planta", price: 90, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"},
  {id: 75, name: "Graveler", category: "Planta", price: 180, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"},
  {id: 76, name: "Golem", category: "Planta", price: 360, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"},
  {id: 77, name: "Ponyta", category: "Fuego", price: 130, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"},
  {id: 78, name: "Rapidash", category: "Fuego", price: 270, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"},
  {id: 79, name: "Slowpoke", category: "Agua", price: 95, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"},
  {id: 80, name: "Slowbro", category: "Agua", price: 230, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"},
  {id: 81, name: "Magnemite", category: "Eléctrico", price: 110, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"},
  {id: 82, name: "Magneton", category: "Eléctrico", price: 240, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"},
  {id: 83, name: "Farfetch'd", category: "Planta", price: 140, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"},
  {id: 84, name: "Doduo", category: "Planta", price: 80, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"},
  {id: 85, name: "Dodrio", category: "Planta", price: 170, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"},
  {id: 86, name: "Seel", category: "Agua", price: 110, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"},
  {id: 87, name: "Dewgong", category: "Agua", price: 250, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"},
  {id: 88, name: "Grimer", category: "Siniestro", price: 90, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"},
  {id: 89, name: "Muk", category: "Siniestro", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"},
  {id: 90, name: "Shellder", category: "Agua", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"},
  {id: 91, name: "Cloyster", category: "Agua", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"},
  {id: 92, name: "Gastly", category: "Siniestro", price: 100, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"},
  {id: 93, name: "Haunter", category: "Siniestro", price: 210, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"},
  {id: 94, name: "Gengar", category: "Siniestro", price: 450, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
  {id: 95, name: "Onix", category: "Planta", price: 160, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"},
  {id: 96, name: "Drowzee", category: "Psíquico", price: 95, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"},
  {id: 97, name: "Hypno", category: "Psíquico", price: 220, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"},
  {id: 98, name: "Krabby", category: "Agua", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"},
  {id: 99, name: "Kingler", category: "Agua", price: 190, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"},
  {id: 100, name: "Voltorb", category: "Eléctrico", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"},
  {id: 101, name: "Electrode", category: "Eléctrico", price: 260, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"},
  {id: 102, name: "Exeggcute", category: "Planta", price: 90, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"},
  {id: 103, name: "Exeggutor", category: "Planta", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"},
  {id: 104, name: "Cubone", category: "Planta", price: 110, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"},
  {id: 105, name: "Marowak", category: "Planta", price: 240, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"},
  {id: 106, name: "Hitmonlee", category: "Planta", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"},
  {id: 107, name: "Hitmonchan", category: "Planta", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"},
  {id: 108, name: "Lickitung", category: "Planta", price: 130, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"},
  {id: 109, name: "Koffing", category: "Siniestro", price: 95, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"},
  {id: 110, name: "Weezing", category: "Siniestro", price: 210, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"},
  {id: 111, name: "Rhyhorn", category: "Planta", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"},
  {id: 112, name: "Rhydon", category: "Planta", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"},
  {id: 113, name: "Chansey", category: "Psíquico", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"},
  {id: 114, name: "Tangela", category: "Planta", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"},
  {id: 115, name: "Kangaskhan", category: "Planta", price: 320, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"},
  {id: 116, name: "Horsea", category: "Agua", price: 85, stock: 6, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"},
  {id: 117, name: "Seadra", category: "Agua", price: 190, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"},
  {id: 118, name: "Goldeen", category: "Agua", price: 80, stock: 7, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"},
  {id: 119, name: "Seaking", category: "Agua", price: 170, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"},
  {id: 120, name: "Staryu", category: "Agua", price: 100, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"},
  {id: 121, name: "Starmie", category: "Agua", price: 240, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"},
  {id: 122, name: "Mr. Mime", category: "Psíquico", price: 180, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"},
  {id: 123, name: "Scyther", category: "Planta", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"},
  {id: 124, name: "Jynx", category: "Psíquico", price: 220, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"},
  {id: 125, name: "Electabuzz", category: "Eléctrico", price: 260, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"},
  {id: 126, name: "Magmar", category: "Fuego", price: 260, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"},
  {id: 127, name: "Pinsir", category: "Planta", price: 200, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"},
  {id: 128, name: "Tauros", category: "Planta", price: 180, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"},
  {id: 129, name: "Magikarp", category: "Agua", price: 30, stock: 15, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"},
  {id: 130, name: "Gyarados", category: "Agua", price: 500, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"},
  {id: 131, name: "Lapras", category: "Agua", price: 350, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"},
  {id: 132, name: "Ditto", category: "Psíquico", price: 150, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
  {id: 133, name: "Eevee", category: "Planta", price: 120, stock: 5, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"},
  {id: 134, name: "Vaporeon", category: "Agua", price: 350, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"},
  {id: 135, name: "Jolteon", category: "Eléctrico", price: 350, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"},
  {id: 136, name: "Flareon", category: "Fuego", price: 350, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"},
  {id: 137, name: "Porygon", category: "Psíquico", price: 160, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"},
  {id: 138, name: "Omanyte", category: "Agua", price: 120, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"},
  {id: 139, name: "Omastar", category: "Agua", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"},
  {id: 140, name: "Kabuto", category: "Agua", price: 120, stock: 4, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"},
  {id: 141, name: "Kabutops", category: "Agua", price: 280, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"},
  {id: 142, name: "Aerodactyl", category: "Planta", price: 400, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"},
  {id: 143, name: "Snorlax", category: "Planta", price: 450, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"},
  {id: 144, name: "Articuno", category: "Agua", price: 800, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"},
  {id: 145, name: "Zapdos", category: "Eléctrico", price: 800, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"},
  {id: 146, name: "Moltres", category: "Fuego", price: 800, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"},
  {id: 147, name: "Dratini", category: "Dragón", price: 150, stock: 3, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"},
  {id: 148, name: "Dragonair", category: "Dragón", price: 300, stock: 2, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"},
  {id: 149, name: "Dragonite", category: "Dragón", price: 600, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"},
  {id: 150, name: "Mewtwo", category: "Psíquico", price: 999, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"},
  {id: 151, name: "Mew", category: "Psíquico", price: 999, stock: 1, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"}
];



// Colores por tipo
const tipoColor = {
  'Eléctrico': 'warning',
  'Fuego': 'danger', 
  'Agua': 'primary',
  'Planta': 'success',
  'Psíquico': 'info',
  'Siniestro': 'dark',
  'Dragón': 'secondary',
  'Normal': 'secondary',
  'Hada': 'pink',
  'Lucha': 'danger',
  'Veneno': 'success',
  'Tierra': 'warning',
  'Volador': 'info',
  'Roca': 'secondary',
  'Bicho': 'success',
  'Hielo': 'info',
  'Acero': 'secondary',
  'Fantasma': 'dark'
};

// Estado de filtros
let state = {
  search: '',
  tipo: 'Todos',
  sort: 'id-asc'
};

// --- RENDER OPTIMIZADO ---
function renderProducts() {
  let filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(state.search.toLowerCase()) || 
                       p.category.toLowerCase().includes(state.search.toLowerCase());
    const matchTipo = state.tipo === 'Todos' || p.category === state.tipo;
    return matchSearch && matchTipo;
  });

  // Ordenamiento
  filtered.sort((a, b) => {
    switch(state.sort) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'stock-asc': return a.stock - b.stock;
      default: return a.id - b.id;
    }
  });

  // Usa DocumentFragment para no reflowear 151 veces
  const fragment = document.createDocumentFragment();
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5 text-muted">No hay pokemones con esos filtros</div>`;
    totalItems.textContent = `${products.length} pokemones`;
    return;
  }
  
  filtered.forEach(p => {
    const stockText = p.stock > 0 ? `${p.stock} en stock` : 'Agotado';
    const statusBadge = p.stock > 0 
      ? `<span class="badge bg-success">Disponible</span>` 
      : `<span class="badge bg-danger">Agotado</span>`;
    
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="card pokemon-card shadow-sm h-100">
        <img src="${p.image}" class="card-img-top" loading="lazy" 
             onerror="this.src='https://via.placeholder.com/140'">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title mb-0">${p.name}</h5>
            <span class="badge bg-${tipoColor[p.category] || 'secondary'}">${p.category}</span>
          </div>
          <p class="card-text text-muted mb-1">${stockText}</p>
          <h4 class="text-danger fw-bold mb-3">${p.price.toLocaleString()} PokeCoins</h4>
          <div class="mt-auto">
            ${statusBadge}
            <div class="d-flex gap-2 mt-2">
              <button class="btn btn-sm btn-outline-warning flex-fill" onclick="editProduct(${p.id})">Editar</button>
              <button class="btn btn-sm btn-outline-danger flex-fill" onclick="deleteProduct(${p.id})">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    fragment.appendChild(col);
  });
  
  grid.appendChild(fragment);
  totalItems.textContent = `${products.length} pokemones`;
}

// --- GUARDAR CON DEBOUNCE ---
let saveTimeout;
function saveToStorage() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    localStorage.setItem('pokedex', JSON.stringify(products));
  }, 300);
}

// --- CRUD ---
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const id = document.getElementById('productId').value;
  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;
  const price = Number(document.getElementById('price').value);
  const stock = Number(document.getElementById('stock').value);
  const image = document.getElementById('image').value.trim() || `https://via.placeholder.com/140`;

  // Validaciones
  if (!name) return alert("El nombre no puede estar vacío.");
  if (price < 0 || isNaN(price)) return alert("Precio inválido.");
  if (stock < 0 || !Number.isInteger(stock)) return alert("Stock inválido.");
  
  const exists = products.some(p => p.name.toLowerCase() === name.toLowerCase() && p.id != id);
  if (exists) return alert("Ya existe un Pokémon con ese nombre.");

  const product = { id: id ? Number(id) : Date.now(), name, category, price, stock, image };
  
  if (id) {
    products = products.map(p => p.id == id ? product : p);
  } else {
    products.push(product);
  }
  
  resetForm();
  saveToStorage();
  renderProducts();
});

function editProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  
  document.getElementById('productId').value = p.id;
  document.getElementById('name').value = p.name;
  document.getElementById('category').value = p.category;
  document.getElementById('price').value = p.price;
  document.getElementById('stock').value = p.stock;
  document.getElementById('image').value = p.image;
  formTitle.textContent = "Editar Pokémon";
  
  // Agrega botón cancelar si no existe
  if (!document.getElementById('cancelBtn')) {
    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtn';
    cancelBtn.type = 'button';
    cancelBtn.className = 'btn btn-secondary ms-2';
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.onclick = resetForm;
    form.querySelector('button[type="submit"]').after(cancelBtn);
  }
  
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function deleteProduct(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  
  if (confirm(`¿Eliminar "${p.name}" de la PokéShop?`)) {
    products = products.filter(p => p.id !== id);
    saveToStorage();
    renderProducts();
  }
}

function resetForm() {
  form.reset();
  document.getElementById('productId').value = "";
  formTitle.textContent = "Agregar Pokémon";
  document.getElementById('cancelBtn')?.remove();
}

// --- FILTROS Y ORDENAMIENTO ---
searchInput.addEventListener('input', (e) => {
  state.search = e.target.value;
  renderProducts();
});


// --- FILTROS Y ORDENAMIENTO ---
searchInput.addEventListener('input', (e) => {
  state.search = e.target.value;
  renderProducts();
});

document.getElementById('filterTipo').addEventListener('change', e => {
  state.tipo = e.target.value;
  renderProducts();
});

document.getElementById('filterSort').addEventListener('change', e => {
  state.sort = e.target.value;
  renderProducts();
});

function clearFilters() {
  state = { search: '', tipo: 'Todos', sort: 'id-asc' };
  searchInput.value = '';
  document.getElementById('filterTipo').value = 'Todos';
  document.getElementById('filterSort').value = 'id-asc';
  renderProducts();
}

// Inicialización
renderProducts();