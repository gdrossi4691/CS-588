/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-history-audio-video-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.history=function(){return!!a.history&&!!history.pushState},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},q.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
;/*!
 * Detectizr v1.4.5
 * http://barisaydinoglu.github.com/Detectizr/
 * https://github.com/barisaydinoglu/Detectizr
 * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright © 2012
 * Contributor: Adrian Maurer (https://github.com/adrianmaurer)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
(function(f,k){function w(l){var r=function(b,a){var c,d;if(2<arguments.length)for(c=1,d=arguments.length;c<d;c+=1)r(b,arguments[c]);else for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},a=this,b=e.Detectizr.device,s=document.documentElement,c=["tv","tablet","mobile","desktop"],p={java:{substrs:["Java"],progIds:["JavaWebStart.isInstalled"]},acrobat:{substrs:["Adobe","Acrobat"],progIds:["AcroPDF.PDF","PDF.PDFCtrl.5"]},flash:{substrs:["Shockwave","Flash"],progIds:["ShockwaveFlash.ShockwaveFlash"]},
mediaplayer:{substrs:["Windows Media"],progIds:["MediaPlayer.MediaPlayer"]},silverlight:{substrs:["Silverlight"],progIds:["AgControl.AgControl"]}},d,h,m,t,n,u,v,q;g=r({},g,l||{});a.is=function(a){return-1<b.userAgent.indexOf(a)};a.test=function(a){return a.test(b.userAgent)};a.exec=function(a){return a.exec(b.userAgent)};a.toCamel=function(a){return null===a||void 0===a?"":String(a).replace(/((\s|\-|\.)+[a-z0-9])/g,function(a){return a.toUpperCase().replace(/(\s|\-|\.)/g,"")})};a.addVersionTest=function(b,
c,d){null!==c&&void 0!==c&&""!==c&&(c=a.toCamel(c),""!==c&&(void 0!==d&&0<d&&(c=c.substr(0,d)),a.addConditionalTest(b+c,!0)))};a.checkOrientation=function(){f.clearTimeout(u);u=f.setTimeout(function(){q=b.orientation;b.orientation=f.innerHeight>f.innerWidth?"portrait":"landscape";a.addConditionalTest(b.orientation,!0);q!==b.orientation&&a.addConditionalTest(q,!1)},10)};a.addConditionalTest=function(a,b){null!==a&&void 0!==a&&""!==a&&(g.addAllFeaturesAsClass?e.addTest(a,b):(b="function"===typeof b?
b():b)?e.addTest(a,!0):(delete e[a],v=RegExp("\\b"+a+"\\b"),s.className=s.className.replace(v,"")))};if(g.detectDevice){a.test(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)?(b.type=c[0],b.model="smartTv"):a.test(/Xbox|PLAYSTATION.3|Wii/i)?(b.type=c[0],b.model="gameConsole"):a.test(/iP(a|ro)d/i)?(b.type=c[1],b.model="ipad"):a.test(/tablet/i)&&!a.test(/RX-34/i)||a.test(/FOLIO/i)?(b.type=c[1],b.model=String(a.exec(/playbook/))):a.test(/Linux/i)&&a.test(/Android/i)&&
!a.test(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i)?(b.type=c[1],b.model="android"):a.test(/Kindle/i)||a.test(/Mac.OS/i)&&a.test(/Silk/i)?(b.type=c[1],b.model="kindle"):a.test(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||a.test(/MB511/i)&&a.test(/RUTEM/i)?(b.type=c[1],b.model="android"):a.test(/BB10/i)?(b.type=c[1],
b.model="blackberry"):(b.model=a.exec(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/i),null!==b.model?(b.type=c[2],b.model=String(b.model)):(b.model="",a.test(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i)?b.type=c[2]:a.test(/Opera/i)&&a.test(/Windows.NT.5/i)&&a.test(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)?b.type=c[2]:
a.test(/Windows.(NT|XP|ME|9)/i)&&!a.test(/Phone/i)||a.test(/Win(9|.9|NT)/i)||a.test(/\(Windows 8\)/i)?b.type=c[3]:a.test(/Macintosh|PowerPC/i)&&!a.test(/Silk/i)?b.type=c[3]:a.test(/Linux/i)&&a.test(/X11/i)?b.type=c[3]:a.test(/Solaris|SunOS|BSD/i)?b.type=c[3]:a.test(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i)&&!a.test(/Mobile/i)?(b.type=c[3],b.model="crawler"):b.type=c[2]));d=0;for(h=c.length;d<h;d+=
1)a.addConditionalTest(c[d],b.type===c[d]);g.detectDeviceModel&&a.addConditionalTest(a.toCamel(b.model),!0);if(b.type===c[1]||b.type===c[2])f.onresize=function(b){a.checkOrientation(b)},a.checkOrientation()}g.detectScreen&&e.mq&&(a.addConditionalTest("smallScreen",e.mq("only screen and (max-width: 480px)")),a.addConditionalTest("verySmallScreen",e.mq("only screen and (max-width: 320px)")),a.addConditionalTest("veryVerySmallScreen",e.mq("only screen and (max-width: 240px)")));if(g.detectOS){""!==b.model&&
("ipad"===b.model||"iphone"===b.model||"ipod"===b.model?(b.osVersion=a.test(/os\s(\d+)_/)?RegExp.$1:"",b.os="ios",b.osVersionFull=a.test(/os ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""):"android"===b.model?(b.osVersion=(a.test(/os\s(\d+)_/)?RegExp.$1:"").substr(0,2),b.osVersion||(b.osVersion=a.test(/android\s(\d+)\./)?RegExp.$1:"",b.osVersionFull=a.test(/android ([^\s]+)/)?RegExp.$1.replace(/_/g,"."):""),b.os="android"):"blackberry"===b.model?(b.osVersion=a.test(/version\/([^\s]+)/)?RegExp.$1:"",b.os=
"blackberry"):"playbook"===b.model&&(b.osVersion=a.test(/os ([^\s]+)/)?RegExp.$1.replace(";",""):"",b.os="blackberry"));if(""===b.os)if(a.is("win")||a.is("16bit"))if(b.os="windows",a.is("windows nt 6.3"))b.osVersion="8",b.osVersionFull="8.1";else if(a.is("windows nt 6.2")||a.test(/\(windows 8\)/))b.osVersion="8";else if(a.is("windows nt 6.1"))b.osVersion="7";else if(a.is("windows nt 6.0"))b.osVersion="vista";else if(a.is("windows nt 5.2")||a.is("windows nt 5.1")||a.is("windows xp"))b.osVersion="xp";
else if(a.is("windows nt 5.0")||a.is("windows 2000"))b.osVersion="2k";else if(a.is("winnt")||a.is("windows nt"))b.osVersion="nt";else if(a.is("win98")||a.is("windows 98"))b.osVersion="98";else{if(a.is("win95")||a.is("windows 95"))b.osVersion="95"}else a.is("mac")||a.is("darwin")?(b.os="mac",a.is("68k")||a.is("68000")?b.osVersion="68k":a.is("ppc")||a.is("powerpc")?b.osVersion="ppc":a.is("os x")&&(b.osVersion="os x")):a.is("webtv")?b.os="webtv":a.is("x11")||a.is("inux")?b.os="linux":a.is("sunos")?b.os=
"sun":a.is("irix")?b.os="irix":a.is("freebsd")?b.os="freebsd":a.is("bsd")&&(b.os="bsd");""!==b.os&&(!b.osVersionFull&&b.osVersion&&(b.osVersionFull=b.osVersion),a.addConditionalTest(b.os,!0),a.addVersionTest(b.os,b.osVersionFull.replace(/\./g,"_")),a.addVersionTest(b.os,b.osVersion))}g.detectBrowser&&(a.test(/opera|webtv/i)||!a.test(/msie\s([0-9]{1,})/)&&!a.is("trident")?a.is("firefox")?(b.browserEngine="gecko",b.browser="firefox",b.browserVersion=(a.test(/firefox\/(\d+(\.?\d+)*)/)?RegExp.$1:"").substr(0,
2)):a.is("gecko/")?b.browserEngine="gecko":a.is("opera")?(b.browser="opera",b.browserEngine="presto",b.browserVersion=a.test(/version\/(\d+)/)?RegExp.$1:a.test(/opera(\s|\/)(\d+)/)?RegExp.$2:""):a.is("konqueror")?b.browser="konqueror":a.is("chrome")?(b.browserEngine="webkit",b.browser="chrome",b.browserVersion=a.test(/chrome\/(\d+)/)?RegExp.$1:""):a.is("iron")?(b.browserEngine="webkit",b.browser="iron"):a.is("applewebkit/")?(b.browser="safari",b.browserEngine="webkit",b.browserVersion=a.test(/version\/(\d+)/)?
RegExp.$1:""):a.is("mozilla/")&&(b.browserEngine="gecko"):(b.browser="ie",!f.addEventListener&&document.documentMode&&7===document.documentMode?b.browserVersion="8compat":a.test(/trident.*rv[ :](\d+)\./)?b.browserVersion=RegExp.$1:b.browserVersion=a.test(/trident\/4\.0/)?"8":RegExp.$1),""!==b.browser&&(a.addConditionalTest(b.browser,!0),""!==b.browserVersion&&a.addVersionTest(b.browser,b.browserVersion)),a.addConditionalTest(b.browserEngine,!0));if(g.detectPlugins)for(n in a.detectPlugin=function(a){if(k.plugins)for(d=
0,h=k.plugins.length;d<h;d+=1){var b=k.plugins[d],b=b.name+b.description,c=0;m=0;for(t=a.length;m<t;m+=1)-1!==b.indexOf(a[m])&&(c+=1);if(c===a.length)return!0}return!1},a.detectObject=function(a,b){if(f.ActiveXObject)for(d=0,h=a.length;d<h;d+=1)try{var c=new ActiveXObject(a[d]);if(c)return b&&b[d]?b[d].call(c):!0}catch(e){}return!1},p)p.hasOwnProperty(n)&&(l=p[n],a.detectPlugin(l.substrs)||a.detectObject(l.progIds,l.fns))&&(b.browserPlugins.push(n),a.addConditionalTest(n,!0))}var e=f.Modernizr,g=
{addAllFeaturesAsClass:!1,detectDevice:!0,detectDeviceModel:!0,detectScreen:!0,detectOS:!0,detectBrowser:!0,detectPlugins:!0};(function(){void 0!==e&&(e.Detectizr=e.Detectizr||{},e.Detectizr.device={type:"",model:"",orientation:"",browser:"",browserEngine:"",browserPlugins:[],browserVersion:"",os:"",osVersion:"",osVersionFull:"",userAgent:(k.userAgent||k.vendor||f.opera).toLowerCase()},e.Detectizr.detect=function(e){return new w(e)})})()})(this,navigator);