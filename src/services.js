//Dynamically renders the content div of the main page
const services = () => {
  document.body.style.gridTemplateRows = "100vh 60em 20vh";
  const contentDiv = document.querySelector("#content");
  contentDiv.style.gridColumn = "1/4";
  const divInsideContent = document.createElement("div");
  divInsideContent.setAttribute("id", "divInsideContent");
  contentDiv.appendChild(divInsideContent);
  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "info");
  divInsideContent.appendChild(infoDiv);
  const heading = document.createElement("h1");
  heading.textContent = "FREE LOCAL DELIVERY";
  infoDiv.appendChild(heading);
  const deliveryCharge = document.createElement("p");
  deliveryCharge.setAttribute("id", "deliveryCharge");
  deliveryCharge.textContent =
    "£ DELIVERY CHARGE FOR ORDERS UNDER £14 (MIN £10 FOOD ORDER) \r\n";
  deliveryCharge.textContent += "Delivery charges for the following areas:";
  if (window.innerWidth <= 818) {
    deliveryCharge.textContent = "£ DELIVERY CHARGE FOR ORDERS \r\n";
    deliveryCharge.textContent += "UNDER £14 (MIN £10 FOOD ORDER)\r\n";
    deliveryCharge.textContent += "Delivery charges for the following areas:";
  }
  infoDiv.appendChild(deliveryCharge);
  const deliveryAreas = document.createElement("p");
  deliveryAreas.setAttribute("id", "deliveryAreas");
  deliveryAreas.textContent =
    "BN3, BN1 ----- Free Delivery within 1 mile thereafter £1.00 per miles \r\n";
  deliveryAreas.textContent += "BN17XX ------ £2.00 \r\n";
  deliveryAreas.textContent += "BN18XX ------ £3.00 \r\n";
  deliveryAreas.textContent += "BN19XX ------ £4.00 \r\n";
  deliveryAreas.textContent += "BN41 ---------- £1.00 - £3.00 \r\n";
  deliveryAreas.textContent += "BN42 ---------- £3.00 \r\n";
  deliveryAreas.textContent += "BN2 ----------- £3.00 - £4.00 \r\n";
  deliveryAreas.textContent += "Valley Park Brighton University ---- £6.00";
// Optimization for smaller screens
  if (window.innerWidth <= 818) {
    deliveryAreas.textContent =
      "BN3, BN1 ----- Free Delivery within 1 mile\r\n";
    deliveryAreas.textContent += "BN17XX ------ £2.00 \r\n";
    deliveryAreas.textContent += "BN18XX ------ £3.00 \r\n";
    deliveryAreas.textContent += "BN19XX ------ £4.00 \r\n";
    deliveryAreas.textContent += "BN41 ---------- £1.00 - £3.00 \r\n";
    deliveryAreas.textContent += "BN42 ---------- £3.00 \r\n";
    deliveryAreas.textContent += "BN2 ----------- £3.00 - £4.00 \r\n";
    deliveryAreas.textContent += "Valley Park Brighton University ---- £6.00";
  }
  infoDiv.appendChild(deliveryAreas);
  const paymentDiv = document.createElement("p");
  paymentDiv.setAttribute("id", "paymentDiv");
  paymentDiv.textContent =
    "PLEASE ALLOW A MINIMUM OF 45 MINS FOR DELIVERY \r\n";
  paymentDiv.textContent +=
    "PAYMENT BY CASH OR ORDER ONLINE FOR CARD PAYMENTS \r\n";
  paymentDiv.textContent += "CREDIT CARD ACCEPTED FOR PICKUP";
// Optimization for smaller screens
  if (window.innerWidth <= 818) {
    paymentDiv.textContent = "PLEASE ALLOW A MINIMUM OF \r\n";
    paymentDiv.textContent += "45 MINS FOR DELIVERY\r\n";
    paymentDiv.textContent += "PAYMENT BY CASH OR ORDER \r\n";
    paymentDiv.textContent += "ONLINE FOR CARD PAYMENTS \r\n";
    paymentDiv.textContent += "CREDIT CARD ACCEPTED FOR PICKUP";
  }
  infoDiv.appendChild(paymentDiv);
  const homeDeliveryUl = document.createElement("ul");
  const homeDeliveryLi = document.createElement("li");
  homeDeliveryUl.textContent = "HOME DELIVERY SERVICE";
  homeDeliveryLi.textContent = "5:30 PM - 10:30 PM";
  infoDiv.appendChild(homeDeliveryUl);
  homeDeliveryUl.appendChild(homeDeliveryLi);
  const openingHours = document.createElement("ul");
  const sunday = document.createElement("li");
  const time = document.createElement("li");
  const daysaWeek = document.createElement("li");
  openingHours.textContent = "OPENING HOURS";
  sunday.textContent = "SUNDAY - SATURDAY";
  time.textContent = "5:00 PM - 10:45 PM";
  daysaWeek.textContent = "7 DAYS A WEEK";
  infoDiv.appendChild(openingHours);
  openingHours.appendChild(sunday);
  openingHours.appendChild(time);
  openingHours.appendChild(daysaWeek);
};

export default services;
