var url = 'http://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type='
var auth = ''
var searchInput = document.getElementById('searchInput')
var options = {
  headers: {
    Authorization: auth,
    type: ''
  }
}

// /v2/types/
// onsubmit - do the search
var searchButton = document.getElementById('search')
searchButton.addEventListener('submit', (e) => {
  e.preventDefault();
  let link = searchInput.value.split('/')
  let term = link[link.length-1]
  getPets(term)
})

function getPets(term) {
  // options.headers.type = searchInput.innerHTML
  fetch(url + term, options)
  .then(res => res.json())
  .then(data => {
    loadAnimals(data.animals)
  })
}

// LISTED SEARCH RESULTS PAGE - parent element
var thediv = document.getElementById('thediv')

function loadAnimals(animals) {
  // clear out previous search results
  thediv.innerHTML = ''
  thediv.style.columnSpan = 'all';
  thediv.style.columns = 2;
  thediv.style.padding = '20px';

  if (animals) {
    var animal = document.createElement('div')
    animal.className = 'animal'
    animals.forEach(e => {
      let name = document.createElement('h1')
      animal.appendChild(name)
      name.innerHTML = e.name
      if (e.photos[0]) {
        let pic = document.createElement('img')
        // pic.className = 'pic'
        pic.style.width = '100%'
        pic.src = e.photos[0].large
        animal.appendChild(pic)
      } else {
        let problem = document.createElement('p')
        problem.innerHTML = 'no pictures'
        animal.appendChild(problem)
      }
    })
    thediv.appendChild(animal)
  }
}

// select animal type drop down
async function animalTypes(){
  await fetch('http://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/types', options)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.types.forEach(type => {
      makeOption(type.name, type._links.self.href)
    })
  })  
} 

async function getTypes() {
  var types = await animalTypes()
  if (types) {
    types.forEach(type => {
      makeOption(type)
    })
  }
}

function makeOption(value, link) {
  var option = document.createElement('option')
  // console.log(value)
  option.value = link
  option.innerHTML = value
  searchInput.appendChild(option)
}

getTypes()

// GENERAL
  // Animations/transitions for async calls
  // Animations/transitions for sudden changes
  // Build routes for pages
    // Routes from search terms?
    // Routes from click through on a single pet based on pet id

// HOME PAGE
  // Title
  // Background Image
  // search form
    // search field
    // search button

// Individual pet page
  // "id": 46961710,
  // "organization_id": "MN330",
  // "url": (petfinder)
  // "species": "Dog",
  // "breeds": {
  //   "primary": "Golden Retriever",
  //   "secondary": null,
  //   "mixed": false,
  //   "unknown": false
  // }
  // "age": "Baby",
  // "gender": "Female",
  // "size": "Medium",
  // "attributes": {
  //   "spayed_neutered": true,
  //   "house_trained": true,
  //   "declawed": null,
  //   "special_needs": false,
  //   "shots_current": true
  // "name": "Dutchess",
  // "status": "adopted" <-- FIND OTHER STATUSES
  // "contact": {
  // }
  
  // add link to contact
  // "contact": {
  //   "email": "info@NDLBrescue.org",
  //   "phone": "(612) 354-6352",
  //   "address": {
  //     "address1": "PO Box 29461",
  //     "address2": null,
  //     "city": "Brooklyn Center",
  //     "state": "MN",
  //     "postcode": "55429",
  //     "country": "US"
  //   }
  // }

  // other api links
  // "_links": {
  //   "self": {
  //     "href": "/v2/animals/46961710"
  //   },
  //   "type": {
  //     "href": "/v2/types/dog"
  //   },
  //   "organization": {
  //     "href": "/v2/organizations/mn330"
  //   }
  // }