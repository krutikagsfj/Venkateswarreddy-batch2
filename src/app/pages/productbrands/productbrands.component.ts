import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read.service';

@Component({
  selector: 'app-productbrands',
  templateUrl: './productbrands.component.html',
  styleUrls: ['./productbrands.component.css']
})
export class ProductbrandsComponent implements OnInit {

  constructor(private sr:ReadService) { }
  carData;
  ngOnInit() {
    this.sr.getproduct() //it calls the get product method in service.ts file
    .subscribe(res=> 
      {
        this.carData=res;
        console.log(res);
      }),err=>
      {
        console.log(err); //prints the error message in the console when it could not fetch the details from the json file
      }
  }
}
