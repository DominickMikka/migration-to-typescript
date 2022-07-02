import './news.css';
import { INew } from '../../../types/types';

class News {
    draw(data: Array<INew>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            let newsCloneSelector: HTMLElement | null = newsClone.querySelector('.news__item');

            if (idx % 2 && newsCloneSelector) newsCloneSelector.classList.add('alt');

            newsCloneSelector = newsClone.querySelector('.news__meta-photo');

            if (newsCloneSelector) {
                newsCloneSelector.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            newsCloneSelector = newsClone.querySelector('.news__meta-author');

            if (newsCloneSelector) {
                newsCloneSelector.textContent = item.author || item.source.name;
            }

            newsCloneSelector = newsClone.querySelector('.news__meta-date');

            if (newsCloneSelector) {
                newsCloneSelector.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            newsCloneSelector = newsClone.querySelector('.news__description-title');

            if (newsCloneSelector) {
                newsCloneSelector.textContent = item.title;
            }

            newsCloneSelector = newsClone.querySelector('.news__description-source');

            if (newsCloneSelector) {
                newsCloneSelector.textContent = item.source.name;
            }

            newsCloneSelector = newsClone.querySelector('.news__description-content');

            if (newsCloneSelector) {
                newsCloneSelector.textContent = item.description;
            }

            newsCloneSelector = newsClone.querySelector('.news__read-more a');

            if (newsCloneSelector) {
                newsCloneSelector.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        let querySelector: HTMLElement | null = document.querySelector('.news');

        if (querySelector) {
            querySelector.innerHTML = '';
        }

        querySelector = document.querySelector('.news');

        if (querySelector) {
            querySelector.appendChild(fragment);
        }
    }
}

export default News;
