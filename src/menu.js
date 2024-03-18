export function menuLoad() {
    const menuButton = document.querySelector("#menu-btn");
    const contentArea = document.getElementById("content");
    const newContent1 = document.createElement('p');
    const newPic1 = document.createElement('img');
    const newContent2 = document.createElement('div');
    const newPic2 = document.createElement('img');
    const newContent3 = document.createElement('div');
    const newPic3 = document.createElement('img');
    contentArea.style.display = "grid";
    contentArea.style.height = "70%";
    contentArea.style.overflowY = "scroll";
    newPic1.src = './images/beachBurger.png'
    newPic1.style.width = "98%";
    newPic2.src = './images/hotburger.png';
    newPic2.style.width = "98%";
    newPic3.src = './images/Poutine.png';
    newPic3.style.width = "98%";
    menuButton.style.backgroundColor = "rgba(0, 40, 40, 0.9)";
    newContent1.textContent = "Introducing the Surfer Burger: a beachside favorite. Juicy beef, grilled to perfection, topped with pineapple, lettuce, tomato, and mango salsa. Perfect fuel for your next wave.";
    newContent2.textContent = "Spicy Hawaiian Burger: Fiery beef and sweet pineapple, smothered Mauna Loa volcano sauce, and crisp lettuce on toasted buns. Flavor explosion in every bite.";
    newContent3.textContent = " Ride the waves of flavor with this portable twist on a classic. Picture yourself catching the perfect wave while savoring the indulgent combination of crispy fries, squeaky cheese curds, and savory gravy!"
    contentArea.appendChild(newPic1);
    contentArea.appendChild(newContent1);
    contentArea.appendChild(newPic2);
    contentArea.appendChild(newContent2);
    contentArea.appendChild(newPic3);
    contentArea.appendChild(newContent3);
    }


    //loads menu