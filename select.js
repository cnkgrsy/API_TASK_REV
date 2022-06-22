setTimeout(() => {
  const images = document.getElementsByClassName("gallery-img");

  const clickAddButton = document.getElementById("AddButton");

  const selectArr = [];
  ///this part is where you select/deselect images from random images, and styling them
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      let toShow = images[i].id;
      let newObject = { id: toShow };
      // console.log(newObject)
      if (selectArr.some((arr) => arr.id === toShow)) {
        console.log("includes");
        let index = selectArr.findIndex((object) => {
          return object.id === toShow;
        });
        selectArr.splice(index, 1);
        document.getElementById(`${toShow}`).style.borderStyle = "none";
        document.getElementById(`${toShow}`).style.borderColor = "none";
        //this parts shows/hides "add selected images to gallery button"
        if (selectArr.length > 0) {
          document.querySelector(".AddButton").style.visibility = "visible";
        } else {
          document.querySelector(".AddButton").style.visibility = "hidden";
        }
      } else {
        console.log("not includes");
        selectArr.push({ id: toShow });
        let border = document.getElementById(`${toShow}`);
        document.getElementById(`${toShow}`).style.borderStyle = "solid";
        document.getElementById(`${toShow}`).style.borderColor =
          "rgba(96, 224, 27, 0.869)";
        document.querySelector(".AddButton").style.visibility = "visible";
      }
    });
  }
  //this part creates slick gallery and adds into html
  clickAddButton.addEventListener("click", () => {
    // console.log(selectArr);
    let slick = document.createElement("script");
    slick.setAttribute("src", "slick.js");
    document.body.appendChild(slick);
    for (let eachImg of selectArr) {
      let imageInGalleryId = document.getElementById(eachImg.id);

      let newList = document.createElement("li");
      newList.setAttribute("class", "list-image");

      let galleryImage = document.createElement("img");
      galleryImage.setAttribute("class", "image");
      galleryImage.setAttribute("src", imageInGalleryId.src);
      slideGallery = document.querySelector(".slider");

      // console.log(slideGallery)
      let whatt = slideGallery.insertBefore(
        newList,
        document.querySelector(".slick-list")
      );
      whatt.appendChild(galleryImage);
      console.log(whatt);
    }

    //this part styles slick gallery arrows

    setTimeout(() => {
      const arrowText = document.getElementsByClassName("slick-arrow");
      arrowText.item(0).innerHTML = "<";
      arrowText.item(1).innerHTML = ">";

      var dotNums = document.querySelectorAll(".slick-dots button");

      function removeText(item) {
        item.innerHTML = ""; // or put the text you need inside quotes
      }

      dotNums.forEach(removeText);
    }, 100);
  });

  // console.log(images.length)
}, "1000");
