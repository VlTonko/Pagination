const url = 'https://jsonplaceholder.typicode.com/photos?_limit=200';
let arrResult = [];



getFotos();

async function getFotos() {
  const res = await fetch(url);
  const data =  await res.json();
  arrResult = [...data];

  console.log(arrResult);
  createPagination();
  showPages(items[0]); //Отображаем первую страницу



  viewPages();
}

