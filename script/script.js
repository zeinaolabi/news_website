const getArticlesAPI = "http://localhost/news_website/backend/getArticles.php";

$.get( getArticlesAPI, function( data ) {
    
    //Loop over the response
    for(let i = 0; i < data.length; i++){
        //Make a clone of the article model
        let articleModel = document.getElementById("article");
        let clone = articleModel.cloneNode(true);
        clone.style.display ="block";
        clone.id= data[i].id;
        
        //Get the article title 
        let title = clone.querySelector("#title");
        title.textContent = data[i].title;
        
        //Get the publisher
        let publisher = clone.querySelector("#publisher");
        publisher.textContent = data[i].publisher;
        
        //Get article image
        let profilePic = clone.querySelector("#image");
        profilePic.src = data[i].image;
        
        //Add div after the original tweet
        articleModel.after(clone);
}
})
