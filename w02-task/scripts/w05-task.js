// w05-task.js


const templesElement = document.getElementById("temples");
const templeList = [];

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};


const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList.length = 0; // Clear existing data
  templeList.push(...await response.json());
  displayTemples(templeList);
};


const reset = () => {
  templesElement.innerHTML = ""; // Clear all articles
};


const filterTemples = (temples) => {
  reset();
  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      const before1950 = new Date(1950, 0, 1);
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < before1950));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};


document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});


getTemples();
