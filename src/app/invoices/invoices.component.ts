import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {


  data=[]

  constructor(
    private invoiceService:InvoicesService
  ) { }

  ngOnInit(): void {
   this.getInvoices()
  }
  getInvoices(){
    this.invoiceService.getInvoices().subscribe((res) => {
      console.log(res.data)
      const newData = res.data.map((invoice, index) => ({
        id: index + 1,
        einvoice: invoice.einvoice,
        Date : new Date(invoice.document_date),
        company:invoice.company.description,
        guid:invoice.guid,
        status:invoice.invoiced
      }));
      this.data = newData;
    });
  }

}
