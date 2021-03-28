window.onload = function () {
    document.getElementById("rate1").innerHTML = "7 / 10";
    document.getElementById("rate2").innerHTML = "4 / 10";
    
    var prog = new ldBar("#myItem")
    prog.set(55);
    //btn.onclick="window.location.href='https://www.youtube.com/watch?v=dQkZve4_B2A'";
    var link = document.getElementById('btn');
    link.addEventListener('click', function() {
        var newURL = "chrome-extension://eimlleeafpdopdolaoknmdhkpafiodkc/options.html";
        chrome.tabs.create({ url: newURL });
    });
};