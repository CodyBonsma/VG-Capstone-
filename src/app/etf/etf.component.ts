import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-etf',
  templateUrl: './etf.component.html',
  styleUrls: ['./etf.component.scss']
})
export class ETFComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.apiService.getETFs().subscribe((payload) => {
      console.log("this is the ETF payload:", payload)
    })
  }

}
