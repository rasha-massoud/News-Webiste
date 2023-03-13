$(document).ready(function () {

    $("#home").hover(function () {
        $("#homePanel").slideToggle("slow");
    });
    $("#news").hover(function () {
        $("#newsPanel").slideToggle("slow");
    });
    $("#fashion").hover(function () {
        $("#fashionPanel").slideToggle("slow");
    });
    $("#live").hover(function () {
        $("#livePanel").slideToggle("slow");
    });
    $("#more").hover(function () {
        $("#morePanel").slideToggle("slow");
    });

    $.ajax({
        url: "http://localhost/News Website/BackEnd/articles.php",
        type: "GET",
        dataType: "json",
        success: function (news) {
            console.log(news);
            console.log("HIIII")

            // iterate through the news data and display it on the page
            $.each(news, function (index, item) {
                var newsItem = "<div class='news-item'>" +
                    "<h2>" + item.title + "</h2>" +
                    "<p>" + item.content + "</p>" +
                    "<p class='news-date'>" + item.created_at + "</p>" +
                    "</div>";
                $("#news-container").append(newsItem);
            });
        }
    });
});