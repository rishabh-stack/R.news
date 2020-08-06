console.log("this is js");
// 3e1d78fedfb845ef915cd08d02af533d
let newsAccordion = document.getElementById("newsAccordion");
let source = 'in'
let apiKey = '3e1d78fedfb845ef915cd08d02af533d'
const xhr = new XMLHttpRequest();






xhr.open('PATCH', `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);
xhr.setRequestHeader('Content-type', "text/plain");





xhr.getResponseHeader('Content-type', 'application/json');

xhr.onprogress = function() {
    console.log('On progress');
}
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
<div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
${element["title"]} 
</button> 
    </h2>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
    ${element["description"]} <a href="${element['url']}"><button type="button" class="btn btn-primary btn-sm">Read more...</button></a>
    </div>
</div>
</div>`;
            newsHtml += news;


        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }

}
xhr.send();