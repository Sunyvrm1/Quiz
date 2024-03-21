fetch("quiz.json")
.then((res) => res.json())
.then((data) => {
    console.log(data);

    data.results.map((quiz, i) => {
        const quizCont = document.querySelector(".quizCont");
        quizCont.insertAdjacentHTML("beforebegin", 
        `<form>
      <label for="" class="Ques" id="${quiz.correct_answer}">Q. ${i+1}: ${quiz.question}</label><br><br>
      <input type="radio" class="mcq_${i}" name="question_${i}" value="${quiz.option1}"/>
      <label>${quiz.option1}</label><br />
      <input type="radio" class="mcq_${i}" name="question_${i}" value="${quiz.option2}"/>
      <label>${quiz.option2}</label><br />
      <input type="radio" class="mcq_${i}" name="question_${i}" value="${quiz.option3}"/>
      <label>${quiz.option3}</label><br />
      <input type="radio" class="mcq_${i}" name="question_${i}" value="${quiz.option4}"/>
      <label>${quiz.option4}</label><br /><br />
      <input type="submit" value="Submit">
      <p class="result"></p>
    </form>`)
    })

    const form = document.querySelectorAll("form");
    form.forEach((form, i) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(`Form no. ${i+1}`)
        const selectedOption = form.querySelector(`input[name="question_${i}"]:checked`).value;
        const correctAns = form.querySelector("label").id;
        console.log(selectedOption)
        console.log(correctAns);

        const result = document.querySelectorAll(".result");
        if(selectedOption === correctAns){
          result[i].textContent = "Correct ✅"
        } else{
          result[i].textContent = "Wrong ❌"
        }

        const allInput = document.querySelectorAll(`.mcq_${i}`);
        allInput.forEach((input) => {
          input.addEventListener("click", () => {
            result[i].style.display = "none";
          })
        })
        result[i].style.display = "block";
      })
    })
})
