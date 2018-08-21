// alert("b");

$(function() {
    $("#submit1").on("click", function(event) {
        // event.preventDefault();
        // alert("hii");

        
        var newburger = {
            name: $("#bname").val().trim()
          };
      console.log("hiii");
          // Send the POST request.
          $.ajax("/api/newburger", {
            type: "POST",
            data: newburger
          }).then(
            function() {
              console.log("created new cat");
              console.log(newburgers);
              // Reload the page to get the updated list
              location.reload();
            } );


    
    }
        );
     
    
        $(".dvo").on("click", function(event) {
            // event.preventDefault();
            // alert("hi");
            var id = $(this).data("id");
            var devo = true;
        
        
            var newdevo = {
              devoured: devo
        
            };
        
            // Send the PUT request.
            $.ajax("/api/burger/" + id, {
              type: "PUT",
              data: newdevo
            }).then(
              function() {
                console.log("changed devore to", devo);
                // Reload the page to get the updated list
               
                location.reload();
              }
            );
          });
    
    });
    