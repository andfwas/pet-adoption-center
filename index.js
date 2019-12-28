var y = []
var a = ' ! '
var canary = '*@*@*@*@*@*@*'

canary.toUpperCase().split('').forEach(e => {
  y.push(' ' + e + ' ')
  console.log(' '.repeat(canary.length*3 - y.length*3) + a + y.join(a) + a)
  console.log('Merry F-ing Christmas'.toUpperCase().split('').join(' @ '))
});

// var number = 20

// function xmasTree(num) {
//   for (let i = 0; i < num; i++) {
//     console.log(' '.repeat((num-i)*2) + '*!*!'.repeat(i))
//   }
// }
// xmasTree(number)

var searchTerm = document.getElementById('searchInput')
var searchForm = document.getElementById('search')
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(searchTerm.value)
  console.log(e)
})
