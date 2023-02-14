class PrintEditionItem {
    constructor(name, releaseDate, pagesCount,state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type
    }
    fix() {
        this.state *= 1.5;
    }
    set state(state) {
      if (state < 0) {
        this._state = 0;
    }
      else if (state > 100) {
        this._state = 100;
    }
      else {
        this._state = state;
    }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
      super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "book";
        this.author = author;
      }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
          this.type = "fantastic";
        }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
          this.type = "novel";
        }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
          this.type = "detective";
        }
}


const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

//console.log(sherlock.releaseDate); //2019
//console.log(sherlock.state); //100
//sherlock.fix();
//console.log(sherlock.state); //100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  //console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  //picknick.state = 10;
  //console.log(picknick.state); //10
  //picknick.fix();
  //console.log(picknick.state); //15
  //console.log(picknick.type); 
  //console.log(picknick.name); 


  //                                           Задание 2


  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      this.book = book;
      if (this.book.state > 30) { 
        this.books.push(book); 
     }
    }

   findBookBy(type, value) {    
        return this.books.find(item => (item[type] == value)) || null;
         }
     

    giveBookByName(bookName){
         let bookBy = this.books.filter(item => item.name == bookName);
         if (bookBy.length > 0) {
          this.books.forEach((element, index) => {
                  if (element.name == bookName) {
                  this.books.splice(index, 1);
         }
        });
        return bookBy;
    }
    return null;
  }
}
  const library = new Library("Библиотека имени Ленина");

  library.addBook(
   new DetectiveBook(
     "Артур Конан Дойл",
     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
     2019,
     1008
   )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
   );

  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
//library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.findBookBy("name", "Властелин колец")); //null
//console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
//console.log(library.findBookBy("name", "Мурзилка")); //"Мурзилка"
//console.log(library.findBookBy("name", "бугагаш")); 
//console.log(library.findBookBy("name", "Пикник на обочине")); 

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

console.log(library.giveBookByName("Машина fhfjffk"));
console.log(library.books.length);


//                          Задание 3

class Student {
    constructor(name){
        this.name = name;
        this.marks = {};
    }

    addMark(subject, estimation) {
      if (estimation >= 2 && estimation <= 5) {
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(estimation);
       return this.marks;
      }
    }

    getAverageBySubject(subject) {
      if (this.marks[subject]) {
       return this.marks[subject].reduce((acc, item) => {return (acc + item)}, 0) / this.marks[subject].length;
    }
    else {
      return 0;
    }
  }

    getAverage(marks) {
      if (this.marks) {
        return Object.keys(this.marks).reduce((acc, item) => {return (acc + this.getAverageBySubject(item))}, 0) / Object.keys(this.marks).length;
      }
    }
 

}

const student = new Student("Виктор");

//console.log(student.addMark("геометрия", 5));
//console.log(student.addMark("геометрия", 3));
//console.log(student.addMark("геометрия", 5));
//console.log(student.addMark("алгебра", 5));
//console.log(student.addMark("алгебра", 3));
//console.log(student.getAverageBySubject("геометрия"));
//console.log(student.getAverageBySubject("алгебра"));
//console.log(student.getAverage());
//console.log(student.getAverageBySubject("алхимия"));




 