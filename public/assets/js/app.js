// $("#addBurg").on("click", function(e){
//     e.preventDefault()
//     console.log("clicked")
// })

document.addEventListener('click', ({ target }) =>{


  if(target.id === "addBurg"){
    event.preventDefault()
   var burgInput = document.getElementById('burgerInput').value

    var newBurg = {
      burger_name: burgInput
     
    };
    //post request
    $.ajax("/api/burgers", {
      type:"POST",
      data: newBurg
    }).then(function(){
      location.reload()
    })
   

  }
  else if(target.id === "devour"){
    event.preventDefault()
    
    var devID = target.getAttribute('data-uid')

    var dev = {
      devoured: "true"
    }
    $.ajax(`/api/burgers/${devID}`,{
      type: "PUT",
      data: dev
    }).then(function(){
      location.reload()
    })

   
  }

  else if(target.id === "delete"){
    event.preventDefault()
    var delID = target.getAttribute('data-uid')


    $.ajax(`/api/burgers/${delID}`,{
      type: "DELETE",
     
    }).then(function(){
      location.reload()
    })
 
  }

})



  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  