import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { ERROR_MESSAGE_BAD_REGUEST, ERROR_MESSAGE_TITLE } from 'src/app/constants/message';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const APIEndpoint = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class CoreService {


  constructor(
    private http: HttpClient,
    private notification: NotificationService) { }

  public Get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(APIEndpoint + url).subscribe(
        (response: any) => {
          if (!response) {
            reject(null);
          }
          if (response.errorCodeName) {
            this.notification.showError({ title: ERROR_MESSAGE_TITLE, message: JSON.stringify(response.message) });
            reject(response);
            return;
          }
          resolve(response);
        },
        err => {
          this.notification.showError({ title: ERROR_MESSAGE_BAD_REGUEST, message: err.message });
          reject(err);
        }
      );
    });
  }

  public Put(url: string, params): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(APIEndpoint + url, params).subscribe(
        (response: any) => {
          if (response.errorCodeName) {
            this.notification.showError({ title: ERROR_MESSAGE_TITLE, message: JSON.stringify(response.message) });
            reject(response);
            return;
          }
          resolve(response);
        },
        err => {
          this.notification.showError({ title: ERROR_MESSAGE_BAD_REGUEST, message: JSON.stringify(err) });
          reject(err);
        }
      );
    });
  }

  public Delete(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(APIEndpoint + url).subscribe(
        (response: any) => {
          if (response && response.errorCodeName) {
            this.notification.showError({ title: ERROR_MESSAGE_TITLE, message: JSON.stringify(response.message) });
            reject(response);
            return;
          }
          resolve(response);
        },
        err => {
          this.notification.showError({ title: ERROR_MESSAGE_BAD_REGUEST, message: err.message });
          reject(err);
        }
      );
    });
  }

  public Post(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(APIEndpoint + url, body).subscribe(
        (response: any) => {
          if (response.errorCodeName) {
            this.notification.showError({ title: ERROR_MESSAGE_TITLE, message: response.message });
            reject(response);
            return;
          }
          resolve(response);
        },
        err => {
          this.notification.showError({ title: ERROR_MESSAGE_BAD_REGUEST, message: err.error.message });
          reject(err);
        }
      );
    });
  }

  public GetListWithPaging(url): Observable<any> {
    return this.http.get(APIEndpoint + url)
  }
}
