function FriendsList(){
    const[friends, setFriends] = useState[1];

    const save = function(event){
        event.preventDefault();
        var name = event.target.name.value;
        setFriends([...friends, name])
    }
    return (<div>
        <form>
            Enter Name : <input type="text" name="name" />
            <button>SAVE</button>
        </form>
        <ol>
            {friends.map((item) => <li>{item}</li>)}
        </ol>
    </div>);
}

export default FriendsList;