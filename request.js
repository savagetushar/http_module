const http = require('http');

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1', // Corrected typo: 'Path' -> 'path'
    method: 'GET'
};

const apiReq = http.request(options, (apiRes) => {
    apiRes.on('data', (data) => {
        console.log(data.toString());
    });
});

apiReq.on('error', (error) => { // Corrected error handling
    console.error(error);
});

apiReq.end();