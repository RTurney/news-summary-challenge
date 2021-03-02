// function getArticle() {
//   const guardianUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
//   fetch(guardianUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//
// };

function getArticleData() {
  const guardianUrl = "https://content.guardianapis.com/search?api-key=test"
  return fetch(guardianUrl).then(response => {
  return response.json();
  })
}

function renderPostsLoop(post) {
  let results = post.response.results;
  let renderedPosts = results.map(renderPost);

  return `${renderedPosts}`

}

function renderPost(postData) {
  // console.log(postData);
  // console.log(postData.webTitle);
  let title = postData.webTitle;
  // let remainingText = `<p>${postData.text}</p>`
  let postHeadingHTML = `<h3>
   <a href="article.html" target="_blank"> ${title} </a>
  </h3>`;
  let node = document.createElement('p')
  node.innerHTML = postHeadingHTML
  // console.log(postHeadingHTML);
  // return postHeadingHTML;
  document.getElementById("headlines").appendChild(node);
}

window.onload = getArticleData().then(post => {
  renderPostsLoop(post);
  // let rendered = renderPostsLoop(post);
  // document.getElementById("headlines").innerHTML = rendered;
});
