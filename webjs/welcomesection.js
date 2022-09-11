document.getElementsByTagName("p")[1].innerHTML =
    "<span class='comment'>/* ---------- <br/>str siteAuthor = 'Kevin Huy Trinh'<br/>str classification = 'sophomore' <br/>str lastUpdated = '9/11/2022'</br> -------- */</span></br></br>";

var str = document.getElementsByTagName("section")[0].innerHTML.toString();
var i = 0;
document.getElementsByTagName("section")[0].innerHTML = "";

setTimeout(function() {
    var se = setInterval(function() {
        i++;
        document.getElementsByTagName("section")[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByTagName("section")[0].innerHTML = str;
        }
    }, 10);
});
