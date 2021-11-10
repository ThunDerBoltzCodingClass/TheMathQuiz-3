player_1_name= localStorage.getItem("P1Name");
player_2_name= localStorage.getItem("P2Name");
player_1score= 0;
player_2score= 0;
document.getElementById("p1name").innerHTML= player_1_name+":";
document.getElementById("p2name").innerHTML= player_2_name+":";

document.getElementById("p1score").innerHTML= player_1score;
document.getElementById("p2score").innerHTML= player_2score;

document.getElementById("p_question").innerHTML= "Question Turn- "+player_1_name;
document.getElementById("p_answer").innerHTML= "Answer Turn- "+player_2_name;

function send(){
    num1= document.getElementById("num1input").value;
    num2= document.getElementById("num2input").value;
    correct_answer= parseInt(num1) * parseInt(num2);
    console.log(correct_answer)
    question_number= "<h4>" + num1 + "X" + num2 + "</h4>";
    input_box= "<br> Answer: <input type='text' id='check_box'>";
    check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number+input_box+check_button;
    document.getElementById("num1input").innerHTML="";
    document.getElementById("num2input").innerHTML=""
}