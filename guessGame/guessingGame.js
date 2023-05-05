/*
var secret = 7;
var answer = prompt (“Please guess the secret number (1-10)”);
// Convert the string guess to an integer so that we can compare
var guess = parseInt (answer);
Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct!, otherwise “Sorry, incorrect!
How can you combine line 2 and 3 into one line
Expand the program to do this in a while loop, only exiting when the guess was correct
While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
When you are done make the secret number random.
*/


var secret = Math.floor(Math.random())* (10) + 1;
do
{
    var guess =  parseInt(prompt ("Please guess the secret number (1-10)" ));
    if (guess == secret)
{
    alert ("Correct number, congratulations you won");
} 
else  if ( guess > secret) 
 {
    alert ("Incorrect, number too high")
 }
 else 
 {
alert ("Incorrect, number too low ")
 }

} while (guess != secret)


