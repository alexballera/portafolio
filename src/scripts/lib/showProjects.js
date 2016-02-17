import $ from 'jquery'

var showProjects = $(() => {
  // Variables Globales
  var $projectContainer = $('#content_projects').find('.content__articles--container')

  // Optimizamos con renderShows
  function renderShows (projects) {
    $projectContainer.find('.loader').remove()
    projects.posts.forEach(function (project) {
      var projectTemplate = template
      .replace(':title:', project.title)
      .replace(':url:', project.short_URL)
      .replace(':link:', project.short_URL)
      .replace(':link content:', project.short_URL)
      .replace(':image:', project.featured_image)
      .replace(':image alt:', project.title + ' Image')
      .replace(':summary:', project.excerpt)
      .replace(':author:', project.author.name)
      .replace(':avatar:', project.author.avatar_URL)
      .replace(':avatar alt:', project.author.name + ' Logo')
      .replace(':profile:', project.author.profile_URL)
      .replace(':profile img:', project.author.profile_URL)
      .replace(':category:', project.categories.Proyectos.name)
      .replace(':category2:', Object.keys(project.categories)[1])

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<section class="content__articles--post" style="display: flex; align-items: center;">
        <picture class="content__articles--post--picture">
          <a href=":url:" target="_blank" class="content__articles--post--link">
            <img src=":image:" alt=":image alt:">
          </a>
        </picture>
        <div class="content__articles--post--title">
          <a href=":link:" target="_blank"><h3>:title:</h3></a>
          <picture class="content__articles--post--avatar" style="display:flex;align-items:center;">
            <a href=":profile img:" target="_blank">
            <img src=":avatar:" alt=":avatar alt:"
              style="width:17.5px;height:17.5px;margin:8px;">
            </a>
            <a href=":profile:" target="_blank" class="content__articles--post--link">
              <figcaption style="display:block;outline:none;font-size:70%;color:grey;"><span style="font-weight:700;">:author:</span> | <i class="fa fa-folder-open"></i> :category:, :category2:</figcaption>
            </a>
          </picture>
        </div>
  </section>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/alexballera.com/posts/?category=proyectos&number=6')
      .then((projects) => {
        $projectContainer.find('.loader').remove()
        localStorage.projects = JSON.stringify(projects)
        renderShows(JSON.parse(localStorage.projects))
      })
})
module.exports = showProjects