async function fetchRecipes() {
  const resp = await fetch(`http://localhost:3000/recipes`);
  const data = await resp.json();
  console.log(data);
  data ? appendRecipes(data) : showError(error);
}

function appendRecipes(data) {
  const recipes = document.querySelector('#recipes');
  data.forEach((r) => {
    const li = document.createElement('li');
    li.textContent = `${r.name} : ${r.price}`;
    recipes.append(li);
  });
}

function showError(err) {
  const banner = document.createElement('div');
  banner.style.width = '100vv';
  banner.style.backgroundColor = 'red';
  banner.textContent = err;
  document.body.append(banner);
}

document.querySelector('#fetch').addEventListener('click', fetchRecipes);
