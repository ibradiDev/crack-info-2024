import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrackInterface } from '../crack-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrackInfoService {

  private apiUrl = 'http://localhost/crack-info-2024/send_img_test.php';

  constructor(private http: HttpClient) { }

  postCrackData = (crackData: Partial<CrackInterface>): Observable<any> => {
    return this.http.post(this.apiUrl, crackData, {
      headers: { "Content-Type": "multipart/form-data" },
      responseType: 'text',
    });
  }

  getAllCrackData = () => {
    return this.http.get("http://localhost/crack-info-2024/get_all_data.php");
  }
}
