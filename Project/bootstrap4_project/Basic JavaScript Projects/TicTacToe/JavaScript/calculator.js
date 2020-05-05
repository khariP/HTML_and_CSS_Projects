// creates an object to keep track of values
const Calculator = {
    // this is display 0 on the screen
    Display_Value: '0',
    // this will hold the first operand for any expressions, we set it to null for now
    First_Operand: null,
    // this checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    // this will hold the operator, we set it to null for now
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // we are checking to see if Wait_Second-Operand is true and set
    // Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
      Calculator.Display_Value = digit;
      Calculator.Wait_second_Operand = false;
    } else {
    // this overwirites Display_Value if the current value is 0
    // otherwise it adds onto it
       Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// this section handles decimal points
function Input_Decimal (dot) {
    // this ensures that accidental clicking of the decimal point
    // doenst cause bugs in your operation
    if (Calculator.Wait_second_Operand === true) return;
    if (!Calculator.Display_Value.includes (dot)) {
    // we are saying that if the display_Value does not contain a decimal point
    // we want to add a decimal point
       Calculator.Display_Value += dot;
    }
}



// this section handles operators
function Handle_Operator(next_Operator) {
    const { First_operand, Display_Value, operator } = Calculator
    // when an operator key is pressed, we convert the current number
    // displayed on the screen to a number and then store the result in
    // Calculator.First_Operand if it doesnt already exist
    const Value_of_Input = ParseFloat(Display_Value);
    //checks if an operator already exists and if Wait_Second_Operand is true,
    // then updates the operator and exists from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_operand = Value_of_Input;
    }   else if (operator) {// checksif an operator already exists}
        const Value_Now = First_operand || 0;
        // if operator Already exists, Property lookup is performed for the operator
        // in the Perform_Calculation object and the function that matches the
        // operator is executed
        const result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        
        Calculator.Display_Value = String(result);
        Calculator.First_Operand = result;
    }

    Calculator.Wait_second_Operand = true;
    Calculator.operator = next_Operator;
}

const Perform_Calculation = {
    '/': (First_operand, Second_Operand) =>First_operand / Second_Operand,
    '*': (First_operand, Second_Operand) =>First_operand * Second_Operand,
    '+': (First_operand, Second_Operand) =>First_operand + Second_Operand,
    '-': (First_operand, Second_Operand) =>First_operand - Second_Operand,
    '=': (First_operand, Second_Operand) =>Second_operand 
}; 

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.Display_Operand = null;
    Calculator.Wait_Second_Operand= false;
    Calculator.operator = null;
}
// this Function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();
// this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  // the target variable is an object that represents the element
  // that was clicked
  const { target } = event;
  // if the element that was clicked on is not a button, exit the function  
  if (!target.matches('button')) {
    return;  
  }

if (target.classList.contains('operator')) {
      Handle_Operator(target.value);
      Update_Display();
      return;
}

if (target.classList.contains('decimal')) {
Input_Decimal(target.Value);
Update_Display();
  return;
}
// ensures that AC clears the numbers from the Calculator.
if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;

}  

Input_Digit(target.Value);
Update_Display();

})