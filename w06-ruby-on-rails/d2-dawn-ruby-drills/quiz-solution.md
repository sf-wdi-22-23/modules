## Workflow, UX, and Psuedo Coding Quiz: SOLUTION

1. Code imaginary instructions to make a peanut butter and jelly sandwich in ruby and javascript.
  ```js
    goToStore("hivee", function(groceries) {
      groceries.bread.spread(groceries.pb, groceries.jelly, function(sandwich) {
        currentUser.eat(sandwich);
      })
    })
  ```

  ```Ruby
    groceries = goToStore("hivee")
    sandwich = groceries.bread.spread(groceries.pb, groceries.jelly)
    current_user.eat(sandwich)
  ```

1. Write a brief and complete user narrative for you're favorite user interaction with any web application or mobile app.

  I'm Rosie the Lyft Requester. I'm going to work so I open my lyft app. I confirm the default starting point of my current location: at home. I tap on my work place to set that as the destination and tap to request the Lyft. I see a loading screen and I get pinged when a driver is on her way.

1. Write a comment for each line of the following code for what it does (if you don't know what some code does, try your best to guess):
  ```js
  // Setup a POST route to '/api/zoinks' to create a Zoink. Ensure the user is authenticated.
  app.post('/api/zoinks', auth.ensureAuthenticated, function (req, res) {
    // set a variable equal to a new Zoink using the user submitted form data from the request's body
    var zoink = new Zoink(req.body);
    // Set the new zoink's user to the current user's id
    zoink.user = req.userId;
    // Find the current user
    User.findById(req.userId, function (err, user) {
      // if there is an error respond with the error to the client
      if (err) { return res.send({ err: err }) }
      // otherwise rsvp the user to the current zoink
      zoink.rsvps.push(user);
      // save the current zoink
      zoink.save(function (err) {
        // if there is an error respond with the error to the client
        if (err) { return res.send({ err: err }) };
        // otherwise send back 201 HTTP and the newly created zoink
        res.status(201).json(zoink);
      });      
    })
  });
  ```
1. Describe in your own words what it means to build an application '(r)outside-in'.

  It is best to design and build code starting from the user's experience. The user experiences the templates first and then the client and backend code are meant to serve the template correctly. Sometimes you have to start with your routes because you can't serve a template without first having a route.

1. Although you might know nothing about Python, imagine you've been asked by your employer or client to find the best Django module for doing authentication. (Django is like Rails but built in python). Pick the Django module you'd use and list the pros and cons of why to use or not use it and why you think it is the best.

  I would choose to use Django REST framework's Authentication patterns because it looks like a full featured and integrated solution. It is recommended on djangopackages.com as used by over 130 people and it has 4,800 github stars, 322 watchers, and 1,500 forks. If we want social authentication, I'd recommend python social auth. Also has great github stats and is recommended in a few blogs to work with Django REST framework.

1. Name three of your favorite and most effective debugging techniques.

  * Analyzing error messages
  * Setting a break point
  * logging to the console
  * experimenting in the console or terminal

**PROJECT 1 Review**
1. Recall a problem you had or are having with your project 1 and write a sample stackoverflow.com question. Remember to include
  1. What you're trying to accomplish
  1. What you've tried already
  1. What error you are receiving or problem you are having
  1. Relevant, brief code samples

    I used bower-rails with a rails 4 + AngularJS website, now am trying to deploy to heroku. The problem is heroku does not see the bower_components in my vendor/assets file even though I've added the path to my application.rb file
    ```
        config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
    ```
    Heroku push origin master:

      ```
           -----> Preparing app for Rails asset pipeline
           Running: rake assets:precompile
           ...
           rake aborted!
           Sprockets::FileNotFound: couldn't find file 'angular'
           (in /tmp/build_e660cd4b8a3168401ec4da7e261784fe/app/assets/javascripts/application.js:18)
      ```
    I'm using the Bowerfile, and bowerrails does not create a bower.json file.

1. Write very honestly what workflow process you actually did for Project 1. Feel free to break it up by day.  
1. Write what workflow you wish you had done and what you will strive to do in future projects.
