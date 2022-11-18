let startText = "<span class='comment'>/* ----------- <br/>char siteAuthor[] = 'Kevin Huy Trinh'<br/>char currentClassification[] = 'Sophomore' <br/>char lastUpdated[] = ";
let endText = "</br> --------- */</span></br></br>";
result = startText.concat("'11/18/2022'", endText);

document.getElementsByTagName("p")[1].innerHTML = result;

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
