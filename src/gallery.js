// Dynamically renders the content div of the main page
const gallery = () => {
// Gallery screen optimizations for smaller screens
  document.body.style.gridTemplateRows = "100vh 100em 20vh";
  if (window.innerWidth <= 1000) {
    document.body.style.gridTemplateRows = "100vh 155em 20vh";
  }
  if (window.innerWidth <= 750) {
    document.body.style.gridTemplateRows = "100vh 235em 20vh";
  }
  if (window.innerWidth <= 502) {
    document.body.style.gridTemplateRows = "100vh 550em 20vh";
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1000) {
      document.body.style.gridTemplateRows = "100vh 100em 20vh";
    }
    if (window.innerWidth <= 1000) {
      document.body.style.gridTemplateRows = "100vh 155em 20vh";
    }
    if (window.innerWidth <= 850) {
      document.body.style.gridTemplateRows = "100vh 135em 20vh";
    }
    if (window.innerWidth <= 750) {
      document.body.style.gridTemplateRows = "100vh 235em 20vh";
    }
    if (window.innerWidth <= 650) {
      document.body.style.gridTemplateRows = "100vh 205em 20vh";
    }
    if (window.innerWidth <= 502) {
      document.body.style.gridTemplateRows = "100vh 550em 20vh";
    }
  });
  const contentDiv = document.querySelector("#content");
  contentDiv.style.gridColumn = "2/3";
  const galleryDiv = document.createElement("div");
  galleryDiv.setAttribute("id", "galleryDiv");
  contentDiv.appendChild(galleryDiv);
  const popup = document.createElement("div");
  popup.setAttribute("id", "popup");
  contentDiv.appendChild(popup);
  const selectedImage = document.createElement("img");
  selectedImage.setAttribute("id", "selectedImage");
  popup.appendChild(selectedImage);
  const imageIndexes = [
    "Beef Chow",
    "Cashew Chicken",
    "Chicken Satay",
    "Chinese Black Bean Chicken",
    "Chow Mein",
    "Crispy Roasted Green Beans",
    "Grilled Dumplings",
    "Honey Lemon Chicken",
    "Kung Pao Chicken",
    "Monks Vegetables",
    "Prawn Fried Rice",
    "Singapore Noodles",
    "Sweet and Sour Chicken",
    "Thai Fish Cakes",
  ];
// Creates the gallery from iterating through the imageIndexes array
  imageIndexes.forEach((index) => {
    const divOfImages = document.createElement("div");
    const image = document.createElement("img");
    image.src = require(`./images/gallery/${index}.jpg`);
    divOfImages.classList.add("galleryImages");
    const textOverImage = document.createElement("div");
    textOverImage.classList.add("textOverImage");
// Event listeners to show the selected image fullscreen
    textOverImage.addEventListener("click", () => {
      popup.style.transform = "translateY(0)";
      selectedImage.src = require(`./images/gallery/${index}.jpg`);
    });

    popup.addEventListener("click", () => {
      popup.style.transform = "translateY(-100%)";
    });
// Event listeners to show the name of the image/meal on mouseover and removed on mouseout
    textOverImage.addEventListener("mouseover", () => {
      textOverImage.textContent = `${index}`;
      image.style.transform = "translateY(-2px)";
      textOverImage.style.height = "102%";
      image.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
    });

    textOverImage.addEventListener("mouseout", () => {
      textOverImage.textContent = "";
      image.style.transform = "";
      image.style.boxShadow = "";
    });
    divOfImages.appendChild(image);
    divOfImages.appendChild(textOverImage);
    galleryDiv.appendChild(divOfImages);
  });
};

export default gallery;
