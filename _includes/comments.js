if (document.location.toString().indexOf('?') !== -1) {
    var query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '');
    if (query.includes('comments')) {
        var post = document.getElementById("post-section");
        var comments = document.getElementById("comment-section");
        post.className += " hidden";
        comments.className = comments.className.replace("hidden", "");
    }
}
