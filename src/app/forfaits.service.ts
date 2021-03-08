import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitsService {

  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/da/1996483/'
  forfaitsUrlAdd = 'https://forfaits-voyages.herokuapp.com/api/forfaits/'

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);  
  }
  
  addForfait(forfait: Forfait): Observable<Forfait> {
    forfait.da = "1996483";
    return this.http.post<Forfait>(this.forfaitsUrlAdd, forfait, httpOptions);
}

      /** PUT: mise à jour du héros */
  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.forfaitsUrlAdd + '/' + id, forfait, httpOptions);
  }

    /** DELETE: suppression du héros */
    deleteForfait(id: string): Observable<Forfait> {
        return this.http.delete<Forfait>(this.forfaitsUrlAdd + '/' + id, httpOptions);
    }

}
