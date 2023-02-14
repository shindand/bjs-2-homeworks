function parseCount(string) {
    if (isNaN(Number.parseFloat(string))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(string);
}

function validateCount(text){
  try {
    return parseCount(text);
  }
  catch(error) {
    return error;
  }
      

}

//console.log(validateCount('888'));

//console.log(validateCount('jjj'));

class Triangle {
    constructor (size1, size2, size3) {
        this.size1 = size1;
        this.size2 = size2;
        this.size3 = size3;
        if ((this.size1 + this.size2) < this.size3 || (this.size1 + this.size3) < this.size2 || (this.size3 + this.size2) < this.size1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        this.perimetr = this.size1 + this.size2 + this.size3;
        return this.perimetr;
    }
    get area(){
        this.perimetr = this.perimetr / 2;
       return  (Math.sqrt(this.perimetr * (this.perimetr - this.size1) * (this.perimetr - this.size2) * (this.perimetr - this.size3))).toFixed(3);
    }
}

let triangle = new Triangle(6,10,15);

console.log(triangle.perimeter);
console.log(triangle.area);
//triangle = new Triangle(26,12,17);
//console.log(triangle.perimeter);



function getTriangle(size1, size2, size3) {
    try {
      return new Triangle(size1, size2, size3);
    }
    catch(error) {
      throw new Error("Ошибка! Треугольник не существует");
        return error;
      }

}

console.log(getTriangle(30,20,15));
