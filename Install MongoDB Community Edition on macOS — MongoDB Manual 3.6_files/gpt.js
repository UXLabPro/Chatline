(function(){var window=this;var e=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=function(a,b){for(var c=a.length,d="string"==typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};var g=function(){this.a="";this.b=da};g.prototype.s=!0;g.prototype.j=function(){return this.a};var ea=function(a){return a instanceof g&&a.constructor===g&&a.b===da?a.a:"type_error:TrustedResourceUrl"},da={},fa=function(a){var b=new g;b.a=a;return b};var h=function(){this.l="";this.A=ha};h.prototype.s=!0;h.prototype.j=function(){return this.l};var ia=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ha={},ja=function(a){var b=new h;b.l=a;return b};ja("about:blank");var k;a:{var ka=e.navigator;if(ka){var la=ka.userAgent;if(la){k=la;break a}}k=""};var ma=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},na=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var m=function(a){m[" "](a);return a};m[" "]=aa;var oa=/^[\w+/_-]+[=]{0,2}$/;var pa=function(){if(!e.crypto)return Math.random();try{var a=new Uint32Array(1);e.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},qa=ma(function(){return-1!=k.indexOf("Google Web Preview")||1E-4>Math.random()}),ra=function(){try{a:{var a=e.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&oa.test(b)){var c=b;break a}}c=void 0}return c}catch(d){}};var t=function(){return e.googletag||(e.googletag={})};var u={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:0,17:0,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:!1,37:.01,38:.001,47:1E-4,53:"",54:0,58:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:0,73:0,162:0,163:"",76:"",77:.001,78:0,81:.001,83:1E-4,85:0,89:1,90:0,91:0,96:1,97:0,99:.01,101:0,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-15",107:"1-0-15",110:0,113:1,114:1,115:.01,116:.001,117:1,118:1,123:0,120:1,124:.95,121:.01,169:.01,122:.01,125:.05,127:0,129:.01,131:"",156:0,133:0,134:.01,135:.1,137:.001,167:1,138:"",143:.005,168:1E-4,144:.001,187:.001,141:1,157:.01,158:.001,150:".google.ie",153:.25,179:.01,193:1,170:!1,183:0,196:.001,197:.001,152:[],171:.01,172:null,175:"21061441,21061442,21061443,21061444,21061445,21061446,21061447,21061461,21061452,21061453,21061454,21061455",178:.05,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:1,199:0,180:null,186:0,195:.2,198:.05,200:.05,201:0};u[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);u[49]=(new Date).getTime();u[36]=/^true$/.test("false");u[46]=/^true$/.test("false");u[148]=/^true$/.test("false");var v=function(){var a={},b;for(b in u)a[b]=u[b];this.a=a};v.prototype.get=function(a){return this.a[a]};v.prototype.set=function(a,b){this.a[a]=b};v.b=void 0;v.a=function(){return v.b?v.b:v.b=new v};var sa=["21060621","21060622","21060833","21060713"],ta=["21061212","21061213","21061214","21061277"],ua=v.a().a,va=t(),wa=va._vars_,w;for(w in wa)ua[w]=wa[w];va._vars_=ua;var xa=function(){return"179"},ya=t();ya.hasOwnProperty("getVersion")||(ya.getVersion=xa);var x=function(a){this.a=a||e.document||document};x.prototype.createElement=function(a){return this.a.createElement(String(a))};x.prototype.appendChild=function(a,b){a.appendChild(b)};var za=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var Ba=function(){var a=e;this.b=a=void 0===a?e:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.g=[];this.o=!1;a:{var b=[e.top];a=[];for(var c=0,d;d=b[c++];){a.push(d);try{if(d.frames)for(var f=d.frames.length,l=0;l<f&&50>b.length;++l)b.push(d.frames[l])}catch(H){}}b:{try{var n=e.parent;if(n&&n!=e){var p=n;break b}}catch(H){}p=null}(f=p)&&a.unshift(f);a.unshift(e);var q;for(f=0;f<a.length;++f)try{var r=a[f],J=y(r);if(J){this.a=Aa(J);if(2!=this.a)break a;var K;if(K=!q){p=void 0;try{if(p=!!r&&null!=r.location.href)c:{try{m(r.foo);p=!0;break c}catch(H){}p=!1}K=p}catch(H){K=!1}}K&&(q=r)}}catch(H){}this.b=q||this.b}},z=function(a){if(2!=Ca(a)){for(var b=1==Ca(a),c=0;c<a.g.length;c++)try{a.g[c](b)}catch(d){}a.g=[]}},Da=function(a){var b=y(a.b);b&&2==a.a&&(a.a=Aa(b))},Ca=function(a){Da(a);return a.a},Ea=function(a){var b=A;b.g.push(a);if(2!=b.a)z(b);else if(b.o||(za(b.b,function(a){var c=y(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}z(b)}}),b.o=!0),y(b.b))z(b);else{a=(new x(b.b.document)).createElement("IFRAME");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){Da(b);z(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Fa=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}},y=function(a){return a.frames&&a.frames[m("detect_3p_cookie")]||null},Aa=function(a){return Fa(a,"3p_cookie_yes")?1:Fa(a,"3p_cookie_no")?0:2};var B=null;var Ga=ma(function(){var a=e.navigator&&e.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),C=function(a,b,c){var d="script";d=void 0===d?"":d;var f=a.createElement("link");f.rel="preload";b instanceof g?b=ea(b):b instanceof h?b=b instanceof h&&b.constructor===h&&b.A===ha?b.l:"type_error:SafeUrl":(b instanceof h||(b=b.s?b.j():String(b),ia.test(b)||(b="about:invalid#zClosurez"),b=ja(b)),b=b.j());f.href=b;d&&(f.as=d);c&&(f.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(l){}};var Ha=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ia=/\.(cn|com\.bi|do|sl|ba|by|ma)$/,D=function(a){return Ha.test(a)&&!Ia.test(a)},Ja=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},E=e,A,Ka=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(e.location.hostname)];F[3]>=+new Date&&b.push("adsid="+encodeURIComponent(F[1]));return a+"?"+b.join("&")},F,G,I=function(){E=e;F=E.googleToken=E.googleToken||{};var a=+new Date;F[1]&&F[3]>a&&0<F[2]||(F[1]="",F[2]=-1,F[3]=-1,F[4]="",F[6]="");G=E.googleIMState=E.googleIMState||{};D(G[1])||(G[1]=".google.com");"array"==ba(G[5])||(G[5]=[]);"boolean"==typeof G[6]||(G[6]=!1);"array"==ba(G[7])||(G[7]=[]);"number"==typeof G[8]||(G[8]=0)},La=function(a){try{a()}catch(b){e.setTimeout(function(){throw b;},0)}},Na=function(a){"complete"==e.document.readyState||"loaded"==e.document.readyState||e.currentScript&&e.currentScript.async?Ma(3):a()},Oa=0,L={f:function(){return 0<G[8]},m:function(){G[8]++},u:function(){0<G[8]&&G[8]--},v:function(){G[8]=0},c:function(){},w:function(){return!1},i:function(){return G[5]},h:La},M={f:function(){return G[6]},m:function(){G[6]=!0},u:function(){G[6]=!1},v:function(){G[6]=!1},c:function(){},w:function(){return".google.com"!=G[1]&&2<++Oa},i:function(){return G[7]},h:function(a){Na(function(){La(a)})}},Ma=function(a){if(1E-5>Math.random()){e.google_image_requests||(e.google_image_requests=[]);var b=e.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;e.google_image_requests.push(b)}};L.c=function(){if(!L.f()){var a=e.document,b=function(b){var c=Ka("js",b),d=ra();C(a,c,d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return e.processGoogleToken({},2)};c=fa(c);b.src=ea(c);try{(a.head||a.body||a.documentElement).appendChild(b),L.m()}catch(p){}},c=G[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);e.setTimeout(function(){return e.processGoogleToken(d,1)},1E3)}};M.c=function(){if(!M.f()){var a=e.document,b=Ka("sync.js",G[1]);C(a,b);b=Ja(b);var c=m("script"),d="",f=ra();f&&(d='nonce="'+Ja(f)+'"');var l="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Na(function(){a.write(l);M.m()})}};var Pa=function(a,b){I();var c=E.googleToken[5]||0;a&&(0!=c||F[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));F[3]>=+new Date&&F[2]>=+new Date||b.c()},Ra=function(a){e.processGoogleToken=e.processGoogleToken||function(a,c){return Qa(L,a,c)};Pa(a,L)},Sa=function(a){e.processGoogleTokenSync=e.processGoogleTokenSync||function(a,c){return Qa(M,a,c)};Pa(a,M)},Ta=function(a){A=A||new Ba;Ea(function(b){b&&a()})},Qa=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",f="NT"==d,l=parseInt(b.freshLifetimeSecs||"",10),n=parseInt(b.validLifetimeSecs||"",10);f&&!n&&(n=3600);var p=b["1p_jar"]||"";b=b.pucrd||"";I();1==c?a.v():a.u();if(!d&&a.w())D(".google.com")&&(G[1]=".google.com"),a.c();else{var q=E.googleToken=E.googleToken||{},r=0==c&&d&&"string"==typeof d&&!f&&"number"==typeof l&&0<l&&"number"==typeof n&&0<n&&"string"==typeof p;f=f&&!a.f()&&(!(F[3]>=+new Date)||"NT"==F[1]);var J=!(F[3]>=+new Date)&&0!=c;if(r||f||J)f=+new Date,l=f+1E3*l,n=f+1E3*n,Ma(c),q[5]=c,q[1]=d,q[2]=l,q[3]=n,q[4]=p,q[6]=b,I();if(r||!a.f()){c=a.i();for(d=0;d<c.length;d++)a.h(c[d]);c.length=0}}};var Ua=function(){var a=N;if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];ca(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};m("partner.googleadservices.com");var O=m("www.googletagservices.com"),P=!1,Va=!1,Q="",R="",Wa=v.a().get(46)&&!v.a().get(6);Q=Wa?"http:":"https:";R=v.a().get(Wa?2:3);var Ya=function(){var a=Xa.scripts;if(a)for(var b=0;b<a.length;b++){var c=a[b];if(-1<c.src.indexOf(O+"/tag/js/gpt"))return c}return null},S=function(a,b){if(null===B){B="";try{var c="";try{c=e.top.location.hash}catch(f){c=e.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);B=d?d[1]:""}}catch(f){}}if(c=(c=B)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{b=a.length*b;if(!qa()&&(c=Math.random(),c<b)){c=pa();a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var T=void 0,U=t(),N=U.fifWin||window;T=T||N.document;var Za=[],$a=t();$a.hasOwnProperty("cmd")||($a.cmd=Za);if(U.evalScripts)U.evalScripts();else{var ab=v.a(),bb=S(ta,ab.get(178));bb&&ab.get(152).push(bb);switch(bb){case "21061213":Va=!0;break;case "21061214":P=!0;break;case "21061277":P=Va=!0}var V=v.a().get(138)||S(sa,v.a().get(137))||S(["21061149"],v.a().get(167)),cb=S(["21061560","21061561"],.01),Xa=T,W=S(["21061590","21061591"],.001),X=v.a();W&&("21061591"==W?(X.set(173,O),X.set(174,O)):X.set(163,W),X.get(152).push(W));-1!=k.indexOf("Mobile")||v.a().set(194,0);cb&&X.get(152).push(cb);if("21061561"!=cb){var db=X.get(150);db&&(I(),D(db)&&(G[1]=db))}V&&X.set(138,V);X.set(172,Xa.currentScript||Ya());N.PerformanceObserver&&N.PerformanceLongTaskTiming&&Ua();var eb,Y=N;Y=void 0===Y?e:Y;var fb=Y.performance;if(eb=fb&&fb.now?fb.now():null){var gb={label:"1",type:9,value:eb},hb,ib=N;hb=ib.google_js_reporting_queue=ib.google_js_reporting_queue||[];1024>hb.length&&hb.push(gb)}var jb;var kb=v.a(),Z=kb.get(76);if(Z)jb=Z;else{var lb;kb.get(131)&&(lb="179");Z=Q+"//"+R+"/gpt/pubads_impl_"+(lb||"179")+".js";v.a().set(76,Z);jb=Z}var mb=jb,nb=T,ob=nb.currentScript;if(!("complete"==nb.readyState||"loaded"==nb.readyState||ob&&ob.async)){var pb="gpt-impl-"+Math.random();try{var qb='<script id="'+pb+'" src="'+mb+'">\x3c/script>';P&&Ga()&&(qb+='<link rel="preconnect" href="'+Q+"//"+R+'">');T.write(qb);U._syncTagged_=!0}catch(a){}if(T.getElementById(pb))switch(U._loadStarted_=!0,V){case "21060833":var rb=na();Ta(rb);Sa(rb);break;case "21060622":case "21060713":case "21061149":Sa(null)}}if(!U._loadStarted_){switch(V){case "21060833":var sb=na();Ta(sb);Ra(sb);break;case "21060622":case "21060713":case "21061149":Ra(null)}Va&&C(T,mb);var tb=T.createElement("script");tb.src=mb;tb.async=!0;var ub=T.head||T.body||T.documentElement;ub.appendChild(tb);if(P&&Ga()){var vb=T.createElement("link");vb.rel="preconnect";vb.href=Q+"//"+R;ub.appendChild(vb)}U._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
