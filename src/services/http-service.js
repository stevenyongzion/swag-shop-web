import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        fetch('http://localhost:3004/product')
        .then(response => {
            console.log(response.json());
        })

    }

    // var getProducts = function() {

    // }
}

export default HttpService;