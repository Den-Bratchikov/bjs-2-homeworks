function Student(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
}


Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  this.marks = []
  if(this.marks === undefined){ 
    this.marks = marks; 
    } else {
      this.marks = marks.push (mark);
    }
}

Student.prototype.addMarks = function(...marks) {
  if(this.marks === undefined || marks.length === 0) {
    this.marks = marks;
  } else {
      for (let i = 0; i < marks.length; i++) {
        this.marks = marks.push(markX[i]);
      }
  }
}

Student.prototype.getAverage = function() {
  if(this.marks === undefined) {
    this.marks = marks;
  } else {
    for (let i = 0; i < this.marks.length; i++) {
    total += this.marks[i];
  }
}
  return total / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject,

  delete this.marks,
  
  this.excluded = reason
}