import {useState} from "react"
import FriendsTable from "./FriendsTable.js"
import "./Style.css"
function Friends() {
	const [friends, setFriends] = useState([]);

	const save = function(event){
		event.preventDefault()
		var name = event.target.name.value
		var age = event.target.age.value
		var salary = event.target.salary.value
		var gender = event.target.gender.value
		var lang = [...event.target.lang].filter(item => item.checked).map(ele => ele.value)
		// console.log(lang)
		var obj = {
			name : name,
			age : age,
			salary : salary,
			gender: gender,
			lang: lang
		}
		setFriends([...friends, obj])
	}


	return <div style={{border:"1px solid black",padding :"20px",backgroundColor : "yellow"}}>
		<form onSubmit={save}>
			Enter name : <input type="text" name="name"/>
			<br/>
			Enter age : <input type="text" name="age"/>
			<br/>
			Enter salary : <input type="text" name="salary"/>
			<br/>
			Gender : <input type="radio" name="gender" value="male"/>Male
			<input type="radio" name="gender" value="female"/>Female
			<input type="radio" name="gender" value="others"/>Others
			<br/>
			Language : 
				<input type="checkbox" name="lang" value="python"/>Python
				<input type="checkbox" name="lang" value="Nodejs"/>Nodejs
				<input type="checkbox" name="lang" value="Java"/>Java
			<br/>
			<button className="mybtn">Save</button>
		</form>
		<FriendsTable friends={friends}/>
	</div>;
}










export default Friends;
