document.addEventListener('DOMContentLoaded', () => {
  var liste_html = document.getElementById('liste')
  var search = document.getElementById('search')
  var liste_users;

  search.addEventListener('keyup', searchHandler)
  document.getElementById('min').addEventListener('change', searchHandler)
  document.getElementById('max').addEventListener('change', searchHandler)

  function searchHandler() {
    let searchValue = document.getElementById('search').value
    let minValue = document.getElementById('min').value
    let maxValue = document.getElementById('max').value

    axios.post('/users', {search: searchValue, min: minValue, max: maxValue})
    .then(response => {
      liste_html.innerHTML = ''
      console.log(response)
      liste_users = response.data.liste
      for (let user of response.data.liste) {
        liste_html.innerHTML += `<li>${user.username} -- ${user.age}</li>`
      }
    })
    // liste_html.innerHTML = ''
    // for (let user of liste_users) {
    //   if (user.username.includes(e.target.value)) {
    //     liste_html.innerHTML += `<li>${user.username} -- ${user.age}</li>`
    //   }
    // }
    // liste_users
    // .filter(usr => usr.username.includes(e.target.value))
    // .forEach(usr => {
    //     liste_html.innerHTML += `<li>${user.username} -- ${user.age}</li>`
    // })
  }



  console.log('IronGenerator JS imported successfully!');
  searchHandler();
  // axios.post('/users', {search: ''})
  // .then(response => {
  //   console.log(response)
  //   liste_users = response.data.liste
  //   for (let user of response.data.liste) {
  //     liste_html.innerHTML += `<li>${user.username} -- ${user.age}</li>`
  //   }
  // })

}, false);
