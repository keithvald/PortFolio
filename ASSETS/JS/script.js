
//---------------------------------------QUI SUIS JE ---------------------------------------

document.querySelector('a#nav_one').addEventListener("click", myFunctionNavOne);

function myFunctionNavOne() {

  	document.querySelector("#IDENTITE").style.display = "block";

  	document.querySelector("#CONTACT").style.display = "none";
 	document.querySelector("#COMPETENCES").style.display = "none";
 	document.querySelector("#BLOC_ONE").style.display = "none";
 	document.querySelector("#PROJETS").style.display = "none";
}

//----------------------------------------COMPETENCES----------------------------------------

document.querySelector('a#nav_two').addEventListener("click", myFunctionNavTwo);

function myFunctionNavTwo() {

  	document.querySelector("#COMPETENCES").style.display = "block";

  	document.querySelector("#CONTACT").style.display = "none";
 	document.querySelector("#IDENTITE").style.display = "none";
 	document.querySelector("#BLOC_ONE").style.display = "none";
 	document.querySelector("#PROJETS").style.display = "none";
}


//----------------------------------------- PROJETS-------------------------------------

document.querySelector('a#project').addEventListener("click", myFunctionProject);

function myFunctionProject() {

  	document.querySelector("#PROJETS").style.display = "block";

 	document.querySelector("#COMPETENCES").style.display = "none";
  	document.querySelector("#CONTACT").style.display = "none";
 	document.querySelector("#IDENTITE").style.display = "none";
 	document.querySelector("#BLOC_ONE").style.display = "none";

}

//----------------------------------------- CONTACT-------------------------------------

document.querySelector('a#nav_three').addEventListener("click", myFunctionNavThree);

function myFunctionNavThree() {

  	document.querySelector("#CONTACT").style.display = "block";

  	document.querySelector("#IDENTITE").style.display = "none";
 	document.querySelector("#COMPETENCES").style.display = "none";
 	document.querySelector("#BLOC_ONE").style.display = "none";
 	document.querySelector("#PROJETS").style.display = "none";


}



