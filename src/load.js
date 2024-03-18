
import cafe from './images/surfcafe.jpg';
import waves from './images/aiwaves.jpg';
const contentDiv = document.getElementById('content'); //clear this
const newHeader = document.querySelector('.title');
const page = document.querySelector('.page');
const contentHolder = document.querySelector('.card');
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");


function backgroundLoad() {
    let bg = document.body.style;
    bg.backgroundImage = 'url(' + waves + ')';
    bg.backgroundSize = "100vw 100vh";
    bg.display = "flex";
    bg.justifyContent = "center";
    pageLoad();
}

function pageLoad() {        
    let nav = document.querySelector("nav");
    //nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";
    nav.style.paddingTop = "10px";
    nav.style.width = "90%";
    nav.style.marginLeft = "auto";
    nav.style.marginRight = "auto";
    nav.style.marginBottom = "-21px";
    nav.style.borderRadius = "20px 20px 0 0 ";    
    homeButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 50px 10px 50px";
    homeButton.style.borderRadius = "10px 10px 0 0 ";
    homeButton.style.borderStyle = "none";
    menuButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    menuButton.style.color = "white";
    menuButton.style.padding = "10px 50px 10px 50px";
    menuButton.style.borderRadius = "10px 10px 0 0 ";
    menuButton.style.borderStyle = "none";
    aboutButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    aboutButton.style.color = "white";
    aboutButton.style.padding = "10px 50px 10px 50px";
    aboutButton.style.borderRadius = "10px 10px 0 0 ";
    aboutButton.style.borderStyle = "none";
    let p = page.style; 
    p.backgroundImage = 'url(' + cafe + ')';
    p.backgroundSize = "cover"
    p.height = "80vh";
    p.width = "60vh";
    p.borderRadius = "20px";
    p.padding = "50px"; 
    let h = newHeader.style;
    h.display = "grid";         
    h.backgroundColor = "rgba(0, 150, 175, 0.1)";
    h.color = "white";
    h.borderRadius = "20px 20px 0px 0px";
    h.justifyItems = "center";
    h.paddingTop = "20px"; 
    h.marginLeft = "-50px";
    h.marginRight = "-50px";
    contentHolder.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    contentHolder.style.borderRadius = "30px";
    contentHolder.style.paddingLeft = "50px";
    contentHolder.style.paddingRight = "50px";
    contentHolder.style.height = "90%";
    contentHolder.style.color = "white";
    contentHolder.style.margin = "0px";  
       
}

async function homeLoad() {
    const homeModule = await import('./home.js');
}

backgroundLoad();
homeLoad();



//body  page  card 