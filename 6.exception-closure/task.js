function parseCount(string) {
  let parseCountFloat = Number.parseFloat(string);
    if (isNaN(parseCountFloat)) {
        throw new Error("Невалидное значение");
    }
    return parseCountFloat;

    
   // return isNaN(Number.parseFloat(string)) ?  {throw new Error("Невалидное значение")} : Number.parseFloat(string); - пщчему-то это не хочет работать
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
        if ((size1 + size2) < size3 || (size1 + size3) < size2 || (size3 + size2) < size1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter(){
        return this.size1 + this.size2 + this.size3;
    }
    get area(){
      let perimetr = triangle.perimeter / 2;
       return + (Math.sqrt(perimetr * (perimetr - this.size1) * (perimetr - this.size2) * (perimetr - this.size3))).toFixed(3);
    }
}

let triangle = new Triangle(1,3,3);
triangle = new Triangle(2, 5, 5);
console.log(triangle.perimeter);
console.log(triangle.area);
triangle = new Triangle(6,10,15);
triangle.perimeter = "неправильное значение";
triangle.area = "неправильное значение";
console.log(triangle.perimeter);
console.log(triangle.area);



function getTriangle(size1, size2, size3) {
    try {
      return new Triangle(size1, size2, size3);
    }
    catch(error) {

  return objecToReturn = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
           },
        get area() {
        return "Ошибка! Треугольник не существует";
         }
      }
    }
}

console.log(getTriangle(2, 50, 5));
console.log(triangle.perimeter);
console.log(triangle.area);