var form = document.getElementById('calculateForm');
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var selectList = document.getElementById('selectCalculator');
var selctionLabel = document.getElementById('selctionLabel');
var firstLabel = document.getElementById('firstLabel');
var secondLabel = document.getElementById('secondLabel');
var lastLabel = document.getElementById('lastLabel');

selectList.addEventListener('change',function(event){
    
    // update labels based on selection
    switch (selectList.options[selectList.selectedIndex].value)
    {
        case "xIsWhat%OfY":
            selctionLabel.innerText = "X is what % of Y?"
            firstLabel.innerText = "";
            secondLabel.innerText = "is what % of";
            lastLabel.innerText = "?";
            break;

        case "whatIsY%OfX":
            selctionLabel.innerText = "What is Y% of X?";
            firstLabel.innerText = "What is ";
            secondLabel.innerText = "% of";
            lastLabel.innerText = "?";
            break;

        case "xIsY%OfWhat":
            selctionLabel.innerText = "X is Y% what?";
            firstLabel.innerText = "";
            secondLabel.innerText = "is ";
            lastLabel.innerText = "% of what?";
            break; 
        
        case "x%ofWhatIsY":
            selctionLabel.innerText = "X% of what is Y?";
            firstLabel.innerText = "";
            secondLabel.innerText = "% of what is ";
            lastLabel.innerText = "?";
            break; 
            
        case "y%OfXIsWhat":
            selctionLabel.innerText = "Y% of X is what?";
            firstLabel.innerText = "";
            secondLabel.innerText = "% of ";
            lastLabel.innerText = "is what?";
            break; 
    } 
    //reInitialize input/output fields of the form
    numField1.value = "";
    numField2.value = "";
    resultField.innerText = "";
    event.preventDefault();
});

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value) 
        alert("Please enter values in the fields");
    else
    {
        var n1 = numField1.value;
        var n2 = numField2.value;
        switch (selectList.options[selectList.selectedIndex].value)
        {
            case "xIsWhat%OfY":
                firstFn(n1,n2);
                break;

            case "whatIsY%OfX":
                secondeFn(n1,n2);
                break;

            case "xIsY%OfWhat":
                thirdFn(n1,n2);
                break; 

            case "x%ofWhatIsY":
                fourthFn(n1,n2);
                break; 

            case "y%OfXIsWhat":
                fifthFn(n1,n2);
                break; 
        } 
        event.preventDefault();
    }

});

var firstFn = function(x,y){
    var result = x / y;
    result = result * 100;
    resultField.innerText = "Answer: "+result+" % ";
}

var secondeFn = function(y,x){
    var result = y / x;
    result = result * 100;
    resultField.innerText = "Answer: "+result+" % ";
}

var thirdFn = function(x,y){
    var result = y / 100;
    result = x / result;
    resultField.innerText = "Answer: "+result;
}

var fourthFn = function(x,y){
    var result = x / 100;
    result = y / result;
    resultField.innerText = "Answer: "+result;
}

var fifthFn = function(y,x){
    var result = y / 100;
    result = x * result;
    resultField.innerText = "Answer: "+result;
}

