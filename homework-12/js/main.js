const BASE = 'https://swapi.co/api/';
const containerCHARACTERS = document.querySelector('.characters');
const containerPLANETS = document.querySelector('.planets');
let wookileng = '?format=wookiee';

async function renderCharacters(filmNumber) {
  try {
    containerCHARACTERS.innerHTML = '';
    let filmInfo = await axios.get(BASE + 'films/' + filmNumber + '/');
    filmInfo.data.characters.forEach(characterUrl => {
      renderPeople(characterUrl);
    })
  } catch (err) {
    console.log(err);
  }
}

async function renderPeople(characterUrl) {
    let characterResponse = await axios.get(characterUrl);
    let character = characterResponse.data;
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('item');
    characterDiv.dataset.key = characterUrl;
    characterDiv.innerHTML = `
    <img class="character_img" src="./img/unknown.jpg">
    <p>name: ${character.name}</p>
      <p>gender: ${character.gender}</p>
      <p>birth year: ${character.birth_year}</p>
    `;
    containerCHARACTERS.append(characterDiv);
}

async function renderPlanets(page = 1) {
  try {
    containerPLANETS.innerHTML = '';
    let planets = await axios.get(BASE + 'planets/?page=' + page);
    renderPlanet(planets.data.results);
  } catch (err) {
    console.log(err);
    renderPlanets(1)
  }
}
function renderPlanet(planetsObj) {
  planetsObj.forEach(planet => {
    const planetDiv = document.createElement('p');
    planetDiv.classList.add('item');
    planetDiv.innerHTML = `
    <img class="character_img" src="./img/planet.png">
    <h4>name: ${planet.name}</h4>
    <ul>
      <li>rotation_period: ${planet.rotation_period}</li>
      <li>orbital_period: ${planet.orbital_period}</li>
      <li>diameter: ${planet.diameter}</li>
      <li>climate: ${planet.climate}</li>
      <li>gravity: ${planet.gravity}</li>
      <li>population: ${planet.population}</li>
    </ul>
    `;
    containerPLANETS.append(planetDiv);
  })
}
document.getElementById('btnInfo').addEventListener('click', () => renderCharacters(document.getElementById('info').value)); 
renderPlanets();
document.getElementById('next').addEventListener('click', () => {
  let page = parseFloat(document.getElementById('next').value);
  page += 1;
  document.getElementById('next').value = page; 
  renderPlanets(page);
}); 
// document.getElementById('prev').addEventListener('click', () => {
//   let page = parseFloat(document.getElementById('prev').value);
//   page -= 1;
//   document.getElementById('prev').value = page; 
//   renderPlanets(page);
// }); 
