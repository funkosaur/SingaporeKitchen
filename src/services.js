import dumplingsImg from './images/dumpling.jpg'

const services = (() => {
  document.body.style.gridTemplateRows = "100vh 60em 20vh"
  const contentDiv = document.querySelector('#content');
  contentDiv.style.gridColumn = "1/4";
  const divInsideContent = document.createElement("div");
  divInsideContent.setAttribute('id', "divInsideContent");
  contentDiv.appendChild(divInsideContent);
  const infoDiv = document.createElement("div");
  infoDiv.setAttribute('id', "info");
  divInsideContent.appendChild(infoDiv);
  const heading = document.createElement("h1");
  heading.textContent = "FREE LOCAL DELIVERY";
  infoDiv.appendChild(heading);
  const deliveryCharge = document.createElement("p");
  deliveryCharge.setAttribute('id', "deliveryCharge");
  deliveryCharge.textContent = "£ DELIVERY CHARGE FOR ORDERS UNDER £14 (MIN £10 FOOD ORDER) \r\n"
  deliveryCharge.textContent += "Delivery charges for the following areas:";
  infoDiv.appendChild(deliveryCharge);
  const deliveryAreas = document.createElement("p");
  deliveryAreas.setAttribute('id', "deliveryAreas");
  deliveryAreas.textContent = "BN3, BN1 ----- Free Delivery within 1 mile thereafter £1.00 per miles \r\n"
  deliveryAreas.textContent += "BN17XX ------ £2.00 \r\n"
  deliveryAreas.textContent += "BN18XX ------ £3.00 \r\n"
  deliveryAreas.textContent += "BN19XX ------ £4.00 \r\n"
  deliveryAreas.textContent += "BN41 ---------- £1.00 - £3.00 \r\n"
  deliveryAreas.textContent += "BN42 ---------- £3.00 \r\n"
  deliveryAreas.textContent += "BN2 ----------- £3.00 - £4.00 \r\n"
  deliveryAreas.textContent += "Valley Park Brighton University ---- £6.00";
  infoDiv.appendChild(deliveryAreas);
  const paymentDiv = document.createElement("p");
  paymentDiv.setAttribute('id', "paymentDiv");
  infoDiv.appendChild(paymentDiv);


  

 
});

export default services;