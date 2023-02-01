import { useState } from "react";

function Calc(){
    
    var [result, setResult] = useState(0);
    const handleData = function(event){
        event.preventDefault(); //This will stop form data to submit on server
        var x1 = event.target.x1.value;
        var x2 = event.target.x2.value;
        // var result = parseInt(x1) - parseInt(x2);
        // console.log(result);
        setResult(parseInt(x1) - parseInt(x2));
        
    }

    return(
        <div>
            <form onSubmit = {handleData}>
                Enter num1 : <input type="text" name="x1" /> <br/>
                Enter num2 : <input type="text" name="x2" /> <br/>
                <button>Subtract</button> <br/>
                <span>Result is : {result}</span>
            </form>
        </div>
    );
}

export default Calc;