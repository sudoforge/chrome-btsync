// Saves options to localStorage.
var key      = "btsync_port";
var doc      = document;
var input    = doc.getElementById("port");
var button   = doc.querySelector('button');

function is_int(n)
{
    return parseInt(n) === n;
}

function save_option(key, value)
{
    var save = {};
    save[key] = parseInt(value);

    chrome.storage.sync.set(save);
}

function restore_option(input)
{
    chrome.storage.sync.get(key, function(obj)
    {
        if (Object.keys(obj).length == 1 && is_int(obj[key]))
        {
            input.value = obj[key];
        }
    });
}

function clickHandler(e)
{
    save_option(key, input.value);
}

doc.addEventListener('DOMContentLoaded', function ()
{
    restore_option(input);
    button.addEventListener('click', clickHandler);
});
