import AppController from '../controller/controller';
import { AppView } from '../view/appView';

type newsObject = {
    id: string;
    name: string;
};

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLTemplateElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: Array<newsObject>) => this.view.drawNews(data))
        );
        this.controller.getSources((data: Array<newsObject>) => this.view.drawSources(data));
    }
}

export default App;
