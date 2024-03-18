const homeButton = document.querySelector("#home-btn");
const contentHolder = document.getElementById("content");
const newContent = document.createElement('p');
homeButton.style.backgroundColor = "rgba(0, 15, 17.5, 0.9)";
newContent.textContent = "World Famous Grim Jim's Burgers: Juicy, flavorful patties grilled to perfection, nestled between fresh buns, delivering an unmatched taste sensation to burger enthusiasts worldwide.";
contentHolder.appendChild(newContent);

//append to card