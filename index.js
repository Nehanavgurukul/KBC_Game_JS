const readlinesync = require("readline-sync")

question_list = [
    "How many continents are there?",                // pehla question
    "What is the capital of India?",                // doosra question
    "NG mei kaun se course padhaya jaata hai?"      // teesra question
]

options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]


solution_list = [3, 4, 1] 



function firstTask(){
    var i = 0
    var k = 0
    var life_line  = 0  
    var mail_list = [[1,3],[4,1], [3,1]] 
    var main_index = 0 
    while(i <question_list.length){
        console.log(i+1,question_list[i])
        var j = 0
        while(j<options_list[i].length){
            console.log("   ",j+1,options_list[i][j])
            j++
        }
        var ans = readlinesync.question("enter your ans ---")
        if(ans == "5050"){
            if(life_line != "5050"){
                life_line = ans
                console.log(mail_list[main_index])
                main_index++;
                var ans = readlinesync.question("enter your ans ---")
                if(solution_list[k] == ans){
                    console.log("congratulation your ans correct.")
                    k++
                }
                i++
            }else{
                console.log("you already lifeline le chuke ho")
                console.log("please try again--")
            }
        }else{
            if(solution_list[k] == ans){
                console.log("congratulation your ans correct.")
                k++
            }else{
                console.log("sadly your ans is wrong.")
                break
            }
            i++ 
        }
    }
}
firstTask();
