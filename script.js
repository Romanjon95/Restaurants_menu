// Add container
const container = document.getElementById('container');

// Add buttons
const allBtn = document.getElementById('all');
const breakfastBtn = document.getElementById('breakfast');
const lunchBtn = document.getElementById('lunch');
const dinnerBtn = document.getElementById('dinner');
const shakesBtn = document.getElementById('shakes');

// Add button listeners
allBtn.addEventListener('click', () => renderDishesByCategory('all'));
breakfastBtn.addEventListener('click', () => renderDishesByCategory('breakfast'));
lunchBtn.addEventListener('click', () => renderDishesByCategory('lunch'));
dinnerBtn.addEventListener('click', () => renderDishesByCategory('dinner'));
shakesBtn.addEventListener('click', () => renderDishesByCategory('shakes'));

// Render all by default
renderDishesByCategory('all');

function renderDishesByCategory(category) {
  const filteredDishes = category === 'all'
    ? dishes
    : dishes.filter(dish => dish.category.includes(category));
  renderDishes(filteredDishes);
}

function renderDishes(dishes) {
  container.innerHTML = dishes.map(renderDish).join('');
}

// Function that returns html for a single dish
function renderDish(dish) {
  return `
  <div class="box">
  <img src='${dish.img}'/>
    <div class="inner_box">
      <div>
        <h1>${dish.name}</h1>
        <h2>${dish.price}</h2>
      </div>
      <hr></hr>
      <p>${dish.text}</p>
    </div>
  </div>
  `;
}