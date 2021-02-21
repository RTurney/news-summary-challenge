function getArticle() {
  const guardianUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
  fetch(guardianUrl)
  .then(response => response.json())
  .then(data => console.log(data))

};

window.onload = getArticle();
