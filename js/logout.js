function checkInCorrect()      //check the username and password is empty or not
{
    if (document.getElementById('username').value == "") {
        alert('Please enter username')
        document.getElementById('username').focus();
        return false;
    }
    if (document.getElementById('password').value == "") {
        alert('Please enter password')
        document.getElementById('password').focus();
        return false
    }
    else {
        saveInfo();
        return true;
    }
}

function saveInfo() {
    try {
        var isSave = document.getElementById('remember_password').checked;   //保存按键是否选中
        if (isSave) {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if (username != "" && password != "") {
                SetCookie(username, password);
            }
            
        } else {
            SetCookie("", "");
        }
        location = "index.html";
    } catch (e) {

    }
}

function SetCookie(username, password) {
    var Then = new Date();
    Then.setTime(Then.getTime() + 1866240000000);
    document.cookie = "username=" + username + "%%" + password + ";expires=" + Then.toGMTString();
}

function GetCookie() {
    var nmpsd;
    var nm;
    var psd;
    var cookieString = new String(document.cookie);
    var cookieHeader = "username=";
    var beginPosition = cookieString.indexOf(cookieHeader);
    cookieString = cookieString.substring(beginPosition);
    var ends = cookieString.indexOf(";");
    if (ends != -1) {
        cookieString = cookieString.substring(0, ends);
    }
    if (beginPosition > -1) {
        nmpsd = cookieString.substring(cookieHeader.length);
        if (nmpsd != "") {
            beginPosition = nmpsd.indexOf("%%");
            nm = nmpsd.substring(0, beginPosition);
            psd = nmpsd.substring(beginPosition + 2);
            document.getElementById('username').value = nm;
            document.getElementById('password').value = psd;
            if (nm != "" && psd != "") {
                // document.forms[0].checkbox.checked = true;
                document.getElementById('remember_password').checked = true;
            }
        }
    }
}


function save() {
    //存储session
    //window.sessionStorage.setItem("this_session", "This is session！");
    //window.sessionStorage.setItem("user", "This is User");

    //取出session
    //var thisSession = window.sessionStorage.getItem("this_session");
    //alert(thisSession);
  
    clearUser();
    clearCookie();

}
/*
//关闭当前页
function custom_close() {
    if(confirm("您确定要关闭本页吗？")) {
        window.opener = null;
        window.open('', '_self');
        window.close();
        //清除session
        localStorage.clear();
        clearUser();
        clearCookie();
    } else {}
}
*/
function clearUser() {
    
    localStorage.removeItem("user");

}

function clearCookie(){
    var date=new Date();
    date.setTime(date.getTime()-10000);
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i =  keys.length; i--;)
          document.cookie=keys[i]+"=0; expire="+date.toGMTString()+"; path=/";
    }
}

