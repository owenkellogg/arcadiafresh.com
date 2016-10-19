var http = require("superagent")

module.exports.create = opts => {

  return new Promise((resolve, reject) => {

    http
      .post("https://leads.stevenzeiler.com/leads")
      .auth('admin', process.env.LEADS_API_KEY)
      .send(opts)
      .end((error, response) => {
        if (error) { return reject(error) }
        resolve(response.body)
      })
  })

}
