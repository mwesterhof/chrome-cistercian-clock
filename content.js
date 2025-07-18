(async () => {
  const widgetId = 'cister-clock';
  const existingWidget = document.getElementById(widgetId);
  if (existingWidget) {
    existingWidget.remove();
  }

  else {
    const container = document.createElement('div');
    container.id = widgetId;
    const response = await fetch(chrome.runtime.getURL('widget.html'));
    const html = await response.text();

    container.innerHTML = html;

    document.body.appendChild(container);

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = chrome.runtime.getURL('widget.css');
    document.head.appendChild(style);

    const clockScript = document.createElement('script');
    clockScript.src = chrome.runtime.getURL('clock.js');
    clockScript.onload = () => {
      console.log('Cister clock widget loaded successfully.');
    };
    document.body.appendChild(clockScript);
  }
})();
