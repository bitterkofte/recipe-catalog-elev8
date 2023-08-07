const implement = (meals) => {
  const mealTiles = meals.map((m) => {

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
  const container = document.getElementById("elementContainer");
  mealTiles.reverse().forEach((element) => {
    container.insertAdjacentHTML("afterbegin", element)
  });
};

implement(meals);