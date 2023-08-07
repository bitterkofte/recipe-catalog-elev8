// import meals from "./meals"

fetch("meals.json")
  .then((response) => response.json())
  .then((data) => {
    // data.map(m => console.log("YEMEK: ", m.title))
    implement(data);
  })
  .catch((error) => {
    console.error("ERR::", error);
  });

const implement = (meals) => {
  const mealTiles = meals.map((m) => {
    // const tile = document.createElement("div");
    // const title = document.createElement("h3");
    // title.textContent = m.title;

    // const stars = document.createElement("p");
    // stars.textContent = m.stars;

    // const description = document.createElement("p");
    // description.textContent = m.description;

    // const time = document.createElement("p");
    // time.textContent = m.time;
    // tile.append(title, stars, description, time);
    const tile = `<div class="tile">
      <img src="./assets/${m.image}" alt="img">
      <div class='right-side'>
        <h3>${m.title}</h3>
        <div class='info'>
          <div class=''>
            ${m.time}
          </div>
          <div class="star">
            <span class="star-num">${m.stars}</span>
            <span class="material-symbols-outlined star-icon">star</span>
          </div>
        </div>
        <p class="desc">${m.description}</p>
        <a href="./recipes/${m.id}.html" class="view">View Recipe</a>
      </div>
    </div>`

    return tile;
  });
  console.log("aaaaaa",mealTiles);
  const container = document.getElementById("elementContainer");
  // mealTiles.forEach((element) => {
  //   container.appendChild(element);
  // });
  mealTiles.reverse().forEach((element) => {
    container.insertAdjacentHTML("afterbegin", element)
  });
};
