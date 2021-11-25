let pictures = document.querySelector('.pictures');
let notesOnPage = 30;
let pagination = document.querySelector('#pagination');
let numbersPag = Math.ceil(arrResult.length / notesOnPage);
let items = [];

createPagination();

function createPagination() {
  for (let i = 1; i <= numbersPag; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
  }
}

showPages(items[0]);

function viewPages() {
  for (let item of items) {
    item.addEventListener('click', function () {
      showPages(this);
    });
  }
}
viewPages();

function showPages(item) {
  let activLi = document.querySelector('#pagination li.active');
  if (activLi) {
    activLi.classList.remove('active');
  }
  item.classList.add('active');

  let pageNum = +item.textContent;
  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;
  let notes = arrResult.slice(start, end);

  pictures.textContent = '';
  for (let note of notes) {
    let blockDiv = document.createElement('div');
    blockDiv.classList.add('blockImg');
    let blockImg = document.createElement('img');
    blockImg.setAttribute('src', note.thumbnailUrl);
    blockDiv.appendChild(blockImg);
    pictures.appendChild(blockDiv);
  }
}
