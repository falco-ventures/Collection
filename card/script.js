

const usdzSrc = document.getElementById("arql-with-banner").href;
console.log(usdzSrc);

// handle clicks on banner from default ARQL anchor
document.getElementById("arql-with-banner").addEventListener(
  "message",
  function (event) {
    if (event.data == "_apple_ar_quicklook_button_tapped") {
      console.log("Default AR banner clicked");
      
      window.location.assign(
        "https://www.ebay.com/itm/286204386449?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=whuL5khwRKK&sssrc=2047675&ssuid=&var=588322620993&widget_ver=artemis&media=COPY"
      );
    }
  },
  false
);

// trigger default ARQL anchor click event
document.getElementById("launchDefault").addEventListener("click", (event) => {
  console.log("Launch Default");
  document.getElementById("arql-with-banner").click();
});

// launch ARQL from a new anchor element detached from DOM
const detachedAnchor = document.createElement("a");
document.getElementById("launchDetached").addEventListener("click", (event) => {
  console.log("Launch Detached");  
  detachedAnchor.setAttribute("rel", "ar");
  var img = document.createElement("img");
  detachedAnchor.appendChild(img);
  detachedAnchor.setAttribute("href", usdzSrc);
  detachedAnchor.addEventListener(
    "message",
    function (event) {
      if (event.data == "_apple_ar_quicklook_button_tapped") {
        console.log("Detached AR banner clicked");
        window.location.assign(
          "https://www.ebay.com/itm/286204386449?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=whuL5khwRKK&sssrc=2047675&ssuid=&var=588322620993&widget_ver=artemis&media=COPY"
        );
      }
    },
    false
  );
  detachedAnchor.click();
  detachedAnchor.removeChild(img);
});

// launch ARQL from a new anchor element attached to DOM
const attachedAnchor = document.createElement("a");
document.getElementById("launchAttached").addEventListener("click", (event) => {
  console.log("Launch Attached");
  attachedAnchor.setAttribute("rel", "ar");
  var img = document.createElement("img");
  attachedAnchor.appendChild(img);
  attachedAnchor.setAttribute("href", usdzSrc);
  attachedAnchor.style.display = "none";
  attachedAnchor.addEventListener(
    "message",
    function (event) {
      if (event.data == "_apple_ar_quicklook_button_tapped") {
        console.log("Attached AR banner clicked");
        // alert("ARQL banner clicked...");
        window.location.assign(
          "https://www.ebay.com/itm/286204386449?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=whuL5khwRKK&sssrc=2047675&ssuid=&var=588322620993&widget_ver=artemis&media=COPY"
        );
      }
    },
    false
  );
  
  if(!attachedAnchor.isConnected) document.querySelector("body").appendChild(attachedAnchor);
  
  attachedAnchor.click();
  attachedAnchor.removeChild(img);
});






