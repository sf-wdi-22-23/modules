// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function() {
    console.log('Hey, Earth!')

    $('#pizza-form').on('submit', function(e) {
        e.preventDefault();

        var formData = $(this).serialize();
        console.log('form data is: ', formData);

        // url, data, callback
        $.post('/api/pizzas', formData, function(data) {
          console.log("inside the post callback, data is: ", data)
          var pizza = "<p><a href='/pizzas/" + data._id + "'>"
                        + data.size + " " + data.crust + "</a></p>"
          console.log(pizza);
          $('#pizzas').append(pizza);
        })

    })

    $('#new-comment').on('submit', function(e) {
      e.preventDefault();

      var commentData = $(this).serialize();
      var url = "/api/pizzas/" + $(this).data().id + "/comments"
      $.post(url, commentData, function(data) {
        // make HTML string to append to page
        var newComment = "<p>" + data.details + "</p>";
// append the HTML string to the element with an id of 'comment-list' in the DOM
        $('#comment-list').append(newComment);
      })
    })

});
