 let x=prompt("Enter your Name: "); 
 console.log(x);



document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
  });
  
  function  big_image(x){
    x.style.width="400px";
    x.style.height="600px"
  }
  function small_image(x){
    x.style.width="250px"
    x.style.height="200px"
  }


// <img src="download.jpg"  onmouseover="big_image(this)" onmouseout="small_image(this)">
