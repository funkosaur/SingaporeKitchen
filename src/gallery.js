
const gallery = (() => {
    document.body.style.gridTemplateRows = "100vh 100em 20vh"
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
    const imageIndexes = ["Beef Chow", "Cashew Chicken", "Chicken Satay", "Chinese Black Bean Chicken", "Chow Mein", "Crispy Roasted Green Beans", "Grilled Dumplings", "Honey Lemon Chicken", "Kung Pao Chicken", "Monks Vegetables", "Prawn Fried Rice", "Singapore Noodles", "Sweet and Sour Chicken", "Thai Fish Cakes"];
    const selectedIndex = null;
    imageIndexes.forEach(index => {
        const divOfImages = document.createElement("div");
        const image = document.createElement("img");
        image.src = require(`./images/gallery/${index}.jpg`);
        console.log(`${index}`)
        divOfImages.classList.add("galleryImages");
        const textOverImage = document.createElement("div");
        textOverImage.classList.add("textOverImage");
        textOverImage.textContent = `${index}`;

        image.addEventListener("click", () =>{
            //popup
        });

        image.addEventListener("mouseover", () =>{

        })
        divOfImages.appendChild(image);
        divOfImages.appendChild(textOverImage)
        galleryDiv.appendChild(divOfImages);
    })

     
});

export default gallery;