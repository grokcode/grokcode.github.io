if (document.location.toString().indexOf('?') !== -1) {
    var query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '');
    if (query.includes('comments')) {
        var post = document.getElementById("post-section");
        var comments = document.getElementById("comment-section");
        var flares = document.querySelector('.flare');
        post.className += " hidden";
        comments.className = comments.className.replace("hidden", "");
        flares.className += " hidden";
    }
    if (query.includes('moderation')) {
        var moderation = document.getElementById("moderation");
        moderation.className = comments.className.replace("hidden", "");
    }
}
