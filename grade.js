/**
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
**/
function convertMark() {
    var markInput = document.getElementById("mark-input").value;
    var validationMessage = document.getElementById("validation-message");
    var gradeResult = document.getElementById("grade-result");

    try {
        var mark = parseInt(markInput);

        if (isNaN(mark)) {
            validationMessage.textContent = "Please enter a valid number.";
            gradeResult.textContent = "";
        } else if (mark < 0 || mark > 100) {
            validationMessage.textContent = "Mark must be between 0 and 100.";
            gradeResult.textContent = "";
        } else {
            validationMessage.textContent = "";
            if (mark > 90) {
                gradeResult.textContent = "Grade: A";
            } else if (mark > 80) {
                gradeResult.textContent = "Grade: B";
            } else if (mark > 70) {
                gradeResult.textContent = "Grade: C";
            } else if (mark > 50) {
                gradeResult.textContent = "Grade: D";
            } else {
                gradeResult.textContent = "Grade: F";
            }
        }
    } catch (error) {
        console.error(error);
        validationMessage.textContent = "An unexpected error occurred.";
        gradeResult.textContent = "";
    }
}
