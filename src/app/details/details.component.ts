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
  date:any
  invoiceForm:FormGroup

  constructor(
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private invoiceService:InvoicesService
  ) { }

  ngOnInit(): void {
    this.createInvoiceForm()
    
    this.activatedRoute.params.subscribe(params=>{
      this.invoiceService.singleInvoice(params["id"]).subscribe(res=>{
        console.log(res.data)
        // this.date=res.data.document_date
        const originalDate = new Date(res.data.document_date);
const day = originalDate.getDate().toString().padStart(2, '0');
const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so we add 1.
const year = originalDate.getFullYear().toString();

const formattedDate = `${day}.${month}.${year}`;
        this.invoiceForm.get('date').patchValue(formattedDate)
        this.invoiceForm.get('einvoice').patchValue(res.data.einvoice)
        this.invoiceForm.get('invoiced').patchValue(res.data.invoiced)
        this.invoiceForm.get('documentStatus').patchValue(res.data.document_status)
      })
    })
  }

  createInvoiceForm(){
    
    this.invoiceForm=this.formBuilder.group({
      invoiced:[""],
      documentStatus:[""],
      date:[""],
      einvoice:[""],
    })
  }

}
