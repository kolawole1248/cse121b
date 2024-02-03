/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Kolawole Uthman",
  photo: "images/profile.jpeg",
  favoriteFoods: [
    "Rice",
    "Beans",
    "Yam and Egg",
    "Swallow Food",
    "Bread and Butter",
  ],
  hobbies: [
    "💡 Playing Football",
    "💡 Writing code",
    "💡 Video Games",
    "💡 Watching movies",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Oke ola  ",
  lenght: "8 years",
});

myProfile.placesLived.push({
  place: "Asubiaro osogbo",
  lenght: "5 years",
});

myProfile.placesLived.push({
  place: "Oke baale osogbo",
  lenght: "10 years ",
});
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", myProfile.name + "'s image");
/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */

myProfile.hobbies.forEach((hobbies) => {
  let li = document.createElement("li");
  li.textContent = hobbies;
  document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
  let dt = document.createElement("dt");
  dt.textContent = places.place;
  document.querySelector("#places-lived").appendChild(dt);

  //lenght

  let dd = document.createElement("dd");
  dd.textContent = places.lenght;
  document.querySelector("#places-lived").appendChild(dd);
});
//myProfile.placesLived.forEach((length) => {