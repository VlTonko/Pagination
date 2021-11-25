const url = 'https://jsonplaceholder.typicode.com/photos?_limit=200';
const arrResult = [];

async function getFotos() {
  await fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => data.forEach((obj) => arrResult.push(obj)))
    .catch(function (error) {
      console.log(error);
    });
}
getFotos();

console.log(arrResult);
console.log(arrResult.length);
