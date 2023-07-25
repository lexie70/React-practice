Please read through these instructions in full before beginning the exercise.
Ensure to complete each task IN ORDER
Some steps will have multiple requirements.

Refer to result.png to see final result.

1. Update the css to match result.png (don't worry about colours or exact spacing. No need to measure exactly)

   - Set font to any san serif font
   <!-- -->
   - Center the content in the middle of the window, verticaly and horizontally
   <!-- using flex box properties -->

2. The form inputs should be controlled components
<!-- create a state for controling inputs with useState -->

   - The name field should be required and the email valid (use builtin browser validation )
   <!-- adding an specific type to each input email type for example -->

- Clicking each label should focus the respective input field
<!--id attribute to the input  -->
<!-- use for attribute to the inputs label with the id-->

3. On submit add the resulting user to an array called profileData
   <!-- crate an array for sending the data and storaging -->
 <!-- using an useState to set the state of the array profileData -->

   reset the form
   <!-- adding a value for the input and a useState for setting it to blank -->


4. List all created users beneath the form.
<!-- using a map method for the array to create a list of the users -->

5. Clicking a user should POST an JSON object with the user's name and email to 'https://jsonplaceholder.typicode.com/posts'.
<!--fetch method post: creating a function where it is the fetch request, the function will be viculated with each user name by a onclick event  -->

   - add the ID from the response to the user list

You are welcome to reference MDN (or similar) for documentation:
https://developer.mozilla.org/en-US/docs/Web

========================================================

