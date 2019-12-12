var baseURL = "{% static %}"

function sendParam(key, value){
    xmlhttp = new XMLHttpRequest();
    var csrftoken = Cookies.get('csrftoken');
    xmlhttp.open("POST", "/suggestion/upvote", true);
    xmlhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(key + "=" + value);
}

function addClickHandler(upvote_element, downvote_element, voted, initial_vote){
    upvote_element.addEventListener('click', function(e){
        if (voted == 'upvoted')
            voted = 'no_vote';
        else
            voted = 'upvoted';
        
        sendParam('voted', voted)

        if (voted == 'no_vote'){
            upvote_element.src = upvote_element.src.replace("_selected.png", ".png");
            document.getElementById("vote_count").innerHTML = parseInt(initial_vote);
        }else{
            upvote_element.src = upvote_element.src.replace(".png", "_selected.png");
            downvote_element.src = downvote_element.src.replace("_selected.png", ".png");
            document.getElementById("vote_count").innerHTML = parseInt(initial_vote) + 1;
        }
    });

    downvote_element.addEventListener('click', function(e){
        if (voted == 'downvoted')
            voted = 'no_vote';
        else
            voted = 'downvoted';

        sendParam('voted', voted)

        if (voted == 'no_vote'){
            downvote_element.src = downvote_element.src.replace("_selected.png", ".png");
            document.getElementById("vote_count").innerHTML = parseInt(initial_vote);
        }else{
            downvote_element.src = downvote_element.src.replace(".png", "_selected.png");
            upvote_element.src = upvote_element.src.replace("_selected.png", ".png");
            document.getElementById("vote_count").innerHTML = parseInt(initial_vote) - 1;
        }

    });
}