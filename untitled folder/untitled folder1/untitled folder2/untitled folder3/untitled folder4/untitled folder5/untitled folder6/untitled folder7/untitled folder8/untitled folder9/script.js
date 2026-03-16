const answer = document.getElementById("answer");

const spookyLines = [
  "Oh, so we're editing the page now?",
  "Classic.",
  "You thought changing one word would make it true?",
  "That's cute.",
  "Unfortunately for you, this website has trust issues."
];

let alreadyTriggered = false;

function triggerChaos() {
  if (alreadyTriggered) return;
  alreadyTriggered = true;

  document.body.classList.add("angry");

  if (answer) {
    answer.textContent = "Absolutely not.";
  }

  let i = 0;

  const interval = setInterval(() => {
    if (i >= spookyLines.length) {
      clearInterval(interval);

      setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }, 400);

      return;
    }

    alert(spookyLines[i]);
    i++;
  }, 50);
}

window.addEventListener("load", () => {

  const originalText = document.body.innerText;

  setTimeout(() => {

    const RealObserver = window.MutationObserver;

    const observer = new RealObserver(() => {

      if (document.body.innerText !== originalText) {
        triggerChaos();
      }

    });

    observer.observe(document.body, {
      childList: true,
      characterData: true,
      subtree: true
    });

    const scriptWatcher = new RealObserver(() => {

      const scriptStillExists =
        document.querySelector('script[src="script.js"]');

      if (!scriptStillExists) {
        triggerChaos();
      }

    });

    scriptWatcher.observe(document.head, {
      childList: true,
      subtree: true
    });

  }, 500);

});

  observer.observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });

  const scriptWatcher = new RealObserver(() => {
    const scriptStillExists =
      document.querySelector('script[src="script.js"]');

    if (!scriptStillExists) {
      triggerChaos();
    }
  });

  scriptWatcher.observe(document.head, {
    childList: true,
    subtree: true
  });
});
let heartbeat = Date.now();

setInterval(() => {
  heartbeat = Date.now();
}, 200);

setInterval(() => {
  if (Date.now() - heartbeat > 1000) {

    document.documentElement.innerHTML = `
      <style>
        body {
          background: black;
          color: red;
          font-family: monospace;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          margin: 0;
        }
        h1 { font-size: 50px; }
        p { font-size: 18px; }
      </style>

      <div>
        <h1>nice try.</h1>
        <p>disabling javascript won't help you.</p>
        <p>the answer is still no.</p>
      </div>
    `;

  }
}, 1000);
