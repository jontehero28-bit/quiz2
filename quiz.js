let quizForm = document.querySelector("form");
let resultBox = document.querySelector(".results");
let button = document.querySelector(".send-button");
button.addEventListener("click", handleForm);

function handleForm()
{
    let points = 0;
    let answers = document.querySelectorAll("input:checked");

    for(let a = 0; a < answers.length; a++)
    {
        points += parseInt(answers[a].value, 10);
    }
    console.log(points);
    //alert(`You got ${points} /3 points`)
    quizForm.classList.toggle("hidden");
    document.querySelector(".point-label").innerHTML = points;
    resultsBox.classList.toggle("hidden");

}