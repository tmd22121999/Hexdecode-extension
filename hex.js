
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

function getword2(info,tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  var word ;
  var tw ;
  word = info.selectionText;
  for (i=0;i<word.length;i++)
	{
		tw = word.substr(i, 1)
		if  (( tw === ' ') || (tw === '(') ||(tw ===')' ))
			word = word.substr(0, i) + word.substr(i+1);
	};
	var tol = word.toLowerCase();
	tol = tol.substr(0, 4) ;
	if (tol === 'http') ;
	else
		word = 'http://' + word;
  chrome.tabs.create({  
    url: word
  })
}
function getword3(info,tab) {
  console.log("Word2 " + info.selectionText + " was clicked.");
  var word2 ;
  word2 = info.selectionText;
  word2 = 'https://nhentai.net/g/'+word2
  chrome.tabs.create({  
    url: word2
  })
}
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

chrome.contextMenus.create({
  title: "Search by del space,),(, ", 
  contexts:["selection"], 
  onclick: getword2
});
chrome.contextMenus.create({
  title: "Search by nhentai", 
  contexts:["selection"], 
  onclick: getword3
});

