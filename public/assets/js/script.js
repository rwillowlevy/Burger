$(function() {
    $(".change-devour").on("click", function(event) {
      event.preventDefault();
      console.log("changed state");
      
      let id = $(this).data("id");
      let newDevoured = reverseBoolean($(this).data("newdevour"));
  
      console.log(newDevoured);
      let newDevourState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevoured);
          location.reload();
        }
      );
    });
    
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
  });
    
  function reverseBoolean(boolean) {
    if (boolean == true) {
      return false;
    } else {
      return true;
    }
  }