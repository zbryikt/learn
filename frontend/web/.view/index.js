 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, ctrl, decache, defer, escape, libLoader, meta, prefix, scriptLoader, url, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
ctrl = {foot: {shown: true}, carbon: {}, body: {}}
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
ctrl.navtop = {placeholder: true, shown: true, className: "navbar-light"}
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
ctrl.navtop.className = "navbar-light text-dark"
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
ctrl.navtop.transition = ";bg-semi-light"
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!(libLoader || scriptLoader)) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";










}
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";









;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var loremtext = {
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";







;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";













;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fnode_modules\u002Fldview\u002Findex.pug";





















;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_mixins["navtop"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fmodules\u002Fnavtop.pug";
pug_html = pug_html + "\u003Cdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
meta = {
  title: "",
  description: "",
  thumbnail: "",
  thumb: {}
}
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", meta.title, true, true)) + "\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", meta.description, true, true)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", meta.thumb.type || "image/png", true, true)) + "\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", meta.thumb.width || "1200", true, true)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", meta.thumb.height || "630", true, true)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", meta.ogtype || "website", true, true)) + "\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]([
      {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
      {name: "@loadingio/bootstrap.ext"},
      {name: "@loadingio/loading.css", path: "lite.min.css"},
      {name: "@loadingio/ldcolorpicker"},
      {name: "ldcover"},
      {name: "ldloader"},
      {name: "ldnotify"},
      {name: "ldbutton"},
      {name: "ldiconfont"}
    ]);
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Oxygen:700|Roboto:300,700|&amp;display=swap\" rel=\"stylesheet\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 4;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "html,body{width:100%;height:100%}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody" + (pug_attr("class", pug_classes(["ld-over-full-inverse",(ctrl.body.className || '')], [false,true]), false, true)) + "\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cdiv class=\"ld ldld default text-lg\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
if (ctrl.navtop.shown) {
;pug_debug_line = 50;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["navtop"]();
}
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 7;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"container-sm h-100 py-4\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row h-100\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm h-100\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 h-100 vertical-center\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-100 d-flex justify-content-center\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????";
;pug_debug_line = 10;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan ld=\"idx\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 10;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-lg font-weight-bold\" ld=\"question\" style=\"white-space:pre-wrap\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "...\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group mt-4\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-lg\" ld=\"reply-input\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"input-group-append\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-lg btn-outline-secondary\" ld=\"reply-button\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm h-100\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-column h-100\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex flex-nowrap justify-content-between mb-4 border rounded-sm py-2 px-4 shadow-sm\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg\" ld=\"total\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 21;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-success\" ld=\"count\" data-name=\"correct\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-danger\" ld=\"count\" data-name=\"wrong\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "?????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"font-weight-bold text-lg\" ld=\"percent\" data-name=\"correct\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 31;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "%\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"font-weight-bold text-lg\" ld=\"elapsed\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fspan\u003E";
;pug_debug_line = 36;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 36;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "???\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\" style=\"overflow:scroll\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mb-2 p-4 bg-light border rounded-sm\" ld-each=\"history\" style=\"border-width:3px!important\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex py-1 mb-1\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mr-2 text-nowrap\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "??????";
;pug_debug_line = 42;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan ld=\"idx\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 42;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv ld=\"question\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 45;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex justify-content-between\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-center\" ld=\"response\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 51;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-center\" ld=\"answer\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 52;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 53;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-center\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ci ld=\"result\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"text-muted\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "????????????\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"font-weight-bold text-lg text-center\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan ld=\"elapsed\"\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 57;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + " ???\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
if (ctrl.foot.shown) {
}
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]([
      {name: "bootstrap.native", path: "dist/bootstrap-native-v4.min.js"},
      {name: "bootstrap.native", path: "dist/polyfill.min.js"},
      {name: "i18next", path: "dist/umd/i18next.min.js"},
      {name: "zmgr"},
      {name: "proxise"},
      {name: "@loadingio/ldc"},
      {name: "@loadingio/ldquery"},
      {name: "@loadingio/debounce.js"},
      {name: "@plotdb/semver"},
      {name: "@plotdb/rescope"},
      {name: "@plotdb/csscope"},
      {name: "@plotdb/block"},
      {name: "ldcover"},
      {name: "ldcolor"},
      {name: "ldform"},
      {name: "curegex", path: "curegex.min.js"},
      {name: "ldview"},
      {name: "ldloader"},
      {name: "lderror"},
      {name: "ldnotify"},
      {name: "ldcvmgr"},
      {name: "@loadingio/ldcolorpicker"},
      {name: "@servebase/auth"},
      {name: "@servebase/consent"},
      {name: "@servebase/captcha"},
      {name: "@servebase/core"}
    ]);
;pug_debug_line = 84;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Flearn\u002Ffrontend\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "frontend\u002Fweb\u002Fsrc\u002Fpug\u002Findex.pug";
pug_html = pug_html + "(function(t){return t.apply({})})(function(){var d,n,e,f,h,x,v,g,t;d={right:new Audio(\"\u002Fassets\u002Fsfx\u002Fright.ogg\"),wrong:new Audio(\"\u002Fassets\u002Fsfx\u002Fwrong.ogg\")};n=[\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\"];e=[\"????????????\",\"????????????\",\"??????\",\"?????????\",\"??????\",\"?????????\",\"??????\",\"??????\",\"??????\",\"??????\",\"?????????\",\"??????\",\"??????\",\"?????????\",\"?????????\",\"???\",\"???\",\"??????\",\"?????????\",\"??????\",\"?????????\",\"???\",\"?????????\",\"??????\",\"???\",\"??????\",\"?????????\",\"?????????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"?????????\",\"??????\",\"???\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"??????\",\"?????????\",\"??????\"];f=function(){var t,e;t=Math.floor(Math.random()*n.length);for(;;){e=Math.floor(Math.random()*n.length);if(e!==t){break}}return[n[t],n[e]]};h=function(){var t;t=Math.floor(Math.random()*n.length);return e[t]};x=new ldview({initRender:false,root:document.body,action:{click:{\"reply-button\":function(t){var e;e=t.evt;return g.resolve(x.get(\"reply-input\").value)}},keyup:{\"reply-input\":function(t){var e;e=t.evt;if(e.keyCode===13){return g.resolve(x.get(\"reply-input\").value)}}}},text:{question:function(t){var e;e=t.ctx;return e.question.question},idx:function(t){var e;e=t.ctx;return e.question.idx}},handler:{elapsed:function(t){var e,n,r;e=t.node,n=t.ctx;r=n.history.reduce(function(t,e){return t+e.elapsed},0);r=r\u002F(n.history.length||1);return e.innerText=(r\u002F1e3).toFixed(1)},\"reply-input\":function(t){var e;e=t.node;return e.value=\"\"},total:function(t){var e,n;e=t.node,n=t.ctx;return e.innerText=n.history.length},count:function(t){var e,n,r,o;e=t.node,n=t.ctx;r=e.getAttribute(\"data-name\");o=r===\"correct\";return e.innerText=n.history.filter(function(t){return t.result===o}).length},percent:function(t){var e,n,r;e=t.node,n=t.ctx;r=100*n.history.filter(function(t){return t.result}).length\u002F(n.history.length||1);return e.innerText=r.toFixed(1)},history:{list:function(t){var e;e=t.ctx;return e.history},key:function(t){return t.idx},view:{text:{question:function(t){var e;e=t.ctx;return e.question},idx:function(t){var e;e=t.ctx;return e.idx},answer:function(t){var e;e=t.ctx;return e.answer},response:function(t){var e;e=t.ctx;return e.response},elapsed:function(t){var e;e=t.ctx;return(e.elapsed\u002F1e3).toFixed(1)}},handler:{\"@\":function(t){var e,n;e=t.node,n=t.ctx;e.classList.toggle(\"border-success\",n.result);return e.classList.toggle(\"border-danger\",!n.result)},result:function(t){var e,n;e=t.node,n=t.ctx;return e.setAttribute(\"class\",n.result?\"i-check text-success\":\"i-close text-danger\")}}}}}});v={history:[],question:{}};x.setCtx(v);g=proxise(function(){});t=function(l){if(l\u003E=100){return Promise.resolve()}return Promise.resolve().then(function(){var t,e,n,r,o,i,u,s,a,c;t=f(),e=t[0],n=t[1];r=h();o=Math.ceil(Math.random()*9);i=Math.ceil(1+Math.random()*11);u=Math.ceil(1+Math.random()*11);s=o*(i+u);a=Date.now();c={idx:l,question:r+\" ????????? \"+o+\" ???\\n\"+e+\" ??? \"+i+\" ???\\n\"+n+\" ??? \"+u+\" ???\\n??????????????????????????????????\",t1:a,answer:s,response:null};v.question=c;x.render();return g().then(function(t){var e;c.t2=e=Date.now();c.elapsed=c.t2-c.t1;c.result=+t===c.answer;c.response=t;if(c.result){d.right.play()}else{d.wrong.play()}v.history.splice(0,0,c);return x.render()})}).then(function(){return t(l+1)})};return t(1)});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "ctrl" in locals_for_with ?
        locals_for_with.ctrl :
        typeof ctrl !== 'undefined' ? ctrl : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "prefix" in locals_for_with ?
        locals_for_with.prefix :
        typeof prefix !== 'undefined' ? prefix : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 