import "./style.css";
import houseImg from "./images/house.webp";
import deliverooLogo from "./images/deliveroo-logo.png";
import justEatLogo from "./images/Just-Eat-Logo.png";
import uberEatsLogo from "./images/Uber-Eats-Logo.png";
import hygieneRatingLogo from "./images/hygiene-rating.webp";
import storeFrontImg from "./images/storefront.jpg";
import facebookImg from "./images/facebook.png";
import instagramImg from "./images/instagram.png";
import twitterImg from "./images/twitter.png";
import services from "./services.js";
import gallery from "./gallery.js";
import pdfFile from "./images/singaporeKitchenMenu.pdf";
import allergens from "./allergens.js";

//Creating the header module
const heading = (() => {
  const header = document.getElementById("myHeader");
  const contentDiv = document.querySelector("#content");
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header-div");
  const pictureDiv = document.createElement("div");
  pictureDiv.setAttribute("id", "house");
  const myhouseImg = document.createElement("img");
  myhouseImg.src = houseImg;
  pictureDiv.appendChild(myhouseImg);
  headerDiv.appendChild(pictureDiv);
  const mottoButton = document.createElement("div");
  mottoButton.classList.add("motto-button");
  const motto = document.createElement("div");
  motto.setAttribute("id", "motto");
  motto.textContent = "Chinese Takeaway Done Right";
  mottoButton.appendChild(motto);
  const orderButton = document.createElement("a");
  orderButton.href = "https://www.singaporekitchen.co.uk/order-online";
  orderButton.target = "_blank";
  orderButton.textContent = "Order Online";
  orderButton.setAttribute("id", "orderButton");
  mottoButton.appendChild(orderButton);
  const restaurantAddress = document.createElement("div");
  restaurantAddress.setAttribute("id", "rAddress");
  restaurantAddress.textContent = "19 Blachington Road, Hove BN3 3YP";
  mottoButton.appendChild(restaurantAddress);
  headerDiv.appendChild(mottoButton);
  const navDiv = document.createElement("div");
  navDiv.classList.add("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 815) {
      navDiv.style.borderTopLeftRadius = "0px";
      navDiv.style.borderTopRightRadius = "0px";
    } else {
      navDiv.style.borderTopLeftRadius = "10px";
      navDiv.style.borderTopRightRadius = "10px";
    }
  });
  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "home");
// When clicked home button will scroll to home or populate the content
// div if on another module
  homeDiv.addEventListener("click", () => {
    if (contentDiv.firstChild.id == "offersAndMenu") {
      const contactDiv = document.querySelector("#myHeader");
      contactDiv.scrollIntoView();
    }
    if (contentDiv.firstChild.id == "offersAndMenu") return;
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
    contentDivs.populateContentDivs();
    const contactDiv = document.querySelector("#myHeader");
    contactDiv.scrollIntoView();
  });
  homeDiv.classList.add("navigation");
  homeDiv.textContent = "Home";
  const orderOnlineDiv = document.createElement("a");
  orderOnlineDiv.href = "https://www.singaporekitchen.co.uk/order-online";
  orderOnlineDiv.target = "_blank";
  orderOnlineDiv.setAttribute("id", "orderOnline");
  orderOnlineDiv.classList.add("navigation");
  orderOnlineDiv.textContent = "Order Online";
  const servicesDiv = document.createElement("div");
  servicesDiv.setAttribute("id", "services");
  servicesDiv.classList.add("navigation");
  servicesDiv.textContent = "Services";
// Services navigation link populates the content with the services module
  servicesDiv.addEventListener("click", () => {
    if (contentDiv.firstChild.id == "divInsideContent") {
      const divInsideContent = document.querySelector("#divInsideContent");
      divInsideContent.scrollIntoView();
    }
    if (contentDiv.firstChild.id == "divInsideContent") return;
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
    services();
    const divInsideContent = document.querySelector("#divInsideContent");
    divInsideContent.scrollIntoView();
  });
  const galleryDiv = document.createElement("div");
  galleryDiv.setAttribute("id", "gallery");
  galleryDiv.classList.add("navigation");
  galleryDiv.textContent = "Gallery";
// Gallery navigation link populates the content with the gallery module
// and scrolls to a specific place
  galleryDiv.addEventListener("click", () => {
    if (contentDiv.firstChild.id == "galleryDiv") {
      window.scrollTo(0, 808);
    }
    if (contentDiv.firstChild.id == "galleryDiv") return;
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
    gallery();
    window.scrollTo(0, 808);
  });
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contact");
  contactDiv.classList.add("navigation");
  contactDiv.textContent = "Contact";
// Contact navigation link populates the content with the home module
// and then scrolls down to the contact section
  contactDiv.addEventListener("click", () => {
    if (contentDiv.firstChild.id == "offersAndMenu") {
      const contactDiv = document.querySelector("#contactPage");
      contactDiv.scrollIntoView();
    }
    if (contentDiv.firstChild.id == "offersAndMenu") return;
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
    contentDivs.populateContentDivs();
    const contactDiv = document.querySelector("#contactPage");
    contactDiv.scrollIntoView();
  });
  const allergensDiv = document.createElement("div");
  allergensDiv.setAttribute("id", "allergens");
  allergensDiv.classList.add("navigation");
  allergensDiv.textContent = "Allergens";
// Allergens navigation link populates the content with the allergens module
  allergensDiv.addEventListener("click", () => {
    if (contentDiv.firstChild.id == "allergensDiv") {
      window.scrollTo(0, 808);
    }
    if (contentDiv.firstChild.id == "allergensDiv") return;
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);
    allergens();
    window.scrollTo(0, 808);
  });
  navDiv.appendChild(homeDiv);
  navDiv.appendChild(orderOnlineDiv);
  navDiv.appendChild(servicesDiv);
  navDiv.appendChild(galleryDiv);
  navDiv.appendChild(contactDiv);
  navDiv.appendChild(allergensDiv);
  headerDiv.appendChild(navDiv);
  header.appendChild(headerDiv);

// Making the navbar sticky
  let stickyNavbar = homeDiv.offsetTop;
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= stickyNavbar) {
      navDiv.classList.add("stickyBar");
    } else {
      navDiv.classList.remove("stickyBar");
    }
  });
})();

// Dynamically rendered home page
const contentDivs = (() => {
  const populateContentDivs = () => {
    document.body.style.gridTemplateRows = "100vh 160em 20vh";
    const contentDiv = document.querySelector("#content");
    contentDiv.style.gridColumn = "2/3";
    const offersAndMenu = document.createElement("div");
    offersAndMenu.setAttribute("id", "offersAndMenu");
    contentDiv.appendChild(offersAndMenu);
    const offersText = document.createElement("div");
    offersText.setAttribute("id", "offersText");
    const offersTextPara = document.createElement("p");
    offersTextPara.textContent =
      "Order directly with us and cut out the middleman. Better prices if you go directly to our ordering platform. We will be running offers and deals throughout the year.";
    offersText.appendChild(offersTextPara);
    offersAndMenu.appendChild(offersText);
    const foodHygiene = document.createElement("div");
    foodHygiene.setAttribute("id", "foodHygiene");
    const foodHygieneImg = document.createElement("img");
    foodHygieneImg.src = hygieneRatingLogo;
    foodHygiene.appendChild(foodHygieneImg);
    offersAndMenu.appendChild(foodHygiene);
    const menuPdf = document.createElement("div");
    menuPdf.setAttribute("id", "menuPdf");
    offersAndMenu.appendChild(menuPdf);
    menuPdf.textContent = "If you would like to view our menu click here:";
    const pdfButton = document.createElement("a", "pdfButton");
    pdfButton.target = "_blank";
    pdfButton.href = pdfFile;
    pdfButton.setAttribute("id", "pdfButton");
    menuPdf.appendChild(pdfButton);
    pdfButton.textContent = "MENU PDF";
    const otherWaysText = document.createElement("div");
    otherWaysText.setAttribute("id", "otherWaysText");
    otherWaysText.textContent = "Other ways to order :";
    const otherWaysDiv = document.createElement("div");
    otherWaysDiv.setAttribute("id", "otherWaysDiv");
    const deliverooImg = document.createElement("img");
    deliverooImg.src = deliverooLogo;
    deliverooImg.addEventListener("click", () => {
      window.open(
        "https://deliveroo.co.uk/menu/brighton/hove/singapore-kitchen?utm_medium=affiliate&utm_source=google_maps_link"
      );
    });
    const justEatImg = document.createElement("img");
    justEatImg.src = justEatLogo;
    justEatImg.addEventListener("click", () => {
      window.open(
        "https://www.just-eat.co.uk/restaurants-singaporekitchen-bn3/menu"
      );
    });
    const uberEatsImg = document.createElement("img");
    uberEatsImg.src = uberEatsLogo;
    uberEatsImg.addEventListener("click", () => {
      window.open(
        "https://www.ubereats.com/store/singapore-kitchen/IhZzD1RKROiqqmvKDUd9-Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJOMyUyMDZCSiUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpyVG9pcl91UGRVZ1ItT2pGcVZpZkQ2TSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0E1MC44NTMzNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS0wLjE3NTc4JTdE"
      );
    });
    otherWaysDiv.appendChild(deliverooImg);
    otherWaysDiv.appendChild(justEatImg);
    otherWaysDiv.appendChild(uberEatsImg);
    offersAndMenu.appendChild(otherWaysText);
    offersAndMenu.appendChild(otherWaysDiv);
    const contactPage = document.createElement("div");
    contactPage.setAttribute("id", "contactPage");
    contentDiv.appendChild(contactPage);
    const contactForm = document.createElement("div");
    const inputName = document.createElement("input");
    inputName.classList.add("inputs");
    const inputEmail = document.createElement("input");
    inputEmail.classList.add("inputs");
    const inputSubject = document.createElement("input");
    inputSubject.classList.add("inputs");
    const inputMessage = document.createElement("textarea");
    inputMessage.classList.add("inputs");
    inputMessage.style.height = "30%";
    const contactUs = document.createElement("p");
    contactUs.textContent = "Contact Us";
    contactUs.setAttribute("id", "contactUs");
    contactForm.appendChild(contactUs);
    const paraName = document.createElement("p");
    paraName.textContent = "Name:";
    contactForm.appendChild(paraName);
    contactForm.appendChild(inputName);
    const paraEmail = document.createElement("p");
    paraEmail.textContent = "Email:";
    contactForm.appendChild(paraEmail);
    contactForm.appendChild(inputEmail);
    const paraSubject = document.createElement("p");
    paraSubject.textContent = "Subject:";
    contactForm.appendChild(paraSubject);
    contactForm.appendChild(inputSubject);
    const paraMessage = document.createElement("p");
    paraMessage.textContent = "Message:";
    contactForm.appendChild(paraMessage);
    contactForm.appendChild(inputMessage);
    const sendButton = document.createElement("button");
    contactForm.appendChild(sendButton);
    sendButton.textContent = "Send";
    contactForm.setAttribute("id", "contactForm");
    contactPage.appendChild(contactForm);
    const storeDetails = document.createElement("div");
    const storeFront = document.createElement("img");
    storeFront.src = storeFrontImg;
    storeDetails.appendChild(storeFront);
    storeDetails.setAttribute("id", "storeDetails");
    contactPage.appendChild(storeDetails);
    const storeDetailsImg = document.createElement("div");
    storeDetailsImg.setAttribute("id", "storeDetailsImg");
    storeDetails.appendChild(storeDetailsImg);
    const storeDetailsDiv = document.createElement("div");
    storeDetailsDiv.setAttribute("id", "storeDetailsDiv");
    storeDetails.appendChild(storeDetailsDiv);
    storeDetailsDiv.textContent = "19 Blachington Road \r\n";
    storeDetailsDiv.textContent += "Hove East Sussex BN33YP \r\n";
    storeDetailsDiv.textContent += "01273736251 \r\n";
    storeDetailsDiv.textContent += "singaporekitchenhove@gmail.com";
// Optimization for smaller screen sizes
    if (window.innerWidth <= 517) {
      storeDetailsDiv.textContent = "19 Blachington Road \r\n";
      storeDetailsDiv.textContent += "Hove East Sussex \r\n";
      storeDetailsDiv.textContent += " BN33YP\r\n";
      storeDetailsDiv.textContent += "01273736251 \r\n";
      storeDetailsDiv.textContent += "singaporekitchenhove\r\n";
      storeDetailsDiv.textContent += "@gmail.com";
    }
    const mapOfRestaurantDiv = document.createElement("div");
    const mapOfRestaurant = document.createElement("iframe");
    mapOfRestaurant.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.1036452526012!2d-0.1772053818619935!3d50.83165735490886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875854e92138e81%3A0xe7c1b4d572d5e344!2sSingapore%20Kitchen!5e0!3m2!1sen!2sch!4v1642003936251!5m2!1sen!2sch";
    mapOfRestaurant.loading = "lazy";
    mapOfRestaurant.allowFullScreen = "";
    mapOfRestaurantDiv.appendChild(mapOfRestaurant);
    mapOfRestaurantDiv.setAttribute("id", "mapOfRestaurantDiv");
    mapOfRestaurant.setAttribute("id", "mapOfRestaurant");
    contentDiv.appendChild(mapOfRestaurantDiv);
  };
  populateContentDivs();
  return { populateContentDivs };
})();

// Creating the footer
const footer = (() => {
  const footerDiv = document.getElementById("footer");
  const footerSubDiv = document.createElement("div");
  footerSubDiv.setAttribute("id", "footerSubDiv");
  footerDiv.appendChild(footerSubDiv);
  const leftAddress = document.createElement("div");
  leftAddress.classList.add("footerDivs");
  leftAddress.textContent = "ADDRESS";
  const leftAddressBottom = document.createElement("p");
  leftAddressBottom.setAttribute("id", "leftAddressBottom");
  leftAddressBottom.textContent = "Singapore Kitchen \r\n";
  leftAddressBottom.textContent += "19 Blachington Road \r\n";
  leftAddressBottom.textContent += "Hove \r\n";
  leftAddressBottom.textContent += "East Sussex \r\n";
  leftAddressBottom.textContent += "BN33YP";
  leftAddress.appendChild(leftAddressBottom);
  footerSubDiv.appendChild(leftAddress);
  const openingHours = document.createElement("div");
  openingHours.classList.add("footerDivs");
  openingHours.textContent = "OPENING HOURS";
  const openingHoursBottom = document.createElement("p");
  openingHours.setAttribute("id", "openingHours");
  openingHoursBottom.setAttribute("id", "openingHoursBottom");
  openingHoursBottom.textContent = "Sunday - Saturday \r\n";
  openingHoursBottom.textContent += "5:00pm - 10:00pm";
  openingHours.appendChild(openingHoursBottom);
  footerSubDiv.appendChild(openingHours);
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("footerDivs");
  contactDiv.textContent = "CONTACT";
  const contactDivBottom = document.createElement("p");
  contactDivBottom.setAttribute("id", "contactDivBottom");
  contactDivBottom.textContent = "01273 736251 \r\n";
  contactDivBottom.textContent += "singaporekitchen@gmail.com";
  contactDiv.appendChild(contactDivBottom);
  footerSubDiv.appendChild(contactDiv);
  const followDiv = document.createElement("div");
  followDiv.classList.add("footerDivs");
  followDiv.setAttribute("id", "followDiv");
  followDiv.textContent = "FOLLOW";
  const followDivBottom = document.createElement("div");
  followDivBottom.setAttribute("id", "followDivBottom");
  const facebookImage = document.createElement("img");
  facebookImage.src = facebookImg;
  followDivBottom.appendChild(facebookImage);
  facebookImage.style.height = "20%";
  facebookImage.style.width = "20%";
  const instagramImage = document.createElement("img");
  instagramImage.src = instagramImg;
  followDivBottom.appendChild(instagramImage);
  instagramImage.style.height = "20%";
  instagramImage.style.width = "20%";
  const twitterImage = document.createElement("img");
  twitterImage.src = twitterImg;
  followDivBottom.appendChild(twitterImage);
  twitterImage.style.height = "20%";
  twitterImage.style.width = "23%";
  followDiv.appendChild(followDivBottom);
  footerSubDiv.appendChild(followDiv);
})();
