const sharepercentController = require('../controllers/sharepercentController')
const express = require('express')

const routes = express.Router()


routes.post('/', sharepercentController.CreateSharepercent)
routes.put('/:id', sharepercentController.UpdateSharepercent)
routes.delete('/:id', sharepercentController.DeleteSharepercent)
routes.get('/', sharepercentController.GetSharepercent)
routes.get('/UdateshareYear', sharepercentController.UpdateshareYear);
routes.post('/share/', sharepercentController.SearchShare)
routes.post('/ExportShareToExcel', sharepercentController.ExportShareToExcel)
module.exports = routes