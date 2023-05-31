import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetModel } from './model/AssetModel';


@Injectable({
  providedIn: 'root'
})
export class NetworkCallService {
  
  private  URLRegisteration="http://localhost:8080/"

  constructor(public httpClient:HttpClient ) { } 


  postProduct(data:any){
    return this.httpClient.post<any>("http://localhost:3000/productList/",data);
  }
  getProduct(){
    return this.httpClient.get<any>("http://localhost:3000/productList/");
  }
  
  putProduct(data:any,id:number){
    return this.httpClient.put<any>("http://localhost:3000/productList/"+id,data);
  }
  
  deleteProduct(id:number){
    return this.httpClient.delete<any>("http://localhost:3000/productList/"+id);
  }


  postUser(data:any){
    return this.httpClient.post<any>("http://localhost:3000/profile/",data);
  }
  getUser(){
    return this.httpClient.get<any>("http://localhost:3000/profile/");
  }
  
  putUser(data:any,id:number){
    return this.httpClient.put<any>("http://localhost:3000/profile/"+id,data);
  }
  
  deleteUser(id:number){
    return this.httpClient.delete<any>("http://localhost:3000/profile/"+id);
  }

   
    getAssetType(){
      return this.httpClient.get<any>("http://localhost:3000/assetType/");
    }
    
    putAssetType(data:any,id:number){
      return this.httpClient.put<any>("http://localhost:3000/assetType/"+id,data);
    }
    
    deleteAssetType(id:number){
      return this.httpClient.delete<any>("http://localhost:3000/assetType/"+id);
    }
    
    postAssetType(data:any){
      return this.httpClient.post<any>("http://localhost:3000/assetType/",data);
    }
  
   getAllAssetDetailsinDashboard(){
   return this.httpClient.get<any>("http://localhost:3000/productList/");
   }


  // createAssetManagement(ams:AssetModel) :Observable <object>
  // {  
  //    return this.httpClient.post('$(this.URLRegisteration)',ams)
  // }
  // getAsset(): Observable<object[]>{
  //   return this.httpClient.get<object[]>(`$(this.URLRegistration)/getAllAsset`);
  // }

  // getAssetById(id:number): Observable<object>{
  //   return this.httpClient.get(`$(this.URLRegistration)/getAsset/${id}`);
  // }

  // deletAssetById(id:number): Observable<object>{
  //   return this.httpClient.delete(`$(this.URLRegistration)/delete/${id}`);
  // }
  // getAllAssetDetails(): Observable<object[]>{
  //   return this.httpClient.get<object[]>(`$(this.URLRegistration)/getAllAssetDetails`);
  // }
  // updateAssetDetails(data:any) {
  //   return this.httpClient.put(`$(this.URLRegistration)/updateAssetDetails`,data);
  // }
  // updateAsset(data:any) {
  //   return this.httpClient.put(`$(this.URLRegistration)/updateAsset`,data);
  // }
  // deleteAssetDetailsById(id:number): Observable<object>{
  //   return this.httpClient.delete(`$(this.URLRegistration)/AssetDelete/${id}`);
  // }
  // createAssetDetails(data: any):Observable <any>
  // {
  //       return this.httpClient.post(`$(this.URLRegistration)/saveAssetDetails`,data);
  // }


}
