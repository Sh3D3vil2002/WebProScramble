function PlayGame(){
    //Storage for Words
    var wordDatabase = [['o d g o'], ['a t r e s m'], ['u s t d y']];

    //Selection of HTML Elements
    var playarea = document.getElementById('playarea');

    //Generation of A random number
    //This number is used to select the index of the array
    let randomNumber = Math.floor(Math.random() * wordDatabase.length);

    //Output of Words to the Database
    playarea.value = wordDatabase[randomNumber];
}