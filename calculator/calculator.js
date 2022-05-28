let numbers = document.querySelectorAll(".number");
let actions = document.querySelectorAll(".action");
let screen = document.querySelector(".screen");

let displayNumber = '';
let nums = [];
let priorAction = '';

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) =>{
        displayNumber += e.target.textContent;
        screen.textContent = displayNumber;
});
};

for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener('click', (e) =>{
            value = e.target.value;
        if (value === 'equals') {
            nums.push(displayNumber);
            if (priorAction === 'plus') {
                displayNumber = parseInt(nums[0]) + parseInt(nums[1]);
                screen.textContent = displayNumber;
                nums = [];
                priorAction ='';
            }
            if (priorAction === 'minus') {
                displayNumber = parseInt(nums[0]) - parseInt(nums[1]);
                screen.textContent = displayNumber;
                nums = [];
                priorAction ='';
            }
            if (priorAction === 'times') {
                displayNumber = parseInt(nums[0]) * parseInt(nums[1]);
                screen.textContent = displayNumber;
                nums = [];
                priorAction ='';
            }
            if (priorAction === 'divide') {
                displayNumber = parseInt(nums[0]) / parseInt(nums[1]);
                screen.textContent = displayNumber;
                nums = [];
                priorAction ='';
            }
        }
        else {
            if (value === 'clear') {
                displayNumber = '';
                screen.textContent = displayNumber;
                displayNumber = '';
                nums = [];
                
            }
            else if (value === 'delete') {
                displayNumber = screen.textContent.slice(0, -1);
                screen.textContent = displayNumber;
                nums = [];
            }
            else {
                nums.push(displayNumber);
                displayNumber = '';
                priorAction = value;
            }
        }
        });
    };

