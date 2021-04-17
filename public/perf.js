// https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry
function getPerformanceEntries() {
  var result = [];
  // Use getEntries() to get a list of all performance entries
  var entries = performance.getEntries();
  for (var i = 0; i < entries.length; i++) {
    result.push(storePerformanceEntry(entries[i]));
  }

  return result;
}
function storePerformanceEntry(perfEntry) {
  var result = {};
  var properties = ["name", "entryType", "startTime", "duration"];

  for (var i = 0; i < properties.length; i++) {
    // Check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      result[properties[i]] = perfEntry[properties[i]];
    } else {
      console.log("... " + properties[i] + " is NOT supported");
    }
  }

  return result;
}

window.addEventListener("load", () => {
  const performanceEntries = getPerformanceEntries();
});
