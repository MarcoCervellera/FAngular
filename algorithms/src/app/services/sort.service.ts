import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  insertionSort(A:number[]){
    let j:number;
    for(j = 1; j < A.length; j++){
      let key = A[j];
      let i = j-1;
      while (i>-1 && A[i] > key){
        A[i+1] = A[i];
        i = i - 1;
      }
      A[i+1] = key;
    }
    return A;
  }
}
