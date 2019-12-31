var url = 'http://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type='
var auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY2NjQyYzYxYTcxM2Q3MjUxYTFhNDY3YTg1MTkyNzNlNTc2ZWZkODg2ZmU4M2M1MGQ2ODQ1MmQ3NjUyNmYzNTgyN2UwMWQxNDZmMjg0ZmFmIn0.eyJhdWQiOiJVamhDTUhvdmtVTkJkMUUzN0VMc0ZDakFDVjRjSUZyemIzZlNWUTI5Q3BEZ1dST1c0NyIsImp0aSI6ImY2NjQyYzYxYTcxM2Q3MjUxYTFhNDY3YTg1MTkyNzNlNTc2ZWZkODg2ZmU4M2M1MGQ2ODQ1MmQ3NjUyNmYzNTgyN2UwMWQxNDZmMjg0ZmFmIiwiaWF0IjoxNTc3ODAxNTcwLCJuYmYiOjE1Nzc4MDE1NzAsImV4cCI6MTU3NzgwNTE3MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.buWbIzLVhUB6i05_4kYPPmlaQxtrpcNWblUTi1oSZYtR-nKi5eBTeSSClnuiyVVXj2mEPijlB5684zXQEraWqKNbUxsts8t9McJILbBDcwitG86Z1BR96lLz7on2XjMxpW0ntfoubr4yzwHKQzpEEv-mjTnIuJL7auOmiQ7tMiBwcX3WYIOnEXIs8gQAFgdxVIULa6pqbIenSKMZmJe-G64QL4PuP4hKr_ODZbr8rvbQrf4fz4I2N2a0Ff4TZW6oinX-OS67FjtOR458faWAOAmiSAulUVyxNrPm09pMZr8LlhMDLE8YF0F4bogpXcKS7mlFd5O_0gYAJnoxczN9OA'
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
  fetch(url + term, options)
  .then(res => res.json())
  .then(data => {
    loadAnimals(data.animals)
  })
}

// LISTED SEARCH RESULTS PAGE - parent element
var mainContent = document.getElementById('mainContent')

function loadAnimals(animals) {
  // clear out previous search results
  mainContent.innerHTML = ''

  // set animal list parent element styles
  mainContent.style.columns = 2
  mainContent.style.padding = '20px'
  mainContent.style.width = '100%'

  if (animals) {
    // the animal component
    animals.forEach(e => {
    // everything goes in this link
      // FIGURE OUT ROUTES!!!!!
      var ref = document.createElement('a')
      ref.href = e.id // FIGURE OUT ROUTING!!!
      var animal = document.createElement('div')
      animal.className = 'animal'

      // animal profile
      let name = document.createElement('h2')
      name.innerHTML = e.name
      animal.appendChild(name)
      let profile = document.createElement('p')
      profile.innerHTML = e.age + (e.gender == "Unknown" ? '' : ' ' + e.gender) + ' ' + e.species
      animal.appendChild(profile)

      // animal picture
      if (e.photos[0]) {
        let pic = document.createElement('img')
        pic.className = 'animalPic'
        pic.style.width = '100%'
        pic.src = e.photos[0].large
        animal.appendChild(pic)
      } else {
        let noImage = document.createElement('div')
        noImage.innerHTML = 'No image available'
        noImage.className = 'noPic'
        animal.appendChild(noImage)
      }

      //details
      var description = document.createElement('p')
      description.className = 'details'
      description.innerHTML = e.description
      animal.appendChild(description)

      // append to the housing link and main content element
      ref.appendChild(animal)
      mainContent.appendChild(ref)
    })
  }
}

// select animal type drop down
async function animalTypes(){
  await fetch('http://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/types', options)
  .then(res => res.json())
  .then(data => {
    data.types.forEach(type => {
      makeOption(type.name, type._links.self.href)
    })
  })  
} 

// get drop-down options
async function getTypes() {
  var types = await animalTypes()
  if (types) {
    types.forEach(type => {
      makeOption(type)
    })
  }
}

// make option elements for select drop-down element
// options descriptions are not formatted for search - must set option.value to the link text
function makeOption(value, link) {
  var option = document.createElement('option')
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

//   {id: 46975568, organization_id: "OH621", url: "https://www.petfinder.com/rabbit/fion-46975568/oh/…?referrer_id=c275cabb-cd01-44f6-8e01-4c1084ae9c6e", type: "Rabbit", species: "Rabbit", …}
// id: 46975568
// organization_id: "OH621"
// url: "https://www.petfinder.com/rabbit/fion-46975568/oh/youngstown/f5rs-frisky-ferrets-fuzzies-feathered-friends-rescue-oh621/?referrer_id=c275cabb-cd01-44f6-8e01-4c1084ae9c6e"
// type: "Rabbit"
// species: "Rabbit"
// breeds: {primary: "Bunny Rabbit", secondary: null, mixed: true, unknown: false}
// colors: {primary: "Brown / Chocolate", secondary: "White", tertiary: null}
// age: "Adult"
// gender: "Male"
// size: "Small"
// coat: "Short"
// attributes: {spayed_neutered: true, house_trained: true, declawed: null, special_needs: false, shots_current: false}
// environment: {children: null, dogs: null, cats: null}
// tags: []
// name: "Fion"
// description: "Another bun who ran loose for months, Fion is a little shy but loves his toys and being petted"
// photos: (3) [{…}, {…}, {…}]
// status: "adoptable"
// status_changed_at: "2019-12-31T00:12:16+0000"
// published_at: "2019-12-31T00:12:16+0000"
// distance: null
// contact: {email: "F5Rescue@yahoo.com", phone: null, address: {…}}
// _links: {self: {…}, type: {…}, organization: {…}}
// __proto__: Object