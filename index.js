const ANCHORS = document.getElementsByTagName("a");


if(self.innerWidth <=770){
        ANCHORS[2].innerHTML = ANCHORS[2].innerHTML.replace(" "," <br>");
        ANCHORS[3].innerHTML = ANCHORS[3].innerHTML.replace(" "," <br>");
};

window.addEventListener("resize", function(event){
    let newWidth = window.innerWidth;
    let words;
    let a;

    for(let i = 0;i<ANCHORS.length;i++){
        a = ANCHORS[i];
        var temp = a.innerHTML;
        words = temp.split(" ");

        if (newWidth <= 770){
            if(!temp.includes("<br>"))
                a.innerHTML = a.innerHTML.replace(" "," <br>");

        }else{
            if(temp.includes("<br>"))
            a.innerHTML = a.innerHTML.replace(" <br>"," ");      
        }
    }
});