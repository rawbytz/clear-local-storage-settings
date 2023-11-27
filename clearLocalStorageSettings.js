(function clearLocalStorageSettings_0_1() {
  const userKey = "userstorage.settings";
  if (localStorage.getItem(userKey)) {
    localStorage.removeItem(userKey);
    WF.showMessage(`userstorage.settings have been deleted.<br><b><a href="${location.href}" onclick="WF.hideMessage();location.reload();return true">Click here for required page reload</a></b>`)
  } else {
    alert("Local storage settings key not found. Nothing has been deleted.")
  }
})();