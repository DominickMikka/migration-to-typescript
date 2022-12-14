import { Callback } from '../../types/types';

enum ErrorCodes {
    unauthorized = 401,
    notFound = 404,
}

class Loader {
    baseLink: string;
    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options }: { endpoint: string; options?: object },
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorCodes.unauthorized || res.status === ErrorCodes.notFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: object, endpoint: string) {
        const urlOptions: { [i: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: Callback<T>, options: Partial<object> = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
