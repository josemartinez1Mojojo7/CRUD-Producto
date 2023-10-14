import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  listProducts:Product[]=[];

  constructor(private productService:ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productService.obtenerProductos().subscribe(data=>{
      this.listProducts=data;
    },error =>{
      console.log(error);
    });
  }

  eliminarProducto(id:any){
    this.productService.eliminarProducto(id).subscribe(data=>{
      this.toastr.error('El Producto Se Elimino','Producto Eliminado')
      this.obtenerProductos();
    },error=>{
      console.log(error);
    });
  }

}
