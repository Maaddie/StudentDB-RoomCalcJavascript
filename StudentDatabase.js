
    let students = [
        student1 = {firstName:"Mary", lastName: "Smith", hometown: "Queens, NY", favoriteFood:"Pizza"},
        student2 = {firstName:"Kate", lastName: "Starr", hometown: "Jersey City, NJ", favoriteFood:"Thai"},
        student3 = {firstName:"Charles", lastName: "Strawbeey", hometown: "Rochester Hills, MI", favoriteFood:"Buffalo wings"},
        student4 = {firstName:"John", lastName: "Cartman", hometown: "San Diego, CA", favoriteFood: "Chickpea salad"}];
        

function StudentDatabase(){
    while (true) {
    console.log("This is our list of students:");
    let id = 0; 
    for(i of students){
        console.log(id + ": " + i.firstName + " " + i.lastName); //printing a list of all students names
        id++;
    }
    let UserInput = prompt("Select the number of the student you would like to learn about: "); //prompting user to selecta student they would like to learn about
        console.log("First Name: " + students[UserInput].firstName);
        console.log("Last Name: " + students[UserInput].lastName);
        console.log("Hometown: " + students[UserInput].hometown);
        console.log("Favorite Food: " + students[UserInput].favoriteFood);

        let UserAnswer = prompt("Would you like to learn about another student ?");
        console.log(UserAnswer);
        if(UserAnswer === "yes" || UserAnswer == "y"){
            
        }
        else{
            break;
        }

    }
}
