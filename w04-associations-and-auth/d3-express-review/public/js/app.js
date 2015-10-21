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
        })

    })

    $('#new-comment').on('submit', function(e) {
      e.preventDefault();

      var commentData = $(this).serialize();
      var url = "/api/pizzas/" + $(this).data().id + "/comments"
      $.post(url, commentData, function(data) {
        $('#comments').prepend(data.details);
      })
    })

});