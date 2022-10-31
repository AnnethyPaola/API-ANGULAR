import { HttpClient } from "@angular/common/http";
import { first } from "rxjs";

export class CrudService<T> {
    constructor(protected http: HttpClient, private API_URL: string) { }

    list() {
      return this.http.get<T[]>(this.API_URL)
        .pipe(
          first()
        );
    }
  
    loadById(id: any) {
      return this.http.get<T>(`${this.API_URL}/${id}`);
    }
  
    save(record: Partial<T>) {
      if (record['id' as keyof T]) {
        return this.update(record);
      }
      // console.log('create');
      return this.create(record);
    }
  
    private create(record: Partial<T>) {
      return this.http.post<T>(this.API_URL, record).pipe(first());
    }
  
    private update(record: Partial<T>) {
      return this.http.put<T>(`${this.API_URL}/${record['id' as keyof T]}}`, record).pipe(first());
    }
  
    remove(id: string) {
      return this.http.delete(`${this.API_URL}/${id}`).pipe(first());
    }
}
