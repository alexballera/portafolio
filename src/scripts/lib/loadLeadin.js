var loadLeadin = (url) => {
  for (var i = 0; i < url.length; i++) {
    var elem = document.createElement('script')
    elem.src = url[i]
    elem.async = 'async'
    elem.defer = 'defer'
    elem.crossorigin = 'use-credentials'
    elem.id = 'LeadinEmbed-2056572'
    document.body.appendChild(elem)
  }
}
module.exports = loadLeadin
