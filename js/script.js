/*This pops up a successful submission alert when a form has been submitted using
 the submit button on the contact page*/
var button = document.getElementById('submit1')

button.onclick=  function successMessage()// triggered when button is clicked and successMessage displays
    {alert("Success! Email has been sent!");
}


// Email validation 
function validateEmail(email) {
    return email.includes("@") && email.includes("."); /*making sure the email has an @ and a . in the email layout and BOTH conditons needs to
    be true to have a valid email*/
  }
  console.log(validateEmail("youremail@example.com")); // true

//Storing feedback
let feedback=[];// feedback array is set as an empty array
  function addFeedback(message) {// function takes in 1 parameter which is 'message'
    if (feedback.length >= 5) { // if feedback array has more than 5 feedbacks
        feedback.shift(); // Removes the oldest feedback, to make space for newer feedback
    }
    feedback.push(message);// message is added in to the feedback array
    return feedback;
}
console.log(addFeedback('great job on your website!'))
console.log(addFeedback('Good job on the first build of your portfolio site.'))


// GitHub Site Redirection alert
var gitRedirect = document.getElementById('Github') // variable 'gitRedirect' storres buttons with id 'Github', which are located in the project page

gitRedirect.onclick = function redirectMessage(){ //when button is clicked redirectMessage function is triggered
    alert("You will now be redirected to GitHub to view the full code."); // alert will pop up letting the viewer know that they are going to be redirected to GitHub
}