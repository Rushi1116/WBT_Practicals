import FriendsInput from "./FriendsInput"
import FriendsTable from "./FriendsTable"
import {useState} from "react"
import "./Style.css"

function Home(){
	const [friends, setFriends] = useState([])

	const saveFriends = function(data){
		setFriends([...friends,data])
	}

	return <div className="container-fluid">
			<div className="row align-items-center justify-content-evenly" style={{height : "99vh"}}>
				<div className="col-4 bg-white shadow p-5">
					<FriendsInput saveFriends={saveFriends}/>
				</div>
				<div className="col-6">
					<FriendsTable friends={friends}/>
				</div>
			</div>
	</div>
}

export default Home;