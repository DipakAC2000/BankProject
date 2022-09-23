import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../payment/model/paymentdetails.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  postUserApi: string;
  getAllUsersApi: string;
  getUserApi: string;
  updateUserApi: string;
  getAccountInfoApi: string;
  FundTransferApi: string;

  
  constructor(private http:HttpClient) {
    this.postUserApi = "http://localhost:8888/post/user";
    this.getAllUsersApi = "http://localhost:8888/get/user";
    this.getUserApi = "http://localhost:8888/get/user/";
    this.updateUserApi = "http://localhost:8888/put/user/";
    this.getAccountInfoApi = "http://localhost:8888/get/AccountInfo";
    this.FundTransferApi = "http://localhost:8888/put/payment/";
  }

  public postUser(user: User): Observable<User> {
    return this.http.post<User>(this.postUserApi,user)
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsersApi);
  }

  public getUser(username: string): Observable<User> {
    return this.http.get<User>(this.getUserApi + username);
  }

  public updateUser(username: string,user:User): Observable<User> {
    return this.http.put<User>(this.updateUserApi + username,user);
  }

  public getAccountInfo(): Observable<Account[]>{
    return this.http.get<Account[]>(this.getAccountInfoApi);
  }
  public FundTransfer(uid:number,account_number:number,amount: number) {
    return this.http.put(this.FundTransferApi + uid +"/" + account_number+ "/" + amount,{});
  }
    
}
