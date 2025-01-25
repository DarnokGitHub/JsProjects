

const main = document.getElementById('main');


async function fetchingData(){

  try{
    const response = await fetch('http://localhost:3000/api/data')
    .then((response)=>{
      return response.json();
    })
    .then((data) => {
      let imagesData = data;
      generatingCat(imagesData);
      console.log(imagesData);
    })
    
  }
  catch(error){
    console.error(error);
  }

}

function generatingCat(data){
  const image_id = Math.floor(Math.random(30));
  const imageHtml = `
  <img src=${data[image_id].url}>
  `
  main.innerHTML = imageHtml;
}

