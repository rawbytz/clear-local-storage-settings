# Clear WorkFlowy User Settings From Local Storage
- Use this utility if feature toggles are not syncing properly.
- This clears cached settings from your client's local storage.
- This script makes no changes to your WorkFlowy data.
- The page must be reloaded after deleting for changes to take full affect. 

## Installation: Drag this link to your bookmarks bar: 

<a href="javascript:(function clearLocalStorageSettings_0_1(){const userKey=&quot;userstorage.settings&quot;;if(localStorage.getItem(userKey)){localStorage.removeItem(userKey);WF.showMessage(`userstorage.settings have been deleted.&lt;br&gt;&lt;b&gt;&lt;a href=&quot;${location.href}&quot; onclick=&quot;WF.hideMessage();location.reload();return true&quot;&gt;Click here for required page reload&lt;/a&gt;&lt;/b&gt;`)}else{alert(&quot;Local storage settings key not found. Nothing has been deleted.&quot;)}})();">clearLocalStorageSettings</a>

## Links:
- [Source code](https://github.com/rawbytz/clear-image-cache/blob/master/clearImageCache.js) 

## Version Notes:
- v0.2 (2022-10-03): Support new localStorage key format
- v0.1 (2022-08-09): Initial release