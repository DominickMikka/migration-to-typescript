import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '858cd2810abf442790cbb8d813eeaa02',
        });
    }
}

export default AppLoader;
