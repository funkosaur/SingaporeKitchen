import dumplingsImg from './images/dumpling.jpg'

const services = (() => {
  const body = document.body;
  body.style.gridTemplateRows = "100vh 40em 20vh"
  const contentDiv = document.querySelector('#content');
  contentDiv.style.gridColumn = "1/4";
  const divInsideContent = document.createElement("div");
  divInsideContent.setAttribute('id', "divInsideContent");
  contentDiv.appendChild(divInsideContent);
  

 
});

export default services;