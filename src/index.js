import cafe from './images/surfcafe.jpg';
import waves from './images/aiwaves.jpg'; 
import './images/burgerman.jpg';
import * as homeFunctions from './home.js';
import * as reLoad from './load.js';

//build webpage basics

//variables
const page = document.querySelector('.page');
const contentHolder = document.querySelector('.card');
const cafeTitle = document.querySelector('#title');
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");
const cafeST = document.querySelector('#subTitle');
//functions
function backgroundLoad() {
    let bg = document.body.style;
    bg.backgroundImage = 'url(' + waves + ')';
    bg.backgroundSize = "100vw 100vh";
    bg.display = "flex";
    bg.justifyContent = "center";
    let p = page.style; 
    p.backgroundImage = 'url(' + cafe + ')';
    p.backgroundSize = "cover"
    p.height = "88vh";
    p.width = "66vh";
    p.borderRadius = "20px";
    p.padding = "50px"; 
    contentHolder.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    contentHolder.style.borderRadius = "30px";
    contentHolder.style.paddingLeft = "50px";
    contentHolder.style.paddingRight = "50px";
    contentHolder.style.height = "95%";
    contentHolder.style.color = "white";
    contentHolder.style.margin = "0px"; 
    contentHolder.style.fontFamily = "Original Surfer";
    let nav = document.querySelector("nav");
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";
    nav.style.paddingTop = "10px";
    nav.style.width = "80%";
    nav.style.marginLeft = "auto";
    nav.style.marginRight = "auto";
    nav.style.marginBottom = "0px";
    nav.style.borderRadius = "20px 20px 0 0 ";  
    homeButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    homeButton.style.color = "white";
    homeButton.style.padding = "10px 30px 10px 30px";
    homeButton.style.borderRadius = "10px 10px 0 0 ";
    homeButton.style.borderStyle = "none";
    menuButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    menuButton.style.color = "white";
    menuButton.style.padding = "10px 30px 10px 30px";
    menuButton.style.borderRadius = "10px 10px 0 0 ";
    menuButton.style.borderStyle = "none";
    aboutButton.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    aboutButton.style.color = "white";
    aboutButton.style.padding = "10px 20px 10px 20px";
    aboutButton.style.borderRadius = "10px 10px 0 0 ";
    aboutButton.style.borderStyle = "none";
    let t = cafeTitle.style;
    t.display = "grid";         
    t.backgroundColor = "rgba(0, 100, 100, 0.4)";
    t.fontSize = "75px";
    t.color = "aqua";
    t.borderRadius = "30px 30px 0px 0px";
    t.justifyItems = "center";
    t.padding = "5px"; 
    t.paddingLeft = "20px";
    t.paddingRight = "20px";
    t.marginLeft = "-50px";
    t.marginRight = "-50px";
    let st = cafeST.style;
    st.display = "grid";         
    st.backgroundColor = "rgba(0, 100, 100, 0.4)";
    st.color = "orange";
    st.fontSize = "28px";
    st.justifyItems = "center";
    st.padding = "10px"; 
    st.marginLeft = "-50px";
    st.marginRight = "-50px";   
}

function handleHomeButtonClick() {
    reLoad.clear();
    homeFunctions.homeLoad();
}

function handleMenuButtonClick() {
    // Add your code to handle the click event for the menu button
}

function handleAboutButtonClick() {
    // Add your code to handle the click event for the about button
}




// button click listeners
homeButton.addEventListener("click", handleHomeButtonClick);
menuButton.addEventListener("click", handleMenuButtonClick);
aboutButton.addEventListener("click", handleAboutButtonClick);




// code here
//load page
backgroundLoad();
//default to home?
