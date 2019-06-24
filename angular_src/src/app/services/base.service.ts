import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { ModelInterface } from "../models/model";
import { HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export abstract class BaseService {

    protected host: string = environment.host;
    
    protected baseUrl: string = '/base';
    
    constructor(protected http: Http) { }

    public getAll() {
        let _url = this.baseUrl;
        return this.endPoint(_url, 'get');
    }

    public create(obj: ModelInterface) {
        return this.endPoint(this.baseUrl, 'post', obj);
    }

    public getById(id: string){
        return this.endPoint(this.baseUrl + "/"+id, 'get');
    }

    public delete(id: string){
        return this.endPoint(this.baseUrl + "/"+id, 'delete');
    }
    
    public update(obj: ModelInterface) {
        return this.endPoint(this.baseUrl + "/"+ obj['_id'], 'put', obj);
    }
    public endPoint(url: string, method: string, obj? : ModelInterface) {
        let _url: string = this.host + url;
        let options: RequestOptionsArgs = {
            url: _url,
            method : method,
            //headers: 
        }

        if(obj) {
            options['body'] = obj;
        }
        //console.log(options);

        return this.http.request(_url, options).map( (response: any) => response.json())
    }

}