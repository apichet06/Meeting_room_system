const rubberMudel = require('../models/rubberpriceModel')
const Messages = require('../config/messages')


class rubberController {

    static async CreateRubberPrice(req, res) {
        try {
            const { r_around, r_rubber_price, r_rubber_date } = req.body
            const rubberData = {
                r_around, r_rubber_price, r_rubber_date
            }

            const rubber_Price = await rubberMudel.create(rubberData)
            res.status(200).json({ status: 'ok', message: Messages.insertSuccess, rubber_Price })
        } catch (error) {
            res.status(500).json({ status: Messages.error500, message: error.message });
        }
    }


    static async updateRubberPrice(req, res) {
        try {
            const { r_number } = req.params;
            const { r_around, r_rubber_price, r_rubber_date } = req.body
            const rubberData = {
                r_around, r_rubber_price, r_rubber_date
            }
            const rubber_Price = await rubberMudel.update(rubberData, r_number)
            res.status(200).json({ status: 'ok', message: Messages.updateSuccess, rubber_Price })

        } catch (error) {
            res.status(500).json({ status: Messages.error500, message: error.message });
        }
    }


    static async DeleteRubberPrice(req, res) {
        try {
            const { r_number } = req.params;

            await rubberMudel.delete(r_number)
            res.status(200).json({ status: 'ok', message: Messages.deleteSuccess })

        } catch (error) {
            res.status(500).json({ status: Messages.error500, message: error.message })
        }
    }


    static async ShowRubberPriceAll(req, res) {
        try {
            const RubberPrice = await rubberMudel.GetrubberpriceAll();
            if (RubberPrice) {
                res.status(200).json({ status: 'ok', data: RubberPrice });
            }
        } catch (error) {
            res.status(500).json({ status: Messages.error500, message: error.message });
        }
    }

}




module.exports = rubberController;


