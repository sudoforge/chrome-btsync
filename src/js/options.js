// Saves options to localStorage.
var key      = "btsync_port";
var doc      = document;
var input    = doc.getElementById("port");
var button   = doc.getElementById('save-button');
var message  = doc.getElementById('message');
var msgclass = 'animate';

function is_int(n)
{
    return parseInt(n) === n;
}

function save_option(key, value)
{
    if (value === "")
    {
        value = 8888;
    }
    var save = {};
    save[key] = parseInt(value);

    chrome.storage.sync.set(save);

    message.classList.add(msgclass);
}

function clear(elem, classname)
{
    elem.classList.remove(classname);
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

doc.addEventListener('DOMContentLoaded', function()
{
    restore_option(input);
    button.addEventListener('click', clickHandler);
});

input.addEventListener('focus', function()
{
    clear(message, msgclass);
});
