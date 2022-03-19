const service = require('../tests/mockapi');

//for 202:OK Response
test('API TEST 202:OK', async () => {
    var result = await service.APITest('7493f4a2-f9ae-4f7e-a437-cc633ceefcc9');
    console.log('Status Code: ' + result.res.statusCode, '\nStatus Message: ' + result.res.statusMessage, '\nResponse API: \n' + JSON.stringify(result._body, null, 4));
    expect(result.res.statusCode).toBe(200);
    expect(result.res.statusMessage).toBe('OK');
    expect(result._body[0].url).toBe('http://www.mocky.io/v2/5e4e6fc42f00001f2016a761');
    expect(result._body[1].data.company_id).toBe(11);
    expect(result._body[1].message).toBe('Resource has been created');
    expect(result._body[1].code).toBe('STATUS_CREATED');
},10000);

//for 404:Not Found Response
test('API TEST 404:NOT FOUND', async () => {
    var result = await service.APITest('A7');
    console.log('Status Code: ' + result.response.res.statusCode, '\nStatus Message: ' + result.response.res.statusMessage);
    expect(result.response.res.statusCode).toBe(404);
    expect(result.response.res.statusMessage).toBe('Not Found');
},10000);