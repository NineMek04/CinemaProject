import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppInjector } from '../utils/injector';

/**
 * Interface สำหรับการกำหนดรูปแบบผลลัพธ์มาตรฐานของทีม
 */
export interface StandardResult<T = any> {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    value: T;
}

/**
 * Fluent HTTP Request Builder สำหรับการทำงานเป็นทีม
 */
class RequestBuilder<T> {
    private _url: string = '';
    private _body: any = null;
    private _params = new HttpParams();
    private _headers = new HttpHeaders();

    constructor(private http: HttpClient) { }

    /** กำหนด URL ของ API */
    api(url: string): this {
        this._url = url;
        return this;
    }

    /** ส่งข้อมูลแนบไปกับ Body */
    body(data: any): this {
        this._body = data;
        return this;
    }

    /** เพิ่ม Query Parameters */
    query(params: { [key: string]: any }): this {
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                this._params = this._params.set(key, params[key]);
            }
        });
        return this;
    }

    /** เพิ่ม Custom Headers */
    header(key: string, value: string): this {
        this._headers = this._headers.set(key, value);
        return this;
    }

    /** ส่งคำขอแบบ GET */
    get(): Observable<T> {
        return this.http.get<T>(this._url, { params: this._params, headers: this._headers });
    }

    /** ส่งคำขอแบบ POST */
    post(): Observable<T> {
        return this.http.post<T>(this._url, this._body, { params: this._params, headers: this._headers });
    }

    /** ส่งคำขอแบบ PUT */
    put(): Observable<T> {
        return this.http.put<T>(this._url, this._body, { params: this._params, headers: this._headers });
    }

    /** ส่งคำขอแบบ DELETE */
    delete(): Observable<T> {
        return this.http.delete<T>(this._url, { params: this._params, headers: this._headers });
    }
}

/**
 * ฟังก์ชันหลักที่ทีมจะใช้เรียก API
 */
export function req<T>(url?: string) {
    const http = AppInjector.get(HttpClient) as HttpClient;
    const builder = new RequestBuilder<T>(http);
    if (url) builder.api(url);
    return builder;
}
