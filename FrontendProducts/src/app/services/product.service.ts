import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url=environment.apiUrl+'/products'

  constructor( private http:HttpClient ) { }

  obtenerProductos():Observable<any>{
    return this.http.get(this.url);
  }
  eliminarProducto(id:string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
  guardarProducto(product:Product):Observable<any>{
    return this.http.post(this.url,product);
  }
  obtenerProducto(id:string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }
  editarProducto(id:string,product:Product):Observable<any>{
    return this.http.put(this.url+'/'+id,product);
  }

}
