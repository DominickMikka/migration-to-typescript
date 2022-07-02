import './sources.css';

import { IArticle } from '../../../types/types';

class Sources {
    draw(data: Array<IArticle>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.source.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.source.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
