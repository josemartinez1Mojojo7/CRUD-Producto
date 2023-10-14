export class Product{
  _id?:number;
  name:string;
  category:string;
  price:string;
  image:string;

  constructor(name:string,category:string,price:string,image:string){
      this.name=name;
      this.category=category;
      this.price=price;
      this.image=image;
  }
}
