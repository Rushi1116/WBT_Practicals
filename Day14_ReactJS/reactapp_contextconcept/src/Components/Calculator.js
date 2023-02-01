import {useState} from "react"

function Calculator() {
	//var result = 0
	//var [variable, setVariable] = useState(defaultValue)
	var [result,setResult] = useState(0)

	const handleSubmit = function(event){
	    event.preventDefault()  //stop form from submitting data to server
	    var num1 = event.target.num1.value
	    var num2 = event.target.num2.value
	    setResult(parseInt(num1) + parseInt(num2))
	    //console.log(result)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Enter number 1: <input type="text" name="num1" />
				<br />
				Enter number 2: <input type="text" name="num2" />
				<br/>
				<button>Add</button>
			</form>
			<span>Result  is : {result}</span>	
		</div>
	);
}

export default Calculator;
