/**
 * LeadsController
 *
 * @description :: Server-side logic for managing Leads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `LeadsController.create()`
   */
  create: function (req, res) {
    sails.log.info('lead:create', req.body)

    LeadsService.create(req.body).then(lead => {
      sails.log.info('lead:created', lead)
      return res.status(201).json({
        lead: lead
      });
    })
    .catch(error => {
      sails.log.error('lead:create:error', error.message)
      return res.status(500).json({
        error: error.message
      });
    })
  }
};

