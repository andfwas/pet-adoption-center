var url =  ''
var auth = ''
var searchTerm = document.getElementById('searchInput')
var options = {
  headers: {
    Authorization: auth,
    type: searchTerm.value
  }
};

function getPets() {
  fetch(url, options)
    .then( res => res.json() )
    .then( data => console.log(data) );
}

var searchButton = document.getElementById('search')
searchButton.addEventListener('submit', (e) => {
  e.preventDefault();
  let val = searchTerm.value
  options.type = val
  console.log(url)
  console.log(options)
  searchTerm.value = ''
  getPets()
})


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


// LISTED SEARCH RESULTS PAGE
// parent element
var thediv = document.getElementById('thediv')

// let's make a reusable function out of this
// this also needs better ui component structure
// needs to be a link to individual pet "page"
animals.animals.forEach(e => {
  let name = document.createElement('h1')
  thediv.appendChild(name)
  name.innerHTML = e.name
  if (e.photos[0]) {
    let pic = document.createElement('img')
    pic.src = e.photos[0].large
    thediv.appendChild(pic)
  } else {
    let problem = document.createElement('p')
    problem.innerHTML = 'no pictures'
    thediv.appendChild(problem)
  }
});



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