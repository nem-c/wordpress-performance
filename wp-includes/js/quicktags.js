var QTags,edButtons=[],edCanvas;function quicktags(a){return new QTags(a)}function edInsertContent(b,a){return QTags.insertContent(a)}function edButton(f,e,c,b,a,d){return QTags.addButton(f,e,c,b,d,a)}(function(){var c=function(h){var g,f,e;if(typeof jQuery!="undefined"){jQuery(document).ready(h)}else{g=c;g.funcs=[];g.ready=function(){if(!g.isReady){g.isReady=true;for(f=0;f<g.funcs.length;f++){g.funcs[f]()}}};if(g.isReady){h()}else{g.funcs.push(h)}if(!g.eventAttached){if(document.addEventListener){e=function(){document.removeEventListener("DOMContentLoaded",e,false);g.ready()};document.addEventListener("DOMContentLoaded",e,false);window.addEventListener("load",g.ready,false)}else{if(document.attachEvent){e=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",e);g.ready()}};document.attachEvent("onreadystatechange",e);window.attachEvent("onload",g.ready);(function(){try{document.documentElement.doScroll("left")}catch(i){setTimeout(arguments.callee,50);return}g.ready()})()}}g.eventAttached=true}}},a=(function(){var e=new Date(),f;f=function(g){var h=g.toString();if(h.length<2){h="0"+h}return h};return e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"+00:00"})(),b={},d;d=QTags=function(k){if(typeof(k)=="string"){k={id:k}}else{if(typeof(k)!="object"){return false}}var s=this,g=k.id,q={},p={},j=document.getElementById(g),e="qt_"+g,o="",n,l,m,h,r,f;if(!g||!j){return false}s.name=e;s.id=g;for(n in edButtons){if(!edButtons[n]){continue}q[edButtons[n].id]=edButtons[n]}if(g=="content"&&adminpage&&(adminpage=="post-new-php"||adminpage=="post-php")){q.fullscreen=new d.FullscreenButton()}for(n in s._customButtons){q[n]=new s._customButtons[n]()}if(k.buttons){m=k.buttons.split(",");for(n in m){h=m[n];if(q[h]){p[h]=q[h]}}}else{p=q}if(k.disabled_buttons){m=k.disabled_buttons.split(",");for(n in m){h=m[n];if(p[h]){delete (p[h])}}}for(n in p){o+=p[n].html(e+"_")}if(g=="content"&&!d.instances[0]){edCanvas=j;f="ed_toolbar"}else{f=e+"_toolbar"}l=document.createElement("div");l.id=f;l.className="quicktags-toolbar";j.parentNode.insertBefore(l,j);l.innerHTML=o;s.toolbar=l;r=function(v){v=v||window.event;var u=v.target||v.srcElement,t;if(/\s+ed_button\s+/.test(" "+u.className+" ")){s.canvas=j=document.getElementById(g);t=u.id.replace(e+"_","");if(p[t]){p[t].callback.call(p[t],u,j,s)}}};if(l.addEventListener){l.addEventListener("click",r,false)}else{if(l.attachEvent){l.attachEvent("onclick",r)}}if(!d.instances[0]){d.instances[0]=s}d.instances[g]=s};d.instances={};d.registerButton=function(f,e){b[f]=e};d.getInstance=function(e){return d.instances[e]};d.addButton=function(e,k,j,i,h,g,l,m){var f;if(!e||!k){return false}if(typeof(j)=="function"){f=new d.Button(e,k,g,l);f.callback=j}else{if(typeof(j)=="string"&&j&&i){f=new d.TagButton(e,k,j,i,g,h,l)}else{return false}}if(m){while(typeof(edButtons[m])!="undefined"){m++}edButtons[m]=f}else{edButtons[edButtons.length]=f}return true};d.insertContent=function(h){var i,g,f,j,k,e=document.getElementById(wpActiveEditor);if(!e){return false}if(document.selection){e.focus();i=document.selection.createRange();i.text=h;e.focus()}else{if(e.selectionStart||e.selectionStart=="0"){k=e.value;g=e.selectionStart;f=e.selectionEnd;j=e.scrollTop;e.value=k.substring(0,g)+h+k.substring(f,k.length);e.focus();e.selectionStart=g+h.length;e.selectionEnd=g+h.length;e.scrollTop=j}else{e.value+=h;e.focus()}}return true};d.Button=function(i,g,e,h){var f=this;f.id=i;f.display=g;f.access=e;f.title=h||""};d.Button.prototype.html=function(f){var e=this.access?' accesskey="'+this.access+'"':"";return'<input type="button" id="'+f+this.id+'"'+e+' class="ed_button" title="'+this.title+'" value="'+this.display+'" />'};d.Button.prototype.callback=function(e){};d.TagButton=function(l,j,g,f,e,h,k){var i=this;d.Button.call(i,l,j,e,k);i.tagStart=g;i.tagEnd=f;i.open=h};d.TagButton.prototype=new d.Button();d.TagButton.prototype.openTag=function(h,f){var g=this;if(!f.openTags){f.openTags=[]}if(g.tagEnd){f.openTags.push(g.id);h.value="/"+h.value}};d.TagButton.prototype.closeTag=function(j,f){var h=this,g=h.isOpen(f);if(g!==false){f.openTags.splice(g,1)}j.value=h.display};d.TagButton.prototype.isOpen=function(e){var h=this,g=0,f=false;if(e.openTags){while(f===false&&g<e.openTags.length){f=e.openTags[g]==h.id?g:false;g++}}else{f=false}return f};d.TagButton.prototype.callback=function(o,j,q){var u=this,p,f,m,h,s,k,e,n,g;s=j.value;if(document.selection){j.focus();g=document.selection.createRange();if(g.text.length>0){g.text=u.tagStart+g.text+u.tagEnd}else{if(u.isOpen(q)===false||u.tagEnd===""){g.text=u.tagStart;u.openTag(o,q)}else{g.text=u.tagEnd;u.closeTag(o,q)}}j.focus()}else{if(j.selectionStart||j.selectionStart=="0"){p=j.selectionStart;f=j.selectionEnd;m=f;h=j.scrollTop;k=s.substring(0,p);e=s.substring(f,s.length);n=s.substring(p,f);if(p!=f){j.value=k+u.tagStart+n+u.tagEnd+e;if(u.tagEnd===""){m=p}m+=u.tagStart.length+u.tagEnd.length}else{if(u.isOpen(q)===false||u.tagEnd===""){j.value=k+u.tagStart+e;u.openTag(o,q);m=p+u.tagStart.length}else{j.value=k+u.tagEnd+e;m=p+u.tagEnd.length;u.closeTag(o,q)}}j.focus();j.selectionStart=m;j.selectionEnd=m;j.scrollTop=h}else{if(u.isOpen(q)!==false||u.tagEnd===""){j.value+=u.tagStart;u.openTag(o,q)}else{j.value+=u.tagEnd;u.closeTag(o,q)}j.focus()}}};d.SpellButton=function(){d.Button.call(this,"spell",quicktagsL10n.lookup,"",quicktagsL10n.dictionaryLookup)};d.SpellButton.prototype=new d.Button();d.SpellButton.prototype.callback=function(h,g,i){var k="",j,f,e;if(document.selection){g.focus();j=document.selection.createRange();if(j.text.length>0){k=j.text}}else{if(g.selectionStart||g.selectionStart=="0"){f=g.selectionStart;e=g.selectionEnd;if(f!=e){k=g.value.substring(f,e)}}}if(k===""){k=prompt(quicktagsL10n.wordLookup,"")}if(k!==null&&/^\w[\w ]*$/.test(k)){window.open("http://www.answers.com/"+encodeURIComponent(k))}};d.CloseButton=function(){d.Button.call(this,"close",quicktagsL10n.closeTags,"",quicktagsL10n.closeAllOpenTags)};d.CloseButton.prototype=new d.Button();d.CloseButton.prototype.callback=function(j,k,f){var h,g,i=f.openTags;if(i){while(i.length>0){h=f.getButton(i[i.length-1]);g=document.getElementById(f.name+"_"+h.id);h.callback.call(h,g,k,f)}}};d.prototype.closeAllTags=function(){var e=this.getButton("close");e.callback.call(e,"",this.canvas,this.toolbar)};d.LinkButton=function(){d.TagButton.call(this,"link","link","","</a>","a")};d.LinkButton.prototype=new d.TagButton();d.LinkButton.prototype.callback=function(j,k,h,g){var f,i=this;if(typeof(wpLink)!="undefined"){wpLink.open();return}if(!g){g="http://"}if(i.isOpen(h)===false){f=prompt(quicktagsL10n.enterURL,g);if(f){i.tagStart='<a href="'+f+'">';d.TagButton.prototype.callback.call(i,j,k,h)}}else{d.TagButton.prototype.callback.call(i,j,k,h)}};d.ImgButton=function(){d.TagButton.call(this,"img","img","","","m",-1)};d.ImgButton.prototype=new d.TagButton();d.ImgButton.prototype.callback=function(i,k,g,f){if(!f){f="http://"}var j=prompt(quicktagsL10n.enterImageURL,f),h;if(j){h=prompt(quicktagsL10n.enterImageDescription,"");this.tagStart='<img src="'+j+'" alt="'+h+'" />';d.TagButton.prototype.callback.call(this,i,k,g)}};d.FullscreenButton=function(){d.Button.call(this,"fullscreen",quicktagsL10n.fullscreen,"f",quicktagsL10n.toggleFullscreen)};d.FullscreenButton.prototype=new d.Button();d.FullscreenButton.prototype.callback=function(f,g){if(g.id!="content"||typeof(fullscreen)=="undefined"){return}fullscreen.on()};edButtons[10]=new d.TagButton("strong","b","<strong>","</strong>","b");edButtons[20]=new d.TagButton("em","i","<em>","</em>","i"),edButtons[30]=new d.LinkButton(),edButtons[40]=new d.TagButton("block","b-quote","\n\n<blockquote>","</blockquote>\n\n","q"),edButtons[50]=new d.TagButton("del","del",'<del datetime="'+a+'">',"</del>","d"),edButtons[60]=new d.TagButton("ins","ins",'<ins datetime="'+a+'">',"</ins>","s"),edButtons[70]=new d.ImgButton(),edButtons[80]=new d.TagButton("ul","ul","<ul>\n","</ul>\n\n","u"),edButtons[90]=new d.TagButton("ol","ol","<ol>\n","</ol>\n\n","o"),edButtons[100]=new d.TagButton("li","li","\t<li>","</li>\n","l"),edButtons[110]=new d.TagButton("code","code","<code>","</code>","c"),edButtons[120]=new d.TagButton("more","more","<!--more-->","","t",-1),edButtons[130]=new d.SpellButton(),edButtons[140]=new d.CloseButton()})();