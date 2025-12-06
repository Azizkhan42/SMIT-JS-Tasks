function add() {
  var userName = prompt("What is your name?");
  var id = prompt("What is your id?");
  console.log("your name is : " + userName + "your id is : " + id);

  var computer = +prompt("Enter your computer marks");
  var Maths = +prompt("Enter your Maths marks");
  var Science = +prompt("Enter your Science marks");

  console.log(
    "your computer marks is : " +
      computer +
      "Your maths marks is : " +
      Maths +
      "Your science marks is : " +
      Science
  );

  var totalMarks = 300;

  var obtMarks = computer + Maths + Science;
  console.log("you obtain " + obtMarks + " out of " + totalMarks);

  var per = (obtMarks / totalMarks) * 100;
  console.log("your percentage is : " + per.toFixed(2) + "%");

  var grade = per < 50 ? "you are fail" : "you are pass";
  console.log(grade);
}
add();
