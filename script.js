var _a;
// listing Element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n   <h2>Resume</h2>\n   <p><strong>Name:</strong> <spam id=\"edit-name\" class=\"editable\"> ".concat(name_1, "</spam> </p>\n   <p><strong>Email:</strong>  <spam id=\"edit-email\" class=\"editable\"> ").concat(email, " </spam> </p>\n   <p><strong>Phone:</strong>  <spam id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </spam> </p>\n      \n    <h3>Education</h3>\n    <p   id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n   ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more form elements are missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (elements) {
        elements.addEventListener('click', function () {
            var _a;
            var currentElement = elements;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
