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


    // make an Ajax request to the PHP API
    $.ajax({
        url: "news_api.php",
        type: "GET",
        dataType: "json",
        success: function (news) {
            // iterate through the news data and display it on the page
            $.each(news, function (index, item) {
                var newsItem = "<div class='news-item'>" +
                    "<h2>" + item.title + "</h2>" +
                    "<p>" + item.content + "</p>" +
                    "<p class='news-date'>" + item.created_at + "</p>" +
                    "</div>";
                $("#news-container").append(newsItem);
            });
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
});