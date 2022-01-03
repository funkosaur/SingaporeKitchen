import './style.css';

const heading = (() => {
    const header = document.getElementById("myHeader");
    const pictureDiv = document.createElement('div');
    pictureDiv.setAttribute('id', "house");
    header.appendChild(pictureDiv);
    const navDiv = document.createElement('div');
    navDiv.classList.add("navbar");
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', "home");
    const orderOnlineDiv = document.createElement('div');
    orderOnlineDiv.setAttribute('id', "orderOnline");
    const servicesDiv = document.createElement('div');
    servicesDiv.setAttribute('id', "services");
    const galleryDiv = document.createElement('div');
    galleryDiv.setAttribute('id', "gallery");
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', "contact");
    const allergensDiv = document.createElement('div');
    allergensDiv.setAttribute('id', "allergens");
    navDiv.appendChild(homeDiv);
    navDiv.appendChild(orderOnlineDiv);
    navDiv.appendChild(servicesDiv);
    navDiv.appendChild(galleryDiv);
    navDiv.appendChild(contactDiv);
    navDiv.appendChild(allergensDiv);
    header.appendChild(navDiv);
})();