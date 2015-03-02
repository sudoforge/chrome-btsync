chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app/frame.html', {
    state: "maximized",
  });
});
