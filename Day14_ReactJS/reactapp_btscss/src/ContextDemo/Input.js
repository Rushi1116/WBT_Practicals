import {FriendContext} from "./FriendContext"
import {useContext} from "react"

function Input(){

	const contextData = useContext(FriendContext)

	const save = function(event){
		event.preventDefault()
		var name = event.target.name.value
		contextData.saveFriends(name)
	}

	return <div>
		<form onSubmit={save}>
			Enter name : <input type="text" name="name"/>
			<button>Save</button>
		</form>
	</div>
}

export default Input