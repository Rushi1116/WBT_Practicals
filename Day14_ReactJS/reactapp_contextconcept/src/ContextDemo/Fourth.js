import {FriendContext} from "./FriendContext.js"
import {useContext} from "react"

function Fourth() {
	const contextData = useContext(FriendContext)


	return <div>This is Fourth component
		<ol>
			{contextData.friends.map(item => <li>{item}</li>)}	

		</ol>
	</div>;
}

export default Fourth;
