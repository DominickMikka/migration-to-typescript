import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISources } from '../../types/types';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data: INews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ISources) => this.view.drawSources(data));
    }
}

export default App;
