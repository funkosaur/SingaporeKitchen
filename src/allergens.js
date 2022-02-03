import allergensImage from "./images/allergens.webp";
import pdfLink from "./images/pdf.png";
import pdfFile from "./images/allergenpdf.pdf";

const allergens = (() => {
    document.body.style.gridTemplateRows = "100vh 95em 20vh";
    if(window.innerWidth <= 818){document.body.style.gridTemplateRows = "100vh 200em 20vh"};
    window.addEventListener("resize", ()=>{
        if(window.innerWidth >= 818){document.body.style.gridTemplateRows = "100vh 95em 20vh"};
        if(window.innerWidth <= 818){document.body.style.gridTemplateRows = "100vh 200em 20vh"};
        if(window.innerWidth <= 680){document.body.style.gridTemplateRows = "100vh 180em 20vh"};
        if(window.innerWidth <= 550){document.body.style.gridTemplateRows = "100vh 160em 20vh"};
    })
    const contentDiv = document.querySelector("#content");
    contentDiv.style.gridColumn = "2/3";
    const allergensDiv = document.createElement("div");
    allergensDiv.setAttribute("id","allergensDiv");
    contentDiv.appendChild(allergensDiv);
    const leftInformation = document.createElement("div");
    const rightAllergensPoster = document.createElement("div");
    leftInformation.setAttribute("id","leftInformation");
    rightAllergensPoster.setAttribute("id","rightAllergensPoster");
    const allergensPoster = document.createElement("img");
    allergensPoster.src = allergensImage;
    rightAllergensPoster.appendChild(allergensPoster);
    const allergensHeader = document.createElement("h1");
    allergensHeader.setAttribute("id","allergensHeader");
    allergensHeader.textContent = "ALLERGY NOTICE";
    leftInformation.appendChild(allergensHeader);
    const allergensUnderHeader = document.createElement("ul");
    allergensUnderHeader.setAttribute("id","underHeader");
    allergensUnderHeader.textContent = "Some of our dishes may contain the following allergens:"
    leftInformation.appendChild(allergensUnderHeader);
    const arrayOfAllergens = ["CELERY", "CEREALS CONTAINING GLUTEN", "CRUSTACEANS", "EGG", "FISH", "LUPIN", "MILK", "MOLLUSCS", "MUSTARD", "NUTS", "PEANUTS", "SESAME SEEDS", "SOYA", "SULPHUD DIOXIDE"];
    arrayOfAllergens.forEach(allergens => {
        const allergen = document.createElement("li");
        allergen.textContent = `${allergens}`;
        allergen.classList.add("allergens");
        leftInformation.appendChild(allergen);
    });
    const firstAdvicePara = document.createElement("p");
    firstAdvicePara.setAttribute("id","firstAdvicePara");
    firstAdvicePara.textContent = "If you suffer from allergies to these or any products, please get in touch with us before ordering. We can not be held responsible for any negligence due on your part.";
    leftInformation.appendChild(firstAdvicePara);
    const secondAdvicePara = document.createElement("p");
    secondAdvicePara.setAttribute("id","secondAdvicePara");
    secondAdvicePara.textContent = "For more information regarding allergen advice please consult the Food Standards Agency Website.";
    leftInformation.appendChild(secondAdvicePara);
    const foodAdviceLink = document.createElement("a");
    foodAdviceLink.setAttribute("id", "foodAdviceLink")
    foodAdviceLink.href = "http://www.food.gov.uk/science/allergy-intolerance/";
    foodAdviceLink.textContent = "http://www.food.gov.uk/science/allergy-intolerance/";
    leftInformation.appendChild(foodAdviceLink);
    const pdfDiv = document.createElement("div");
    pdfDiv.setAttribute("id", "pdfDiv");
    const pdfImage = document.createElement("img");
    pdfImage.src = pdfLink;
    pdfImage.addEventListener("click", ()=>{
        window.open(pdfFile);
    })
    const pdfPara = document.createElement("p");
    pdfPara.textContent = "PDF LIST OF ALLERGENS ON OUR MENU";
    pdfDiv.appendChild(pdfImage);
    pdfDiv.appendChild(pdfPara);
    leftInformation.appendChild(pdfDiv);


    



    allergensDiv.appendChild(leftInformation);
    allergensDiv.appendChild(rightAllergensPoster);


});

export default allergens;