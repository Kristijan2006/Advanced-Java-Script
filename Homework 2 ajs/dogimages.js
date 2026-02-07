let button=document.getElementById('btn');
let images=document.getElementById('images');

button.addEventListener('click',function(){
    fetch ('https://dog.ceo/api/breed/hound/images')
    .then (function(response){
        return response.json();
    })
    .then (function(data){

   
        images.innerHTML='';
        for (let i=0; i<data.message.length ; i++){
            images.innerHTML+=`
            <img src='${data.message[i]}' width='200'/>
            `;
        }
    })
   
    .catch(function(error){
        console.log('Error:',(error));
    });


});



   
