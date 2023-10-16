import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IdummyReportDataProviderSource } from './typings';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgmPolyline } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  
  constructor(private http:HttpClient){}
  displyColumns = ['serial_number', "name", "trips", "country", "website"];
  dummyReportDataProviderSource:MatTableDataSource<IdummyReportDataProviderSource> = new MatTableDataSource();
  pageIndex = 0;
  paginationSize = 10;
  totalLengthOfServerSentData = 0;
  totalDataCont = 0;
  index =1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 
  ngOnInit(): void {
    this.getDummyReportData(this.pageIndex, this.paginationSize);
  }

  getDummyReportData(pageIndex:number, paginationSize:number){
    this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${pageIndex}&size=${paginationSize}`).subscribe((res:any)=>{
      this.dummyReportDataProviderSource.data = res.data
      this.totalDataCont+=res.data.length;
      this.totalLengthOfServerSentData = res.totalPassengers
    })
  }
  getSearialNumber(element:any){
     
    // if(element._id)
    this.index = this.index+1;

     return this.index
    
  }
  changePage(event: PageEvent, paginator: MatPaginator) {
    this.pageIndex = event.pageIndex;
    this.paginationSize = paginator.pageSize;
    this.getDummyReportData( this.pageIndex+1, this.paginationSize);
  }
  
  ngAfterViewInit() {
      // this.dummyReportDataProviderSource.paginator = this.paginator;
    }
  //   @ViewChild(AgmPolyline) polyline!: AgmPolyline;
  //   latLangForm!:FormGroup;
    
  //   latlng:any = [
  //     [28.641588270801403, 77.22077721655096],
  //     [28.642083653726264, 77.22064286160763]
  //   ];
 
  //   start_end_mark:any = [];
    
  //   constructor(private fb:FormBuilder, private cdr: ChangeDetectorRef) {
  //     // this i write because to display a marks on first place and last place
  //     this.latLangForm = this.fb.group({
  //      lat:[''],
  //      lang:['']
  //     })
  //     // this.start_end_mark.push([17.419210642886526, 78.34396096316532]); 
  //     this.start_end_mark.push([28.641588270801403, 77.22077721655096]);
  //    }

  //    submitQuadinate(){
  //     const {lat,lang} = this.latLangForm.value;
  //     const newValue = [lat, lang];
  //     // this.latlng.splice(0,1);
  //     this.latlng.push(newValue);
  //     this.start_end_mark.push(newValue);

  //     // this.start_end_mark.splice(0, 1);
  //     // this.latlng.unshift(newValue); 
  //     this.cdr.detectChanges();
  //     // this.start_end_mark.unshift(newValue); 
  //     this.polyline.ngOnChanges({});

  //    }
     

  //    ngAfterViewInit() {
  //     // Whenever you need to update the polyline coordinates
  //     this.polyline.ngOnChanges({});
  //   }
  

  // ngOnInit(): void {
      
  // }

}
