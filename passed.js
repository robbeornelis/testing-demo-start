//const score = Math.random() * 20;

//function passed(score) {
//  if (score >= 10) {
//    console.log("You've passed the test");
//  } else if (score < 10) {
//    console.log("You've failed the test");
//  } else if (score < 0 || score > 20) {
//    console.error("Invalid score");
//  }
//}//

//console.log(passed(score));

function passed(score) {
  if (score < 0 || score > 20) {
    return "Invalid score";
  } else if (score >= 10) {
    return "You've passed the test";
  } else if (score < 10) {
    return "You've failed this test";
  }
}

export { passed };
