# Clear WorkFlowy User Settings From Local Storage
- Use this utility if feature toggles are not syncing properly.
- This clears cached settings from your client's local storage.
- This script makes no changes to your WorkFlowy data.
- The page must be reloaded after deleting for changes to take full affect. 

## Installation: Drag this link to your bookmarks bar: 

<a href="javascript:(function clearImageCache_0_2(){const imageKeys=[];for(var i=0;i&lt;localStorage.length;i++){if(localStorage.key(i).indexOf(&quot;signed_url./&quot;)===0){imageKeys.push(localStorage.key(i))}}if(confirm(`Clear WorkFlowy image cache from local storage? [${imageKeys.length}]`)){imageKeys.forEach(key=&gt;localStorage.removeItem(key))}})();">clearImageCache</a>

## Links:
- [Source code](https://github.com/rawbytz/clear-image-cache/blob/master/clearImageCache.js) 
- [rawbytz Blog](https://rawbytz.wordpress.com)


## Version Notes:
- v0.2 (2022-10-03): Support new localStorage key format
- v0.1 (2022-08-09): Initial release