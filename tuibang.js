function getvalue(name){
    var str=window.location.search;   //location.search是从当前URL的?号开始的字符串 例如：http://www.51job.com/viewthread.jsp?tid=22720 它的search就是?

tid=22720

    if (str.indexOf(name)!=-1){           
        var pos_start=str.indexOf(name)+name.length+1;
        var pos_end=str.indexOf("&",pos_start);
        if (pos_end==-1){
            alert( str.substring(pos_start));
        }else{
            alert("毛，不要乱调教");
        }
    }
}