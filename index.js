fetch('https://api.nasa.gov/planetary/apod?api_key=8nKfq0oD4AkMGecYwH6MVUB1B5Ua1MnC5fKiWczl')
.then(response => response.json())
.then(data => {
   
    let tiTle = document.getElementById('title');
    tiTle.innerText = data.title;
    
    
    let explaNation = document.getElementById('explanation');
    explaNation.innerText = data.explanation;
    
    let uRl = document.getElementById('uRl');
    uRl.innerText = data.url;
    
    
   let copyRight = document.getElementById('copyright');
   copyRight.innerText = data.copyright;
    
    
    
    
})

