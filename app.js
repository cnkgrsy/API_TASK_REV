
let client_id = "XdWBpU5A3xnwuoVkpOgW1iVyV7Lu-JiIh7XWEyEpgbE"; //unsplash client id key


const gallery = document.getElementById("galleryy");


//Random image get function, triggered on every page load/reload  
let getImages = () => {
  let link = `https://api.unsplash.com/photos/random?client_id=${client_id}&count=30`;
  fetch(link)
    .then((data) => data.json())
    .then((data) => {
     

      for (let i = 0; i < data.length; i++) {
        let img = document.createElement("img");
        img.src = data[i].urls.regular;
        img.className = "gallery-img";
        img.id = `gallery-img_ID_${i}`;
        gallery.appendChild(img);
       
      }
    
    });
};

getImages();

// search functionality on keypress ("ENTER")

let input = document.getElementById("search")

input.addEventListener("keypress",(e)=>{
  
  if(e.key === "Enter"){
    searchImages();
  }
})

//search funtion only triggered by onlick or keypress

let searchImages = () => {
  let query = document.getElementById("search").value;
  let link = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&per_page=50`;
  fetch(link)
    .then((data) => data.json())
    .then((data) => {
      return data.results;
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].urls.regular);
        let imgSrcChange = document.getElementById(`gallery-img_ID_${i}`);
        imgSrcChange.src = data[i].urls.regular;
      }
    });
};


