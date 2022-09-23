const getArticlesAPI = "http://localhost/news_website/backend/getArticles.php";

$.get( getArticlesAPI, function( data ) {
    $( ".result" ).html( data );
    console.log(data);
});