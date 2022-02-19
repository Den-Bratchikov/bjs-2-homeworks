function Student(name, gender, age) {
  return {
    name,
    gender,
    age,
  }
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = marks.push (mark); 
    } else {
      this.marks = marks.push (mark);
    }
}

Student.prototype.addMarks = function(mark1, mark2, mark3,...markX) {
  if(this.marks === undefined) {
    this.marks = marks.push (mark);
  } else {
      for (let i = 0; i < marks.length; i++) {
        this.marks = marks.push(markX[i]);
      }
  }
}

Student.prototype.getAverage = function() {
  for (let i = 0; i < this.marks.length; i++) {
    total += this.marks[i];
  }
  
  return total / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject,

  delete this.marks,
  
  this.excluded = reason
}