const dList = document.querySelector("ul#categories");
const dItems = dList.querySelectorAll(".item");
console.log(`Number of categories: ${dItems.length}`);
dItems.forEach(el => {
    const elText = el.querySelector("h2").textContent;
    const itemsCount = el.querySelectorAll("ul li").length;
    console.log(`Category: ${elText}`);
    console.log(`Elements: ${itemsCount}`);
});

 