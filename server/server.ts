import * as express from 'express';
import { Application } from 'express';
import { getAllINVOICES, getAllItems, getINVOICESById } from './api.route';
import { loginUser } from './auth.route';

const bodyParser = require('body-parser');

const app: Application = express();

const cors = require('cors');

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/products').get(getAllItems);

app.route('/api/invoices').get(getAllINVOICES);

app.route('/api/invoices/:id').get(getINVOICESById);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
