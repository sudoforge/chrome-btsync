// window.location = "http://localhost:" + port;
var key = 'btsync_port';

function is_int(n)
{
    return parseInt(n) === n;
}

function redirect(num)
{
    window.location.href = "http://127.0.0.1:" + num;
}

chrome.storage.sync.get(key, function(obj)
{
    var element = document.getElementById("area");

    if (Object.keys(obj).length == 1 && is_int(obj[key]))
    {
        redirect(obj[key]);
    }
    else
    {
        redirect(8888);
    }
});
