


export function homeLoad() {
const homeButton = document.querySelector("#home-btn");
const contentArea = document.getElementById("content");
const newContent1 = document.createElement('p');
const newPic = document.createElement('img');
newPic.src = './home.js'
homeButton.style.backgroundColor = "rgba(0, 40, 40, 0.9)";
newContent1.textContent = "Driven by his love for both surfing and food, Kai dreamt of a haven where he could indulge in hearty meals without having to leave the beach. A place where the aroma of freshly grilled pineapple and beef mingled with the salty breeze, and sandy feet were not just tolerated but welcomed with open arms.";

contentArea.appendChild(newContent1);
contentArea.appendChild(newPic);

}