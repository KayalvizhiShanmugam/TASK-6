//3.WRITE A "PERSON" CLASS TO HOLD ALL THE DETAILS?
class person{
    constructor(name,age,salary,address,gender){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.address=address;
        this.gender=gender;
    }
}
var result = new person("kayalvizhi","22","32000","navamarathupatti","female");
console.log(result.name);
console.log(result.age);
console.log(result.salary);
console.log(result.address);
console.log(result.gender);
//OUTPUT:
//kayalvizhi 
//22
//32000
//navamarathupatti 
//female
//2.Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle); //get radiusCircle
  
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle); //set radiusCircle
  //OUTPUT
  //1
  //2.2
  //1.CLASS MOVIE
  class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating == undefined)
        {
            this.rating="PG";
        }
        else
        {
            this.rating=rating;
        }
      }
    getPG(array){
            var result=[];
            for(var i=0;i<array.length;i++){
                if(array[i].rating=="PG")
                {
                    result.push(array[i]);
                }
            }
            return result;
       }
  }
  var movie1=new Movie("LOVE TODAY","AGS","PG15");
  var movie2=new Movie("ABC","EFG");
  var movie3=new Movie("Casino Royale","Eon Productions","PG13");
  var movie4=new Movie("KK","PQR");
  var arr=[movie1,movie2,movie3,movie4];
  console.log(movie3.getPG(arr));
  //output:
  //(2) [Movie, Movie] 
// Movie {title: 'ABC', studio: 'EFG', rating: 'PG'}
// Movie {title: 'KK', studio: 'PQR', rating: 'PG'}
//4.write a class to calculate the uber price.
class Uber{
  constructor(fixedprice,distance){
    this.fixedprice=fixedprice;
    this.distance=distance;
  }
  get price(){
     var price=this.fixedprice*this.distance;
     return price;
  }
}
var obj = new Uber(3,250);
console.log(obj.price);
//OUTPUT;
//750