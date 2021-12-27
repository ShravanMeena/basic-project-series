const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

const mainSection = document.querySelector(".mainSection");

mainSection.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    content.forEach(function(cnt){
        cnt.classList.remove("active")
    })

    const el = document.getElementById(id)
    el.classList.add("active")
  }
});
