// Fetch the articles from the JSON file

fetch('./availablearticles.json')
    .then(response => response.json())
    .then(articles => {
        const list = document.getElementById('article-list');
        articles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = article.link;
            link.textContent = article.title;
            listItem.appendChild(link);
            list.appendChild(listItem);
            });
        })
    .catch(error => console.error('Error fetching articles:', error));