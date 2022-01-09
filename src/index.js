import './style.css';
import houseImg from './house.webp';
import chickenImg from './chicken.jpg';

const heading = (() => {
    const header = document.getElementById("myHeader");
    const headerDiv = document.createElement('div');
    headerDiv.classList.add("header-div");
    const pictureDiv = document.createElement('div');
    pictureDiv.setAttribute('id', "house");
    const myhouseImg = document.createElement('img');
    myhouseImg.src = houseImg;
    pictureDiv.appendChild(myhouseImg);
    headerDiv.appendChild(pictureDiv);
    const mottoButton = document.createElement('div');
    mottoButton.classList.add("motto-button");
    const motto = document.createElement('div');
    motto.setAttribute('id', "motto");
    motto.textContent = 'Chinese Takeaway Done Right'
    mottoButton.appendChild(motto);
    const orderButton = document.createElement('button');
    orderButton.textContent = "Order Online"
    orderButton.setAttribute('id', "orderButton");
    mottoButton.appendChild(orderButton);
    const restaurantAddress = document.createElement('div');
    restaurantAddress.setAttribute("id", "rAddress");
    restaurantAddress.textContent = "19 Blachington Road, Hove BN3 3YP"
    mottoButton.appendChild(restaurantAddress);
    headerDiv.appendChild(mottoButton);
    const navDiv = document.createElement('div');
    navDiv.classList.add("navbar");
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', "home");
    homeDiv.classList.add("navigation");
    homeDiv.textContent = "Home";
    const orderOnlineDiv = document.createElement('div');
    orderOnlineDiv.setAttribute('id', "orderOnline");
    orderOnlineDiv.classList.add("navigation");
    orderOnlineDiv.textContent = "Order Online";
    const servicesDiv = document.createElement('div');
    servicesDiv.setAttribute('id', "services");
    servicesDiv.classList.add("navigation");
    servicesDiv.textContent = "Services"
    const galleryDiv = document.createElement('div');
    galleryDiv.setAttribute('id', "gallery");
    galleryDiv.classList.add("navigation");
    galleryDiv.textContent = "Gallery"
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', "contact");
    contactDiv.classList.add("navigation");
    contactDiv.textContent = "Contact"
    const allergensDiv = document.createElement('div');
    allergensDiv.setAttribute('id', "allergens");
    allergensDiv.classList.add("navigation");
    allergensDiv.textContent = "Allergens"
    navDiv.appendChild(homeDiv);
    navDiv.appendChild(orderOnlineDiv);
    navDiv.appendChild(servicesDiv);
    navDiv.appendChild(galleryDiv);
    navDiv.appendChild(contactDiv);
    navDiv.appendChild(allergensDiv);
    headerDiv.appendChild(navDiv);
    header.appendChild(headerDiv);
})();

const contentDivs = (() => {
    const contentDiv = document.querySelector('#content');
    const chickenImgDiv = document.createElement('div');
    chickenImgDiv.setAttribute('id', "chickenImg");
    contentDiv.appendChild(chickenImgDiv);
    const motto = document.createElement('div');
    motto.setAttribute('id', "moetto");
    motto.textContent = '"Chinese Takeaway Done Right"'
    chickenImgDiv.appendChild(motto)


    




})();