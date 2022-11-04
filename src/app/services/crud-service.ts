import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
import { first } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseModel } from "../shared/models/base.model";

export class CrudService<T extends BaseModel> {
    constructor(
      protected http: HttpClient, 
      @Inject('controller') private controller: string
      ) { }

    list() {
      return this.http.get<T[]>(`${environment.API}${this.controller}`);
    }
  
    loadById(id: any) {
      return this.http.get<T>(`${environment.API}${this.controller}/${id}`);
    }
  
    create(record: Partial<T>) {
      return this.http.post(`${environment.API}${this.controller}`, record);
    }
  
    update(record: Partial<T>) {
      return this.http.put(
        `${environment.API}${this.controller}/${record.id}`,
        record
      );
    }

   
    remove(id: number) {
      return this.http.delete(`${environment.API}${this.controller}/${id}`);
    }
}
