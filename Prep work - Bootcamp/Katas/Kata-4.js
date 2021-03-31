const instructorWithLongestName = function(instructors) {
  let teacher = "";
  for (let i = 0 ; i < instructors.length ; i++) {
    let longTeach = instructors[i].name;
    if (teacher.length < longTeach.length){
      teacher = longTeach;
    }
  }
  for (let j = 0; j < instructors.length; j++) {
    if(instructors[j].name === teacher) {
      return instructors[j];
    }
  }
}; 

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));