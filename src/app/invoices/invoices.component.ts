import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {


  data=[]

  constructor(
    private invoiceService:InvoicesService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.getInvoices()
  }
  getInvoices(){
    this.invoiceService.getInvoices().subscribe((res) => {
      console.log(res.data)
      const newData = res.data.map((invoice, index) => ({
        id: invoice.id,
        einvoice: invoice.einvoice,
        Date : new Date(invoice.document_date),
        company:invoice.company.description,
        guid:invoice.guid,
        status:invoice.invoiced
      }));
      this.data = newData;
    });
  }
  onRowClick(e: any) {
    const selectedInvoice = this.data[e.row];
    console.log("Seçilen Fatura Bilgisi:", selectedInvoice);
    this.router.navigate(['/invoices/' + selectedInvoice.id])
    // Burada seçilen fatura bilgisini konsola yazdırabilirsiniz.
  }

}
