var showArticles = () => {
  var containerProjects = document.querySelector('#showProjects'),
    containerArticles = document.querySelector('#showArticles'),
    containerLastsArticles = document.querySelector('#lastsArticles'),
    templateProjects = '',
    templateArticles = '',
    templateLasts = ''

  // Show Projects
  // function renderProjects (articles) {
  //   articles.posts.forEach((elem) => {
  //     if (elem.categories.Proyectos) {
  //       templateProjects += `<a class="content__articles--post" href="${elem.short_URL}" target="_blank" title="${elem.title}">
  //     <section>
  //         <img src="${elem.post_thumbnail.URL}" alt="${elem.title}" width="300">
  //         <h3>${elem.title}</h3>
  //     </section>
  //     <span class="content__articles--post--footer">
  //     <i class="fa fa-user"> ${elem.author.name}</i>
  //     <i class="fa fa-calendar"> ${elem.date.split('-')[2].split('')[0]}${elem.date.split('-')[2].split('')[1]}/${elem.date.split('-')[1]}/${elem.date.split('-')[0]}</i>
  //     </span>
  //   </a>`
  //     }
  //   })
  //   containerProjects.innerHTML = templateProjects
  // }

  // Show Articles
  function renderArticles (articles) {
    articles.posts.forEach((elem) => {
      if (!elem.categories.Proyectos) {
        templateArticles += `<a class="content__articles--post" href="${elem.short_URL}" target="_blank" title="${elem.title}">
      <section>
          <img src="${elem.post_thumbnail.URL}" alt="${elem.title}" width="300">
          <h3>${elem.title}</h3>
      </section>
      <span class="content__articles--post--footer">
      <i class="fa fa-user"> ${elem.author.name}</i>
      <i class="fa fa-calendar"> ${elem.date.split('-')[2].split('')[0]}${elem.date.split('-')[2].split('')[1]}/${elem.date.split('-')[1]}/${elem.date.split('-')[0]}</i>
      </span>
    </a>`
      }
    })
    containerArticles.innerHTML = templateArticles
  }

  // Show Lasts Articles
  function renderLastsArticles (articles) {
    for (var i = 0; i < 9; i++) {
        templateLasts += `<li>
      <a href="${articles.posts[i].short_URL}" target="_blank">
        <i class="fa fa-file-text-o"></i> ${articles.posts[i].title} - ${articles.posts[i].date.split('-')[2].split('')[0]}${articles.posts[i].date.split('-')[2].split('')[1]}/${articles.posts[i].date.split('-')[1]}/${articles.posts[i].date.split('-')[0]}
      </a>
    </li>`
    }
    containerLastsArticles.innerHTML = templateLasts
  }

  fetch('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/posts?number=12')
  .then((response) => {
    return response.json()
  })
  .then((articles) => {
    localStorage.articles = JSON.stringify(articles)
    // renderProjects(JSON.parse(localStorage.articles))
    renderArticles(JSON.parse(localStorage.articles))
    renderLastsArticles(JSON.parse(localStorage.articles))
  })
}
module.exports = showArticles
