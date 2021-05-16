const header = document.querySelector('div.header-news__container');
const caruselItemCount = 4;
let caruselItemStart = 0;
let articles;

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        articles = data.articles;
        populateNewsCarousel(data.articles, 0);
    });
function populateNewsCarousel(news, startAt) {
    
    for(let i = startAt; i < (startAt + caruselItemCount); i ++) {
        const newsValue = news[i];
        const newsDiv = createDivForNews(newsValue);
        header.appendChild(newsDiv);
    }
}
function createDivForNews(newsContents) {
    const newsArticle = document.createElement('div');
    
    newsArticle.classList.add('news-article');
    newsArticle.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), transparent), url(${newsContents.image})`;

    const title = document.createElement('span');
    title.classList.add('news-article__title');
    title.innerText = newsContents.title;
    newsArticle.appendChild(title);
    return newsArticle;
}

const buttonLeft = document.querySelector('#carousel-button-left');

const buttonRight = document.querySelector('#carousel-button-right');

buttonRight.addEventListener('click', () => {
    caruselItemStart--;
    populateNewsCarousel(articles, 1);
});

buttonLeft.addEventListener('click', () => {
    caruselItemStart++;
    populateNewsCarousel(articles, 1);
});














 