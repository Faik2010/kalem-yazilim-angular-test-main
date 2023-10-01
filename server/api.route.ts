import { Request, Response } from 'express';
import { ITEMS, INVOICES } from './db-data';

export function getAllItems(req: Request, res: Response) {
  console.log('Retrieving items data ...');

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(ITEMS) });
  }, 1000);
}

export function getAllINVOICES(req: Request, res: Response) {
  console.log('Retrieving INVOICES data ...');

  setTimeout(() => {
    res.status(200).json({ data: [...INVOICES] });
  }, 3000);
}

export function getINVOICESById(req: Request, res: Response) {
  console.log(`Retrieving INVOICE ${req.params['id']}  data ...`);

  setTimeout(() => {
    res.status(200).json({
      data: INVOICES.find((item) => item.id.toString() === req.params['id']),
    });
  }, 3000);
}
