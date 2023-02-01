
function FriendsInput(props){

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
		props.saveFriends(obj)
	}


	return <div>
		<form onSubmit={save}>
			Enter name <input type="text" name="name" className="form-control form-control-sm"/>
			<br/>
			Enter age <input type="text" name="age" className="form-control form-control-sm"/>
			<br/>
			Enter salary <input type="text" name="salary" className="form-control form-control-sm"/>
			<br/>
			Gender : <input type="radio" name="gender" value="male"/>Male
			<input type="radio" name="gender" value="female"/>Female
			<input type="radio" name="gender" value="others"/>Others
			<br/>
			<br/>
			Language : 
				<input type="checkbox" name="lang" value="python"/>Python
				<input type="checkbox" name="lang" value="Nodejs"/>Nodejs
				<input type="checkbox" name="lang" value="Java"/>Java
			<br/>
			<div className="text-center mt-3">
				<button className="btn btn-primary btn-sm">Save</button>	
			</div>
			
		</form>
	</div>
}

export default FriendsInput