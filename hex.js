
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
	for (i=0;i<hex.length;i++)
	{
		if  (hex.substr(i, 1) == ' ')
			hex = hex.substr(0, i) + hex.substr(i+1);
	};
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
};

function getword(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  var hexdc ;
  hexdc = info.selectionText;
  var hexdeco ;
  hexdeco = hex2a(hexdc);
  chrome.tabs.create({  
    url: hexdeco
  })
}
chrome.contextMenus.create({
  title: "Search by hexdecode", 
  contexts:["selection"], 
  onclick: getword
});