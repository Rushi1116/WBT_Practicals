import First from "./First.js";
import Second from "./Second.js";
import { useState } from "react";
import { FriendContext } from "./FriendContext.js";

function Home() {
	const [friends, setFriends] = useState([]);

	const saveFriends = function (data) {
		setFriends([...friends, data]);
	};

	return (
		<FriendContext.Provider value={{ friends: friends, saveFriends: saveFriends }}>
			<div>
				This is Home Component
				<First />
				<Second />
			</div>
		</FriendContext.Provider>
	);
}

export default Home;
