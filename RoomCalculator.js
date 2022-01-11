function RoomCalculator(){
    let UserInputLength = prompt("Please input the length of the Classroom: ");
    console.log(UserInputLength);
    let UserInputWidth = prompt("Please input the width of the Classroom: ");
    console.log(UserInputWidth);
    let UserInputHeight = prompt("Please input the height of the Classroom: ");
    console.log(UserInputHeight);

    console.log("Your area is: " + (UserInputLength * UserInputWidth).toString());
    console.log("Your perimeter is: " + (2 * (UserInputLength * UserInputWidth)).toString());
    console.log("The volume of your classroom is: " + (UserInputLength * UserInputWidth * UserInputHeight).toString());
    console.log("You will need " + ((UserInputLength * UserInputWidth) / 5).toString() + " carpet tiles for your classroom.");
    console.log("You will need " + (UserInputLength * UserInputWidth + 2 * UserInputLength * UserInputHeight + 2 * UserInputWidth * UserInputHeight) /25 + " cans of paint for your classroom.");
}