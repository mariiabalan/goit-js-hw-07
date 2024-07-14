// Отримуємо посилання на всі елементи li з класом item у списку ul#categories
const categories = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Для кожного елемента li з класом item
categories.forEach(category => {
  // Знаходимо і виводимо заголовок категорії
  const categoryName = category.querySelector('h2').textContent;
  // Знаходимо і виводимо кількість елементів у категорії
  const itemsCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});