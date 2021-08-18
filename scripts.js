//Generated the pin and showing display:
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const fourDigitPin = pin +'';
    if(fourDigitPin.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
document.getElementById('generate-btn').addEventListener('click',function(){
    const getRandomInput = document.getElementById('generated-pin');
    getRandomInput.value = getPin();
});

//input pin showing on display:
document.getElementById('calc').addEventListener('click',function(event){
    const calcInput = document.getElementById('calc-numbers');
    const calcInputValue = calcInput.value;
    const keyPad = event.target.innerText;
    if(isNaN(keyPad)){
        if(keyPad=='C'){
            calcInput.value = '';
        }
    }
    else{
        calcInput.value = keyPad;
        const newCalc = calcInputValue + keyPad;
        calcInput.value = newCalc;
    }
});

//submit button click and showing pinned matched/unmatched:

document.getElementById('submit-btn').addEventListener('click',function(){
    const generatedPin = document.getElementById('generated-pin').value;
    const keyPadPin = document.getElementById('calc-numbers').value;
    
    const unmatched = document.getElementById('unmatched');
    const matched = document.getElementById('matched');
    if(generatedPin == keyPadPin){
        matched.style.display = 'block';
        unmatched.style.display= 'none';
    }
    else{
        unmatched.style.display='block';
        matched.style.display = 'none';
    }
})