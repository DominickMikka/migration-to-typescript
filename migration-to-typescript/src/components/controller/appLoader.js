import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '858cd2810abf442790cbb8d813eeaa02', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
