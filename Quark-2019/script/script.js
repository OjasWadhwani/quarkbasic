/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var isOpen=false;

function SidenavToggle(){
	if (isOpen==false)
	openNav();
	else closeNav();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
	document.getElementById("main").style.marginLeft = "15%";
	rotateSidenavCog();
	isOpen=true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
	rotateSidenavCogReverse();
	isOpen=false;
} 

function rotateSidenavCog()
{
	document.getElementById("sidenavCog").style.transform="rotate(180deg)";
}

function rotateSidenavCogReverse()
{
	document.getElementById("sidenavCog").style.transform="rotate(0deg)";
}

var panel1IsOpen=false;
function showPanel1(){
	if (panel1IsOpen==false)
	{
		document.getElementById("dropdown-2").style.display="none";	//close Panel 2
		panel2IsOpen=false;
		document.getElementById("dropdown-3").style.display="none";	// close Panel 3
		panel3IsOpen=false;
		document.getElementById("dropdown-4").style.display="none";//close Panel 4
		panel4IsOpen=false;
		document.getElementById("dropdown-1").style.display="block";
		panel1IsOpen=true;
	}
	else
	{
		document.getElementById("dropdown-1").style.display="none";
		panel1IsOpen=false;
	}

}

var panel2IsOpen=false;
function showPanel2(){
	if (panel2IsOpen==false)
	{
		document.getElementById("dropdown-1").style.display="none";	//close Panel 1
		panel1IsOpen=false;
		document.getElementById("dropdown-3").style.display="none";	// close Panel 3
		panel3IsOpen=false;
		document.getElementById("dropdown-4").style.display="none";//close Panel 4
		panel4IsOpen=false;
		document.getElementById("dropdown-2").style.display="block";
		panel2IsOpen=true;
	}
	else
	{
		document.getElementById("dropdown-2").style.display="none";
		panel2IsOpen=false;
	}

}

var panel3IsOpen=false;
function showPanel3(){
	if (panel3IsOpen==false)
	{
		document.getElementById("dropdown-2").style.display="none";	//close Panel 2
		panel2IsOpen=false;
		document.getElementById("dropdown-1").style.display="none";	// close Panel 1
		panel1IsOpen=false;
		document.getElementById("dropdown-4").style.display="none";//close Panel 4
		panel4IsOpen=false;
		document.getElementById("dropdown-3").style.display="block";
		panel3IsOpen=true;
	}
	else
	{
		document.getElementById("dropdown-3").style.display="none";
		panel3IsOpen=false;
	}

}

var panel4IsOpen=false;
function showPanel4(){
	if (panel4IsOpen==false)
	{
		document.getElementById("dropdown-2").style.display="none";	//close Panel 2
		panel2IsOpen=false;
		document.getElementById("dropdown-3").style.display="none";	// close Panel 3
		panel3IsOpen=false;
		document.getElementById("dropdown-1").style.display="none";//close Panel 1
		panel1IsOpen=false;
		document.getElementById("dropdown-4").style.display="block";
		panel4IsOpen=true;
	}
	else
	{
		document.getElementById("dropdown-4").style.display="none";
		panel4IsOpen=false;
	}

}
