const BASE = 'https://swapi.co/api/';
const containerCHARACTERS = document.querySelector('.characters');
const containerPLANETS = document.querySelector('.planets');
let wookieeleng = '';
let and = '';

function getWookieeleng(){
  wookieeleng = '?format=wookiee';
  and = '&&';
}

async function renderCharacters(filmNumber) {
  try {
    containerCHARACTERS.innerHTML = '';
    let filmInfo = await axios.get(BASE + 'films/' + filmNumber);
    filmInfo.data.characters.forEach(characterUrl => {
      renderPeople(characterUrl);
    })
  } catch (err) {
    console.log(err);
  }
}

async function renderPeople(characterUrl) {
    const characterDiv = document.createElement('div');
    let characterResponse = await axios.get(characterUrl + wookieeleng);
    let character = characterResponse.data;
    characterDiv.classList.add('item');
    characterDiv.dataset.key = characterUrl;
    characterDiv.innerHTML = `
    <img class="character_img" src="./img/unknown.jpg">
    <p>${Object.entries(character)[0].join(' ')}</p>
    <p>${Object.entries(character)[6].join(' ')}</p>
    <p>${Object.entries(character)[7].join(' ')}</p>
    `;
    containerCHARACTERS.append(characterDiv);
}
async function renderPlanets(page=1) {
  try {
    containerPLANETS.innerHTML = '';
    let planets = await axios.get(BASE + 'planets/' + '?page=' + page);
    renderPlanet(planets.data.results);
  } catch (err) {
    console.log(err);
    renderPlanets(1);
  }
}
function renderPlanet(planetsObj) {
  planetsObj.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('item');
    planetDiv.innerHTML = `
    <img class="character_img" src="./img/planet.png">
    <ul>
      <li>${Object.entries(planet)[0].join(' ')}</li>
      <li>${Object.entries(planet)[1].join(' ')}</li>
      <li>${Object.entries(planet)[2].join(' ')}</li>
      <li>${Object.entries(planet)[3].join(' ')}</li>
      <li>${Object.entries(planet)[4].join(' ')}</li>
      <li>${Object.entries(planet)[5].join(' ')}</li>
      <li>${Object.entries(planet)[6].join(' ')}</li>
    </ul>
    `;
    containerPLANETS.append(planetDiv);
  })
}

// async function renderPlanets() {
//   try {
//     containerPLANETS.innerHTML = '';
//     let planets = await axios.get(BASE + 'planets/' + '?format=wookiee');
//     console.log(planets);
//     renderPlanet(JSON.parse(planets.data));
//   } catch (err) {
//   }
// }
// function renderPlanet(planetsObj) {
//   console.log(planetsObj);

//   planetsObj.forEach(planet => {

//     const planetDiv = document.createElement('div');
//     planetDiv.classList.add('item');
//     planetDiv.innerHTML = `
//     <img class="character_img" src="./img/planet.png">
//     <ul>
//       <li>${Object.entries(planet)[0].join(' ')}</li>
//     </ul>
//     `;
//     containerPLANETS.append(planetDiv);
//   })
// }

renderPlanets();

document.getElementById('btnInfo').addEventListener('click', () => renderCharacters(document.getElementById('info').value)); 

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

document.getElementById('wookiee').addEventListener('click', () => {
  getWookieeleng(wookieeleng);
  renderPlanets();
  renderCharacters(document.getElementById('info').value);
}); 


