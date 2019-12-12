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

function insertImageToTable(table, list, num_of_col){
    var row_node;
    for (i = 0; i < list.length; i++){
        if (i % num_of_col == 0){
            row_node = document.createElement('tr');
            row_node.setAttribute('class', 'table_image_container');
            table.appendChild(row_node);
        }

        var data = document.createElement('td');
        data.setAttribute('class', 'center_block table_image_container');
        var div_elm = document.createElement('a')
        div_elm.setAttribute('href', '/location/' + list[i]);
        div_elm.setAttribute('class', 'center_block table_image_container');
        var text_elm = document.createTextNode(list[i])
        row_node.appendChild(data);
        data.appendChild(div_elm);
        div_elm.appendChild(text_elm);
    }
}