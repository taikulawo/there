hexo.extend.helper.register("stringify",function(posts){
  //https://stackoverflow.com/questions/38998718/how-to-filter-posts-by-tag-in-hexo
//   var getAllPostsOfTag = (tag) => {
//     return t.findOne({name:tag}).posts
//   }
  var date = hexo.extend.helper.get("date").bind(this)
  var url_for = hexo.extend.helper.get("url_for").bind(this)
  return (function(posts){
    var ps = []
    posts.forEach(p => {
      ps.push({
        title:p.title,
        path:url_for(p.path),
		date:date(p.date,"YYYY-MM-DD"),
		tags: p.tags.map(tag => tag.name)
      })
    })
    return ps
  }(posts))
})