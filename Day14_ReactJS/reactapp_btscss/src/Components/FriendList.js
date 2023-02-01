import {useState} from "react"
function FriendList() {
	const [friends, setFriends] = useState([]);

	const save = function(event){
		event.preventDefault()
		var name = event.target.name.value
		setFriends([...friends,name])
	}

	return (
		<div>
			<form onSubmit={save}>
				Enter name : <input type="text" name="name"/>
				<button>Save</button>
			</form>
			<ol>
				{friends.map((item) => <li>{item}</li>)}
			</ol>
		</div>
	);
}

export default FriendList;
