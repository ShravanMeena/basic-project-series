const projectsArr = [
  {
    id: 1,
    title: "Background Color Flipper",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "./background-color-flipper/preview.png",
    route:"./background-color-flipper/index.html"
  },
  {
    id: 2,
    title: "Tabs",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "./tabs/preview.png",
    route:"./tabs/index.html"

  },
  
];

const myContent = document.querySelector(".myContent");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = projectsArr.map((project, index) => {
    return `
        <div class="col" style="margin-bottom: 20px;">
        <div class="card" style="width: 18rem;">
            <img src=${project.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <a target="blank" href=${project.route} class="btn btn-primary">Live Preview</a>
            </div>
          </div>
      </div>
    
    
        `;
  });

  myContent.innerHTML = showInHtml;
});
