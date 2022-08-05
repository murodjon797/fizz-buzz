let elForm = document.getElementById("form");
let elInput = document.getElementById("input");
let elResult = document.getElementById("result");

elForm.addEventListener('submit',function(e){
    e.preventDefault();

    function check(num){
        if (num % 3 === 0 && num % 5 == 0 ){
            return 'FizzBuzz';
        }
        if(num % 3 === 0) {
            return 'Fizz'
        }

        if (num % 5 == 0){
            return 'Buzz';
        } else {
            return "ikkalasigaham bo'linmaydi";
        }
    }

    console.log(check(elInput.value));
    elResult.textContent=check(elInput.value)
})



