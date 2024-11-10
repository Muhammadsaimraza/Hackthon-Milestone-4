// listing Element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

   // type assertion
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const experienceElement = document.getElementById('experience') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;

   if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

     const name : string = nameElement.value;
     const email : string = emailElement.value;
     const phone : string = phoneElement.value;
     const education : string = educationElement.value;
     const experience : string = experienceElement.value;
     const skills : string = skillsElement.value;
     




      
   //create resume output
   const resumeOutput = `
   <h2>Resume</h2>
   <p><strong>Name:</strong> <spam id="edit-name" class="editable"> ${name}</spam> </p>
   <p><strong>Email:</strong>  <spam id="edit-email" class="editable"> ${email} </spam> </p>
   <p><strong>Phone:</strong>  <spam id="edit-phone" class="editable"> ${phone} </spam> </p>
      
    <h3>Education</h3>
    <p   id="edit-education" class="editable" >${education}</p>

    <h3>Experience</h3>
    <p id="edit-experience" class="editable" >${experience}</p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable" >${skills}</p>
   `;

   const resumeOutputElement = document.getElementById('resumeOutput');
   if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    
   makeEditable();
   }
} else {
    console.error('one or more form elements are missing.')
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(elements =>{
     elements.addEventListener('click' ,function() {
        const currentElement = elements as HTMLElement;
        const currentValue = currentElement.textContent || "";

        //replace content
        if(currentElement.tagName === "P" || currentElement.tagName  === "SPAN"){
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing-input')

        input.addEventListener('blur',function(){
            currentElement.textContent = input.value;
            currentElement.style.display = 'inline'
            input.remove()
        })







        currentElement.style.display = 'none'
        currentElement.parentNode?.insertBefore(input,currentElement)
        input.focus()
        }
     })
    })
}