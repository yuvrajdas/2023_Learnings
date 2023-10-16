import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgmPolyline } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild(AgmPolyline) polyline!: AgmPolyline;
  @ViewChild('polylineParent') polylineParent!: AgmPolyline;
  latLangForm!:FormGroup;
  
  latlng:any = [
    // [28.50831213835744, 77.28779528447274],
    // [28.50871278015068, 77.2852029749889]
  [],[]
  ];

  start_end_mark:any = [];
  
  constructor(private fb:FormBuilder, private cdr: ChangeDetectorRef, private rr : Renderer2,private el: ElementRef) {
    // this i write because to display a marks on first place and last place
    this.latLangForm = this.fb.group({
     coordinates:[''],
    })
    // this.start_end_mark.push([28.50831213835744, 77.28779528447274]); 
    // this.start_end_mark.push([28.50871278015068, 77.2852029749889]);
   }

   submitQuadinate(){
    // const {lat, lang}= this.latLangForm.value.split(',');
    let lat= this.latLangForm.value.coordinates.split(',')[0];
    let long = this.latLangForm.value.coordinates.split(',')[1];
  
    const newValue = [lat, long];
    this.latlng = [];
    this.start_end_mark =[]
    this.latlng.push(newValue); 
    this.start_end_mark.push(newValue); 
    // this.cdr.detectChanges();
    // this.polyline.ngOnChanges({});
    const element = this.el.nativeElement.querySelector('#elementToRemove');
    console.log(element);
    
    if (element) {
      let x = this.rr.removeChild(this.el.nativeElement, element);
      console.log(x);
      
    }
  //   polyline?.insertAdjacentElement('afterbegin',  `<agm-polyline id="line" [visible]="${true}" [strokeWeight]="${3}" [strokeColor]="'#07b57a'" #polyline>
  //   <agm-polyline-point *ngFor="let coordinate of latlng; let i=index" [latitude]="coordinate[0]" [longitude]="{coordinate[1]}"></agm-polyline-point>
  // </agm-polyline>`)
   }
   

   ngAfterViewInit() {
    // Whenever you need to update the polyline coordinates
    this.polyline.ngOnChanges({});
  }


  ngOnInit(): void {
      
  }
// https://stackblitz.com/edit/angular-simple-google-map-with-polyline?file=src%2Fapp%2Fapp.module.ts,package.json
}
