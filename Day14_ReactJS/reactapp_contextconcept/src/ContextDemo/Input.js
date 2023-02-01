import {FriendContext} from "./FriendContext"
import {useContext} from "react"

function Input(){

	const contextData = useContext(FriendContext)

	const save = function(event){
		event.preventDefault()
		var name = event.target.name.value
		contextData.saveFriends(name)
		var age = event.target.age.value
		contextData.saveFriends(age)
		var salary = event.target.salary.value
		contextData.saveFriends(salary)
	}

	return <div>
		<form onSubmit={save}>
			Enter name : <input type="text" name="name"/><br/>
			Enter age : <input type="text" name="age" /><br/>
			Enter salary: <input type="text" name="salary"/><br/>
			<button>Save</button>
		</form>
	</div>
}

export default Input