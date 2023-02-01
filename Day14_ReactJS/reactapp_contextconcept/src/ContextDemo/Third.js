import { FriendContext } from "./FriendContext.js";
function Third() {
	return (
		<div>
			This is Third component
			<FriendContext.Consumer>
				{(value) => (
					<ol>
						{value.friends.map((item) => (
							<li>{item}</li>
						))}
					</ol>
				)}
			</FriendContext.Consumer>
		</div>
	);
}

export default Third;
