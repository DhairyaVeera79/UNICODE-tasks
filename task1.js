var students = [];

function student_marks(list){
    var list_length = list.length;
    for(var i = 0; i < list_length; i++){ //loop to access elements of the input list
        var element_length = list[i].length;
        var first_space = list[i].indexOf(" ");
        var second_space = list[i].indexOf(" ", first_space + 1);
        var third_space = list[i].indexOf(" ", second_space + 1);
        var name = list[i].slice(0,second_space);
        var maths = Number(list[i].slice(second_space, third_space));
        var english = Number(list[i].slice(third_space, element_length));
        var average = (maths + english)/2;
        var student ={
            "name": name,
            "score": {
                "maths": maths,
                "english": english
            }
        };
        if(i == 0){
            students.push(student);
        }
        else{
            //loop to access all the elements currently present in output list
            for(var j = 0; j < i; j++){ 
                current_average = (students[j].score.maths + students[j].score.english)/2;
                if(average > current_average){
                    students.splice(j, 0, student);
                    break;
                    }
                if(j == i-1)
                {
                    students.push(student);
                }
                
            }
        }
    }
    console.log(students); 
}

student_marks(["Rashmil Panchani 99 97", "Parag Vaid 95 93", "Siddharth Sanghavi 98 100"]);
