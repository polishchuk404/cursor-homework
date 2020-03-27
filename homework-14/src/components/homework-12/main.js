import  './style.css';
export default function homework12 (){
  const BASE = 'https://swapi.co/api/';
const containerPLANETS = document.querySelector('.planets');
async function renderPlanets() {
  try {
    containerPLANETS.innerHTML = '';
    let planets = await axios.get(BASE + 'planets');
    renderPlanet(planets.data.results);
  } catch (err) {
  }
}
function renderPlanet(planetsObj) {
  planetsObj.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('item');
    planetDiv.innerHTML = `
    <ul>
      <li>${Object.entries(planet)[0].join(' ')}</li>
      <li>${Object.entries(planet)[1].join(' ')}</li>
      <li>${Object.entries(planet)[2].join(' ')}</li>
    </ul>
    `;
    containerPLANETS.append(planetDiv);
  })
}

renderPlanets();

}


