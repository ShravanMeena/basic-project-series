const projectsArr = [
  {
    id: 1,
    title: "First Project",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
  },
  {
    id: 2,
    title: "Second Project",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
  },
  {
    id: 3,
    title: "Third Project",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
  },
  {
    id: 4,
    title: "Fourth Project",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
  },
  {
    id: 5,
    title: "Fifth Project",
    sub_title:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img: "https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png",
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
              <p class="card-text">${project.sub_title}</p>
              <a href="#" class="btn btn-primary">Visit</a>
            </div>
          </div>
      </div>
    
    
        `;
  });

  myContent.innerHTML = showInHtml;
});
