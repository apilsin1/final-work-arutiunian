// Функция debounce
function debounce(fn, ms) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}

// Находим поле поиска в HTML (например, с id="search-input")
const searchInput = document.querySelector('#search-input');

// Функция, которая будет обрабатывать ввод
function handleSearch(event) {
  console.log('Введений текст:', event.target.value);
}

// Подключаем debounce с задержкой 500 мс к событию input
searchInput.addEventListener('input', debounce(handleSearch, 500));