function getvalue(name){
    var str=window.location.search;   //location.search�Ǵӵ�ǰURL��?�ſ�ʼ���ַ��� ���磺http://www.51job.com/viewthread.jsp?tid=22720 ����search����?

tid=22720

    if (str.indexOf(name)!=-1){           
        var pos_start=str.indexOf(name)+name.length+1;
        var pos_end=str.indexOf("&",pos_start);
        if (pos_end==-1){
            alert( str.substring(pos_start));
        }else{
            alert("ë����Ҫ�ҵ���");
        }
    }
}