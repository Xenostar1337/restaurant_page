export function homeLoad() {
const homeButton = document.querySelector("#home-btn");
const contentArea = document.getElementById("content");
const newContent1 = document.createElement('p');
const newPic = document.createElement('img');
const newContent2 = document.createElement('div');
const newContent3 = document.createElement('div');
const newContent4 = document.createElement('div');
const newContent5 = document.createElement('div');
contentArea.style.display = "grid";
contentArea.style.height = "70%";
newPic.src = './images/cafemap.jpg'
newPic.style.width = "98%";
homeButton.style.backgroundColor = "rgba(0, 40, 40, 0.9)";
newContent1.textContent = "We're conveniently located in the sand! Just north of main street approach.";
newContent2.textContent = "-Hours-";  
newContent3.textContent = "M-F:  11a - 5p";
newContent4.textContent = "Sat/Sun 12a-4pm";
newContent5.textContent = "Phone: 555-555-5555";
contentArea.appendChild(newContent1);
contentArea.appendChild(newPic);
contentArea.appendChild(newContent2);
contentArea.appendChild(newContent3);
contentArea.appendChild(newContent4);
contentArea.appendChild(newContent5);
}