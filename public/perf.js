const url = "http://localhost:8082/";

window.addEventListener("load", async () => {
  const performanceEntries = performance.getEntries();
  const navigation = performance.getEntriesByType("navigation")[0];
  const resources = performance.getEntriesByType("resources");
  const FCP = performance.getEntriesByName("first-contentful-paint")[0];
  const TTFB = navigation.responseStart - navigation.requestStart;
  const domLoad =
    navigation.domContentLoadedEventEnd - navigation.navigationStart;
  const windowLoadEvent = navigation.loadEventEnd - navigation.loadEventStart;
  const staticFiles = navigation.domComplete - navigation.domInteractive;

  const entries = { FCP, TTFB, domLoad, windowLoadEvent, staticFiles };

  console.log(entries);

  // postEntry({});
});

const success = () => console.log("Performance Analytics works");

const postEntry = (data = {}) => {
  // Check for sendBeacon support:
  if ("sendBeacon" in navigator) {
    // Beacon the requested
    if (navigator.sendBeacon(`${url}/api`, JSON.stringify(data))) {
      return success();
    }
  }
  postEntryWithFetch(data).then(() => success());
};

async function postEntryWithFetch(data = {}) {
  // Default options are marked with *
  const response = await fetch(`${url}/api`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(data),
  });
  return response.json();
}
