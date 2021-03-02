// function getArticle() {
//   const guardianUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
//   fetch(guardianUrl)
//   .then(response => response.json())
//   .then(data => console.log(data))
//
// };

function getArticleData() {
  const guardianUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
  return fetch(guardianUrl).then(response => {
  return response.json();
  })
}

function renderPost(postData) {
  let firstLine = postData.text.split('.')[0];
  let remainingText = `<p>${postData.text}</p>`
  let postHeadingHTML = `<h3>${firstLine}</h3>`;
  return `${postHeadingHTML}${remainingText}`;
}

getArticleData().then(post => {
  let rendered = renderPost(post);
  document.getElementById("headlines").innerHTML = rendered;
});

window.onload = getArticleData();
