import {useState} from "react"
import FriendsTable from "./FriendsTable.js";

function Friends(){
    const [friends, setFriends] = useState([]);
    const save = function(event){
        event.preventDefault()
        var name = event.target.name.value;
        var age = event.target.age.value;
        var salary = event.target.salary.value;
        var gender = event.target.gender.value;
        var obj = {
            name : name,
            age : age,
            salary : salary,
            gender : gender
        }
        setFriends([...friends, obj])
    }
    return (<div>
        <form onSubmit={save}>
            Enter Name : <input type="text" name="name" /><br/>
            Enter Age : <input type="text" name="age" /><br/>
            Enter Salary : <input type="text" name="salary" /><br/>
            Enter Gender : <input type="radio" name="gender" value = "male" />Male
            <input type="radio" name="gender" value = "female" />Female
            <input type="radio" name="gender" value = "others" />Others<br/>
            <button>SAVE</button>
        </form>
        <FriendsTable friends = {friends}/>
    </div>);
}

export default Friends;  