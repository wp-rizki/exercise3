const superagent = require('superagent');
const transport = 'https://mocky.io';
var resp;

function APITest(id){
  resp = superagent.post(transport + '/v3/'+id)
        .set({
          'Content-Type': 'application/json',
          'Accept-Charset': 'UTF-8'
        })
        .send({
          "prefix": "PT",
          "name": "Sejahtera",
          "suffix": "Tbk",
          "industry_id": "1",
          "employee_size": "500",
          "street": "Jl.Sudirman kav. 21",
          "place": "Sudirman Tower",
          "geograph_id": 100,
          "phone": "08561290092"
        })
        .then(res => {
          // console.log(res);    
          return res; 
        })
        .catch(err => {
          // console.log(err);
          return err;
        })
    return resp;
}

module.exports = {APITest};