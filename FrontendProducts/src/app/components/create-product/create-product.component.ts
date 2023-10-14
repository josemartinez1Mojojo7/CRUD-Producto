import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  productoForm:FormGroup;
  titulo="Agregar Producto";
  id:string|null;

  constructor(private fb:FormBuilder, private router:Router, private toastr:ToastrService, private produtService:ProductService, private aRouter:ActivatedRoute){
    this.productoForm=this.fb.group({
      producto:['',Validators.required],
      categoria:['',Validators.required],
      precio:['',Validators.required],
      url:['']
    })
    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    const PRODUCTO:Product={
      name:this.productoForm.get('producto')?.value,
      category:this.productoForm.get('categoria')?.value,
      price:this.productoForm.get('precio')?.value,
      image:this.productoForm.get('url')?.value,
    }
    if (this.id!=null) {
      this.produtService.editarProducto(this.id,PRODUCTO).subscribe(data=>{
        this.toastr.info('El Producto fue Actualizado','Producto Actualizado');
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
        this.productoForm.reset();
      })
    }else{
      this.produtService.guardarProducto(PRODUCTO).subscribe(data=>{
        this.toastr.success('El Producto fue Registrado','Producto Registrado');
        this.router.navigate(['/']);
      },error=>{
        console.log(error);
        this.productoForm.reset();
      });
    }
  }
  esEditar(){
    if (this.id!=null) {
      this.titulo="Editar Producto";
      this.produtService.obtenerProducto(this.id).subscribe(data=>{
        this.productoForm.setValue({
          producto:data.name,
          categoria:data.category,
          precio:data.price,
          url:data.image
        })
      })
    }
  }

}
