var stds=[]

var validateName = function (){
	var name = document.getElementById("name").value
	if(name.length > 5){
		document.getElementById("name_err").innerHTML=""
		return name
	}else{
		document.getElementById("name_err").innerHTML="Name must be 5 chars"
		return false
	}
}

var validateEmail = function (){
	var email = document.getElementById("email").value
	if(email.endsWith("cdac.com")){
		document.getElementById("email_err").innerHTML = ""
		return email
	}else{
		document.getElementById("email_err").innerHTML = "Email must have domain cdac.com"
		return false
	}
}




function save(){	
	// var name = document.getElementById("name").value
	// var email = document.getElementById("email").value
	var name = validateName() //Siddhant or false
	var email = validateEmail() 
	var age = document.getElementById("age").value
	var genderArr = document.getElementsByName("gender") //[ {}, {}, {}]
	var gender = ""
	if(genderArr[0].checked){
		gender = genderArr[0].value
	}else if(genderArr[1].checked){
		gender = genderArr[1].value
	}else if(genderArr[2].value){
		gender = genderArr[2].value
	}

	if(name && email && age && gender){
		stds.push({
			name : name,
			email : email,
			age : age,
			gender : gender,
		})	
	}
	
}

function display(){
	var htmlStr = ""
	for (var i = 0; i < stds.length; i++) {
		htmlStr +=  `
				<tr>
					<td>${stds[i].name}</td>
					<td>${stds[i].email}</td>
					<td>${stds[i].age}</td>
					<td>${stds[i].gender}</td>
				</tr>`

	}
	document.getElementById("table").innerHTML = htmlStr
}



$(document).ready(function(){
	$("#name").blur(validateName)
	$("#email").blur(validateEmail)

})