import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        var promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(response => {
                resolve(response.json());                
            }).catch(err => {
                reject(err);
            })
        });

        return promise;
    }

    // var getProducts = function() {

    // }
}

export default HttpService;