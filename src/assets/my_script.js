var baseURL = "{% static %}"

function addClickHandler(element, voted){
    element.addEventListener('click', function(e){
        voted = !voted;
        xmlhttp = new XMLHttpRequest();
        var csrftoken = Cookies.get('csrftoken');
        xmlhttp.open("POST", "/suggestion/upvote", true);
        xmlhttp.setRequestHeader("X-CSRFToken", csrftoken);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("voted=" + voted);
        if (voted == true){
            element.src = element.src.replace(".png", "_selected.png");
            document.getElementById("vote_count").innerHTML = parseInt(document.getElementById("vote_count").innerHTML) + 1;
        }else{
            element.src = element.src.replace("_selected.png", ".png");
            document.getElementById("vote_count").innerHTML = parseInt(document.getElementById("vote_count").innerHTML) - 1;
        }
    });
}