
//this makes the current link containing li of class "active"
$(document).ready(function ($) {

	//get the current URL
    var url = window.location.href;
    var activePage = url;
    $('li a').each(function () {
        var linkPage = this.href;

        //Add active class link that matches current URL
        if (activePage == linkPage) {
            $(this).closest("a").addClass("active");

        }
    });
});
