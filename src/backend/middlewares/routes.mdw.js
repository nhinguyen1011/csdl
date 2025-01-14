

import authWithRequiredPermission from "./auth.mdw.js";
import ProductRoute from '../routes/product.route';
import HomeScreen from '../../my-app/src/screens/HomeScreen.js';
export default function (app) {
  app.get('/', function (req, res) {
    res.render('HomeScreen')
  })

}