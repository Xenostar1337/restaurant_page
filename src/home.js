export function homeLoad() {
const homeButton = document.querySelector("#home-btn");
const contentArea = document.getElementById("content");
const newContent1 = document.createElement('p');
const newPic = document.createElement('img');
const newContent2 = document.createElement('div');
contentArea.style.display = "grid";
contentArea.style.height = "75%";
contentArea.style.overflowY = "scroll";
newPic.src = './images/burgerman.jpg'
newPic.style.width = "98%";
homeButton.style.backgroundColor = "rgba(0, 40, 40, 0.9)";
newContent1.textContent = "Driven by his love for both surfing and food, Kai dreamt of a haven where he could indulge in hearty meals without having to leave the beach. A place where the aroma of freshly grilled pineapple and beef mingled with the salty breeze, and sandy feet were not just tolerated but welcomed with open arms.";
newContent2.textContent = "HIGHTIDE was born, a laid-back oasis nestled along the shoreline, where surfboards leaned against palm trees and the sound of crashing waves provided the perfect backdrop for a culinary adventure. Here, amidst the sandy shores and endless horizons, Kai found not only a place to satisfy his hunger but a way to share his love for surfing and food with the world."
contentArea.appendChild(newContent1);
contentArea.appendChild(newPic);
contentArea.appendChild(newContent2);
}