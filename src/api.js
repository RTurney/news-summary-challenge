// function getArticle() {
//   const guardianUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
//   fetch(guardianUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//
// };

function getArticleData() {
  const guardianUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
  return fetch(guardianUrl).then(response => {
  return response.json();
  })
}

function renderPost(postData) {
  let title = postData.webTitle;
  // let remainingText = `<p>${postData.text}</p>`
  let postHeadingHTML = `<h3>
   <a href="article.html" target="_blank"> ${title} </a>
  </h3>`;
  return `${postHeadingHTML}`;
}

getArticleData().then(post => {
  let rendered = renderPost(post.response.content);
  document.getElementById("headlines").innerHTML = rendered;
});

window.onload = getArticleData();
