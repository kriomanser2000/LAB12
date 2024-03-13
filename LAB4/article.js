document.getElementById('commentForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    var username = document.getElementById('username').value;
    var comment = document.getElementById('comment').value;
    var newComment = 
    {
        username: username,
        date: new Date().toLocaleDateString(),
        text: comment
    };
    addComment(newComment);
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
});
function addComment(comment) 
{
    var commentList = document.getElementById('commentList');
    var listItem = document.createElement('li');
    listItem.innerHTML = '<strong>' + comment.username + '</strong> (' + comment.date + '): ' + comment.text;
    commentList.appendChild(listItem);
}