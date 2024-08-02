let title = document.querySelector(".title");
let name = "Welcome to Digital Media \nMarketing Agency\nEngageNest...";
let index = 1;

const typeWriter = () => {
  let new_title = name.slice(0, index);
  title.innerText = new_title;

  if (index > name.length) {
    index = 1; 
    title.innerText = ""; 
  } else {
    index++;
  }


  setTimeout(typeWriter, 100); 
}

console.log("Starting typewriter effect");
typeWriter();
