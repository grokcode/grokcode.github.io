if (document.location.toString().indexOf('?') !== -1) {
    var query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '');
    if (query.includes('comments')) {
        var post = document.getElementById("post-section");
        var comments = document.getElementById("comment-section");
        post.className += " hidden";
        comments.className = comments.className.replace("hidden", "");
    }
}

$(document).ready(function() {

    $('#comment-form').submit(function() {
        var form = $(this);
        form.addClass('disabled');

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
                $('#comment-form .js-notice').removeClass('notice-danger').addClass('notice-success');
                showAlert('<strong>Thanks!</strong> Your comment is awaiting moderation.');
                $("[name^='fields']", '#comment-form').val("")
                $(form).removeClass('disabled');
            },
            error: function (err) {
                console.log(err);
                $('#comment-form .js-notice').removeClass('notice-success').addClass('notice-danger');
                showAlert('<strong>Oops there was an error.</strong> Please check the required fields and try again.');
                $(form).removeClass('disabled');
            }
        });

        return false;
    });

    function showAlert(message) {
        $('#comment-form .js-notice').removeClass('hidden');
        $('#comment-form .js-notice-text').html(message);
    }
});
