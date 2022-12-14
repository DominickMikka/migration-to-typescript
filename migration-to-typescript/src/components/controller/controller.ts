import AppLoader from './appLoader';
import { INews, ISources, Callback } from '../../types/types';

class AppController extends AppLoader {
    getSources(callback: Callback<ISources>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Readonly<MouseEvent>, callback: Callback<INews>): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId: string | null = (target as HTMLElement).getAttribute('data-source-id');
                if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
                    (newsContainer as HTMLElement).setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as HTMLElement)?.parentNode;
        }
    }
}

export default AppController;
