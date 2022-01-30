import allergensImage from "./images/allergens.webp"

const allergens = (() => {
    document.body.style.gridTemplateRows = "100vh 110em 20vh";
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
    })
    



    allergensDiv.appendChild(leftInformation);
    allergensDiv.appendChild(rightAllergensPoster);


});

export default allergens;