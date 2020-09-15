let baseURL = "https://randomuser.me/api/";

let button = document.getElementById("btn");
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let username = document.getElementById("username");
let pic = document.getElementById("pic");

let person = {};

function populateResults(person) {
  let first = person.name.first;
  let title = person.name.title;
  let last = person.name.last;
  name.innerText = `${title} ${first} ${last}`;
  gender.innerText = person.gender;
  email.innerText = person.email;
  username.innerText = person.login.username;
  pic.src = person.picture.large;
  console.log(typeof person.dob.date);
}

button.addEventListener("click", () => {
  //console.log("click");
  axios
    .get(baseURL)
    .then(function (response) {
      // handle success
      console.log(response.data.results[0]);
      person = response.data.results[0];
      populateResults(person);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});
