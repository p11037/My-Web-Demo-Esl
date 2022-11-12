const search = () => {
  const searchBox = document.getElementById("search-users").value.toUpperCase();
  const userCards = document.getElementById("user-cards")
  const users = document.querySelectorAll(".card")
  const userName = document.getElementsByTagName("h2")

  for (var i = 0; i < userName.length; i++) {
      let match = users[i].getElementsByTagName('h2')[0];

      if (match) {
        let textvalue = match.textContent || match.innerHTML

        if (textvalue.toUpperCase().indexOf(searchBox) > -1){
          users[i].style.display = "";
        } else {
          users[i].style.display = "none";
        }
      }
  }
}