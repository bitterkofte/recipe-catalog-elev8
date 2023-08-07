const implement = (meals) => {
  const mealTiles = meals.map((m) => {
    const tile = `
    <div class="recipe">
      <div class="head">
        <img src="../assets/${m.image}" alt="img">
        <div class='right-side'>
          <h3 class="title">${m.title}</h3>
          <div class='info'>
            <div class='info-left'>
              <p class='m-type'>${m.type}</p>
              <p class='prep'><i class="fa-solid fa-clock"></i> : ${m.prep}</p>
              <p class='time'><i class="fa-solid fa-bowl-rice"></i> : ${m.time}</p>
            </div>
            <div class='info-right'>
              <div class="star">
                <span class="star-num">${m.stars}</span>
                <span class="material-symbols-outlined star-icon">star</span>
              </div>
              <p class='difc'><i class="fa-solid fa-book"></i> : ${m.difficulity}</p>
              <p class='serves'><i class="fa-solid fa-utensils"></i> : ${m.serves}</p>
            </div>
          </div>
          <div class=''>
            <h4 class=''>Nutrition</h4>
            <table class=''>
              <tr>
                <td><span class="tag">kcal</span> <br> ${m.nutrition.kcal}</td>
                <td><span class="tag">fat</span> <br> ${m.nutrition.fat}</td>
                <td><span class="tag">saturates</span> <br> ${m.nutrition.saturates}</td>
                <td><span class="tag">carbs</span> <br> ${m.nutrition.carbs}</td>
              </tr>
              <tr>
                <td><span class="tag">sugar</span> <br> ${m.nutrition.sugars}</td>
                <td><span class="tag">fibre</span> <br> ${m.nutrition.fibre}</td>
                <td><span class="tag">protein</span> <br> ${m.nutrition.protein}</td>
                <td><span class="tag">salt</span> <br> ${m.nutrition.salt}</td>
              </tr>
            </table>
          </div>
          <div class='desc-div'>
            <h4 class=''>Description</h4>
            <p class="desc">${m.description}</p>  
          </div>
          <a href="#comments" class='comm'>
            <h4>Comments</h4>
            <i class="fa-solid fa-arrow-down"></i>
          </a>

        </div>
      </div>
      <div class='foot'>
        <div class='ingr'>
          <h3><i class="fa-solid fa-plate-wheat"></i> Ingredients:</h3>
          <ul>${m.ingredients.map(a => `<li class=''>${a}</li>`)}</ul>
        </div>
        <div class='method'>
          <h3><i class="fa-solid fa-fire-burner"></i> Method:</h3>
          <ul>${m.steps.map((m, i) => `<h4 class=''>Step${i+1}:</h4> <li class=''>${m}</li>`)}</ul>
        </div>
        <div id=comments class='comments'>
          <h2><i class="fa-solid fa-comments"></i> Comments:</h2>
          <div>
            ${m.comments.map((c, i) => {
              return `
              <h4 class=''>${c.username}:</h4>
              <p class=''>${c.comment}</p>
              `}
            )}
          </div>
        </div>
      </div>
    </div>`;

    return tile;
  });
  console.log("mealTiles: ", mealTiles);
  console.log("meals: ", meals);

  // mealTiles.forEach((element) => {
  //   container.appendChild(element);
  // });
  let container;
  mealTiles.forEach((e, i) => {
    console.log("container: ", meals[i].id)
    console.log("content: ", e)
    container = document.getElementById(`${meals[i].id}-container`);
    // container = document.getElementById("lahmacun-container");
    container?.insertAdjacentHTML("afterbegin", e)
    // container.appendChild(e);
  });
};

implement(meals);