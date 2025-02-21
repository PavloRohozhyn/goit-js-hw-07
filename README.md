### Завдання 1. ([ task-1.js ](./js/task-1.js))

HTML містить список категорій `ul#categories`.
```
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

 - Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів `li.item`.
 - Для кожного елемента `li.item` у списку `ul#categories` знайде й виведе в консоль текст заголовка елемента (тегу `<h2>`) і кількість елементів у категорії (усіх `<li>`, вкладених у нього).


### Завдання 2. ([ task-2.js ](./js/task-2.js))

Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список `ul.gallery`.
```
<ul class="gallery"></ul>
```
Використовуй масив об'єктів `images` для створення елементів `<img>`, вкладених в `<li>`.

Ти можеш створити й додати HTML-елементи, використовуючи `document.createElement()` і `elem.append()` або шаблонні рядки і `elem.insertAdjacentHTML()`.

Усі елементи галереї повинні додаватися в `DOM` за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами через `CSS` класи.

```
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

### Завдання 3. ([ task-3.js ](./js/task-3.js))

Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія `input`) підставляє його поточне значення в `span#name-output` як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок `"Anonymous"`.

```
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```


### Завдання 4. ([ task-4.js ](./js/task-4.js))

Напиши скрипт управління формою логіна.
```
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```
 - відправлення форми `form.login-form` повинна відбуватися за подією `submit`.
 - Під час відправлення форми сторінка не повинна перезавантажуватися.
 - Якщо при сабміті у формі є незаповнені поля, виводь `alert` з попередженням про те, що `'All form fields must be filled in'`. Не додавай на інпути атрибут `required`, валідація має відбуватися саме через `JS`.
 - Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість `elements`.
 - При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом `reset`.

### Завдання 5. ([ task-3.js ](./js/task-5.js))

Напиши скрипт, який змінює колір фону елемента `<body>` через інлайн-стиль по кліку на `button.change-color` і задає це значення кольору текстовим вмістом для `span.color`.
```
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

```
Для генерування випадкового кольору використовуй функцію `getRandomHexColor()`.
```
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```
Зверни увагу, що функція `getRandomHexColor()` повертає колір у `hex`-форматі, в той час як колір фону на `<body>` буде у форматі `rgb`. Це нормально й не потребує якихось правок.

### Завдання 6. ([ task-4.js ](./js/task-6.js))

Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є `input`, у який користувач вводить бажану кількість елементів. Після натискання на кнопку `Create` має рендеритися (додаватися в `DOM`) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку `Create` поверх старої колекції має рендеритись нова. Після натискання на кнопку `Destroy` колекція елементів має очищатися.

```
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Після натискання користувачем на кнопку `Create` треба провалідувати значення в `input`, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові `<div>` елементи в `DOM`.

Для рендеру елементів на сторінці створи функцію `createBoxes(amount)`, яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

Функція має створювати стільки `<div>` елементів, скільки вказано в параметрі `amount` і додавати їх у `DOM` дочірніми елементами для `div#boxes`.

 - Розміри першого `<div>` елемента мають бути `30px` на `30px`.
 - Кожен наступний елемент повинен бути ширшим і вищим від попереднього на `10px`.
 - Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію `getRandomHexColor()` для отримання випадкового кольору.

 ```
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Для очищення колекції після натискання на кнопку `Destroy` створи функцію `destroyBoxes()`, яка очищає вміст `div#boxes`, у такий спосіб видаляючи всі створені елементи.
