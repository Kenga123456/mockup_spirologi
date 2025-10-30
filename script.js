fetch("bilder.json")
  .then((res) => res.json())
  .then((images) => {
    const imgContainer = document.getElementById("images-container");

    images.forEach((src) => {
      const child = document.createElement("div");
      const img = document.createElement("img");

      img.src = `https://images.weserv.nl/?url=${encodeURIComponent(
        //for å fikse problem med at browser ikke liker http elns :(
        src.replace(/^https?:\/\//, "")
      )}`;

      img.style.width = "100px";

      child.appendChild(img);
      imgContainer.appendChild(child);
    });
  });

document.querySelector(".icon").addEventListener("click", function () {
  document.querySelector("#menu").classList.toggle("show");
});
