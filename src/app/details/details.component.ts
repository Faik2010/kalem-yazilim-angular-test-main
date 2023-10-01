import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InvoicesService } from '../services/invoices.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  invoiceForm:FormGroup

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private invoiceService:InvoicesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.invoiceService.singleInvoice(params["id"]).subscribe(res=>{
        console.log(res)
      })
    })
  }

  createInvoiceForm(){
    this.invoiceForm=this.formBuilder.group({
      documentNumber:[""],
      date:[""],
      warehouse:[""],
    })
  }

}
