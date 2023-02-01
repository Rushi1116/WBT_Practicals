import {useState} from "react"
function Calculator(){
    //var result =0;
    // var [variable, setVariable] = useState(defaultValue)
    var [result, setResult] = useState(0)

    const handleSubmit = function(event){
        event.preventDefault()  //stop form data from submitting data to server
        var num1 = event.target.num1.value;
        var num2 = event.target.num2.value;
        // result = parseInt(num1) + parseInt(num2);
        setResult(parseInt(num1) + parseInt(num2));
        // console.log(result)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Enter Number 1 : <input type="text" name="num1"/>
                    <br/>
                Enter Number 2 : <input type="text" name="num2"/>
                    <br/>
                <button>ADD</button>
            </form>
            <span>Result is : {result}</span>
        </div>
    );
}

export default Calculator;