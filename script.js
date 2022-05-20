const form = document.querySelector("form");
const correctAnswers = ['A','A','A','A','A','A','B','D','B','B'];
const result = document.querySelector(".result");
const span = document.querySelector("span");

form.addEventListener("submit",event =>{
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    console.log(userAnswers)
    userAnswers.forEach(function(answer,index){
        if(answer === correctAnswers[index])
        {
            score += 10;
        }
    });
    console.log(score);
    scrollTo(0,0);
    let output=0;
    result.classList.remove("d-none");
    const timer= setInterval(function(){
        span.innerHTML = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },15)
}) 
