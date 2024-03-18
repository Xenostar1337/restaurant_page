export function clear() {
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");
const contentContainer = document.getElementById("content");
homeButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
menuButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
aboutButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
contentContainer.innerHTML = ''; // This will remove all child elements

}




