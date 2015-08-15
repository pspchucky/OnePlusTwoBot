var colour = require('colors'); //Muahaha useless but fun to play with
var https = require('https');
var kid = "PG2FQO"; //Pulled someone's 'kid' ('k-id', not kid >:|) off twitter (via https://twitter.com/balkumar/status/632149668726607872) Use your own... (or be malicious, I take no responibility...)
var json = ''; //Prepare the json response, might come in chunks...

console.log("Fetching ".yellow + kid.inverse + "'s status in the system...".yellow);

https.get('https://invites.oneplus.net/index.php?r=share/view&kid=' + kid, function(res) {
  res.on('data', function(chunk) {
    json += chunk;
  });

  res.on('end', function() {
    var jRes = JSON.parse(json);
    var jData = jRes.data;
    console.log("==================================================".rainbow); //I had to
    console.log((jData.kid).inverse + " has ".yellow + (jData.ref_count).toString().inverse + " refferals total.".yellow); //Refferals
    console.log("and has ".yellow + (jData.credits).toString().inverse + " 'credits' (whatever that means...)".yellow); //Credits ?
    console.log("and is ranked @ ".yellow + (numberWithCommas(jData.rank)).inverse + " out of a total of ".yellow + (numberWithCommas(jData.total)).inverse + " others".yellow); //Rank + Total
    console.log("and was created on ".yellow + (timeConverter(jData.create_at)).inverse ); //When the kid registered
    if (jData.parent != ""){ console.log("and their 'parent' is ".yellow + (jData.parent).red ); } //Check if the 'kid' has a 'parent' (uh)
    if (jData.referer !== undefined){ console.log("and their 'referer' was '".yellow + (jData.referer).inverse + "'".yellow); } //Check if the 'kid' was reffered by an external source
    if (jData.ip !== undefined){ console.log("and their IP address is ".yellow + (jData.ip).red + " (security flaw?)".red); } // silly 1+
    if (jData.userIp !== undefined){ console.log("and their IP address is ".yellow + (jData.userIp).red + " (security flaw?)".red); } // 1+ pls
    console.log("==================================================".rainbow); //This project is for fun ok?
  });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
    process.exit(1);
  });

//Thanks http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' @ ' + hour + ':' + min + ':' + sec ;
  return time;
}
//Thanks http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
