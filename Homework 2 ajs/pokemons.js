$(document).ready(function(){
    $('#generatebtn').click(function(){
       $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon',
        success:function(data){
              $("#list").empty();

                for (let i = 0; i < 10; i++) {
                    $("#list").append(
                        "<li>" + data.results[i].name + "</li>"
                    );
                    
        
                }
            }
        });

    });

});

      
