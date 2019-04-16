document.addEventListener('DOMContentLoaded', () => {
  var liste_html = document.getElementById('liste')
  var search = document.getElementById('search')
  var liste_users;

  search.addEventListener('keyup', searchHandler)

  function searchHandler(e) {
    axios.post('/users', {search: e.target.value})
    .then(response => {
      liste_html.innerHTML = ''
      console.log(response)
      liste_users = response.data.liste
      for (let user of response.data.liste) {
        liste_html.innerHTML += `<li>${user.username}</li>`
      }
    })
    // liste_html.innerHTML = ''
    // for (let user of liste_users) {
    //   if (user.username.includes(e.target.value)) {
    //     liste_html.innerHTML += `<li>${user.username}</li>`
    //   }
    // }
    // liste_users
    // .filter(usr => usr.username.includes(e.target.value))
    // .forEach(usr => {
    //     liste_html.innerHTML += `<li>${user.username}</li>`
    // })
  }



  console.log('IronGenerator JS imported successfully!');
  axios.post('/users', {search: ''})
  .then(response => {
    console.log(response)
    liste_users = response.data.liste
    for (let user of response.data.liste) {
      liste_html.innerHTML += `<li>${user.username}</li>`
    }
  })

}, false);
