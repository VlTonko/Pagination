const url = 'https://jsonplaceholder.typicode.com/photos?_limit=200';
let arrResult = [];


async function getFotos() {
  const res = await fetch(url);
  const data =  await res.json();
  arrResult = [...data]
  console.log(arrResult);
}

getFotos();

//console.log(arrResult);
//console.log(arrResult.length);
