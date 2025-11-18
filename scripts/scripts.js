document.addEventListener("DOMContentLoaded", () => {

//connects the left value slider to the left values box 
const leftSlider = document.getElementById('leftSlider');
const leftInput = document.getElementById('leftSliderInputNum');

leftSlider.addEventListener('input', () => {
    leftInput.value = leftSlider.value;
    console.log(`left indent value set to: ${leftInput.value}`)
});
leftInput.addEventListener('input', () => {
    leftSlider.value = leftInput.value;
    console.log(`left indent value set to: ${leftSlider.value}`)
});


// connects the right value slider to the right values box 
const rightSlider = document.getElementById('rightSlider');
const rightInput = document.getElementById('rightSliderInputNum');

rightSlider.addEventListener('input', () => {
    rightInput.value = rightSlider.value;
    console.log(`right indent value set to: ${rightInput.value}`)
});
rightInput.addEventListener('input', () => {
    rightSlider.value = rightInput.value;
    console.log(`right indent value set to: ${rightSlider.value}`)
});


// connects the before value slider to the before values box
const beforeSlider = document.getElementById('beforeSlider');
const beforeInput = document.getElementById('beforeTextInputNum');

beforeSlider.addEventListener('input', () => {
    beforeInput.value = beforeSlider.value;
    console.log(`Before text spacing set to: ${beforeInput.value}`)
});
beforeInput.addEventListener('input', () => {
    beforeSlider.value = beforeInput.value;
    console.log(`Before text spacing set to: ${beforeSlider.value}`)
});

// connects the before value slider to the before values box
const afterSlider = document.getElementById('afterSlider');
const afterInput = document.getElementById('afterTextInputNum');

afterSlider.addEventListener('input', () => {
    afterInput.value = afterSlider.value;
    console.log(`After text spacing set to: ${afterInput.value}`)
});
afterInput.addEventListener('input', () => {
    afterSlider.value = afterInput.value;
    console.log(`After text spacing set to: ${afterSlider.value}`)
});


const allButtons = document.querySelectorAll(".mainSelector, .alignBtn, .outlineBtn, .specialBtn, .spacingBtn");

allButtons.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.textContent;

        if (button.classList.contains("mainSelector")) {
            console.log(`Go to ${button.textContent}`);
        } 
        else if (button.classList.contains("alignBtn")) {
            console.log(`Set alignment to ${button.textContent}`);
        } 
        else if (button.classList.contains("outlineBtn")) {
            console.log(`Set Outline Level to ${button.textContent}`);
        } 
        else if (button.classList.contains("specialBtn")) {
            console.log(`Set Special indentation value to ${button.textContent}`);
        } 
        else if (button.classList.contains("spacingBtn")) {
            console.log(`Set Line Spacing to ${button.textContent}`);
        }
    });
});


const collapsedCheckbox = document.getElementById('collapsed'); 
const indentsCheckbox = document.getElementById('indents'); 
const spacingCheckbox = document.getElementById('spacingBox'); 

collapsedCheckbox.addEventListener('change', function() {
  if (collapsedCheckbox.checked) {
    console.log('Collapse by defualt has been selected.');
  } else {
    console.log('Collapse by defualt has been unselected.');
  }
});

indentsCheckbox.addEventListener('change', function() {
  if (indentsCheckbox.checked) {
    console.log('Mirror Indents has been selected.');
  } else {
    console.log('Mirror Indents has been unselected.');
  }
});


spacingCheckbox.addEventListener('change', function() {
  if (spacingCheckbox.checked) {
    console.log(`Don't add space between paragraphs of the same style has been selected.`);
  } else {
    console.log(`Don't add space between paragraphs of the same style has been unselected.`);
  }
});

const byNumBox = document.getElementById("byNumBox");


byNumBox.addEventListener('input', () => {
    console.log(`Special set to edit by: ${byNumBox.value} `)
});

const atNumBox = document.getElementById("atNumBox");


atNumBox.addEventListener('input', () => {
    console.log(`Line spacing set to edit at: ${atNumBox.value} `)
});



try {
const submitButton = document.querySelector('.submitBtn');

  submitButton.addEventListener('click', function() {
    console.log(`Decisions have been ${submitButton.textContent}ted`)
  });
} catch (error) {
    console.error('submit button was not loaded:', error)
}
  const restoreBtn = document.querySelector('.restoreBtn');

  restoreBtn.addEventListener('click', function() {
    console.log(`Decisions have been set to ${restoreBtn.textContent}`)

  });

  const cancelBtn = document.querySelector('.cancelBtn');

  cancelBtn.addEventListener('click', function() {
    console.log(`Decisions have been ${cancelBtn.textContent}ed`)
    
  });

  const closeBtn = document.querySelector('.closeBtn');

  closeBtn.addEventListener('click', function() {
    console.log(`Decisions have been ${closeBtn.value}`)
    
  });

});