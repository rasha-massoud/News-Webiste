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
            $.each(news, function (index, item) {
                var newsItem = "<div class='news-item'>" +
                    "<h2>" + item.id + "</h2>" +
                    "<h2>" + item.article_name + "</h2>" +
                    "<img src='" + item.img_url + "' />" +
                    "<p>" + item.description + "</p>" +
                    "<a href='" + item.website + "'>" + item.website + "</a>" + 
                    "</div>";
                $("#news-container").append(newsItem);
                $(".news-item").last().hide().fadeIn(4000);
            });
        }
    });
});