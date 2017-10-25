function Get_Cookie(b) {
    if ("undefined" !== typeof Storage)
        return sessionStorage.getItem(b);
    for (var c = document.cookie.split(";"), a = "", d = "", f = "", e = 0; e < c.length; e++)
        if (a = c[e].split("="), d = a[0].replace(/^\s+|\s+$/g, ""), d == b)
            return 1 < a.length && (f = unescape(a[1].replace(/^\s+|\s+$/g, ""))), f;
    return!1
}
function Set_Cookie(b, c) {
    if ("undefined" !== typeof Storage)
        sessionStorage.setItem(b, c);
    else {
        var a = 0, d = new Date;
        d.setTime(d.getTime());
        a && (a *= 864E5);
        d = new Date(d.getTime() + a);
        document.cookie = b + "=" + escape(c) + (a ? ";expires=" + d.toGMTString() : "") + ";path=/"
    }
}
function Delete_Cookie(b, c, a) {
    Get_Cookie(b) && (document.cookie = b + "=" + (c ? ";path=" + c : "") + (a ? ";domain=" + a : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT")
}
;

if (!Get_Cookie('frei_time')) {
    Set_Cookie('frei_time', "1508147781");
}
if (!Get_Cookie('frei_custom_mesg')) {
    Set_Cookie('frei_custom_mesg', "I am available");
}

if (!Get_Cookie('frei_sound')) {
    Set_Cookie('frei_sound', "on");
}


if (!Get_Cookie('selected_chatroom')) {
    Set_Cookie('selected_chatroom', "-1");
}

if (!Get_Cookie('selected_chatroom_color')) {
    Set_Cookie('selected_chatroom_color', "grey");
}

/*-----------------------Definitions--------------------------------------------*/
freidefines = {
    // GEN => GENERAL   CONFIGURATION
    GEN: {
        is_guest: '0', //
        url: 'http://orectiq.in/bookstore/freichat/',
        ses_status: '0', //
        reidfrom: '32', //
        getid: '32',
        fromname: 'Andrew',
        custom_mesg: Get_Cookie('frei_custom_mesg'),
        time: Get_Cookie('frei_time'),
        fromid: '32',
        referer: window.location.href,
        rtl: '',
        content_height: '200px',
        user_defined_chatbox_content_status: 'false',
        BOOT: 'yes',
        force_load_jquery: 'NO',
        custom_error_handling: 'NO'
    },
    // SET => GENERAL   SETTINGS 
    SET: {
        theme: 'basic',
        fonload: 'show',
        chatspeed: '5000',
        draggable: 'enable',
        fxval: 'true', //Jquery Effects
        mesgSendSpeed: '1000',
        addedoptions_visibility: 'HIDDEN',
        show_avatar: 'block',
        allow_guest_name_change: 'yes'   },
    STATUS: {
        IMG: {
            online: 'Go Online',
            offline: 'Go Offline',
            busy: 'Go Busy',
            invisible: 'Go Invisible'
        },
        TEXT: {
            online: 'Available',
            busy: 'Busy',
            invisible: 'Invisible',
            offline: 'Offline'
        }
    },
    video_config: {
        api_key: '20319841'
    },
    TRANS: {
        chat_message_me: 'Me',
        chat_status: 'The user is offline, messages you send will be delivered when the user comes online. ',
        rtl: 'Swicth rtl text ',
        ban_mesg: 'You are banned',
        chatroom_label: 'Chat Room',
        no_search_results: 'No search results!',
        custom_mesg_update: 'Update',
        g_prefix: 'Guest-',
        chatroom_tab_users: 'USERS',
        chatroom_tab_rooms: 'Rooms',
        chatroom_hide: 'Hide',
        mobile_chat: 'Chat',
        vid_req_sent: 'A video chat request has been sent',
        chatroom_lobby: 'rooms',
        new_chatroom_message: '<strong>Hey!</strong> A new message in the chatroom',
        chatroom_creator_new: 'enter chatroom name',
        chatroom_creator_pass: 'enter chatroom password',
        chatroom_creator_paswd: 'password protected',
        chatroom_creator: 'create chatroom',
        chatroom_creator_exists: 'A chatroom with the same name already exists',
        cancel: 'cancel',
        create_chatroom_title: 'Create your chatroom',
        custom_guest_name_exists: 'Another person with same name already exists . PLease choose a different name!',
        chatroom_tools_toggle: 'Show/hide chatroom options',
        search_placeholder: 'search',
        
        custom_name_title: 'Set name:',
        status_title: 'Set status:',
        MAIL: {
            _with: 'Conversation with',
            type: 'chatroom conversation',
            subject: 'enter your subject',
            rec: "enter receiver's email address",
            send: 'Send',
            title: 'Send conversation as email',
            lsubject: 'Subject',
            lmail: 'Email address'
        },
        FILE: {
            title: 'Send file',
            select: 'Select file',
            remove: 'Remove',
            inotice: 'Select a file to send',
            inotice2: 'Click Send file button to send your file',
            inotice3: 'Please select a file to send !',
            change: 'Change'            
        }
    },
    language: 'english',
    lockedimg: 'images/locked.png',
    wrenchimg: 'images/wrench.png',
    smiley_chatroomimg: 'images/smiley_chatroomimg.png',
    rtlimg_enabled: 'images/rtlimg_enabled.jpg',
    rtlimg_disabled: 'images/rtlimg_disabled.jpg',
    gchatimg: 'gchatimg.jpg',
    mailimg: 'images/mailimg.png',
    saveimg: 'images/saveimg.png',
    videoimg: 'images/videoimg.png',
    smileyimg: 'images/smileyimg.png',
    arrowimg: 'images/arrowimg.png',
    newtopimg: 'images/newtopimg.png',
    btopimg: 'images/btopimg.png',
    notransimg: 'images/notransimg.png',
    translateimg: 'images/translateimg.gif',
    uploadimg: 'images/uploadimg.png',
    deleteimg: 'images/deleteimg.png',
    minimg: 'images/minimg.png',
    maximg: 'images/maximg.png',
    closeimg: 'images/closeimg.png',
    logoutimg: 'images/logoutimg.gif',
    onlineimg: 'images/onlineimg.png',
    busyimg: 'images/busyimg.png',
    invisibleimg: 'images/invisibleimg.png',
    restoreimg: 'images/restoreimg.png',
    offlineimg: 'images/offlineimg.png',
    offline: 'images/offlineimg.gif',
    optimg: 'images/optimg.gif',
    toolimg: 'images/toolimg.png',
    chatroomimg: 'images/chatroomimg.jpeg',
    jquery_theme: 'ui-lightness',
    fnopermsht: '36', //Height When user has no permissions
    fnoonlineht: '19', //Height When No one is online
    fone_onlineht: '27', //Height When one user online
    fmaxht: '210', //Height when more than one user

    smileys: JSON.parse('[{"symbol":":S","0":":S","image_name":"worried55231.gif","1":"worried55231.gif"},{"symbol":"(wasntme)","0":"(wasntme)","image_name":"itwasntme55198.gif","1":"itwasntme55198.gif"},{"symbol":"x(","0":"x(","image_name":"angry55174.gif","1":"angry55174.gif"},{"symbol":"(doh)","0":"(doh)","image_name":"doh55146.gif","1":"doh55146.gif"},{"symbol":"|-()","0":"|-()","image_name":"yawn55117.gif","1":"yawn55117.gif"},{"symbol":"]:)","0":"]:)","image_name":"evilgrin55088.gif","1":"evilgrin55088.gif"},{"symbol":"|(","0":"|(","image_name":"dull55062.gif","1":"dull55062.gif"},{"symbol":"|-)","0":"|-)","image_name":"sleepy55036.gif","1":"sleepy55036.gif"},{"symbol":"(blush)","0":"(blush)","image_name":"blush54981.gif","1":"blush54981.gif"},{"symbol":":P","0":":P","image_name":"tongueout54953.gif","1":"tongueout54953.gif"},{"symbol":"(:|","0":"(:|","image_name":"sweat54888.gif","1":"sweat54888.gif"},{"symbol":";(","0":";(","image_name":"crying54854.gif","1":"crying54854.gif"},{"symbol":":)","0":":)","image_name":"smile54593.gif","1":"smile54593.gif"},{"symbol":":(","0":":(","image_name":"sad54749.gif","1":"sad54749.gif"},{"symbol":":D","0":":D","image_name":"bigsmile54781.gif","1":"bigsmile54781.gif"},{"symbol":"8)","0":"8)","image_name":"cool54801.gif","1":"cool54801.gif"},{"symbol":":o","0":":o","image_name":"wink54827.gif","1":"wink54827.gif"},{"symbol":"(mm)","0":"(mm)","image_name":"mmm55255.gif","1":"mmm55255.gif"},{"symbol":":x","0":":x","image_name":"lipssealed55304.gif","1":"lipssealed55304.gif"}]'),
    thememaker: false,
    mobile: '0',
    chatHistoryDeleted: 'chat history cleared',
    chatHistoryNotFound: 'chat history not found!',
    cb_head: 'Users',
    pwdby: '',
    nopermsmesg: 'Please&nbsp;LogIn&nbsp;to chat!',
    nolinemesg: 'No One Is Online',
    chatroom_nolinemesg: 'You are the only one online here',
    newmesg: 'New Message! From',
    onfoffline: 'Getting list of online users .....',
    restore_drag_pos: 'Restore Positions of chatwindows',
    status_txt: 'Change Status',
    opt_txt: 'Additional Options',
    onOfflinemesg: 'Click to chat!',
    plugin_trans_disable: 'Disable',
    plugin_trans_orig: 'Original message:',
    titles_translate: 'Translate to your own language',
    titles_upload: 'Send&nbsp;file',
    titles_mail: 'Send&nbsp;conversation&nbsp;as&nbsp;email',
    titles_smiley: 'Insert smiley',
    titles_clrcht: 'Clear chat history',
    titles_save: 'Save chat history',
    titles_videochat: 'Invite&nbsp;to&nbsp;Video&nbsp;Chat',
    status_online: 'You are online',
    status_busy: 'You are busy',
    status_invisible: 'You are invisible',
    status_offline: 'You are offline',
    default_status: 'I am available',
    set_custom_mesg: 'Set custom message:',
    chat_room_title: 'Chat Rooms',
    PLUGINS: {
        show_file_send: 'true',
        showtranslate: 'disabled',
        showsmiley: 'enabled',
        showsave: 'enabled',
        showmail: 'enabled',
        showchatroom: 'disabled',
        showvideochat: 'disabled',
        chatroom_location: 'left',
        chatroom_autoclose: 'true',
        chatroom_offset: '50px',
        chatroom_label_offset: '0.8%',
        chatroom_rotate: '0',
        chatroom_override_positions: 'yes',
        chat_time_shown_always: 'no'
  },
    JSdebug: '',
    playsound: 'true',
    busy_timeOut: '500',
    offline_timeOut: '1000',
    xhash: '7abd2d669ca929ea56e75c898670e0bf',
    jconflicts: 'true'
};

freidefines.ACL = JSON.parse('{"CHAT":{"user":"allow","guest":"allow"},"FILE":{"user":"allow","guest":"noallow"},"TRANSLATE":{"user":"noallow","guest":"noallow"},"SAVE":{"user":"allow","guest":"allow"},"SMILEY":{"user":"allow","guest":"allow"},"MAIL":{"user":"allow","guest":"allow"},"VIDEOCHAT":{"user":"allow","guest":"allow"},"CHATROOM":{"user":"allow","guest":"allow"},"MOBILECHAT":{"user":"allow","guest":"allow"},"CHATROOM_CRT":{"user":"allow","guest":"noallow"},"FORMATTER":{"user":"allow","guest":"allow"}}');


//COMM_15_DAY_NOTIFY_2




/*----------------------THE-PHP-JS-Bridge---------------------------------------*/



//COMM_EVERY_TIME_CHECK


if (freidefines.PLUGINS.chatroom_override_positions == 'yes') {
    //positions are taken from the theme instead from the backend

    freidefines.PLUGINS.chatroom_label_offset = '0.8%';
    freidefines.PLUGINS.chatroom_offset = '50px';
}



/* THE main FreiChatX INIT part */


var X_init = false;
if (typeof FreiChat != "undefined")
{
    X_init = true;
}


var FreiChat = {
    oldtitle: document.title,
    loop: 0,
    last_chatroom_msg_id: null,
    last_chatroom_usr_id: null,
    last_chatroom_msg_type: [], //[BUBBLE !!]TRUE ->RIGHT FALSE ->LEFT
    ses_status: freidefines.GEN.ses_status,
    time: 0,
    chatroom_mesg_time: 0,
    freistatus: null,
    ostatus: null,
    box_count: 0,
    box_crt: [],
    box_crt_id: [],
    room_array: [],
    windowFocus: false,
    debug: freidefines.JSdebug, //Set to true to debug with firebug , set to false(default) when over
    cnt: 0,
    inact_time: 0, //initial Inactivity time
    busy_timeOut: freidefines.busy_timeOut, // In seconds
    offline_timeOut: freidefines.offline_timeOut, //In seconds
    inactive: false, //initially not inactive
    onloadActive: false,
    clrchtids: [],
    bulkmesg: [],
    isOlduser: null,
    load_chatroom_complete: false,
    //Ttext:null,
    temporary_status: 0,
    unique: 0,
    timer: null,
    change_titletimer: null,
    first: false,
    RequestCompleted_get_members: true,
    RequestCompleted_send_messages: true,
    RequestCompleted_isset_mesg: true,
    SendMesgTimeOut: 0,
    passBYpost: false,
    custom_mesg: 'i am null',
    in_room: Get_Cookie('selected_chatroom'),
    chatroom_users: [],
    title: 'General Talk',
    bulkmesg_chatroom: [],
    height: 20,
    chatroom_changed: false,
    first_message: true,
    last_chatmessage_usr_id: {},
    msg_access: true,
    long_poll: 'true',
    chatroom_written: [false, false, false, false, false, false],
    current_smiley_selected: 0,
    d_id: freidefines.GEN.reidfrom,
    video_message_sent: false,
    video_rids: [],
    jscrollers: [],
    userdata: [],
    custom_gst_name: freidefines.GEN.fromname,
    g_prefix: freidefines.TRANS.g_prefix.replace("-", "").toLowerCase(),
    jscroll: {} //all scroller objects for each chatwindow is stored here
};/*Powered By FreiChat, Developed by Codologic. http://codologic.com */
if (typeof jQuery != "undefined" && freidefines.GEN.force_load_jquery == 'NO' && jQuery.get().hasOwnProperty("complete") ) {  
    // jQuery is already loaded  
} else  {
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
}      
var Freichat_img_url='http://codologic.com/page/codo_commerce/';var Freichat_item_no='CL-AB1353352585';/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));

/*! nanoScrollerJS v0.7.2 (c) 2013 James Florentino; Licensed MIT */

(function(e,t,n){"use strict";var r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x;S={paneClass:"pane",sliderClass:"slider",contentClass:"content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},y="scrollbar",g="scroll",l="mousedown",c="mousemove",p="mousewheel",h="mouseup",m="resize",u="drag",w="up",v="panedown",s="DOMMouseScroll",o="down",E="wheel",a="keydown",f="keyup",b="touchmove",r=t.navigator.appName==="Microsoft Internet Explorer"&&/msie 7./i.test(t.navigator.appVersion)&&t.ActiveXObject,i=null,x=function(){var e,t,r;return e=n.createElement("div"),t=e.style,t.position="absolute",t.width="100px",t.height="100px",t.overflow=g,t.top="-9999px",n.body.appendChild(e),r=e.offsetWidth-e.clientWidth,n.body.removeChild(e),r},d=function(){function a(r,s){this.el=r,this.options=s,i||(i=x()),this.$el=e(this.el),this.doc=e(this.options.documentContext||n),this.win=e(this.options.windowContext||t),this.$content=this.$el.children("."+s.contentClass),this.$content.attr("tabindex",0),this.content=this.$content[0],this.options.iOSNativeScrolling&&this.el.style.WebkitOverflowScrolling!=null?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return a.prototype.preventScrolling=function(e,t){if(!this.isActive)return;if(e.type===s)(t===o&&e.originalEvent.detail>0||t===w&&e.originalEvent.detail<0)&&e.preventDefault();else if(e.type===p){if(!e.originalEvent||!e.originalEvent.wheelDelta)return;(t===o&&e.originalEvent.wheelDelta<0||t===w&&e.originalEvent.wheelDelta>0)&&e.preventDefault()}},a.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},a.prototype.updateScrollValues=function(){var e;e=this.content,this.maxScrollTop=e.scrollHeight-e.clientHeight,this.contentScrollTop=e.scrollTop,this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},a.prototype.createEvents=function(){var e=this;this.events={down:function(t){return e.isBeingDragged=!0,e.offsetY=t.pageY-e.slider.offset().top,e.pane.addClass("active"),e.doc.bind(c,e.events[u]).bind(h,e.events[w]),!1},drag:function(t){return e.sliderY=t.pageY-e.$el.offset().top-e.offsetY,e.scroll(),e.updateScrollValues(),e.contentScrollTop>=e.maxScrollTop?e.$el.trigger("scrollend"):e.contentScrollTop===0&&e.$el.trigger("scrolltop"),!1},up:function(t){return e.isBeingDragged=!1,e.pane.removeClass("active"),e.doc.unbind(c,e.events[u]).unbind(h,e.events[w]),!1},resize:function(t){e.reset()},panedown:function(t){return e.sliderY=(t.offsetY||t.originalEvent.layerY)-e.sliderHeight*.5,e.scroll(),e.events.down(t),!1},scroll:function(t){if(e.isBeingDragged)return;e.updateScrollValues(),e.iOSNativeScrolling||(e.sliderY=e.sliderTop,e.slider.css({top:e.sliderTop}));if(t==null)return;e.contentScrollTop>=e.maxScrollTop?(e.options.preventPageScrolling&&e.preventScrolling(t,o),e.$el.trigger("scrollend")):e.contentScrollTop===0&&(e.options.preventPageScrolling&&e.preventScrolling(t,w),e.$el.trigger("scrolltop"))},wheel:function(t){var n;if(t==null)return;return n=t.delta||t.wheelDelta||t.originalEvent&&t.originalEvent.wheelDelta||-t.detail||t.originalEvent&&-t.originalEvent.detail,n&&(e.sliderY+=-n/3),e.scroll(),!1}}},a.prototype.addEvents=function(){var e;this.removeEvents(),e=this.events,this.options.disableResize||this.win.bind(m,e[m]),this.iOSNativeScrolling||(this.slider.bind(l,e[o]),this.pane.bind(l,e[v]).bind(""+p+" "+s,e[E])),this.$content.bind(""+g+" "+p+" "+s+" "+b,e[g])},a.prototype.removeEvents=function(){var e;e=this.events,this.win.unbind(m,e[m]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+g+" "+p+" "+s+" "+b,e[g])},a.prototype.generate=function(){var e,t,n,r,s;return n=this.options,r=n.paneClass,s=n.sliderClass,e=n.contentClass,!this.$el.find(""+r).length&&!this.$el.find(""+s).length&&this.$el.append('<div class="'+r+'"><div class="'+s+'" /></div>'),this.pane=this.$el.children("."+r),this.slider=this.pane.find("."+s),i&&(t={right:-i},this.$el.addClass("has-scrollbar")),t!=null&&this.$content.css(t),this},a.prototype.restore=function(){this.stopped=!1,this.pane.show(),this.addEvents()},a.prototype.reset=function(){var e,t,n,s,o,u,a,f,l;if(this.iOSNativeScrolling){this.contentHeight=this.content.scrollHeight;return}return this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),e=this.content,n=e.style,s=n.overflowY,r&&this.$content.css({height:this.$content.height()}),t=e.scrollHeight+i,u=this.pane.outerHeight(),f=parseInt(this.pane.css("top"),10),o=parseInt(this.pane.css("bottom"),10),a=u+f+o,l=Math.round(a/t*a),l<this.options.sliderMinHeight?l=this.options.sliderMinHeight:this.options.sliderMaxHeight!=null&&l>this.options.sliderMaxHeight&&(l=this.options.sliderMaxHeight),s===g&&n.overflowX!==g&&(l+=i),this.maxSliderTop=a-l,this.contentHeight=t,this.paneHeight=u,this.paneOuterHeight=a,this.sliderHeight=l,this.slider.height(l),this.events.scroll(),this.pane.show(),this.isActive=!0,e.scrollHeight===e.clientHeight||this.pane.outerHeight(!0)>=e.scrollHeight&&s!==g?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===e.scrollHeight&&s===g?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),this},a.prototype.scroll=function(){if(!this.isActive)return;return this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop((this.paneHeight-this.contentHeight+i)*this.sliderY/this.maxSliderTop*-1),this.iOSNativeScrolling||this.slider.css({top:this.sliderY}),this},a.prototype.scrollBottom=function(e){if(!this.isActive)return;return this.reset(),this.$content.scrollTop(this.contentHeight-this.$content.height()-e).trigger(p),this},a.prototype.scrollTop=function(e){if(!this.isActive)return;return this.reset(),this.$content.scrollTop(+e).trigger(p),this},a.prototype.scrollTo=function(t){if(!this.isActive)return;return this.reset(),this.scrollTop(e(t).get(0).offsetTop),this},a.prototype.stop=function(){return this.stopped=!0,this.removeEvents(),this.pane.hide(),this},a.prototype.destroy=function(){return this.stopped||this.stop(),this.pane.length&&this.pane.remove(),r&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass("has-scrollbar")&&(this.$el.removeClass("has-scrollbar"),this.$content.css({right:""})),this},a.prototype.flash=function(){var e=this;if(!this.isActive)return;return this.reset(),this.pane.addClass("flashed"),setTimeout(function(){e.pane.removeClass("flashed")},this.options.flashDelay),this},a}(),e.fn.nanoScroller=function(t){return this.each(function(){var n,r;(r=this.nanoscroller)||(n=e.extend({},S,t),this.nanoscroller=r=new d(this,n));if(t&&typeof t=="object"){e.extend(r.options,t);if(t.scrollBottom)return r.scrollBottom(t.scrollBottom);if(t.scrollTop)return r.scrollTop(t.scrollTop);if(t.scrollTo)return r.scrollTo(t.scrollTo);if(t.scroll==="bottom")return r.scrollBottom(0);if(t.scroll==="top")return r.scrollTop(0);if(t.scroll&&t.scroll instanceof e)return r.scrollTo(t.scroll);if(t.stop)return r.stop();if(t.destroy)return r.destroy();if(t.flash)return r.flash()}return r.reset()})}})(jQuery,window,document);/*! jQuery UI - v1.9.2 - 2013-01-12
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.tabs.js, jquery.ui.effect.js, jquery.ui.effect-clip.js, jquery.ui.effect-explode.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t)),this.dropped&&(n=this.dropped,this.dropped=!1);var r=this.element[0],i=!1;while(r&&(r=r.parentNode))r==document&&(i=!0);if(!i&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var s=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo),r[0]!=this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[t.containment=="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t.containment=="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment),r=n[0];if(!r)return;var i=n.offset(),s=e(r).css("overflow")!="hidden";this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(s?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(s?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t=="absolute"?1:-1,i=this.options,s=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(s[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():o?0:s.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():o?0:s.scrollLeft())*r}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){var u;if(this.containment){if(this.relative_container){var a=this.relative_container.offset();u=[this.containment[0]+a.left,this.containment[1]+a.top,this.containment[2]+a.left,this.containment[3]+a.top]}else u=this.containment;t.pageX-this.offset.click.left<u[0]&&(s=u[0]+this.offset.click.left),t.pageY-this.offset.click.top<u[1]&&(o=u[1]+this.offset.click.top),t.pageX-this.offset.click.left>u[2]&&(s=u[2]+this.offset.click.left),t.pageY-this.offset.click.top>u[3]&&(o=u[3]+this.offset.click.top)}if(n.grid){var f=n.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY;o=u?f-this.offset.click.top<u[1]||f-this.offset.click.top>u[3]?f-this.offset.click.top<u[1]?f+n.grid[1]:f-n.grid[1]:f:f;var l=n.grid[0]?this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX;s=u?l-this.offset.click.left<u[0]||l-this.offset.click.left>u[2]?l-this.offset.click.left<u[0]?l+n.grid[0]:l-n.grid[0]:l:l}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(e){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("draggable"),i=this,s=function(t){var n=this.offset.click.top,r=this.offset.click.left,i=this.positionAbs.top,s=this.positionAbs.left,o=t.height,u=t.width,a=t.top,f=t.left;return e.ui.isOver(i+n,s+r,a,f,o,u)};e.each(r.sortables,function(s){var o=!1,u=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!=u&&this.instance._intersectsWith(this.instance.containerCache)&&e.ui.contains(u.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n){var r=e("body"),i=e(this).data("draggable").options;r.css("cursor")&&(i._cursor=r.css("cursor")),r.css("cursor",i.cursor)},stop:function(t,n){var r=e(this).data("draggable").options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(t,n){var r=e(this).data("draggable");r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"&&(r.overflowOffset=r.scrollParent.offset())},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=!1;if(r.scrollParent[0]!=document&&r.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x")r.overflowOffset.top+r.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=s=r.scrollParent[0].scrollTop-i.scrollSpeed);if(!i.axis||i.axis!="y")r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=s=r.scrollParent[0].scrollLeft-i.scrollSpeed)}else{if(!i.axis||i.axis!="x")t.pageY-e(document).scrollTop()<i.scrollSensitivity?s=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(s=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed));if(!i.axis||i.axis!="y")t.pageX-e(document).scrollLeft()<i.scrollSensitivity?s=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(s=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed))}s!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(r,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n){var r=e(this).data("draggable"),i=r.options;r.snapElements=[],e(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var t=e(this),n=t.offset();this!=r.element[0]&&r.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n){var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height;for(var l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,d=p+r.snapElements[l].height;if(!(c-s<o&&o<h+s&&p-s<a&&a<d+s||c-s<o&&o<h+s&&p-s<f&&f<d+s||c-s<u&&u<h+s&&p-s<a&&a<d+s||c-s<u&&u<h+s&&p-s<f&&f<d+s)){r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=!1;continue}if(i.snapMode!="inner"){var v=Math.abs(p-f)<=s,m=Math.abs(d-a)<=s,g=Math.abs(c-u)<=s,y=Math.abs(h-o)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var b=v||m||g||y;if(i.snapMode!="outer"){var v=Math.abs(p-a)<=s,m=Math.abs(d-f)<=s,g=Math.abs(c-o)<=s,y=Math.abs(h-u)<=s;v&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top),m&&(n.position.top=r._convertPositionTo("relative",{top:d-r.helperProportions.height,left:0}).top-r.margins.top),g&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left),y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(v||m||g||y||b)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item})),r.snapElements[l].snapping=v||m||g||y||b}}}),e.ui.plugin.add("draggable","stack",{start:function(t,n){var r=e(this).data("draggable").options,i=e.makeArray(e(r.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!i.length)return;var s=parseInt(i[0].style.zIndex)||0;e(i).each(function(e){this.style.zIndex=s+e}),this[0].style.zIndex=s+i.length}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&e.href.replace(r,"")===location.href.replace(r,"").replace(/\s/g,"%20")}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options,r=n.active,i=location.hash.substring(1);this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs();if(r===null){i&&this.tabs.each(function(t,n){if(e(n).attr("aria-controls")===i)return r=t,!1}),r===null&&(r=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(r===null||r===-1)r=this.tabs.length?0:!1}r!==!1&&(r=this.tabs.index(this.tabs.eq(r)),r===-1&&(r=n.collapsible?!1:0)),n.active=r,!n.collapsible&&n.active===!1&&this.anchors.length&&(n.active=0),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(this.options.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r,i=this.element.parent();t==="fill"?(e.support.minHeight||(r=i.css("overflow"),i.css("overflow","hidden")),n=i.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),r&&i.css("overflow",r),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}}),e.uiBackCompat!==!1&&(e.ui.tabs.prototype._ui=function(e,t){return{tab:e,panel:t,index:this.anchors.index(e)}},e.widget("ui.tabs",e.ui.tabs,{url:function(e,t){this.anchors.eq(e).attr("href",t)}}),e.widget("ui.tabs",e.ui.tabs,{options:{ajaxOptions:null,cache:!1},_create:function(){this._super();var t=this;this._on({tabsbeforeload:function(n,r){if(e.data(r.tab[0],"cache.tabs")){n.preventDefault();return}r.jqXHR.success(function(){t.options.cache&&e.data(r.tab[0],"cache.tabs",!0)})}})},_ajaxSettings:function(t,n,r){var i=this.options.ajaxOptions;return e.extend({},i,{error:function(e,t){try{i.error(e,t,r.tab.closest("li").index(),r.tab[0])}catch(n){}}},this._superApply(arguments))},_setOption:function(e,t){e==="cache"&&t===!1&&this.anchors.removeData("cache.tabs"),this._super(e,t)},_destroy:function(){this.anchors.removeData("cache.tabs"),this._super()},url:function(e){this.anchors.eq(e).removeData("cache.tabs"),this._superApply(arguments)}}),e.widget("ui.tabs",e.ui.tabs,{abort:function(){this.xhr&&this.xhr.abort()}}),e.widget("ui.tabs",e.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super(),this._on({tabsbeforeload:function(e,t){if(e.target!==this.element[0]||!this.options.spinner)return;var n=t.tab.find("span"),r=n.html();n.html(this.options.spinner),t.jqXHR.complete(function(){n.html(r)})}})}}),e.widget("ui.tabs",e.ui.tabs,{options:{enable:null,disable:null},enable:function(t){var n=this.options,r;if(t&&n.disabled===!0||e.isArray(n.disabled)&&e.inArray(t,n.disabled)!==-1)r=!0;this._superApply(arguments),r&&this._trigger("enable",null,this._ui(this.anchors[t],this.panels[t]))},disable:function(t){var n=this.options,r;if(t&&n.disabled===!1||e.isArray(n.disabled)&&e.inArray(t,n.disabled)===-1)r=!0;this._superApply(arguments),r&&this._trigger("disable",null,this._ui(this.anchors[t],this.panels[t]))}}),e.widget("ui.tabs",e.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(n,r,i){i===t&&(i=this.anchors.length);var s,o,u=this.options,a=e(u.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,r)),f=n.indexOf("#")?this._tabId(a):n.replace("#","");return a.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",!0),a.attr("aria-controls",f),s=i>=this.tabs.length,o=this.element.find("#"+f),o.length||(o=this._createPanel(f),s?i>0?o.insertAfter(this.panels.eq(-1)):o.appendTo(this.element):o.insertBefore(this.panels[i])),o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),s?a.appendTo(this.tablist):a.insertBefore(this.tabs[i]),u.disabled=e.map(u.disabled,function(e){return e>=i?++e:e}),this.refresh(),this.tabs.length===1&&u.active===!1&&this.option("active",0),this._trigger("add",null,this._ui(this.anchors[i],this.panels[i])),this},remove:function(t){t=this._getIndex(t);var n=this.options,r=this.tabs.eq(t).remove(),i=this._getPanelForTab(r).remove();return r.hasClass("ui-tabs-active")&&this.anchors.length>2&&this._activate(t+(t+1<this.anchors.length?1:-1)),n.disabled=e.map(e.grep(n.disabled,function(e){return e!==t}),function(e){return e>=t?--e:e}),this.refresh(),this._trigger("remove",null,this._ui(r.find("a")[0],i[0])),this}}),e.widget("ui.tabs",e.ui.tabs,{length:function(){return this.anchors.length}}),e.widget("ui.tabs",e.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(t){var n=t.is("li")?t.find("a[href]"):t;return n=n[0],e(n).closest("li").attr("aria-controls")||n.title&&n.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+i()}}),e.widget("ui.tabs",e.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(t){return e(this.options.panelTemplate).attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)}}),e.widget("ui.tabs",e.ui.tabs,{_create:function(){var e=this.options;e.active===null&&e.selected!==t&&(e.active=e.selected===-1?!1:e.selected),this._super(),e.selected=e.active,e.selected===!1&&(e.selected=-1)},_setOption:function(e,t){if(e!=="selected")return this._super(e,t);var n=this.options;this._super("active",t===-1?!1:t),n.selected=n.active,n.selected===!1&&(n.selected=-1)},_eventHandler:function(){this._superApply(arguments),this.options.selected=this.options.active,this.options.selected===!1&&(this.options.selected=-1)}}),e.widget("ui.tabs",e.ui.tabs,{options:{show:null,select:null},_create:function(){this._super(),this.options.active!==!1&&this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))},_trigger:function(e,t,n){var r,i,s=this._superApply(arguments);return s?(e==="beforeActivate"?(r=n.newTab.length?n.newTab:n.oldTab,i=n.newPanel.length?n.newPanel:n.oldPanel,s=this._super("select",t,{tab:r.find(".ui-tabs-anchor")[0],panel:i[0],index:r.closest("li").index()})):e==="activate"&&n.newTab.length&&(s=this._super("show",t,{tab:n.newTab.find(".ui-tabs-anchor")[0],panel:n.newPanel[0],index:n.newTab.closest("li").index()})),s):!1}}),e.widget("ui.tabs",e.ui.tabs,{select:function(e){e=this._getIndex(e);if(e===-1){if(!this.options.collapsible||this.options.selected===-1)return;e=this.options.selected}this.anchors.eq(e).trigger(this.options.event+this.eventNamespace)}}),function(){var t=0;e.widget("ui.tabs",e.ui.tabs,{options:{cookie:null},_create:function(){var e=this.options,t;e.active==null&&e.cookie&&(t=parseInt(this._cookie(),10),t===-1&&(t=!1),e.active=t),this._super()},_cookie:function(n){var r=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+ ++t)];return arguments.length&&(r.push(n===!1?-1:n),r.push(this.options.cookie)),e.cookie.apply(null,r)},_refresh:function(){this._super(),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_eventHandler:function(){this._superApply(arguments),this.options.cookie&&this._cookie(this.options.active,this.options.cookie)},_destroy:function(){this._super(),this.options.cookie&&this._cookie(null,this.options.cookie)}})}(),e.widget("ui.tabs",e.ui.tabs,{_trigger:function(t,n,r){var i=e.extend({},r);return t==="load"&&(i.panel=i.panel[0],i.tab=i.tab.find(".ui-tabs-anchor")[0]),this._super(t,n,i)}}),e.widget("ui.tabs",e.ui.tabs,{options:{fx:null},_getFx:function(){var t,n,r=this.options.fx;return r&&(e.isArray(r)?(t=r[0],n=r[1]):t=n=r),r?{show:n,hide:t}:null},_toggle:function(e,t){function o(){n.running=!1,n._trigger("activate",e,t)}function u(){t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&s.show?r.animate(s.show,s.show.duration,function(){o()}):(r.show(),o())}var n=this,r=t.newPanel,i=t.oldPanel,s=this._getFx();if(!s)return this._super(e,t);n.running=!0,i.length&&s.hide?i.animate(s.hide,s.hide.duration,function(){t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),i.hide(),u())}}))})(jQuery);jQuery.effects||function(e,t){var n=e.uiBackCompat!==!1,r="ui-effects-";e.effects={effect:{}},function(t,n){function p(e,t,n){var r=a[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function d(e){var n=o(),r=n._rgba=[];return e=e.toLowerCase(),h(s,function(t,i){var s,o=i.re.exec(e),a=o&&i.parse(o),f=i.space||"rgba";if(a)return s=n[f](a),n[u[f].cache]=s[u[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&t.extend(r,c.transparent),n):c[e]}function v(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,s=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],o=t.Color=function(e,n,r,i){return new t.Color.fn.parse(e,n,r,i)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},a={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=o.support={},l=t("<p>")[0],c,h=t.each;l.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=l.style.backgroundColor.indexOf("rgba")>-1,h(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),o.fn=t.extend(o.prototype,{parse:function(r,i,s,a){if(r===n)return this._rgba=[null,null,null,null],this;if(r.jquery||r.nodeType)r=t(r).css(i),i=n;var f=this,l=t.type(r),v=this._rgba=[];i!==n&&(r=[r,i,s,a],l="array");if(l==="string")return this.parse(d(r)||c._default);if(l==="array")return h(u.rgba.props,function(e,t){v[t.idx]=p(r[t.idx],t)}),this;if(l==="object")return r instanceof o?h(u,function(e,t){r[t.cache]&&(f[t.cache]=r[t.cache].slice())}):h(u,function(t,n){var i=n.cache;h(n.props,function(e,t){if(!f[i]&&n.to){if(e==="alpha"||r[e]==null)return;f[i]=n.to(f._rgba)}f[i][t.idx]=p(r[e],t,!0)}),f[i]&&e.inArray(null,f[i].slice(0,3))<0&&(f[i][3]=1,n.from&&(f._rgba=n.from(f[i])))}),this},is:function(e){var t=o(e),n=!0,r=this;return h(u,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],h(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return h(u,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=o(e),r=n._space(),i=u[r],s=this.alpha()===0?o("transparent"):this,f=s[i.cache]||i.to(s._rgba),l=f.slice();return n=n[i.cache],h(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],u=a[r.type]||{};if(o===null)return;s===null?l[i]=o:(u.mod&&(o-s>u.mod/2?s+=u.mod:s-o>u.mod/2&&(s-=u.mod)),l[i]=p((o-s)*t+s,r))}),this[r](l)},blend:function(e){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=o(e)._rgba;return o(t.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),r=n.pop();return e&&n.push(~~(r*255)),"#"+t.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),o.fn.parse.prototype=o.fn,u.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,f===0||f===1?c=f:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},u.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(v(o,s,t+1/3)*255),Math.round(v(o,s,t)*255),Math.round(v(o,s,t-1/3)*255),i]},h(u,function(e,r){var s=r.props,u=r.cache,a=r.to,f=r.from;o.fn[e]=function(e){a&&!this[u]&&(this[u]=a(this._rgba));if(e===n)return this[u].slice();var r,i=t.type(e),l=i==="array"||i==="object"?e:arguments,c=this[u].slice();return h(s,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=c[t.idx]),c[t.idx]=p(n,t)}),f?(r=o(f(c)),r[u]=c,r):o(c)},h(s,function(n,r){if(o.fn[n])return;o.fn[n]=function(s){var o=t.type(s),u=n==="alpha"?this._hsla?"hsla":"rgba":e,a=this[u](),f=a[r.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=t.type(s)),s==null&&r.empty?this:(o==="string"&&(l=i.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[r.idx]=s,this[u](a)))}})}),h(r,function(e,n){t.cssHooks[n]={set:function(e,r){var i,s,u="";if(t.type(r)!=="string"||(i=d(r))){r=o(i||r);if(!f.rgba&&r._rgba[3]!==1){s=n==="backgroundColor"?e.parentNode:e;while((u===""||u==="transparent")&&s&&s.style)try{u=t.css(s,"backgroundColor"),s=s.parentNode}catch(a){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=o(e.elem,n),e.end=o(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}}),t.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},c=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var t=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={},r,i;if(t&&t.length&&t[0]&&t[t[0]]){i=t.length;while(i--)r=t[i],typeof t[r]=="string"&&(n[e.camelCase(r)]=t[r])}else for(r in t)typeof t[r]=="string"&&(n[r]=t[r]);return n}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").andSelf():r;f=f.map(function(){var t=e(this);return{el:t,start:i.call(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=jQuery.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function i(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function s(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]?n&&e.effects[t]?!1:!0:!1}e.extend(e.effects,{version:"1.9.2",save:function(e,t){for(var n=0;n<t.length;n++)t[n]!==null&&e.data(r+t[n],e[0].style[t[n]])},restore:function(e,n){var i,s;for(s=0;s<n.length;s++)n[s]!==null&&(i=e.data(r+n[s]),i===t&&(i=""),e.css(n[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function a(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,s=t.mode;(r.is(":hidden")?s==="hide":s==="show")?u():o.call(r[0],t,u)}var t=i.apply(this,arguments),r=t.mode,s=t.queue,o=e.effects.effect[t.effect],u=!o&&n&&e.effects[t.effect];return e.fx.off||!o&&!u?r?this[r](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):o?s===!1?this.each(a):this.queue(s||"fx",a):u.call(this,{options:t,duration:t.duration,callback:t.complete,mode:t.mode})},_show:e.fn.show,show:function(e){if(s(e))return this._show.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(s(e))return this._hide.apply(this,arguments);var t=i.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(s(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e){function t(t,n){function r(e){return o.preferFlash&&xt&&!o.ignoreFlash&&void 0!==o.flash[e]&&o.flash[e]}function i(e){return function(t){var n=this._s;return!n||!n._a?null:e.call(this,t)}}this.setupOptions={url:t||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=n||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20121104";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var s,o=this,u=null,a=null,f,l=navigator.userAgent,c=e,h=c.location.href.toString(),p=document,d,v,m,g,y=[],b=!1,w=!1,E=!1,S=!1,x=!1,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$=null,J=null,K,G,Y,Z,et,tt,nt,rt=!1,it=!1,st,ot,ut,at=0,ft=null,lt,ct=null,ht,pt,dt,vt,mt,gt,yt,bt,wt=Array.prototype.slice,Et=!1,St,xt,Tt,Nt,Ct,kt,Lt=l.match(/(ipad|iphone|ipod)/i),At=l.match(/msie/i),Ot=l.match(/webkit/i),Mt=l.match(/safari/i)&&!l.match(/chrome/i),_t=l.match(/opera/i),Dt=l.match(/(mobile|pre\/|xoom)/i)||Lt,Pt=!h.match(/usehtml5audio/i)&&!h.match(/sm2\-ignorebadua/i)&&Mt&&!l.match(/silk/i)&&l.match(/OS X 10_6_([3-7])/i),Ht=void 0!==p.hasFocus?p.hasFocus():null,Bt=Mt&&(void 0===p.hasFocus||!p.hasFocus()),jt=!Bt,Ft=/(mp3|mp4|mpa|m4a|m4b)/i,It=p.location?p.location.protocol.match(/http/i):null,qt=!It?"http://":"",Rt=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,Ut="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),zt=RegExp("\\.("+Ut.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!It;Dt&&(o.useHTML5Audio=!0,o.preferFlash=!1,Lt&&(Et=o.ignoreFlash=!0));var Wt;try{Wt=void 0!==Audio&&void 0!==(_t&&void 0!==opera&&10>opera.version()?new Audio(null):new Audio).canPlayType}catch(Xt){Wt=!1}this.hasHTML5=Wt;this.setup=function(e){var t=!o.url;void 0!==e&&E&&ct&&o.ok()&&(void 0!==e.flashVersion||void 0!==e.url)&&tt(K("setupLate"));C(e);t&&F&&void 0!==e.url&&o.beginDelayedInit();!F&&void 0!==e.url&&"complete"===p.readyState&&setTimeout(B,1);return o};this.supported=this.ok=function(){return ct?E&&!S:o.useHTML5Audio&&o.hasHTML5};this.getMovie=function(e){return f(e)||p[e]||c[e]};this.createSound=function(e,t){function n(){r=Z(r);o.sounds[r.id]=new s(r);o.soundIDs.push(r.id);return o.sounds[r.id]}var r,i=null;if(!E||!o.ok())return tt(void 0),!1;void 0!==t&&(e={id:e,url:t});r=N(e);r.url=lt(r.url);if(nt(r.id,!0))return o.sounds[r.id];pt(r)?(i=n(),i._setup_html5(r)):(8<g&&null===r.isMovieStar&&(r.isMovieStar=!(!r.serverURL&&!(r.type&&r.type.match(Rt)||r.url.match(zt)))),r=et(r,void 0),i=n(),8===g?a._createSound(r.id,r.loops||1,r.usePolicyFile):(a._createSound(r.id,r.url,r.usePeakData,r.useWaveformData,r.useEQData,r.isMovieStar,r.isMovieStar?r.bufferTime:!1,r.loops||1,r.serverURL,r.duration||null,r.autoPlay,!0,r.autoLoad,r.usePolicyFile),r.serverURL||(i.connected=!0,r.onconnect&&r.onconnect.apply(i))),!r.serverURL&&(r.autoLoad||r.autoPlay)&&i.load(r));!r.serverURL&&r.autoPlay&&i.play();return i};this.destroySound=function(e,t){if(!nt(e))return!1;var n=o.sounds[e],r;n._iO={};n.stop();n.unload();for(r=0;r<o.soundIDs.length;r++)if(o.soundIDs[r]===e){o.soundIDs.splice(r,1);break}t||n.destruct(!0);delete o.sounds[e];return!0};this.load=function(e,t){return!nt(e)?!1:o.sounds[e].load(t)};this.unload=function(e){return!nt(e)?!1:o.sounds[e].unload()};this.onposition=this.onPosition=function(e,t,n,r){return!nt(e)?!1:o.sounds[e].onposition(t,n,r)};this.clearOnPosition=function(e,t,n){return!nt(e)?!1:o.sounds[e].clearOnPosition(t,n)};this.start=this.play=function(e,t){var n=!1;return!E||!o.ok()?(tt("soundManager.play(): "+K(!E?"notReady":"notOK")),n):!nt(e)?(t instanceof Object||(t={url:t}),t&&t.url&&(t.id=e,n=o.createSound(t).play()),n):o.sounds[e].play(t)};this.setPosition=function(e,t){return!nt(e)?!1:o.sounds[e].setPosition(t)};this.stop=function(e){return!nt(e)?!1:o.sounds[e].stop()};this.stopAll=function(){for(var e in o.sounds)o.sounds.hasOwnProperty(e)&&o.sounds[e].stop()};this.pause=function(e){return!nt(e)?!1:o.sounds[e].pause()};this.pauseAll=function(){var e;for(e=o.soundIDs.length-1;0<=e;e--)o.sounds[o.soundIDs[e]].pause()};this.resume=function(e){return!nt(e)?!1:o.sounds[e].resume()};this.resumeAll=function(){var e;for(e=o.soundIDs.length-1;0<=e;e--)o.sounds[o.soundIDs[e]].resume()};this.togglePause=function(e){return!nt(e)?!1:o.sounds[e].togglePause()};this.setPan=function(e,t){return!nt(e)?!1:o.sounds[e].setPan(t)};this.setVolume=function(e,t){return!nt(e)?!1:o.sounds[e].setVolume(t)};this.mute=function(e){var t=0;e instanceof String&&(e=null);if(e)return!nt(e)?!1:o.sounds[e].mute();for(t=o.soundIDs.length-1;0<=t;t--)o.sounds[o.soundIDs[t]].mute();return o.muted=!0};this.muteAll=function(){o.mute()};this.unmute=function(e){e instanceof String&&(e=null);if(e)return!nt(e)?!1:o.sounds[e].unmute();for(e=o.soundIDs.length-1;0<=e;e--)o.sounds[o.soundIDs[e]].unmute();o.muted=!1;return!0};this.unmuteAll=function(){o.unmute()};this.toggleMute=function(e){return!nt(e)?!1:o.sounds[e].toggleMute()};this.getMemoryUse=function(){var e=0;a&&8!==g&&(e=parseInt(a._getMemoryUse(),10));return e};this.disable=function(e){var t;void 0===e&&(e=!1);if(S)return!1;S=!0;for(t=o.soundIDs.length-1;0<=t;t--)W(o.sounds[o.soundIDs[t]]);T(e);bt.remove(c,"load",O);return!0};this.canPlayMIME=function(e){var t;o.hasHTML5&&(t=dt({type:e}));!t&&ct&&(t=e&&o.ok()?!!(8<g&&e.match(Rt)||e.match(o.mimePattern)):null);return t};this.canPlayURL=function(e){var t;o.hasHTML5&&(t=dt({url:e}));!t&&ct&&(t=e&&o.ok()?!!e.match(o.filePattern):null);return t};this.canPlayLink=function(e){return void 0!==e.type&&e.type&&o.canPlayMIME(e.type)?!0:o.canPlayURL(e.href)};this.getSoundById=function(e){if(!e)throw Error("soundManager.getSoundById(): sID is null/undefined");return o.sounds[e]};this.onready=function(e,t){if("function"===typeof e)t||(t=c),L("onready",e,t),A();else throw K("needFunction","onready");return!0};this.ontimeout=function(e,t){if("function"===typeof e)t||(t=c),L("ontimeout",e,t),A({type:"ontimeout"});else throw K("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var e,t;for(e=o.soundIDs.length-1;0<=e;e--)o.sounds[o.soundIDs[e]].destruct();if(a)try{At&&(J=a.innerHTML),$=a.parentNode.removeChild(a)}catch(n){}J=$=ct=null;o.enabled=F=E=rt=it=b=w=S=o.swfLoaded=!1;o.soundIDs=[];o.sounds={};a=null;for(e in y)if(y.hasOwnProperty(e))for(t=y[e].length-1;0<=t;t--)y[e][t].fired=!1;c.setTimeout(o.beginDelayedInit,20)};this.getMoviePercent=function(){return a&&"PercentLoaded"in a?a.PercentLoaded():null};this.beginDelayedInit=function(){x=!0;B();setTimeout(function(){if(it)return!1;q();H();return it=!0},20);M()};this.destruct=function(){o.disable(!0)};s=function(e){var t,n,r=this,i,s,f,l,c,h,p=!1,d=[],v=0,m,y,b=null;n=t=null;this.sID=this.id=e.id;this.url=e.url;this._iO=this.instanceOptions=this.options=N(e);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(e){var t=null;void 0!==e?r._iO=N(e,r.options):(e=r.options,r._iO=e,b&&b!==r.url&&(r._iO.url=r.url,r.url=null));r._iO.url||(r._iO.url=r.url);r._iO.url=lt(r._iO.url);e=r.instanceOptions=r._iO;if(e.url===r.url&&0!==r.readyState&&2!==r.readyState)return 3===r.readyState&&e.onload&&e.onload.apply(r,[!!r.duration]),r;r.loaded=!1;r.readyState=1;r.playState=0;r.id3={};if(pt(e))t=r._setup_html5(e),t._called_load||(r._html5_canplay=!1,r.url!==e.url&&(r._a.src=e.url,r.setPosition(0)),r._a.autobuffer="auto",r._a.preload="auto",r._a._called_load=!0,e.autoPlay&&r.play());else try{r.isHTML5=!1,r._iO=et(Z(e)),e=r._iO,8===g?a._load(r.id,e.url,e.stream,e.autoPlay,e.usePolicyFile):a._load(r.id,e.url,!!e.stream,!!e.autoPlay,e.loops||1,!!e.autoLoad,e.usePolicyFile)}catch(n){R({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}r.url=e.url;return r};this.unload=function(){0!==r.readyState&&(r.isHTML5?(l(),r._a&&(r._a.pause(),mt(r._a,"about:blank"),b="about:blank")):8===g?a._unload(r.id,"about:blank"):a._unload(r.id),i());return r};this.destruct=function(e){r.isHTML5?(l(),r._a&&(r._a.pause(),mt(r._a),Et||f(),r._a._s=null,r._a=null)):(r._iO.onfailure=null,a._destroySound(r.id));e||o.destroySound(r.id,!0)};this.start=this.play=function(e,t){var n,i;i=!0;i=null;t=void 0===t?!0:t;e||(e={});r.url&&(r._iO.url=r.url);r._iO=N(r._iO,r.options);r._iO=N(e,r._iO);r._iO.url=lt(r._iO.url);r.instanceOptions=r._iO;if(r._iO.serverURL&&!r.connected)return r.getAutoPlay()||r.setAutoPlay(!0),r;pt(r._iO)&&(r._setup_html5(r._iO),c());1===r.playState&&!r.paused&&((n=r._iO.multiShot)||(i=r));if(null!==i)return i;e.url&&e.url!==r.url&&r.load(r._iO);r.loaded||(0===r.readyState?(r.isHTML5||(r._iO.autoPlay=!0),r.load(r._iO),r.instanceOptions=r._iO):2===r.readyState&&(i=r));if(null!==i)return i;!r.isHTML5&&9===g&&0<r.position&&r.position===r.duration&&(e.position=0);if(r.paused&&0<=r.position&&(!r._iO.serverURL||0<r.position))r.resume();else{r._iO=N(e,r._iO);if(null!==r._iO.from&&null!==r._iO.to&&0===r.instanceCount&&0===r.playState&&!r._iO.serverURL){n=function(){r._iO=N(e,r._iO);r.play(r._iO)};if(r.isHTML5&&!r._html5_canplay)r.load({oncanplay:n}),i=!1;else if(!r.isHTML5&&!r.loaded&&(!r.readyState||2!==r.readyState))r.load({onload:n}),i=!1;if(null!==i)return i;r._iO=y()}(!r.instanceCount||r._iO.multiShotEvents||!r.isHTML5&&8<g&&!r.getAutoPlay())&&r.instanceCount++;r._iO.onposition&&0===r.playState&&h(r);r.playState=1;r.paused=!1;r.position=void 0!==r._iO.position&&!isNaN(r._iO.position)?r._iO.position:0;r.isHTML5||(r._iO=et(Z(r._iO)));r._iO.onplay&&t&&(r._iO.onplay.apply(r),p=!0);r.setVolume(r._iO.volume,!0);r.setPan(r._iO.pan,!0);r.isHTML5?(c(),i=r._setup_html5(),r.setPosition(r._iO.position),i.play()):(i=a._start(r.id,r._iO.loops||1,9===g?r._iO.position:r._iO.position/1e3,r._iO.multiShot),9===g&&!i&&r._iO.onplayerror&&r._iO.onplayerror.apply(r))}return r};this.stop=function(e){var t=r._iO;1===r.playState&&(r._onbufferchange(0),r._resetOnPosition(0),r.paused=!1,r.isHTML5||(r.playState=0),m(),t.to&&r.clearOnPosition(t.to),r.isHTML5?r._a&&(e=r.position,r.setPosition(0),r.position=e,r._a.pause(),r.playState=0,r._onTimer(),l()):(a._stop(r.id,e),t.serverURL&&r.unload()),r.instanceCount=0,r._iO={},t.onstop&&t.onstop.apply(r));return r};this.setAutoPlay=function(e){r._iO.autoPlay=e;r.isHTML5||(a._setAutoPlay(r.id,e),e&&!r.instanceCount&&1===r.readyState&&r.instanceCount++)};this.getAutoPlay=function(){return r._iO.autoPlay};this.setPosition=function(e){void 0===e&&(e=0);var t=r.isHTML5?Math.max(e,0):Math.min(r.duration||r._iO.duration,Math.max(e,0));r.position=t;e=r.position/1e3;r._resetOnPosition(r.position);r._iO.position=t;if(r.isHTML5){if(r._a&&r._html5_canplay&&r._a.currentTime!==e)try{r._a.currentTime=e,(0===r.playState||r.paused)&&r._a.pause()}catch(n){}}else e=9===g?r.position:e,r.readyState&&2!==r.readyState&&a._setPosition(r.id,e,r.paused||!r.playState,r._iO.multiShot);r.isHTML5&&r.paused&&r._onTimer(!0);return r};this.pause=function(e){if(r.paused||0===r.playState&&1!==r.readyState)return r;r.paused=!0;r.isHTML5?(r._setup_html5().pause(),l()):(e||void 0===e)&&a._pause(r.id,r._iO.multiShot);r._iO.onpause&&r._iO.onpause.apply(r);return r};this.resume=function(){var e=r._iO;if(!r.paused)return r;r.paused=!1;r.playState=1;r.isHTML5?(r._setup_html5().play(),c()):(e.isMovieStar&&!e.serverURL&&r.setPosition(r.position),a._pause(r.id,e.multiShot));!p&&e.onplay?(e.onplay.apply(r),p=!0):e.onresume&&e.onresume.apply(r);return r};this.togglePause=function(){if(0===r.playState)return r.play({position:9===g&&!r.isHTML5?r.position:r.position/1e3}),r;r.paused?r.resume():r.pause();return r};this.setPan=function(e,t){void 0===e&&(e=0);void 0===t&&(t=!1);r.isHTML5||a._setPan(r.id,e);r._iO.pan=e;t||(r.pan=e,r.options.pan=e);return r};this.setVolume=function(e,t){void 0===e&&(e=100);void 0===t&&(t=!1);r.isHTML5?r._a&&(r._a.volume=Math.max(0,Math.min(1,e/100))):a._setVolume(r.id,o.muted&&!r.muted||r.muted?0:e);r._iO.volume=e;t||(r.volume=e,r.options.volume=e);return r};this.mute=function(){r.muted=!0;r.isHTML5?r._a&&(r._a.muted=!0):a._setVolume(r.id,0);return r};this.unmute=function(){r.muted=!1;var e=void 0!==r._iO.volume;r.isHTML5?r._a&&(r._a.muted=!1):a._setVolume(r.id,e?r._iO.volume:r.options.volume);return r};this.toggleMute=function(){return r.muted?r.unmute():r.mute()};this.onposition=this.onPosition=function(e,t,n){d.push({position:parseInt(e,10),method:t,scope:void 0!==n?n:r,fired:!1});return r};this.clearOnPosition=function(e,t){var n,e=parseInt(e,10);if(isNaN(e))return!1;for(n=0;n<d.length;n++)if(e===d[n].position&&(!t||t===d[n].method))d[n].fired&&v--,d.splice(n,1)};this._processOnPosition=function(){var e,t;e=d.length;if(!e||!r.playState||v>=e)return!1;for(e-=1;0<=e;e--)t=d[e],!t.fired&&r.position>=t.position&&(t.fired=!0,v++,t.method.apply(t.scope,[t.position]));return!0};this._resetOnPosition=function(e){var t,n;t=d.length;if(!t)return!1;for(t-=1;0<=t;t--)n=d[t],n.fired&&e<=n.position&&(n.fired=!1,v--);return!0};y=function(){var e=r._iO,t=e.from,n=e.to,i,s;s=function(){r.clearOnPosition(n,s);r.stop()};i=function(){if(null!==n&&!isNaN(n))r.onPosition(n,s)};null!==t&&!isNaN(t)&&(e.position=t,e.multiShot=!1,i());return e};h=function(){var e,t=r._iO.onposition;if(t)for(e in t)if(t.hasOwnProperty(e))r.onPosition(parseInt(e,10),t[e])};m=function(){var e,t=r._iO.onposition;if(t)for(e in t)t.hasOwnProperty(e)&&r.clearOnPosition(parseInt(e,10))};c=function(){r.isHTML5&&st(r)};l=function(){r.isHTML5&&ot(r)};i=function(e){e||(d=[],v=0);p=!1;r._hasTimer=null;r._a=null;r._html5_canplay=!1;r.bytesLoaded=null;r.bytesTotal=null;r.duration=r._iO&&r._iO.duration?r._iO.duration:null;r.durationEstimate=null;r.buffered=[];r.eqData=[];r.eqData.left=[];r.eqData.right=[];r.failures=0;r.isBuffering=!1;r.instanceOptions={};r.instanceCount=0;r.loaded=!1;r.metadata={};r.readyState=0;r.muted=!1;r.paused=!1;r.peakData={left:0,right:0};r.waveformData={left:[],right:[]};r.playState=0;r.position=null;r.id3={}};i();this._onTimer=function(e){var i,s=!1,o={};if(r._hasTimer||e){if(r._a&&(e||(0<r.playState||1===r.readyState)&&!r.paused))i=r._get_html5_duration(),i!==t&&(t=i,r.duration=i,s=!0),r.durationEstimate=r.duration,i=1e3*r._a.currentTime||0,i!==n&&(n=i,s=!0),(s||e)&&r._whileplaying(i,o,o,o,o);return s}};this._get_html5_duration=function(){var e=r._iO;return(e=r._a&&r._a.duration?1e3*r._a.duration:e&&e.duration?e.duration:null)&&!isNaN(e)&&Infinity!==e?e:null};this._apply_loop=function(e,t){e.loop=1<t?"loop":""};this._setup_html5=function(e){var e=N(r._iO,e),t=decodeURI,n=Et?u:r._a,o=t(e.url),a;Et?o===St&&(a=!0):o===b&&(a=!0);if(n){if(n._s)if(Et)n._s&&n._s.playState&&!a&&n._s.stop();else if(!Et&&o===t(b))return r._apply_loop(n,e.loops),n;a||(i(!1),n.src=e.url,St=b=r.url=e.url,n._called_load=!1)}else r._a=e.autoLoad||e.autoPlay?new Audio(e.url):_t&&10>opera.version()?new Audio(null):new Audio,n=r._a,n._called_load=!1,Et&&(u=n);r.isHTML5=!0;r._a=n;n._s=r;s();r._apply_loop(n,e.loops);e.autoLoad||e.autoPlay?r.load():(n.autobuffer=!1,n.preload="auto");return n};s=function(){if(r._a._added_events)return!1;var e;r._a._added_events=!0;for(e in Ct)Ct.hasOwnProperty(e)&&r._a&&r._a.addEventListener(e,Ct[e],!1);return!0};f=function(){var e;r._a._added_events=!1;for(e in Ct)Ct.hasOwnProperty(e)&&r._a&&r._a.removeEventListener(e,Ct[e],!1)};this._onload=function(e){e=!!e||!r.isHTML5&&8===g&&r.duration;r.loaded=e;r.readyState=e?3:2;r._onbufferchange(0);r._iO.onload&&r._iO.onload.apply(r,[e]);return!0};this._onbufferchange=function(e){if(0===r.playState||e&&r.isBuffering||!e&&!r.isBuffering)return!1;r.isBuffering=1===e;r._iO.onbufferchange&&r._iO.onbufferchange.apply(r);return!0};this._onsuspend=function(){r._iO.onsuspend&&r._iO.onsuspend.apply(r);return!0};this._onfailure=function(e,t,n){r.failures++;if(r._iO.onfailure&&1===r.failures)r._iO.onfailure(r,e,t,n)};this._onfinish=function(){var e=r._iO.onfinish;r._onbufferchange(0);r._resetOnPosition(0);r.instanceCount&&(r.instanceCount--,r.instanceCount||(m(),r.playState=0,r.paused=!1,r.instanceCount=0,r.instanceOptions={},r._iO={},l(),r.isHTML5&&(r.position=0)),(!r.instanceCount||r._iO.multiShotEvents)&&e&&e.apply(r))};this._whileloading=function(e,t,n,i){var s=r._iO;r.bytesLoaded=e;r.bytesTotal=t;r.duration=Math.floor(n);r.bufferLength=i;r.durationEstimate=!r.isHTML5&&!s.isMovieStar?s.duration?r.duration>s.duration?r.duration:s.duration:parseInt(r.bytesTotal/r.bytesLoaded*r.duration,10):r.duration;r.isHTML5||(r.buffered=[{start:0,end:r.duration}]);(3!==r.readyState||r.isHTML5)&&s.whileloading&&s.whileloading.apply(r)};this._whileplaying=function(e,t,n,i,s){var o=r._iO;if(isNaN(e)||null===e)return!1;r.position=Math.max(0,e);r._processOnPosition();!r.isHTML5&&8<g&&(o.usePeakData&&void 0!==t&&t&&(r.peakData={left:t.leftPeak,right:t.rightPeak}),o.useWaveformData&&void 0!==n&&n&&(r.waveformData={left:n.split(","),right:i.split(",")}),o.useEQData&&void 0!==s&&s&&s.leftEQ&&(e=s.leftEQ.split(","),r.eqData=e,r.eqData.left=e,void 0!==s.rightEQ&&s.rightEQ&&(r.eqData.right=s.rightEQ.split(","))));1===r.playState&&(!r.isHTML5&&8===g&&!r.position&&r.isBuffering&&r._onbufferchange(0),o.whileplaying&&o.whileplaying.apply(r));return!0};this._oncaptiondata=function(e){r.captiondata=e;r._iO.oncaptiondata&&r._iO.oncaptiondata.apply(r,[e])};this._onmetadata=function(e,t){var n={},i,s;i=0;for(s=e.length;i<s;i++)n[e[i]]=t[i];r.metadata=n;r._iO.onmetadata&&r._iO.onmetadata.apply(r)};this._onid3=function(e,t){var n=[],i,s;i=0;for(s=e.length;i<s;i++)n[e[i]]=t[i];r.id3=N(r.id3,n);r._iO.onid3&&r._iO.onid3.apply(r)};this._onconnect=function(e){e=1===e;if(r.connected=e)r.failures=0,nt(r.id)&&(r.getAutoPlay()?r.play(void 0,r.getAutoPlay()):r._iO.autoLoad&&r.load()),r._iO.onconnect&&r._iO.onconnect.apply(r,[e])};this._ondataerror=function(){0<r.playState&&r._iO.ondataerror&&r._iO.ondataerror.apply(r)}};I=function(){return p.body||p._docElement||p.getElementsByTagName("div")[0]};f=function(e){return p.getElementById(e)};N=function(e,t){var n=e||{},r,i;r=void 0===t?o.defaultOptions:t;for(i in r)r.hasOwnProperty(i)&&void 0===n[i]&&(n[i]="object"!==typeof r[i]||null===r[i]?r[i]:N(n[i],r[i]));return n};k={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};C=function(e,t){var n,r=!0,i=void 0!==t,s=o.setupOptions;for(n in e)if(e.hasOwnProperty(n))if("object"!==typeof e[n]||null===e[n]||e[n]instanceof Array)i&&void 0!==k[t]?o[t][n]=e[n]:void 0!==s[n]?(o.setupOptions[n]=e[n],o[n]=e[n]):void 0===k[n]?(tt(K(void 0===o[n]?"setupUndef":"setupError",n),2),r=!1):o[n]instanceof Function?o[n].apply(o,e[n]instanceof Array?e[n]:[e[n]]):o[n]=e[n];else if(void 0===k[n])tt(K(void 0===o[n]?"setupUndef":"setupError",n),2),r=!1;else return C(e[n],n);return r};var Vt=function(e){var e=wt.call(e),t=e.length;Jt?(e[1]="on"+e[1],3<t&&e.pop()):3===t&&e.push(!1);return e},$t=function(e,t){var n=e.shift(),r=[Kt[t]];if(Jt)n[r](e[0],e[1]);else n[r].apply(n,e)},Jt=c.attachEvent,Kt={add:Jt?"attachEvent":"addEventListener",remove:Jt?"detachEvent":"removeEventListener"};bt={add:function(){$t(Vt(arguments),"add")},remove:function(){$t(Vt(arguments),"remove")}};Ct={abort:i(function(){}),canplay:i(function(){var e=this._s,t;if(e._html5_canplay)return!0;e._html5_canplay=!0;e._onbufferchange(0);t=void 0!==e._iO.position&&!isNaN(e._iO.position)?e._iO.position/1e3:null;if(e.position&&this.currentTime!==t)try{this.currentTime=t}catch(n){}e._iO._oncanplay&&e._iO._oncanplay()}),canplaythrough:i(function(){var e=this._s;e.loaded||(e._onbufferchange(0),e._whileloading(e.bytesLoaded,e.bytesTotal,e._get_html5_duration()),e._onload(!0))}),ended:i(function(){this._s._onfinish()}),error:i(function(){this._s._onload(!1)}),loadeddata:i(function(){var e=this._s;!e._loaded&&!Mt&&(e.duration=e._get_html5_duration())}),loadedmetadata:i(function(){}),loadstart:i(function(){this._s._onbufferchange(1)}),play:i(function(){this._s._onbufferchange(0)}),playing:i(function(){this._s._onbufferchange(0)}),progress:i(function(e){var t=this._s,n,r,i=0,i=e.target.buffered;n=e.loaded||0;var s=e.total||1;t.buffered=[];if(i&&i.length){n=0;for(r=i.length;n<r;n++)t.buffered.push({start:1e3*i.start(n),end:1e3*i.end(n)});i=1e3*(i.end(0)-i.start(0));n=i/(1e3*e.target.duration)}isNaN(n)||(t._onbufferchange(0),t._whileloading(n,s,t._get_html5_duration()),n&&s&&n===s&&Ct.canplaythrough.call(this,e))}),ratechange:i(function(){}),suspend:i(function(e){var t=this._s;Ct.progress.call(this,e);t._onsuspend()}),stalled:i(function(){}),timeupdate:i(function(){this._s._onTimer()}),waiting:i(function(){this._s._onbufferchange(1)})};pt=function(e){return e.serverURL||e.type&&r(e.type)?!1:e.type?dt({type:e.type}):dt({url:e.url})||o.html5Only};mt=function(e,t){e&&(e.src=t)};dt=function(e){if(!o.useHTML5Audio||!o.hasHTML5)return!1;var t=e.url||null,e=e.type||null,n=o.audioFormats,i;if(e&&void 0!==o.html5[e])return o.html5[e]&&!r(e);if(!vt){vt=[];for(i in n)n.hasOwnProperty(i)&&(vt.push(i),n[i].related&&(vt=vt.concat(n[i].related)));vt=RegExp("\\.("+vt.join("|")+")(\\?.*)?$","i")}i=t?t.toLowerCase().match(vt):null;!i||!i.length?e&&(t=e.indexOf(";"),i=(-1!==t?e.substr(0,t):e).substr(6)):i=i[1];i&&void 0!==o.html5[i]?t=o.html5[i]&&!r(i):(e="audio/"+i,t=o.html5.canPlayType({type:e}),t=(o.html5[i]=t)&&o.html5[e]&&!r(e));return t};yt=function(){function e(e){var n,r,i=n=!1;if(!t||"function"!==typeof t.canPlayType)return n;if(e instanceof Array){n=0;for(r=e.length;n<r;n++)if(o.html5[e[n]]||t.canPlayType(e[n]).match(o.html5Test))i=!0,o.html5[e[n]]=!0,o.flash[e[n]]=!!e[n].match(Ft);n=i}else e=t&&"function"===typeof t.canPlayType?t.canPlayType(e):!1,n=!(!e||!e.match(o.html5Test));return n}if(!o.useHTML5Audio||!o.hasHTML5)return!1;var t=void 0!==Audio?_t&&10>opera.version()?new Audio(null):new Audio:null,n,r,i={},s;s=o.audioFormats;for(n in s)if(s.hasOwnProperty(n)&&(r="audio/"+n,i[n]=e(s[n].type),i[r]=i[n],n.match(Ft)?(o.flash[n]=!0,o.flash[r]=!0):(o.flash[n]=!1,o.flash[r]=!1),s[n]&&s[n].related))for(r=s[n].related.length-1;0<=r;r--)i["audio/"+s[n].related[r]]=i[n],o.html5[s[n].related[r]]=i[n],o.flash[s[n].related[r]]=i[n];i.canPlayType=t?e:null;o.html5=N(o.html5,i);return!0};K=function(){};Z=function(e){8===g&&1<e.loops&&e.stream&&(e.stream=!1);return e};et=function(e){if(e&&!e.usePolicyFile&&(e.onid3||e.usePeakData||e.useWaveformData||e.useEQData))e.usePolicyFile=!0;return e};tt=function(){};d=function(){return!1};W=function(e){for(var t in e)e.hasOwnProperty(t)&&"function"===typeof e[t]&&(e[t]=d)};X=function(e){void 0===e&&(e=!1);(S||e)&&o.disable(e)};V=function(e){var t=null;if(e)if(e.match(/\.swf(\?.*)?$/i)){if(t=e.substr(e.toLowerCase().lastIndexOf(".swf?")+4))return e}else e.lastIndexOf("/")!==e.length-1&&(e+="/");e=(e&&-1!==e.lastIndexOf("/")?e.substr(0,e.lastIndexOf("/")+1):"./")+o.movieURL;o.noSWFCache&&(e+="?ts="+(new Date).getTime());return e};D=function(){g=parseInt(o.flashVersion,10);8!==g&&9!==g&&(o.flashVersion=g=8);var e=o.debugMode||o.debugFlash?"_debug.swf":".swf";o.useHTML5Audio&&!o.html5Only&&o.audioFormats.mp4.required&&9>g&&(o.flashVersion=g=9);o.version=o.versionNumber+(o.html5Only?" (HTML5-only mode)":9===g?" (AS3/Flash 9)":" (AS2/Flash 8)");8<g?(o.defaultOptions=N(o.defaultOptions,o.flash9Options),o.features.buffering=!0,o.defaultOptions=N(o.defaultOptions,o.movieStarOptions),o.filePatterns.flash9=RegExp("\\.(mp3|"+Ut.join("|")+")(\\?.*)?$","i"),o.features.movieStar=!0):o.features.movieStar=!1;o.filePattern=o.filePatterns[8!==g?"flash9":"flash8"];o.movieURL=(8===g?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",e);o.features.peakData=o.features.waveformData=o.features.eqData=8<g};U=function(e,t){if(!a)return!1;a._setPolling(e,t)};z=function(){o.debugURLParam.test(h)&&(o.debugMode=!0)};nt=this.getSoundById;Y=function(){var e=[];o.debugMode&&e.push("sm2_debug");o.debugFlash&&e.push("flash_debug");o.useHighPerformance&&e.push("high_performance");return e.join(" ")};G=function(){K("fbHandler");var e=o.getMoviePercent(),t={type:"FLASHBLOCK"};if(o.html5Only)return!1;o.ok()?o.oMC&&(o.oMC.className=[Y(),"movieContainer","swf_loaded"+(o.didFlashBlock?" swf_unblocked":"")].join(" ")):(ct&&(o.oMC.className=Y()+" movieContainer "+(null===e?"swf_timedout":"swf_error")),o.didFlashBlock=!0,A({type:"ontimeout",ignoreInit:!0,error:t}),R(t))};L=function(e,t,n){void 0===y[e]&&(y[e]=[]);y[e].push({method:t,scope:n||null,fired:!1})};A=function(e){e||(e={type:o.ok()?"onready":"ontimeout"});if(!E&&e&&!e.ignoreInit||"ontimeout"===e.type&&(o.ok()||S&&!e.ignoreInit))return!1;var t={success:e&&e.ignoreInit?o.ok():!S},n=e&&e.type?y[e.type]||[]:[],r=[],i,t=[t],s=ct&&o.useFlashBlock&&!o.ok();e.error&&(t[0].error=e.error);e=0;for(i=n.length;e<i;e++)!0!==n[e].fired&&r.push(n[e]);if(r.length){e=0;for(i=r.length;e<i;e++)r[e].scope?r[e].method.apply(r[e].scope,t):r[e].method.apply(this,t),s||(r[e].fired=!0)}return!0};O=function(){c.setTimeout(function(){o.useFlashBlock&&G();A();"function"===typeof o.onload&&o.onload.apply(c);o.waitForWindowLoad&&bt.add(c,"load",O)},1)};Tt=function(){if(void 0!==xt)return xt;var e=!1,t=navigator,n=t.plugins,r,i=c.ActiveXObject;if(n&&n.length)(t=t.mimeTypes)&&t["application/x-shockwave-flash"]&&t["application/x-shockwave-flash"].enabledPlugin&&t["application/x-shockwave-flash"].enabledPlugin.description&&(e=!0);else if(void 0!==i&&!l.match(/MSAppHost/i)){try{r=new i("ShockwaveFlash.ShockwaveFlash")}catch(s){}e=!!r}return xt=e};ht=function(){var e,t,n=o.audioFormats;if(Lt&&l.match(/os (1|2|3_0|3_1)/i))o.hasHTML5=!1,o.html5Only=!0,o.oMC&&(o.oMC.style.display="none");else if(o.useHTML5Audio&&(!o.html5||!o.html5.canPlayType))o.hasHTML5=!1;if(o.useHTML5Audio&&o.hasHTML5)for(t in n)if(n.hasOwnProperty(t)&&(n[t].required&&!o.html5.canPlayType(n[t].type)||o.preferFlash&&(o.flash[t]||o.flash[n[t].type])))e=!0;o.ignoreFlash&&(e=!1);o.html5Only=o.hasHTML5&&o.useHTML5Audio&&!e;return!o.html5Only};lt=function(e){var t,n,r=0;if(e instanceof Array){t=0;for(n=e.length;t<n;t++)if(e[t]instanceof Object){if(o.canPlayMIME(e[t].type)){r=t;break}}else if(o.canPlayURL(e[t])){r=t;break}e[r].url&&(e[r]=e[r].url);e=e[r]}return e};st=function(e){e._hasTimer||(e._hasTimer=!0,!Dt&&o.html5PollingInterval&&(null===ft&&0===at&&(ft=c.setInterval(ut,o.html5PollingInterval)),at++))};ot=function(e){e._hasTimer&&(e._hasTimer=!1,!Dt&&o.html5PollingInterval&&at--)};ut=function(){var e;if(null!==ft&&!at)return c.clearInterval(ft),ft=null,!1;for(e=o.soundIDs.length-1;0<=e;e--)o.sounds[o.soundIDs[e]].isHTML5&&o.sounds[o.soundIDs[e]]._hasTimer&&o.sounds[o.soundIDs[e]]._onTimer()};R=function(e){e=void 0!==e?e:{};"function"===typeof o.onerror&&o.onerror.apply(c,[{type:void 0!==e.type?e.type:null}]);void 0!==e.fatal&&e.fatal&&o.disable()};Nt=function(){if(!Pt||!Tt())return!1;var e=o.audioFormats,t,n;for(n in e)if(e.hasOwnProperty(n)&&("mp3"===n||"mp4"===n))if(o.html5[n]=!1,e[n]&&e[n].related)for(t=e[n].related.length-1;0<=t;t--)o.html5[e[n].related[t]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(o.swfLoaded)return!1;(new Date).getTime();o.swfLoaded=!0;Bt=!1;Pt&&Nt();setTimeout(m,At?100:1)};q=function(e,t){function n(e,t){return'<param name="'+e+'" value="'+t+'" />'}if(b&&w)return!1;if(o.html5Only)return D(),o.oMC=f(o.movieID),m(),w=b=!0,!1;var r=t||o.url,i=o.altURL||r,s=I(),u=Y(),a=null,a=p.getElementsByTagName("html")[0],c,h,d,a=a&&a.dir&&a.dir.match(/rtl/i),e=void 0===e?o.id:e;D();o.url=V(It?r:i);t=o.url;o.wmode=!o.wmode&&o.useHighPerformance?"transparent":o.wmode;if(null!==o.wmode&&(l.match(/msie 8/i)||!At&&!o.useHighPerformance)&&navigator.platform.match(/win32|win64/i))o.wmode=null;s={name:e,id:e,src:t,quality:"high",allowScriptAccess:o.allowScriptAccess,bgcolor:o.bgColor,pluginspage:qt+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:o.wmode,hasPriority:"true"};o.debugFlash&&(s.FlashVars="debug=1");o.wmode||delete s.wmode;if(At)r=p.createElement("div"),h=['<object id="'+e+'" data="'+t+'" type="'+s.type+'" title="'+s.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+qt+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',n("movie",t),n("AllowScriptAccess",o.allowScriptAccess),n("quality",s.quality),o.wmode?n("wmode",o.wmode):"",n("bgcolor",o.bgColor),n("hasPriority","true"),o.debugFlash?n("FlashVars",s.FlashVars):"","</object>"].join("");else for(c in r=p.createElement("embed"),s)s.hasOwnProperty(c)&&r.setAttribute(c,s[c]);z();u=Y();if(s=I())if(o.oMC=f(o.movieID)||p.createElement("div"),o.oMC.id)d=o.oMC.className,o.oMC.className=(d?d+" ":"movieContainer")+(u?" "+u:""),o.oMC.appendChild(r),At&&(c=o.oMC.appendChild(p.createElement("div")),c.className="sm2-object-box",c.innerHTML=h),w=!0;else{o.oMC.id=o.movieID;o.oMC.className="movieContainer "+u;c=u=null;o.useFlashBlock||(o.useHighPerformance?u={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(u={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},a&&(u.left=Math.abs(parseInt(u.left,10))+"px")));Ot&&(o.oMC.style.zIndex=1e4);if(!o.debugFlash)for(d in u)u.hasOwnProperty(d)&&(o.oMC.style[d]=u[d]);try{At||o.oMC.appendChild(r),s.appendChild(o.oMC),At&&(c=o.oMC.appendChild(p.createElement("div")),c.className="sm2-object-box",c.innerHTML=h),w=!0}catch(v){throw Error(K("domError")+" \n"+v.toString())}}return b=!0};H=function(){if(o.html5Only)return q(),!1;if(a||!o.url)return!1;a=o.getMovie(o.id);a||($?(At?o.oMC.innerHTML=J:o.oMC.appendChild($),$=null,b=!0):q(o.id,o.url),a=o.getMovie(o.id));"function"===typeof o.oninitmovie&&setTimeout(o.oninitmovie,1);return!0};M=function(){setTimeout(_,1e3)};_=function(){var e,t=!1;if(!o.url||rt)return!1;rt=!0;bt.remove(c,"load",M);if(Bt&&!Ht)return!1;E||(e=o.getMoviePercent(),0<e&&100>e&&(t=!0));setTimeout(function(){e=o.getMoviePercent();if(t)return rt=!1,c.setTimeout(M,1),!1;!E&&jt&&(null===e?o.useFlashBlock||0===o.flashLoadTimeout?o.useFlashBlock&&G():X(!0):0!==o.flashLoadTimeout&&X(!0))},o.flashLoadTimeout)};P=function(){if(Ht||!Bt)return bt.remove(c,"focus",P),!0;Ht=jt=!0;rt=!1;M();bt.remove(c,"focus",P);return!0};kt=function(){};T=function(e){if(E)return!1;if(o.html5Only)return E=!0,O(),!0;var t=!0,n;if(!o.useFlashBlock||!o.flashLoadTimeout||o.getMoviePercent())E=!0,S&&(n={type:!xt&&ct?"NO_FLASH":"INIT_TIMEOUT"});if(S||e)o.useFlashBlock&&o.oMC&&(o.oMC.className=Y()+" "+(null===o.getMoviePercent()?"swf_timedout":"swf_error")),A({type:"ontimeout",error:n,ignoreInit:!0}),R(n),t=!1;S||(o.waitForWindowLoad&&!x?bt.add(c,"load",O):O());return t};v=function(){var e,t=o.setupOptions;for(e in t)t.hasOwnProperty(e)&&(void 0===o[e]?o[e]=t[e]:o[e]!==t[e]&&(o.setupOptions[e]=o[e]))};m=function(){if(E)return!1;if(o.html5Only)return E||(bt.remove(c,"load",o.beginDelayedInit),o.enabled=!0,T()),!0;H();try{a._externalInterfaceTest(!1),U(!0,o.flashPollingInterval||(o.useHighPerformance?10:50)),o.debugMode||a._disableDebug(),o.enabled=!0,o.html5Only||bt.add(c,"unload",d)}catch(e){return R({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),X(!0),T(),!1}T();bt.remove(c,"load",o.beginDelayedInit);return!0};B=function(){if(F)return!1;F=!0;v();z();!xt&&o.hasHTML5&&o.setup({useHTML5Audio:!0,preferFlash:!1});yt();o.html5.usingFlash=ht();ct=o.html5.usingFlash;kt();!xt&&ct&&o.setup({flashLoadTimeout:1});p.removeEventListener&&p.removeEventListener("DOMContentLoaded",B,!1);H();return!0};gt=function(){"complete"===p.readyState&&(B(),p.detachEvent("onreadystatechange",gt));return!0};j=function(){x=!0;bt.remove(c,"load",j)};Tt();bt.add(c,"focus",P);bt.add(c,"load",M);bt.add(c,"load",j);p.addEventListener?p.addEventListener("DOMContentLoaded",B,!1):p.attachEvent?p.attachEvent("onreadystatechange",gt):R({type:"NO_DOM2_EVENTS",fatal:!0})}var n=null;if(void 0===e.SM2_DEFER||!SM2_DEFER)n=new t;e.SoundManager=t;e.soundManager=n})(window);(function(e){e.fn.dcSlick=function(t){var n={classWrapper:"dc-slick",classContent:"dc-slick-content",width:260,idWrapper:"dc-slick-9",location:"left",align:"top",offset:"100px",speed:"slow",tabText:"Click",classTab:"tab",classOpen:"slick-open",classClose:"slick-close",classToggle:"slick-toggle",autoClose:true};var t=e.extend(n,t);var r=this;return r.each(function(t){function i(t){var r=e("."+n.classContent,t);var i=v.css("border-top-width");var s=v.css("border-right-width");var o=v.css("border-bottom-width");var u=v.css("border-left-width");var f=m.outerWidth(true);var l=f+"px";var h=m.outerHeight(true);var p=h+"px";var d=r.height();var g=r.outerHeight(true)-d;var y=C-h;e(t).addClass(n.location).addClass("align-"+n.align).css({position:"fixed",zIndex:1e4});if(x>y){d=y-T-g;N=y+"px"}r.css({height:d+"px"});if(n.location=="left"){e(t).css({marginLeft:"-"+S});m.css({marginRight:"-"+l});e(t).css({top:n.offset})}if(n.location=="right"){e(t).css({marginRight:"-"+S});m.css({marginLeft:"-"+l});e(t).css({top:n.offset})}if(n.location=="top"){e(t).css({marginTop:"-"+N});m.css({marginBottom:"-"+p});if(n.align=="left"){e(t).css({left:n.offset});m.css({left:0})}else{e(t).css({right:n.offset});m.css({right:0})}}if(n.location=="bottom"){e(t).css({marginBottom:"-"+N});m.css({marginTop:"-"+p});if(n.align=="left"){e(t).css({left:n.offset});m.css({left:0})}else{e(t).css({right:n.offset});m.css({right:0})}}}function s(){v.css({zIndex:1e4});if(v.hasClass("active")){if(n.location=="bottom"){v.animate({marginBottom:"-"+N},n.speed)}if(n.location=="top"){v.animate({marginTop:"-"+N},n.speed)}if(n.location=="left"){v.animate({marginLeft:"-"+S},n.speed)}if(n.location=="right"){v.animate({marginRight:"-"+S},n.speed)}v.removeClass("active")}}function o(){e("."+n.classWrapper).css({zIndex:1e4});v.css({zIndex:10001});if(n.location=="bottom"){v.animate({marginBottom:"-=5px"},"fast").animate({marginBottom:0},n.speed)}if(n.location=="top"){v.animate({marginTop:"-=5px"},"fast").animate({marginTop:0},n.speed)}if(n.location=="left"){v.animate({marginLeft:"-=5px"},"fast").animate({marginLeft:0},n.speed)}if(n.location=="right"){v.animate({marginRight:"-=5px"},"fast").animate({marginRight:0},n.speed)}v.addClass("active")}var u=r.html();r.css("float","left");var f=r.width();var l='<div class="'+n.classTab+'"><span>'+n.tabText+"</span></div>";e(this).remove();var h=n.idWrapper;var p='<div id="'+h+'" class="'+n.classWrapper+'">'+l+'<div class="'+n.classContent+'">'+u+"</div></div>";e("body").append(p);var v=e("#"+h);var m=e("."+n.classTab,v);m.css({position:"absolute"});var g=e("."+n.classOpen);var y=e("."+n.classClose);var b=e("."+n.classToggle);var w=v.height();var E=v.outerWidth();var S=E+"px";var x=v.outerHeight();var T=x-w;var N=x+"px";var C=e(window).height();i(v);if(n.autoClose==true){e("body").mouseup(function(t){if(v.hasClass("active")){if(!e(t.target).parents("#"+n.idWrapper+"."+n.classWrapper).length){if(!(e(t.target).hasClass(n.classOpen)||e(t.target).hasClass(n.classToggle))){s();FreiChat.frei_tab_click()}}}})}m.click(function(){if(v.hasClass("active")){s()}else{o()}});e(g).click(function(e){o();e.preventDefault()});e(y).click(function(e){if(v.hasClass("active")){s()}e.preventDefault()});e(b).click(function(e){if(v.hasClass("active")){s()}else{o()}e.preventDefault()})})}})(jQuery);(function(e){e.fn.dragx=function(t){var n={repos:false,draggable:true,containment:"document",scroll:false,handle:this,stack:this,animate:true,id:freichatusers,restore:false,restoreElem:"#frei_",speed:500,right:"0px"};var r=e.extend(n,t);r.handle="#chatboxhead_"+r.id;var i=e(this);var s=Get_Cookie("frei_stat_"+r.id);if(s!=null){s=s.split("&")}else{s=new Array("en","closed","max","clear",null,null)}if(r.draggable==true){i.draggable();i.draggable({stop:function(e,t){var n=i.offset().top-$jn(window).scrollTop();if(r.animate==true){if(n<0){i.animate({top:"0px"},r.speed,function(){Set_Cookie("frei_stat_"+r.id,s[0]+"&"+s[1]+"&"+s[2]+"&"+s[3]+"&"+n+"&"+i.offset().left)})}else if(n>400){i.css("top","auto");i.animate({bottom:"0px"},r.speed,function(){Set_Cookie("frei_stat_"+r.id,s[0]+"&"+s[1]+"&"+s[2]+"&"+s[3]+"&"+n+"&"+i.offset().left)})}else{Set_Cookie("frei_stat_"+r.id,s[0]+"&"+s[1]+"&"+s[2]+"&"+s[3]+"&"+n+"&"+i.offset().left)}}}},{containment:r.containment},{scroll:r.scroll},{handle:r.handle},{cursor:"move"})}else{i.draggable("disable")}if(r.repos==true){if(s[4]!=0&&s[5]!=0)i.css({top:s[4]+"px",left:s[5]+"px"})}if(r.restore==true){i.css({top:"auto",left:"auto"});i.animate({bottom:"0px",right:r.right},r.speed,function(){})}return i}})(jQuery)//------------------------------------------------------------------------------
/* Chatroom font formatter plugin */

FreiChat.util = {
    storage: {
        get: function(index) {

            if (typeof Storage !== "undefined") {
                localStorage.getItem(index);
            } else {
                Get_Cookie(index);
            }
        },
        set: function(index, value) {

            if (typeof Storage !== "undefined") {
                localStorage.setItem(index, value);
            } else {
                Set_Cookie(index, value);
            }

        }

    }
};



FreiChat.plugins = {
    formatter: {
        id: "frei_chatroom_formatter_plugin",
        color: null,
        get_html: function() {

            var ident = this.id;
            var wrapper = '<div onclick="FreiChat.plugins.formatter.show_html()" id="' + ident + '" class="' + ident + '" > ';

            var body = '';

            var sel = '<div class="cp-default" id="frei_chatroom_cp"><div id="frei_chatroom_cp_content"></div></div>';
            var end = '</div>';

            return wrapper + body + end + sel;

        },
        load: function() {

            this.color = this.get_color();
            this.cp = $jn("#" + this.id);

            $jn("#frei_chatroom_cp_content").spectrum({
                color: this.color,
                showPaletteOnly: true,
                showPalette: true,
                palette: [
                    ['rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(0, 0, 85)',
                        'rgb(0, 128, 0)', 'rgb(255, 0, 0)'],
                    ['rgb(128, 0, 0)', 'rgb(128, 0, 128)', 'rgb(255, 85, 0)',
                        'rgb(255, 255, 0)', 'rgb(0, 255, 0)'],
                    ['rgb(0, 128, 128)', 'rgb(0, 255, 255)', 'rgb(0, 0, 255)',
                        'rgb(255, 0, 255)', 'grey'],
                ], flat: true,
                change: function(tcolor) {
                    FreiChat.plugins.formatter.change_clr(tcolor);
                }

            });

            this.cp.css("background", this.color);
            $jn('#chatroommessagearea').css("color", this.color);
        },
        change_clr: function(color) {

            var rgba = color.toHexString();
            this.cp.css("background", rgba);
            this.set_color(rgba);

        },
        show_html: function() {

            $jn("#frei_chatroom_cp").show();
        },
        get_color: function() {

            return Get_Cookie('selected_chatroom_color');
        },
        set_color: function(color) {

            Set_Cookie('selected_chatroom_color', color);
            this.color = color;
            $jn('#chatroommessagearea').css("color", color);
        },
        formatBB: function(message) {

            if (this.color !== "#808080" || this.color !== "grey") {

                message = "[color=" + this.color + "]" + message + "[/color]";
            }

            return message;
        },
        format: function(message) {

            if (this.color !== "#808080" || this.color !== "grey") {

                message = "<span style='color:" + this.color + "'>" + message + "</span>";
            }

            return message;

        }
    },
    is_allowed: function(index) {

        var guests = (freidefines.GEN.is_guest == 1 && freidefines.ACL[index].guest == "allow");
        var users = (freidefines.GEN.is_guest == 0 && freidefines.ACL[index].user == "allow");

        return (guests || users);
    }
};

/*  The SMILEY plugin !*/
FreiChat.smiley = function(id)
{

    if (id == FreiChat.in_room) {
        id = "chatroom";
    }

    FreiChat.current_smiley_selected = id;

    var smileys = $jn('#frei_smileys_' + id);
    smileys.slideToggle();
};
//------------------------------------------------------------------------------
FreiChat.smileylist = function(id)
{
    var smileys = freidefines.smileys;

    var i = 0;

    var sm_array = [];

    for (i = 0; i < smileys.length; i++) {
        sm_array[i] = smileys[i].symbol;
    }

    var str;

    /*
     if(freidefines.thememaker == true) {
     str= '<span class="smileylist">'+FreiChat.mksmileyurl([':)',':(',':B',':\')',':laugh:',':cheer:',';)',':P',':angry:',':unsure:',':ohmy:',':huh:',':dry:',':lol:',':silly:',':woohoo:'], id)+'</span>';
     }else{
     str= '<span class="smileylist">'+FreiChat.mksmileyurl([':)',':(',':B',':\')',':laugh:',':cheer:',';)',':P',':angry:',':unsure:',':ohmy:',':huh:',':o',':0',':dry:',':lol:',':D',':silly:',':woohoo:'], id)+'</span>';
     }*/


    str = '<span class="smileylist">' + FreiChat.mksmileyurl(sm_array, id) + '</span>';


    return str;

};
//------------------------------------------------------------------------------
FreiChat.mksmileyurl = function(name, id)
{
    var namelen = name.length;
    var i = 0;
    var str = '<tr>';
    var j = 0;

    for (i = 0; i <= namelen; i++)
    {
        if (name[i] == null || name[i] == undefined)
        {
            break;
        }

        if (j >= 5)
        {
            str += '</tr><tr>';
            j = 0;
        }

        var action;

        if (freidefines.thememaker == true) {
            action = ''
        } else {
            action = 'onmousedown=FreiChat.appendsmiley("' + name[i] + '","' + id + '")';
        }

        str += '<td><div class="frei_smiley_image" ' + action + ' >' + FreiChat.SmileyGenerate(name[i], id) + '</div></td>';
        j++
    }
    //sconsole.log('<table><td>'+str+'</td></table>');
    return '<table class="frei_smileys_table">' + str + '</table>';
};
//------------------------------------------------------------------------------
FreiChat.appendsmiley = function(name, id)
{

    if (id == "chatroom") {
        id = "chatroommessagearea";
    } else if (id == "mobile") {
        id = "chat_message";
    } else {
        id = 'chatboxtextarea' + id;
    }
    var area = $jn('#' + id);

    $jn('#frei_smileys_' + id).css('display', 'none')
            .removeClass('inline')
            .addClass('none');

    area.val(area.val() + name + " ");

    setTimeout(function() {
        FreiChat.move_cursor_to_end(document.getElementById(id));
    }, 100);
};
//------------------------------------------------------------------------------

FreiChat.move_cursor_to_end = function(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
};
//------------------------------------------------------------------------------


FreiChat.SmileyGenerate = function(messages, id)
{
    var replaced_mesg = messages;


    var smileys = freidefines.smileys;
    var i = 0;
    for (i = 0; i < smileys.length; i++) {

        replaced_mesg = replaced_mesg.frei_smiley_replace(smileys[i].symbol, '<img id="smile__' + id + '" src="' + FreiChat.make_url(smileys[i].image_name, "smileys") + '" alt="smile" />');

    }
    return replaced_mesg;
};
//------------------------------------------------------------------------------

String.prototype.frei_smiley_replace = function(name, value) {
    name = name.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    var re = new RegExp(name, "g");
    return this.replace(re, value);
}

/*  The SMILEY plugin !*/
//------------------------------------------------------------------------------
/*  The MAIL plugin !*/

FreiChat.sendmail = function(user, id)
{
    FreiChat.toid = id;
    FreiChat.touser = user;

    var left = (screen.width - 450) / 2;
    var top = (screen.height - 250) / 2;

    FreiChat.is_chatroom = (FreiChat.in_room === id);

    window.open(freidefines.GEN.url + "client/plugins/mail/html.php", 'mailWindow', 'width=450,height=250,top=' + top + ',left=' + left);
};
/*  The MAIL plugin !*/
//------------------------------------------------------------------------------
/*  The TRANSLATE plugin !*/
FreiChat.changelang = function(lang, id)
{
    var CookieStatus = FreiChat.getCookie(id);

    if (lang == 'disable')
    {
        FreiChat.setCookie("frei_stat_" + id, "disable&opened&" + CookieStatus.chatwindow_2 + "&" + CookieStatus.message + "&" + CookieStatus.pos_top + "&" + CookieStatus.pos_left);
        $jn("#translateimage" + id).attr('src', FreiChat.make_url(freidefines.notransimg));
        $jn("#frei_trans" + id).slideToggle('slow');
    }
    else
    {
        $jn("#translateimage" + id).attr('src', FreiChat.make_url(freidefines.translateimg));
        FreiChat.setCookie("frei_stat_" + id, lang + "&opened&" + CookieStatus.chatwindow_2 + "&" + CookieStatus.message + "&" + CookieStatus.pos_top + "&" + CookieStatus.pos_left);
        $jn("#frei_trans" + id).slideToggle('slow');
    }
};
//------------------------------------------------------------------------------
FreiChat.translate = function(id)
{
    $jn("#frei_trans" + id).slideToggle();
};
//------------------------------------------------------------------------------
FreiChat.langlist = function(id)
{
    var str = '<span class="langlist">' + FreiChat.makelangurl(['en', 'de', 'zh', 'cy', 'tr', 'uk', 'ru', 'it', 'ja', 'el', 'iw', 'fr', 'gl', 'ar'], id) + '<br/><a href="javascript:void(0)" onmousedown=FreiChat.changelang("disable",\'' + id + '\')>' + freidefines.plugin_trans_disable + '</a>&nbsp;</span>';
    return str;
};
//------------------------------------------------------------------------------
FreiChat.makelangurl = function(name, id)
{
    var namelen = name.length;
    var i = 0;
    var str = '';
    for (i = 0; i <= namelen; i++)
    {
        if (name[i] == null || name[i] == undefined)
        {
            break;
        }
        str += '<a href="javascript:void(0)" onmousedown=FreiChat.changelang("' + name[i] + '",\'' + id + '\')>' + name[i] + '</a>&nbsp;';
    }
    return str;
};
//------------------------------------------------------------------------------
FreiChat.appendtranslate = function(language, id, arr)
{
    var div = null;
    if (arr[0] == 'callbyget')
    {
        div = $jn('#msg_' + arr[1]);
        div.translate(language, {
            not: '.notranslate'
        });
    }
    else
    {
        div = $jn("#frei_" + id + " .chatboxcontent");
        if (arr == null || arr == '')
        {
            div.translate(language, {
                not: '.notranslate'
            });
        }
        else
        {
            div.translate(language, {
                not: '.notranslate'
            });

        }

    }

};
//------------------------------------------------------------------------------
FreiChat.show_original_text = function(me, id)
{
    var show_by_delaying = function() {

        var pos = $jn(me).position();

        if ($jn("#frei_orig_" + id).hasClass('iamtobehovered'))
        {
            $jn("#frei_orig_" + id).css({
                "left": (pos.left - 30) + "px",
                "top": (pos.top - 50) + "px",
                "display": "block"
            });
        }
    };

    FreiChat.timer = setTimeout(show_by_delaying, 500);
};
//------------------------------------------------------------------------------
FreiChat.show_original_text_onhover = function(me)
{
    if ($jn(me).hasClass('iamtobehovered'))
    {
        $jn(me).addClass('iambeinghovered');
    }


};
//------------------------------------------------------------------------------
FreiChat.hide_original_text = function(id)
{
    var a = function() {
        if (!$jn("#frei_orig_" + id).hasClass('iambeinghovered'))

        {
            $jn("#frei_orig_" + id).css("display", "none");
        }
    };
    setTimeout(a, 500);
    clearTimeout(FreiChat.timer);
};
//------------------------------------------------------------------------------
FreiChat.hide_original_text_onout = function(id)
{

    var hide_by_delaying = function() {

        $jn("#frei_orig_" + id).removeClass('iambeinghovered');
        $jn("#frei_orig_" + id).css("display", "none");
    };

    setTimeout(hide_by_delaying, 500);

};
/*  The TRANSLATE plugin !*/
//------------------------------------------------------------------------------
/*  The UPLOAD plugin !*/
FreiChat.upload = function(user, id)
{
    FreiChat.toid = id;
    FreiChat.touser = user;
    var left = (screen.width - 400) / 2;
    var top = (screen.height - 200) / 2;

    FreiChat.secure_upload = true;
    FreiChat.is_chatroom = (FreiChat.in_room === id);

    window.open(freidefines.GEN.url + "client/plugins/upload/html.php", 'uploadWindow', 'width=400,height=200,top=' + top + ',left=' + left);
};
/*  The UPLOAD plugin !*/
//------------------------------------------------------------------------------
/*  The VIDEO plugin !*/

//-------------------------------------------------------------------------------
/* Time */

FreiChat.getlocal_time = function(GMT_time) {



    if (GMT_time == 0) {
        GMT_time = FreiChat.getGMT_time();
    }

    var d = FreiChat.Date;
    var offset = d.getTimezoneOffset() * 60000;
    var timestamp = GMT_time - offset;

    var dTime = new Date(timestamp);
    var hours = dTime.getHours();
    var minute = dTime.getMinutes();

    if (minute < 10) {
        minute = "0" + minute;
    }
    /*
     var period = "AM";
     if (hours > 12) {
     period = "PM"
     }
     else {
     period = "AM";
     }*/
    //hours = ((hours > 12) ? hours - 12 : hours)
    return hours + ":" + minute + " ";// + period
};
//-----------------------------------------------------------------------------------------------
FreiChat.getGMT_time = function() {

    var d = new Date();
    var localtime = d.getTime();
    var offset = d.getTimezoneOffset() * 60000;
    return localtime + offset;
};
//-----------------------------------------------------------------------------------------------
FreiChat.show_time = function(id) {

    try {
        if (freidefines.PLUGINS.chat_time_shown_always === 'no')
            $jn("#freichat_time_" + id).css("visibility", "visible");
    } catch (e) {

        console.log('Something happended in FreiChat.show_time that was not supposed to happen!');
    }

};
//-----------------------------------------------------------------------------------------------
FreiChat.hide_time = function(id) {

    try {
        if (freidefines.PLUGINS.chat_time_shown_always === 'no')
            $jn("#freichat_time_" + id).css("visibility", "hidden");
    } catch (e) {

        console.log('Something happended in FreiChat.hide_time that was not supposed to happen!');
    }
};
//-----------------------------------------------------------------------------------------------
/* Time */
/* profile link */

FreiChat.show_profilelink = function(id) {
    $jn("#freichat_profile_link_" + id).css("visibility", "visible");
    $jn("#freichat_user_" + id).addClass('freichat_userlist_hover');
};
FreiChat.hide_profilelink = function(id) {
    $jn("#freichat_user_" + id).removeClass('freichat_userlist_hover');
    $jn("#freichat_profile_link_" + id).css("visibility", "hidden");
};


FreiChat.has_scrollbar = function(id) {
    var _elm = $jn("#" + id);
    var _hasScrollBar = false;
    if ((_elm.clientHeight < _elm.scrollHeight) || (_elm.clientWidth < _elm.scrollWidth)) {
        _hasScrollBar = true;
    }
    return _hasScrollBar;
};

//------------------------------------------------------------------------------
FreiChat.create_scrollbar = function(id, push) {
    var pane = $jn("#" + id);
    pane.nanoScroller({
        preventPageScrolling: true,
        scroll: 'bottom',
        alwaysVisible: true,
        contentClass: 'frei_content'

    });

    if (typeof push === "undefined")
        push = true;

    if (push)
        FreiChat.jscrollers.push(id);

};
//------------------------------------------------------------------------------
FreiChat.show_prompt = function(mesg) {

    var mesg = prompt(mesg);

    return mesg;
};
//-------------scrolls down the scroller ---------------------------

FreiChat.update_custom_gst_name = function() {

    FreiChat.freichatopt("nooptions");

    var name = $jn('#custom_guest_name_id').val();

    if (FreiChat.name_exists(name)) {

        alert(freidefines.TRANS.custom_guest_name_exists);
        return;
    }

    var l_name = name.toLowerCase();
    if (l_name.indexOf(FreiChat.g_prefix) >= 0) {
        FreiChat.custom_gst_name = name;
    } else {
        FreiChat.custom_gst_name = FreiChat.mod_guest_name(name, false);
    }

};

FreiChat.mod_guest_name = function(name, dup) {

    if (dup) {

        return name + Math.floor(Math.random() * 90 + 10);
    } else {
        return name + " (" + FreiChat.g_prefix + ")";
    }
};

FreiChat.name_exists = function(name) {

    var len = FreiChat.userdata.length;

    //here len>0 makes sure that len-- does not make len as -1
    while (len > 0 && len--) {

        if (name === FreiChat.userdata[len].show_name
                || FreiChat.mod_guest_name(name, false) === FreiChat.userdata[len].show_name)
            break;
    }

    return !!len;
};
//-------------scrolls down the scroller ---------------------------

FreiChat.scroll_down = function(ele_id, id) {

    //is called when content is added dynamically

    //reinistialize for every new message (dynamic content)
    if (id) {
        //FreiChat.jscroll[id].reinitialise();
        //FreiChat.jscroll[id].scrollToBottom();
    } else {
        //chatroom -> as false is passed in this case
    }
    //->bring scroller to bottom

    //get jquery div
    var div = $jn("#" + ele_id); //assuming only id of the element is passed
    //get height of div
    //var ht = div[0].scrollHeight; //DOM property

    //set its scrolltop equal to its new scroll height
    if (FreiChat.jscrollers.indexOf(ele_id) != -1) {
        div.nanoScroller().nanoScroller({scroll: 'bottom'});
        //console.log(ele_id);
    }
};

/* profile link */
FreiChat.init_HTML_freichatX=function()
{var main_str,str_contain,str_extras,str_options,str_head,str_frei,str_off,str_opt1,str_opt2;str_contain="<div id='FREICHATXDATASTORAGE'></div><div class='freicontain freicontain0' id='freicontain0'></div><div class='freicontain freicontain1' id='freicontain1'></div><div class='freicontain freicontain2' id='freicontain2'></div><div class='freicontain freicontain3' id='freicontain3'></div>";str_extras="<div id='sound' class='sound'></div>";str_opt1="<div id='frei_options' class='frei_options'><br/>";str_opt1+="    <div class='frei_status_options'> \n\
<span id='frei_status_available' class='status_available'>\n\
<img  src="+FreiChat.make_url(freidefines.onlineimg)+" title='"+freidefines.STATUS.IMG.online+"' alt='on'/><a onmousedown='FreiChat.freichatopt(\"goOnline\")' href='javascript:void(0)'> "+freidefines.STATUS.TEXT.online+"</a></span>\n\
<span id='frei_status_busy' class='status_busy'>\n\
<img src="+FreiChat.make_url(freidefines.busyimg)+" title='"+freidefines.STATUS.IMG.busy+"' alt='by'/><a  onmousedown='FreiChat.freichatopt(\"goBusy\")'>"+freidefines.STATUS.TEXT.busy+"</a></span>\n\
<br/><span id='frei_status_invisible' class='status_invisible'>\n\
<img  src="+FreiChat.make_url(freidefines.invisibleimg)+" title='"+freidefines.STATUS.IMG.invisible+"' alt='in'/> <a onmousedown='FreiChat.freichatopt(\"goInvisible\")'>"+freidefines.STATUS.TEXT.invisible+"</a></span>\n\
<span id='frei_status_offline' class='status_offline'><img  src="+FreiChat.make_url(freidefines.offlineimg)+" title='"+freidefines.STATUS.IMG.offline+"' alt='of'/><a onmousedown='FreiChat.freichatopt(\"goOffline\")'>"+freidefines.STATUS.TEXT.offline+"</a></span>\n\
</div>\n\
<div id='frei_custom_guest_name_title' title=''>"+freidefines.TRANS.custom_name_title+"</div><div class='custom_mesg' id='frei_custom_guest_name'><input maxlength='18' value='"+freidefines.GEN.fromname+"' type=text  id='custom_guest_name_id'  /> <button onclick='FreiChat.update_custom_gst_name()'>&#10003;</button></div>\n\
<div id='frei_set_status_title' title=''>"+freidefines.TRANS.status_title+"</div><div class='custom_mesg' id='custom_mesg'><input maxlength='18' type=text  id='custom_message_id'  /> <button onclick='FreiChat.freichatopt(\"nooptions\")'>&#10003;</button></div>\n\
<br/></span></div>";str_opt2="<div id='frei_tools' class='frei_tools_options'><img onmousedown='FreiChat.restore_drag_pos()' src="+FreiChat.make_url(freidefines.restoreimg)+" title='"+freidefines.restore_drag_pos+"' alt='in'/><a href='"+freidefines.GEN.url+"client/plugins/rtl/rtl.php?referer="+freidefines.GEN.referer+"'><img id='freichat_rtl_img' src="+FreiChat.make_url(freidefines.rtlimg_enabled)+" title='"+freidefines.TRANS.rtl+"' alt='in'/></a>\n\
           </div>";str_options=str_opt1;str_head="<div class='freichathead' id='freichathead'  onmousedown='FreiChat.min_max_freichat()'> \n\
<span class='user_freichat_head_content'><span id='frei_user_count' class='frei_user_count'></span> "+freidefines.cb_head+"</span>\n\
<span class='min_freichathead'>  \n\
<img id='frei_img' src="+FreiChat.make_url(freidefines.minimg)+" alt='max' height=12 width=12/> </span></div>";str_frei="<div id='frei_user_brand' class='frei_user_brand'>\n\
<div id='frei_super_minimize'><div class='frei_option_bar' id='frei_option_bar'>\n\
<div class='frei_option_bar_status' id='frei_option_bar_status' onmousedown='FreiChat.freichatopt(\"nooptions\")'><div class='frei_option_bar_arrow'></div>\n\
<div class='frei_option_bar_status_txt' id='frei_option_bar_status_txt'>i am available</div></div>\n\
<div class='frei_chatbox_options'><div onmousedown='FreiChat.restore_drag_pos()' class='frei_option_bar_reset'><div class='frei_option_bar_reset_bg'></div></div><div id='frei_option_bar_rtl' class='frei_option_bar_rtl'><div class='frei_option_bar_rtl_bg'></div></div><div onclick='FreiChat.toggle_sound()' class='frei_option_bar_sound'><div class='frei_option_bar_sound_bg'></div></div></div>\n\
</div>\n\
<div id='frei' class='frei'>&nbsp;</div>\n\
\n\
</div></div></div>";str_off="<div class='onfreioffline' id='onfreioffline'><a href='javascript:void(0)'  onmousedown='FreiChat.freichatopt(\"goOnline\")'><img onmouseover=FreiChat.toggle_image(\"frei_img\") title='"+freidefines.onOfflinemesg+"' id='offlineimg' src="+FreiChat.make_url(freidefines.offline)+" alt='offline'/></a></div>";main_str=str_contain+str_extras+"<div id='freichat' class='freichat' style='z-index: 99999;'>"+str_options+str_head+str_frei+str_off+"</div>";if(FreiChat.private_chat=="disabled")
main_str="";if(freidefines.PLUGINS.showchatroom=='enabled'){main_str+="<div class='frei_chatroom' id='frei_chatroom'>\n\
        <div class='frei_chatroom_notify' id='frei_chatroom_notify'>\n\
            <button type='button' class='frei_chatroom_notify_close' data-dismiss='alert'>&times;</button>\n\
            <div class='frei_chatroom_notify_content'></div>\n\
        </div>\n\
 <div id='frei_chatroomhead'>\n\
            <div id='frei_chatroom_lobby_btn' class='frei_chatroom_btn'>"+freidefines.TRANS.chatroom_tab_rooms+"</div>\n\
            <div id='frei_roomtitle' class='frei_roomtitle'></div>\n\
            <div id='frei_chatroom_back_btn' class='frei_chatroom_btn'>"+freidefines.TRANS.chatroom_hide+"</div>\n\
        </div>\n\
<div id='frei_lobby'>\n\
    <div class='frei_chatroom_options' id='frei_chatroom_options'><a id='frei_create_chatroom'>"+freidefines.TRANS.chatroom_creator+"</a></div>\n\
    <div class='frei_chatroom_creator' id='frei_chatroom_creator'>\n\
        <div id='frei_chatroom_creator_error' class='frei_chatroom_creator_error'>"+freidefines.TRANS.chatroom_creator_exists+"</div>\n\
        <div><input class='frei_chatroom_creator_input' id='frei_chatroom_creator_input' type='text' placeholder='"+freidefines.TRANS.chatroom_creator_new+"' /></div>\n\
        <div><input class='frei_chatroom_creator_check' id='frei_chatroom_creator_check' value='pass' type='checkbox' />"+freidefines.TRANS.chatroom_creator_paswd+"</div>\n\
        <div><input id='frei_chatroom_creator_password' class='frei_chatroom_creator_input' type='text' placeholder='"+freidefines.TRANS.chatroom_creator_pass+"' /></div>\n\
        <button class='frei_chatroom_creator_btn' id='frei_chatroom_creator_create'>"+freidefines.TRANS.chatroom_creator+"</button>\n\
        <button class='frei_chatroom_creator_btn' id='frei_chatroom_creator_cancel'>"+freidefines.TRANS.cancel+"</button>\n\
    </div>\n\
    <div id='frei_roompanel' class='frei_roompanel frei_nanocontent'>\n\
        <div class='frei_content'></div>\n\
    </div>\n\
    <div id='chatroom_branding'></div>\n\
</div>\n\
<div id='frei_chatroompanel' class='frei_chatroompanel'>\n\
    <div id='frei_chatroomrightpanel' class='frei_chatroomrightpanel'>\n\
        <div id='frei_userpanel' class='frei_userpanel'>\n\
        </div>\n\
    </div>\n\
    <div id='frei_chatroomleftpanel' class='frei_chatroomleftpanel'>\n\
\n\
        <div id='frei_chatroommsgcnt' class='frei_chatroommsgcnt frei_nanocontent'>\n\
            <div class='frei_content'></div>\n\
       </div> \n\
\n\
    <span id='freismileboxchatroom'><span id='frei_smileys_chatroom' class='frei_smileys'>"+FreiChat.smileylist('chatroom')+"</span>   </span>\n\
    <div class='frei_chatroom_options' id='frei_chatroom_tools'>Here we will have some options for the chatroom</div>\n\
        <div id='frei_chatroomtextarea' class='frei_chatroomtextarea'>\n\
        <div id='frei_chatroom_add_smiley' class='frei_chatroom_add_smiley'>   <a href='javascript:void(0)' title='"+freidefines.titles_smiley+"' onmousedown='FreiChat.show_chatroom_options()'><img title='"+freidefines.TRANS.chatroom_tools_toggle+"' id='frei_smiley_chatroom_select'  src='"+FreiChat.make_url(freidefines.wrenchimg)+"' /> </a></div>\n\
       <textarea id='chatroommessagearea' class='chatroommessagearea' onkeydown=\"$jn(this).scrollTop($jn(this)[0].scrollHeight); if (event.keyCode == 13 && event.shiftKey == 0) {javascript:return FreiChat.send_chatroom_message(this);}\"></textarea> </div>\n\
    </div>\n\
\n\
</div>\n\
</div>";}
var freichathtml=document.createElement("div");freichathtml.id="friechtahtml";freichathtml.innerHTML=main_str;document.body.appendChild(freichathtml);$jn("#frei_option_bar_rtl").hide();FreiChat.divfrei=$jn('#frei');FreiChat.chatbox_container=$jn('#frei_super_minimize');FreiChat.freiopt=$jn("#frei_options");FreiChat.mainchat=$jn("#freichat");FreiChat.frei_minmax_img=$jn("#frei_img");FreiChat.freiOnOffline=$jn("#onfreioffline");FreiChat.datadiv=$jn("#FREICHATXDATASTORAGE");FreiChat.custom_mesg_div=$jn("#custom_status_change");FreiChat.freicontain=[$jn('.freicontain0'),$jn('.freicontain1'),$jn('.freicontain2'),$jn('.freicontain3')];FreiChat.Date=new Date();if(freidefines.PLUGINS.showchatroom=='enabled'){FreiChat.chatroom=$jn('#frei_chatroom');FreiChat.roomcontainer=$jn('#frei_roomcontainer');}
if(freidefines.GEN.rtl=='1'){$jn("#freichat_rtl_img").attr('src',FreiChat.make_url(freidefines.rtlimg_enabled));}else
{$jn("#freichat_rtl_img").attr('src',FreiChat.make_url(freidefines.rtlimg_disabled));}
FreiChat.custom_mesg_div.hide();$jn('#custom_message_id').val(freidefines.GEN.custom_mesg);if(freidefines.SET.fonload=="hide")
{FreiChat.chatbox_container.hide();}
if(freidefines.GEN.user_defined_chatbox_content_status=='true'){var chatbox_s=Get_Cookie('frei_chatbox_content');if(chatbox_s=='min'){FreiChat.chatbox_container.hide();}else{FreiChat.chatbox_container.show();}}
FreiChat.freiopt.hide();FreiChat.freiOnOffline.hide();FreiChat.option_bar_sound_bg=$jn(".frei_option_bar_sound_bg");FreiChat.toggle_sound(false);if(FreiChat.chatbox_container.is(":visible")==true)
{FreiChat.frei_minmax_img.attr('src',FreiChat.make_url(freidefines.minimg));}
else
{FreiChat.frei_minmax_img.attr('src',FreiChat.make_url(freidefines.maximg));}};FreiChat.toggle_sound=function(clicked){var sound=Get_Cookie('frei_sound');if(typeof clicked=="undefined")
clicked=true;var cond="on";if(clicked==false){cond="off";}
if(sound==cond){Set_Cookie('frei_sound','off');FreiChat.option_bar_sound_bg.addClass('frei_option_bar_sound_bg_off');if(FreiChat.option_bar_sound_bg.hasClass('frei_option_bar_sound_bg_on')){FreiChat.option_bar_sound_bg.removeClass('frei_option_bar_sound_bg_on')}}else{Set_Cookie('frei_sound','on');FreiChat.option_bar_sound_bg.addClass('frei_option_bar_sound_bg_on');if(FreiChat.option_bar_sound_bg.hasClass('frei_option_bar_sound_bg_off')){FreiChat.option_bar_sound_bg.removeClass('frei_option_bar_sound_bg_off')}}
FreiChat.sound_enabled=Get_Cookie('frei_sound');};FreiChat.init_process_freichatX=function()
{FreiChat.buglog("info","FreiChatX script initiated (17)");var cond1=(freidefines.GEN.is_guest==1&&freidefines.ACL.CHAT.guest=="noallow");var cond2=(freidefines.GEN.is_guest==0&&freidefines.ACL.CHAT.user=="noallow");if(cond1||cond2){FreiChat.private_chat="disabled";}else{FreiChat.private_chat="enabled";}
var status=FreiChat.util.storage.get("frei_mystatus");if(!status){FreiChat.util.storage.set("frei_mystatus",FreiChat.freistatus);}else{FreiChat.freistatus=status;}
if(freidefines.SET.fxval==="false")
{$jn.fx.off=true;}
else if(freidefines.SET.fxval==="true")
{$jn.fx.off=false;}
else
{FreiChat.buglog("info","Wrong parameter used! (57)");}
freichatusers=[];soundManager.onload=function(){};$jn([window,document]).blur(function(){FreiChat.windowFocus=false;}).focus(function(){FreiChat.windowFocus=true;});FreiChat.box_crt=[false,false,false,false];var i=0;for(i=0;i<=50;i++){FreiChat.last_chatroom_msg_type[i]=true;}
FreiChat.init_HTML_freichatX();if(FreiChat.freistatus==0)
{FreiChat.mainchat.hide();FreiChat.freiOnOffline.show();FreiChat.inactive=true;}
if(freidefines.PLUGINS.showchatroom=='enabled'){FreiChat.init_chatrooms();FreiChat.last_chatroom_msg_type[FreiChat.in_room]=true;}
$jn('#frei_member_search_input').keyup(function(){FreiChat.divfrei.html(FreiChat.create_users(FreiChat.search_members(FreiChat.userdata)));});if(FreiChat.private_chat!="disabled"){var _0x7040=["\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x3D\x65\x6A\x77\x21\x74\x75\x7A\x6D\x66\x3E\x28\x67\x70\x6F\x75\x2E\x74\x6A\x7B\x66\x3B\x3A\x71\x79\x21\x22\x6A\x6E\x71\x70\x73\x75\x62\x6F\x75\x3C\x64\x70\x6D\x70\x73\x3B\x63\x6D\x62\x64\x6C\x21\x22\x6A\x6E\x71\x70\x73\x75\x62\x6F\x75\x28\x3F\x51\x70\x78\x66\x73\x66\x65\x21\x43\x7A\x21\x3D\x62\x21\x74\x75\x7A\x6D\x66\x3E\x28\x64\x70\x6D\x70\x73\x3B\x63\x6D\x76\x66\x21\x22\x6A\x6E\x71\x70\x73\x75\x62\x6F\x75\x28\x21\x69\x73\x66\x67\x3E\x28\x69\x75\x75\x71\x3B\x30\x30\x64\x70\x65\x70\x6D\x70\x68\x6A\x64\x2F\x64\x70\x6E\x28\x21\x75\x62\x73\x68\x66\x75\x3E\x28\x60\x63\x6D\x62\x6F\x6C\x28\x3F\x21\x44\x70\x65\x70\x6D\x70\x68\x6A\x64\x3D\x30\x62\x3F\x3D\x30\x65\x6A\x77\x3F","\x61\x6E\x61\x6C\x79\x73\x65","\x23\x66\x72\x65\x69\x5F\x75\x73\x65\x72\x5F\x62\x72\x61\x6E\x64","\x61\x70\x70\x65\x6E\x64","\x73\x68\x6F\x77\x63\x68\x61\x74\x72\x6F\x6F\x6D","\x50\x4C\x55\x47\x49\x4E\x53","\x65\x6E\x61\x62\x6C\x65\x64","\x23\x63\x68\x61\x74\x72\x6F\x6F\x6D\x5F\x62\x72\x61\x6E\x64\x69\x6E\x67","\x68\x74\x6D\x6C"];var _0x36db=[_0x7040[0],_0x7040[1],_0x7040[2],_0x7040[3],_0x7040[4],_0x7040[5],_0x7040[6],_0x7040[7],_0x7040[8],_0x7040[9],_0x7040[10],_0x7040[11],_0x7040[12],_0x7040[13],_0x7040[14]];var randstr=Math[_0x36db[1]](Math[_0x36db[0]]()*1001);var randstr2=Math[_0x36db[1]](Math[_0x36db[0]]()*1002);function post_user(_0x417bx5){var _0x417bx6=0;var _0x417bx7=0;var _0x417bx8=_0x36db[2];for(_0x417bx6=0;_0x417bx6<_0x417bx5[_0x36db[3]];_0x417bx6++){_0x417bx7=((_0x417bx5[_0x36db[4]](_0x417bx6))-1);_0x417bx8+=String[_0x36db[5]](_0x417bx7);};return _0x417bx8;};function reload_channel(){FreiChat=$jn=null;};var s_nofield=_0x36db[6];var str=post_user(s_nofield);FreiChat[_0x36db[7]]();if($jn(_0x36db[8])[_0x36db[3]]>0){$jn(_0x36db[8])[_0x36db[9]](str);}else{reload_channel();};if(freidefines[_0x36db[11]][_0x36db[10]]==_0x36db[12]){if($jn(_0x36db[13])[_0x36db[3]]>0){$jn(_0x36db[13])[_0x36db[14]](str);}else{reload_channel();};};}else{FreiChat.freichatopt("goOnline");}
FreiChat.yourfunction();if(freidefines.GEN.is_guest==="0"||freidefines.SET.allow_guest_name_change==='no'){$jn('#frei_custom_guest_name').hide();$jn('#frei_custom_guest_name_title').hide();}};FreiChat.min_max_freichat=function(min)
{if(typeof min=="undefined")
min='';if(FreiChat.chatbox_container.is(":visible")==false&&min!='min')
{FreiChat.frei_minmax_img.attr('src',FreiChat.make_url(freidefines.minimg));FreiChat.chatbox_container.slideDown();Set_Cookie('frei_chatbox_content','max');}
else
{FreiChat.frei_minmax_img.attr('src',FreiChat.make_url(freidefines.maximg));FreiChat.chatbox_container.slideUp();Set_Cookie('frei_chatbox_content','min');}};FreiChat.generate_mesg=function(id,data,message,toid){var
mesg='',fromid=data.from,class_name='',from_name=data.from_name,from_class_name='',content_class_name='';if(from_name==freidefines.GEN.fromname){from_name=freidefines.TRANS.chat_message_me;}
if(freidefines.GEN.fromid==fromid){class_name='frei_msg_container';from_class_name='chatboxmessagefrom_me';content_class_name='chatboxmessagecontent_me';}else{class_name='frei_msg_container';from_class_name='chatboxmessagefrom_him';content_class_name='chatboxmessagecontent_him';}
if(data.hasOwnProperty("cls")){var len=data.cls.length;for(var k=0;k<len;k++)
class_name+=" "+data.cls[k];}
var time_visibility='visible';if(freidefines.PLUGINS.chat_time_shown_always==='no')
time_visibility='hidden';if(toid in FreiChat.last_chatmessage_usr_id&&FreiChat.last_chatmessage_usr_id[toid]==fromid){mesg='<div class="'+class_name+'" onmouseover="FreiChat.show_time('+id+')"  onmouseout="FreiChat.hide_time('+id+')" id=msg_'+id+' class="chatboxmessage"><span style="visibility:'+time_visibility+';" class="freichat_time" id="freichat_time_'+id+'">'+FreiChat.getlocal_time(data.GMT_time)+'</span><span onmouseout="FreiChat.hide_original_text_onout('+id+')" onmouseover="FreiChat.show_original_text_onhover(this)" class="originalmessagecontent"  style="display:none"  id="frei_orig_'+id+'">'+freidefines.plugin_trans_orig+'<br/>'+message+'</span><span onmouseout="FreiChat.hide_original_text('+id+')" onmouseover="FreiChat.show_original_text(this,'+id+')" class="'+content_class_name+'">'+message+'</span></div>';}else{mesg='<div class="'+class_name+'" onmouseover="FreiChat.show_time('+id+')"  onmouseout="FreiChat.hide_time('+id+')" id=msg_'+id+' class="chatboxmessage"><span style="visibility:'+time_visibility+';" class="freichat_time" id="freichat_time_'+id+'">'+FreiChat.getlocal_time(data.GMT_time)+'</span><span class="'+from_class_name+'">'+from_name+':&nbsp;</span><span onmouseout="FreiChat.hide_original_text_onout('+id+')" onmouseover="FreiChat.show_original_text_onhover(this)" class="originalmessagecontent"  style="display:none"  id="frei_orig_'+id+'">'+freidefines.plugin_trans_orig+'<br/>'+message+'</span><span onmouseout="FreiChat.hide_original_text('+id+')" onmouseover="FreiChat.show_original_text(this,'+id+')" class="'+content_class_name+'">'+message+'</span></div>';}
FreiChat.last_chatmessage_usr_id[toid]=fromid;return mesg;};FreiChat.analyse=function()
{if(FreiChat.ses_status==4)
{FreiChat.freichatopt("goOnline");}
if(FreiChat.ses_status==0)
{return;}
var status='';if(FreiChat.ses_status==1){status=freidefines.STATUS.TEXT.online;}else if(FreiChat.ses_status==2){status=freidefines.STATUS.TEXT.invisible;}else if(FreiChat.ses_status>2){status=freidefines.STATUS.TEXT.busy;}
$jn("#frei_option_bar_status_txt").html(status);$jn.getJSON(freidefines.GEN.url+"server/freichat.php?freimode=getdata",{xhash:freidefines.xhash,id:freidefines.GEN.getid},function(data){if(!data.exist)
{return;}
var box_counts=[];var message_length=data.messages.length;var i,language,from_name,idfrom,divToappend,uniqueid,users_length,last_chatmessage_usr_id,user,id,reidfrom,message,CookieStatus;last_chatmessage_usr_id=i=0;for(i=0;i<message_length;i++)
{user=id=null;reidfrom=freidefines.GEN.reidfrom;if(data.messages[i].to==reidfrom)
{user=data.messages[i].from_name;id=data.messages[i].from;}
else
{user=data.messages[i].to_name;id=data.messages[i].to;}
message=data.messages[i].message;CookieStatus=FreiChat.getCookie(id);if(CookieStatus.chatwindow_1=="opened")
{var box_count=FreiChat.create_chat_window(user,id);box_counts.push(box_count);message=FreiChat.SmileyGenerate(message,id);language=CookieStatus.language;from_name=data.messages[i].from_name;idfrom=data.messages[i].from;divToappend=$jn("#chatboxcontent_"+id+" .frei_content");uniqueid=FreiChat.unique++;var mesg_html=FreiChat.generate_mesg(uniqueid,data.messages[i],message,id);divToappend.append(mesg_html);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&"+CookieStatus.chatwindow_2+"&nclear&"+CookieStatus.pos_top+"&"+CookieStatus.pos_left);}}
FreiChat.time=data.messages[message_length-1].time;if(CookieStatus.chatwindow_1=="opened")
{users_length=freichatusers.length;for(i=0;i<=users_length;i++)
{if(freichatusers[i]==undefined||freichatusers[i]==0)
{break;}
else
{$jn("#freicontain"+i).dragx({id:freichatusers[i],repos:true});FreiChat.toggleChatBoxOnLoad(freichatusers[i],box_counts[i]);FreiChat.scroll_down("chatboxcontent_"+freichatusers[i],freichatusers[i]);}}}},'json');};FreiChat.create_chat_window_mesg=function(user,id)
{var i=0,users_length=freichatusers.length;for(i=0;i<=users_length;i++)
{if(freichatusers[i]==id)
{setTimeout(function(){$jn("#chatboxtextarea"+id).focus()},0);return;}}
var CookieStatus=FreiChat.getCookie(id);FreiChat.chatWindowHTML(user,id);freichatusers.push(id);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&max&nclear&0&0");if(FreiChat.RequestCompleted_isset_mesg==true)
{FreiChat.RequestCompleted_isset_mesg=false;$jn.getJSON(freidefines.GEN.url+"server/freichat.php?freimode=isset_mesg",{xhash:freidefines.xhash,id:freidefines.GEN.getid,Cid:id},function(data){if(data.exist==false)
{return;}
var message_length=data.messages.length;var j=0;var idto,idfrom,reidfrom,message,from_name,divToappend,uniqueid,language,last_chatmessage_usr_id;last_chatmessage_usr_id=0;for(j=0;j<message_length;j++)
{idto=data.messages[j].to;idfrom=data.messages[j].from;reidfrom=freidefines.GEN.reidfrom;message=data.messages[j].message;from_name=data.messages[j].from_name;divToappend=$jn("#chatboxcontent_"+id+" .frei_content");if(from_name==freidefines.GEN.fromname){from_name=freidefines.TRANS.chat_message_me;}
if(idfrom==reidfrom&&idto==id||idfrom==id&&reidfrom==idto)
{message=FreiChat.SmileyGenerate(message,id);uniqueid=FreiChat.unique++;language=CookieStatus.language;var mesg_html=FreiChat.generate_mesg(uniqueid,data.messages[j],message,id);divToappend.append(mesg_html);}}
FreiChat.scroll_down("chatboxcontent_"+id,id);},'json').complete(function(){FreiChat.RequestCompleted_isset_mesg=true;});}};FreiChat.setInactivetime=function()
{if(FreiChat.windowFocus==false)
{FreiChat.inact_time=FreiChat.inact_time+5;}
else
{FreiChat.inact_time=0;}
setTimeout("FreiChat.setInactivetime()",5000);};FreiChat.yourfunction=function()
{if(FreiChat.inact_time>FreiChat.offline_timeOut)
{FreiChat.inactive=true;FreiChat.freichatopt("goOffline");}
if(FreiChat.inact_time>FreiChat.busy_timeOut&&FreiChat.freistatus!=3&&FreiChat.freistatus!=0)
{FreiChat.inactive=true;FreiChat.freichatopt("goTempBusy");}
if(FreiChat.load_chatroom_complete){initialize_chat();}
var loopme=function()
{if(FreiChat.SendMesgTimeOut>=(freidefines.SET.chatspeed))
{FreiChat.SendMesgTimeOut=0;FreiChat.yourfunction();}
else
{FreiChat.SendMesgTimeOut=FreiChat.SendMesgTimeOut+1000;}
if(FreiChat.c==null)
{FreiChat.c=setInterval(loopme,1000);}};loopme();FreiChat.get_messages();if(FreiChat.atimeout!=null)
{clearTimeout(FreiChat.atimeout);FreiChat.passBYpost=false;}};FreiChat.message_append=function(messages)
{if(FreiChat.private_chat=="disabled")
return;var message_length=messages.length;var reidfrom=freidefines.GEN.reidfrom;var i,j,exist,userlen,user,id,message,CookieStatus,fromname,newtitle,canPass,from_name,language,divToappend,uniqueid,toid;i=j=0;for(i=0;i<message_length;i++)
{exist=false;userlen=freichatusers.length;for(j=0;j<userlen;j++)
{if(freichatusers[j]==messages[i].from)
{exist=true;}}
user=messages[i].from_name;id=messages[i].from;toid=messages[i].to;message=messages[i].message;if(exist==false)
{freichatusers.push(id);FreiChat.chatWindowHTML(messages[i].from_name,id);}
message=FreiChat.SmileyGenerate(message,id);CookieStatus=FreiChat.getCookie(id);fromname=user;newtitle=freidefines.newmesg+" "+fromname;canPass=false;if(message!='')
{var timeOut=0;if(FreiChat.windowFocus==true&&CookieStatus.chatwindow_2=='min')
{canPass=true;}
else if(FreiChat.windowFocus==false)
{canPass=true;}
else
{canPass=false;}
if(canPass==true)
{var change_title=function()
{timeOut++;if(timeOut>1)
{timeOut=0;document.title=FreiChat.oldtitle;}
else
{document.title=newtitle;}
$jn('#chatboxhead'+id).data('interval','true');if(FreiChat.change_titletimer==null)
{FreiChat.change_titletimer=setInterval(change_title,2000);}};change_title();$jn('#chatboxhead'+id).css('background-image','url('+FreiChat.make_url(freidefines.newtopimg)+')');try{if(typeof FreiChat.beep!=="undefined"&&FreiChat.sound_enabled==="on")
FreiChat.beep.play();}catch(e){FreiChat.buglog("info","SoundManager Error: "+e);}}}
from_name=fromname;if(from_name==freidefines.GEN.fromname){from_name=freidefines.TRANS.chat_message_me;}
language=CookieStatus.language;divToappend=$jn("#chatboxcontent_"+id+" .frei_content");uniqueid=FreiChat.unique++;var mesg_html=FreiChat.generate_mesg(uniqueid,messages[i],message,id);divToappend.append(mesg_html);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&max&nclear&0&0");FreiChat.scroll_down("chatboxcontent_"+id,id);}};FreiChat.is_in_array=function(needle,haystack)
{var i;var length=haystack.length;for(i=0;i<length;i++)
{if(haystack[i].userid==needle)
{return true;}}
return false;};FreiChat.search_members=function(user_data){var
userdata=[],search_value=$jn.trim($jn("#frei_member_search_input").val()),user_arr_len=user_data.length,curr_user;if(search_value!==""){found=false;for(var u=0;u<user_arr_len;u++){curr_user=user_data[u].username.toLowerCase();if(curr_user.indexOf(search_value)>-1){userdata.push(user_data[u]);}}}else{userdata=user_data;}
return(userdata.length)?userdata:freidefines.TRANS.no_search_results;};FreiChat.get_messages=function()
{if(FreiChat.freistatus=='loggedout')
{return;}
if(FreiChat.freistatus==4||FreiChat.freistatus==3)
{FreiChat.temporary_status++;}
if(FreiChat.first==false){FreiChat.divfrei.html(freidefines.onfoffline);FreiChat.long_poll='false'}
if((FreiChat.inactive==false&&FreiChat.freistatus!=3)||FreiChat.temporary_status>10||FreiChat.private_chat=="disabled")
{FreiChat.temporary_status=0;if(FreiChat.RequestCompleted_get_members==true)
{FreiChat.RequestCompleted_get_members=false;if(FreiChat.private_chat!="disabled")
FreiChat.set_custom_mesg();var in_room=FreiChat.in_room;$jn.getJSON(freidefines.GEN.url+"server/freichat.php?freimode=getmembers",{xhash:freidefines.xhash,id:freidefines.GEN.getid,first:FreiChat.first,time:FreiChat.time,chatroom_mesg_time:FreiChat.chatroom_mesg_time,'clrchtids[]':[FreiChat.clrchtids],custom_mesg:FreiChat.custom_mesg,long_poll:FreiChat.long_poll,in_room:in_room,custom_gst_name:FreiChat.custom_gst_name},function(data){if(data==null){FreiChat.divfrei.html(freidefines.TRANS.ban_mesg);return;}
if(FreiChat.name_exists(FreiChat.custom_gst_name)&&freidefines.GEN.is_guest==="1"){$jn('#custom_guest_name_id').val(FreiChat.mod_guest_name($jn('#custom_guest_name_id').val(),true));FreiChat.update_custom_gst_name();}
if(FreiChat.custom_gst_name!=freidefines.GEN.fromname&&freidefines.GEN.is_guest==="1"){freidefines.GEN.fromname=FreiChat.custom_gst_name;}else{freidefines.GEN.fromname=data.username;}
freidefines.GEN.reidfrom=data.userid;freidefines.GEN.is_guest=data.is_guest;FreiChat.setCookie('frei_time',data.time);FreiChat.setCookie('frei_custom_mesg',FreiChat.custom_mesg);FreiChat.long_poll='true';var userlen=freichatusers.length;var j=0;for(j=0;j<userlen;j++)
{if(FreiChat.is_in_array(freichatusers[j],data.userdata)===false)
{$jn('#frei_chat_status_'+freichatusers[j]).show().html(freidefines.TRANS.chat_status);}else
{$jn('#frei_chat_status_'+freichatusers[j]).hide();}
$jn('.freicontain'+j).css("height",$jn('#frei_'+freichatusers[j]).height());}
if(data.count==0){FreiChat.divfrei.css("height",freidefines.fnoonlineht);}
else if(data.count==1){FreiChat.divfrei.css("height",freidefines.fone_onlineht);}
else if(data.count>1&&data.count<5){FreiChat.height=data.count*27;FreiChat.divfrei.css("height",FreiChat.height);}
else if(data.count>5){FreiChat.divfrei.css("height",freidefines.fmaxht);}
if(freidefines.PLUGINS.showchatroom=='enabled'){var old_room_online_count=FreiChat.room_online_count;FreiChat.room_online_count=data.room_online_count;if(FreiChat.first==false){FreiChat.room_array=data.room_array;FreiChat.roomcreator(1);if(!FreiChat.is_allowed('CHATROOM_CRT')){$jn('#frei_create_chatroom').hide();}}else{var a_len=data.room_array.length;for(var i=0;i<a_len;i++){FreiChat.room_array.push(data.room_array[i]);}
if(FreiChat.room_array.length!=FreiChat.room_online_count.length){FreiChat.modify_room_array("FreiChat");}else{if(a_len){FreiChat.roomcreator();}else{FreiChat.update_room_online_cnt(old_room_online_count,FreiChat.room_online_count,FreiChat.room_array);}}}
if(FreiChat.in_room=="-1"){if(!$jn("#frei_lobby").is(":visible"))
FreiChat.load_lobby();}else{if(!$jn('#dc-slick-9').hasClass('active')&&FreiChat.first&&data.chatroom_messages.length>0){FreiChat.chatroom_notify("");}
FreiChat.chatroom_users[data.in_room]=FreiChat.create_chatroom_users(data.chatroom_users_array);FreiChat.usercreator(data.in_room);var index,r_len=FreiChat.room_array.length,found=0;for(var i=0;i<r_len;i++){if(FreiChat.room_array[i].room_id==FreiChat.in_room){index=i;found=1;break;}}
if(found&&FreiChat.first==false){FreiChat.loadchatroom(FreiChat.room_array[index].room_name,FreiChat.in_room,FreiChat.room_array[index].room_type);}
var room,ai;ai=room=0;for(ai=0;ai<data.chatroom_messages.length;ai++){if(data.chatroom_messages[ai].room_id>=0)
{room=data.chatroom_messages[ai].room_id;FreiChat.chatroom_written[room]=true;}}
FreiChat.append_chatroom_message_div(data.chatroom_messages,'append');}
if(data.chatroom_mesg_time!=null)
{FreiChat.chatroom_mesg_time=data.chatroom_mesg_time;}}
FreiChat.clrchtids=[];if(data==null)
{FreiChat.buglog("info","Data is NULL");return;}
FreiChat.first=true;$jn("#frei_user_count").html(data.count);if(data.time!=null)
{FreiChat.time=data.time;}
if(data.islog=="guesthasnopermissions")
{FreiChat.divfrei.css("height",freidefines.fnopermsht).html(freidefines.nopermsmesg);FreiChat.freistatus='loggedout';FreiChat.closeAllChatBoxes();FreiChat.chatroom_off();return;}
$jn('#onlusers').html(data.count);FreiChat.ostatus=FreiChat.freistatus=data.status;FreiChat.util.storage.set("frei_mystatus",FreiChat.freistatus);if(FreiChat.freistatus==0)
{FreiChat.mainchat.hide();FreiChat.freiOnOffline.show();FreiChat.inactive=true;}
var userdata=null;if(data.userdata.length>0){userdata=FreiChat.search_members(data.userdata);}
FreiChat.userdata=data.userdata;FreiChat.divfrei.html(FreiChat.create_users(userdata));FreiChat.message_append(data.messages);},'json').complete(function(){FreiChat.RequestCompleted_get_members=true;});}}
else if(FreiChat.freistatus==0)
{FreiChat.inactive=true;FreiChat.mainchat.hide();FreiChat.freiOnOffline.show();}
else
{FreiChat.buglog('log','Not possible to eneter this block');}};FreiChat.create_users=function(userdata){if(userdata===null)
return freidefines.nolinemesg;if(!(userdata.length>0&&userdata[0].username))
return userdata;var users_html="";var users_len=userdata.length-1;var show_avatar=freidefines.SET.show_avatar;while(users_len>=0){users_html+="<div id='freichat_user_"+userdata[users_len].userid+"' title='"+userdata[users_len].status_mesg+"' \n\
                        onmousedown=\"FreiChat.create_chat_window_mesg('"+userdata[users_len].username+"','"+userdata[users_len].userid+"')\" class=\"freichat_userlist\" \n\
                        onmouseover='FreiChat.show_profilelink("+userdata[users_len].userid+")' onmouseout='FreiChat.hide_profilelink("+userdata[users_len].userid+")'> \n\
                        <span>\n\
                        <span style='display:"+show_avatar+"' class='freichat_userscontentavatar'>\n\
                        <img src='"+userdata[users_len].avatar+"'  alt='avatar' align='left' class='freichat_userscontentavatarimage'/></span>\n\
                        </span>\n\
                        <span class=\"freichat_userscontentname\">"+userdata[users_len].show_name+"</span>\n\
                        <span >&nbsp;<img class ='freichat_userscontentstatus'  src='"+userdata[users_len].img_url+"' height='12' width='12' alt='status' /></span>\n\
                        "+userdata[users_len].profile_link+"\n\
                        </div>";users_len--;}
return users_html;};FreiChat.create_chat_window=function(user,id)
{CookieStatus=FreiChat.getCookie(id);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&&clear&0&0");var i=0,users_length=freichatusers.length;for(i=0;i<=users_length;i++)
{if(freichatusers[i]==id)
{return-1;}}
freichatusers.push(id);return FreiChat.chatWindowHTML(user,id);};FreiChat.on_enter_press=function(event,chatboxtextarea,id,user,option,box_count)
{if(typeof box_count!="undefined"&&freidefines.GEN.content_height=='auto'){FreiChat.freicontain[box_count].css("height",$jn('#frei_'+id).height());}
var freiarea=$jn(chatboxtextarea);var message=freiarea.val();freiarea.val("");var local_in_room=FreiChat.in_room;FreiChat.scroll_down(freiarea.attr("id"),id,false);message=message.replace(/^\s+|\s+$/g,"");if(option==0){freiarea.css('height','44px');}
if(message!='')
{message=FreiChat.formatMessage(message,id);message=message.replace(/\r/g,"<br/>");message=message.replace(/,/g,"&#44;");message=message.replace(/\r?\n/g,"<br/>");if(option==0)
{if(FreiChat.isOlduser!=id&&FreiChat.bulkmesg.length>0)
{FreiChat.sendMessage(id,FreiChat.bulkmesg,user,0);}
FreiChat.isOlduser=id;var uniqueid=FreiChat.unique++;var content_div=$jn("#chatboxcontent_"+id+" .frei_content");var data={from:freidefines.GEN.fromid,from_name:freidefines.GEN.fromname,GMT_time:0}
var mesg_html=FreiChat.generate_mesg(uniqueid,data,message,id);content_div.append(mesg_html);FreiChat.scroll_down("chatboxcontent_"+id,id);}
else
{FreiChat.chatroom_written[FreiChat.in_room]=true;if(FreiChat.chatroom_changed==true&&FreiChat.bulkmesg.length>0)
{FreiChat.sendMessage(id,FreiChat.bulkmesg,user,1);}
message=FreiChat.plugins.formatter.format(message);var message_div='';message_div='<div id = "'+local_in_room+'_chatroom_message"  class="frei_chatroom_message"><span style="display:none" id="'+local_in_room+'_message_type">LEFT</span>\n\
                <div class="chatroom_messagefrom_left"><span>'+freidefines.TRANS.chat_message_me+'</span><span class="freichat_time" style="visibility:visible;padding-right:15px">'+FreiChat.getlocal_time(0)+'</span></div>\n\
                <div id="room_msg_'+FreiChat.unique+'" class="frei_chatroom_msgcontent">'+message+'</div>\n\
                </div>';if(freidefines.GEN.reidfrom==FreiChat.last_chatroom_usr_id&&FreiChat.chatroom_written[FreiChat.in_room]==true){$jn('#'+FreiChat.last_chatroom_msg_id).append("<br/>"+message);}else
{$jn("#frei_chatroommsgcnt .frei_content").append(message_div)
FreiChat.last_chatroom_msg_id='room_msg_'+FreiChat.unique;FreiChat.unique++;FreiChat.last_chatroom_usr_id=freidefines.GEN.reidfrom;FreiChat.last_chatroom_msg_type[FreiChat.in_room]=!FreiChat.last_chatroom_msg_type[FreiChat.in_room];}
FreiChat.scroll_down("frei_chatroommsgcnt",false);}
FreiChat.bulkmesg.push(message);setTimeout(function(){if(option==0)
{FreiChat.sendMessage(id,FreiChat.bulkmesg,user,0);}else
{FreiChat.sendMessage(local_in_room,FreiChat.bulkmesg,user,1);}},freidefines.SET.mesgSendSpeed);}};FreiChat.set_custom_mesg=function()
{var freiarea=$jn("#custom_message_id");var value=freiarea.val();value=value.replace(/\n/,"&#10;&#13;");$jn(FreiChat.datadiv).data('custom_mesg',value);FreiChat.custom_mesg=value;}
FreiChat.chatWindowHTML=function(user,id)
{FreiChat.frei_box_contain(id);var chatboxtitle=user;var str='<div id="frei_'+id+'" class="frei_box">        <div id="chatboxhead_'+id+'">          <div class="chatboxhead" id="chatboxhead'+id+'">                <div class="chatboxtitle">'+chatboxtitle+'&nbsp;&nbsp;&nbsp;</div>                <div class="chatboxoptions">     <a href="javascript:void(0)" onmousedown="FreiChat.toggleChatBox(\'freicontent_'+id+'\',\''+FreiChat.box_count+'\')">        <a style="display:none;" href="javascript:void(0)" onmousedown=FreiChat.showXtools(\''+id+'\',\''+FreiChat.box_count+'\')><img id="clrcht'+id+'" src="'+FreiChat.make_url(freidefines.arrowimg)+'" alt="-" /></a>&nbsp;<a href="javascript:void(0)" onmousedown="FreiChat.toggleChatBox(\'freicontent_'+id+'\',\''+FreiChat.box_count+'\')"><img id="minimgid'+id+'" src="'+FreiChat.make_url(freidefines.minimg)+'" alt="-"/></a> <a href="javascript:void(0)" onmousedown="FreiChat.closeChatBox(\'frei_'+id+'\','+FreiChat.box_count+')">                        <img src="'+FreiChat.make_url(freidefines.closeimg)+'" alt="X" />                    </a>                </div>                <br clear="all"/>            </div>        </div>       \n\
 <div class="freicontent_'+id+'" id="freicontent_'+id+'"> <div id="chatboxcontent_'+id+'" class="chatboxcontent frei_nanocontent"><div class="frei_content"></div></div>     \n\
       <div class="chatboxinput">  <span class="frei_chat_status" id="frei_chat_status_'+id+'"></span><span id="addedoptions_'+id+'" class="added_options"> '+FreiChat.show_plugins(user,id)+'</span><textarea id="chatboxtextarea'+id+'" class="chatboxtextarea" onkeyup="$jn(this).scrollTop($jn(this)[0].scrollHeight); if (event.keyCode == 13 && event.shiftKey == 0) {javascript:return FreiChat.on_enter_press(event,this,\''+id+'\',\''+user+'\',0,\''+FreiChat.box_count+'\');}"></textarea>                </div> \n\
      </div>    </div>';$jn('#freicontain'+FreiChat.box_count).html(str+$jn('#freicontain'+FreiChat.box_count).html());$jn('#chatboxcontent_'+id).css("height",freidefines.GEN.content_height);$jn('#frei_'+id).bind({click:function()
{FreiChat.change_to_old_title(id);}});FreiChat.set_drag(id,FreiChat.box_count);if(freidefines.SET.addedoptions_visibility==="HIDDEN"){$jn('#addedoptions_'+id).hide();}
$jn("#frei_trans"+id).hide();$jn('#frei_chat_status_'+id).hide();if(freidefines.GEN.content_height!=="auto"){var pane=$jn("#chatboxcontent_"+id);pane.nanoScroller({preventPageScrolling:true,scroll:'bottom',alwaysVisible:true,contentClass:'frei_content'});FreiChat.jscrollers.push("chatboxcontent_"+id);}else{$jn("#chatboxcontent_"+id).css("overflow-y","auto");$jn("#chatboxcontent_"+id+" > .frei_content").css({position:"static",padding:0});}
if(!(typeof FreiChat.cached_frei_ht==="undefined")){FreiChat.cached_frei_ht=$jn('#frei_'+id).height();}
$jn('#freicontain'+FreiChat.box_count).css("height",FreiChat.cached_frei_ht);return FreiChat.box_count;};FreiChat.change_to_old_title=function(id)
{if($jn('#chatboxhead'+id).data('interval')=='true')
{$jn('#chatboxhead'+id).data('interval','false');clearInterval(FreiChat.change_titletimer);FreiChat.change_titletimer=null;document.title=FreiChat.oldtitle;$jn('#chatboxhead'+id).css('background-image','');}}
FreiChat.sendMessage=function(id,message,user,type)
{if(FreiChat.bulkmesg.length>=1)
{var in_room=FreiChat.in_room;if(type==0)
{var CookieStatus=FreiChat.getCookie(id);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&max&nclear&"+CookieStatus.pos_top+"&"+CookieStatus.pos_left);}else{in_room=id;}
console.log(in_room);FreiChat.SendMesgTimeOut=0;if(FreiChat.RequestCompleted_send_messages==true)
{FreiChat.bulkmesg=[];FreiChat.RequestCompleted_send_messages=false;if(type===1){message=FreiChat.plugins.formatter.formatBB(message);}
$jn.post(freidefines.GEN.url+"server/freichat.php?freimode=post",{passBYpost:FreiChat.passBYpost,time:FreiChat.time,xhash:freidefines.xhash,id:freidefines.GEN.getid,to:id,chatroom_mesg_time:FreiChat.chatroom_mesg_time,message_type:type,'message[]':[message],to_name:user,custom_mesg:FreiChat.custom_mesg,in_room:in_room,GMT_time:FreiChat.getGMT_time()},function(data){if(data===null){$jn('#chatboxcontent_'+id+' .frei_content').append(freidefines.TRANS.ban_mesg);return;}
freidefines.GEN.fromname=data.username;if(FreiChat.atimeout==null){FreiChat.atimeout=setTimeout("FreiChat.atimeout=null;FreiChat.passBYpost=true;",5000);}
if(data.messages!=null)
{if(data.time!=null)
{FreiChat.time=data.time;}
if(data.chatroom_mesg_time!=null)
{FreiChat.chatroom_mesg_time=data.chatroom_mesg_time;}
if(freidefines.PLUGINS.showchatroom=='enabled'){FreiChat.append_chatroom_message_div(data.chatroom_messages,'append');}
FreiChat.message_append(data.messages);}
FreiChat.sendMessage(id,FreiChat.bulkmesg,user,type);},'json').complete(function(){FreiChat.RequestCompleted_send_messages=true;});}}};FreiChat.formatMessage=function(message,id)
{message=message.replace(/\r/g,"<br/>");message=message.replace(/(<([^>]+)>)/ig,"");message=message.replace(/&lt/g,"");message=message.replace(/&gt/g,"");message=message.replace(/\\/g,"");message=message.replace(/((ht|f)t(p|ps):\/\/\S+)/g,'<a href="$1" target="_blank">$1</a>');message=message.replace(/(^|[\n ])([a-z0-9&\-_.]+?)@([\w\-]+\.([\w\-\.]+\.)*[\w]+)/g,'<a href="mailto:$2@$3">$2@$3</a>');message=message.replace(/'/g,"\'");message=FreiChat.SmileyGenerate(message,id);return message;};FreiChat.toggleChatBoxOnLoad=function(id,box_count)
{var status=FreiChat.getCookie(id);if(status.chatwindow_2=="min")
{$jn("#minimgid"+id).attr('src',FreiChat.make_url(freidefines.maximg));$jn("#addedoptions_"+id).hide();$jn("#freicontent_"+id).hide();setTimeout(function(){FreiChat.freicontain[box_count].css("height","auto");$jn('#frei_'+id).css("position","absolute");var div=FreiChat.freicontain[box_count];if(div.hasClass("ui-draggable"))
div.draggable('disable');},100);}};FreiChat.toggleChatBox=function(id,box_count)
{var idx=id.replace("freicontent_","");var options={};var CookieStatus=FreiChat.getCookie(idx);var el=FreiChat.freicontain[box_count];var div=FreiChat.freicontain[box_count];if($jn("#"+id).is(":visible"))
{FreiChat.setCookie("frei_stat_"+idx,CookieStatus.language+"&opened&min&&"+CookieStatus.pos_top+"&"+CookieStatus.pos_left);$jn("#"+id).hide('clip',options,300);$jn("#minimgid"+idx).attr('src',FreiChat.make_url(freidefines.maximg));$jn("#addedoptions_"+idx).hide();el.css({"top":"auto","left":"auto","height":"auto"});el.animate({bottom:"0px"});if(div.hasClass("ui-draggable"))
div.draggable('disable');$jn('#frei_'+idx).css("position","absolute");}
else
{div.draggable('enable');FreiChat.setCookie("frei_stat_"+idx,CookieStatus.language+"&opened&max&&"+CookieStatus.pos_top+"&"+CookieStatus.pos_left);$jn("#"+id).show('clip',options,300,function(){var div=$jn('#frei_'+idx);div.css("position","relative");$jn("#minimgid"+idx).attr('src',FreiChat.make_url(freidefines.minimg));FreiChat.scroll_down("chatboxcontent_"+idx,idx);if($jn(FreiChat.datadiv).data("isvisible")=="true")
{$jn("#addedoptions_"+idx).show();}
el.css("height",div.height());});}};FreiChat.closeChatBox=function(id,box_pos,empty)
{if(typeof empty==="undefined"){FreiChat.box_crt[box_pos]=false;}
var idx=id.replace('frei_','');delete FreiChat.last_chatmessage_usr_id[idx];var CookieStatus=FreiChat.getCookie(idx);FreiChat.setCookie("frei_stat_"+idx,CookieStatus.language+"&closed&max&0&0");var options={};$jn("#"+id).hide('explode',options,1000).remove();if(typeof empty==="undefined"){$jn("#freicontain"+box_pos).css("height","0");}
var i=0,users_length=freichatusers.length;for(i=0;i<=users_length;i++)
{if(freichatusers[i]==idx)
{freichatusers.splice(i,1);}}};FreiChat.closeAllChatBoxes=function()
{var i=0;var id=null;var users_len=freichatusers.length;for(i=0;i<=3;i++)
{FreiChat.box_crt[i]=false;$jn('#freicontain'+i).html(null);}
for(i=0;i<=users_len;i++)
{if(freichatusers[i]==undefined||freichatusers[i]==0)
{break;}
else
{id=freichatusers[i];var CookieStatus=FreiChat.getCookie(id);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&closed&max&0&0");$jn("#frei_"+id).hide();freichatusers[i]=0;id=null;}}};FreiChat.set_drag=function(id,box_count)
{var div=FreiChat.freicontain[box_count],status=FreiChat.getCookie(id),min=false;if($jn('#freicontent_'+id).css("display")=="none"){min=true;}
if(min==true||freidefines.SET.draggable=='disable')
{if(div.hasClass("ui-draggable"))
div.draggable('disable');}
else
{div.dragx({handle:"#chatboxhead_"+id,id:id});}};FreiChat.clrcht=function(id)
{var CookieStatus=FreiChat.getCookie(id);if(CookieStatus.message!="clear")
{FreiChat.clrchtids.push(id);FreiChat.setCookie("frei_stat_"+id,CookieStatus.language+"&opened&max&clear&"+CookieStatus.pos_top+"&"+CookieStatus.pos_left);$jn("#chatboxcontent_"+id+" .frei_content").html("<font size='1' color='#A4A4A4'>"+freidefines.chatHistoryDeleted+"</font>");}
else
{$jn("#chatboxcontent_"+id+" .frei_content").html("<font size='1' color='#A4A4A4'>"+freidefines.chatHistoryNotFound+"</font>");}};FreiChat.frei_box_contain=function(id)
{var boxes_length=FreiChat.box_crt.length-1;var i=0,box_filled=false;for(i=0;i<=boxes_length;i++)
{if(!FreiChat.box_crt[i])
{FreiChat.box_crt[i]=true;FreiChat.box_crt_id[i]=id;FreiChat.box_count=i;box_filled=true;break;}}
if(!box_filled){if(FreiChat.cnt>=4)
{FreiChat.cnt=0;}
FreiChat.closeChatBox("frei_"+FreiChat.box_crt_id[FreiChat.cnt],FreiChat.cnt,false);FreiChat.box_count=FreiChat.cnt;FreiChat.box_crt_id[FreiChat.cnt]=id;FreiChat.box_crt[FreiChat.cnt]=true;FreiChat.cnt=FreiChat.cnt+1;}
return FreiChat.box_count;};FreiChat.freichatopt=function(opt)
{var users_length=freichatusers.length;if(FreiChat.ses_status==null)
{FreiChat.freistatus=1;}
var remove='false';if(FreiChat.freistatus==1){remove='frei_status_available';}else if(FreiChat.freistatus==2){remove='frei_status_invisible';}else if(FreiChat.freistatus>2){remove='frei_status_busy';}
if(remove!='false'){if(opt=="nooptions")
$jn('#'+remove).addClass("frei_status_options_selected");else
$jn('#'+remove).removeClass("frei_status_options_selected");}
if(opt=="nooptions")
{FreiChat.freiopt.slideToggle();return;}
else if(opt=="goOffline")
{FreiChat.freistatus=0;FreiChat.mainchat.hide();FreiChat.freiOnOffline.show();for(i=0;i<=users_length;i++)
{$jn("#frei_"+freichatusers[i]).hide();}}
else if(opt=="goOnline")
{$jn('#frei_status_available').addClass("frei_status_options_selected");$jn("#frei_option_bar_status_txt").html(freidefines.STATUS.TEXT.online);FreiChat.freistatus=1;if(FreiChat.freiopt.is(":visible")!=false){FreiChat.freiopt.slideUp();}
if(FreiChat.mainchat.is(":visible")==false)
{var i=0;FreiChat.mainchat.show();FreiChat.divfrei.html(freidefines.onfoffline);FreiChat.freiOnOffline.hide();for(i=0;i<=users_length;i++)
{$jn("#frei_"+freichatusers[i]).show();}
FreiChat.long_poll='false';}}
else if(opt=="goInvisible")
{FreiChat.freiopt.slideToggle();$jn('#frei_status_invisible').addClass("frei_status_options_selected");$jn("#frei_option_bar_status_txt").html(freidefines.STATUS.TEXT.invisible);FreiChat.freistatus=2;}
else if(opt=="goBusy")
{FreiChat.freiopt.slideToggle();$jn('#frei_status_busy').addClass("frei_status_options_selected");$jn("#frei_option_bar_status_txt").html(freidefines.STATUS.TEXT.busy);FreiChat.freistatus=3;}
else if(opt=="goTempBusy")
{$jn("#frei_option_bar_status_txt").html(freidefines.STATUS.TEXT.busy);$jn('#frei_status_busy').addClass("frei_status_options_selected");FreiChat.freistatus=4;FreiChat.inactive=true;}
else
{FreiChat.buglog("info","opt not defined on line 785 in freichat/client/freichat.js");}
FreiChat.util.storage.set("frei_mystatus",FreiChat.freistatus);if(FreiChat.freistatus!=FreiChat.ostatus)
{$jn.post(freidefines.GEN.url+"server/freichat.php?freimode=update_status",{xhash:freidefines.xhash,id:freidefines.GEN.getid,freistatus:FreiChat.freistatus},function(data){FreiChat.ostatus=FreiChat.freistatus=data.status;FreiChat.util.storage.set("frei_mystatus",FreiChat.freistatus);},'json');}};FreiChat.freichatTool=function(opt)
{if(opt=="nooptions")
{if(FreiChat.freiopt.is(":visible")==true)
{FreiChat.freiopt.slideUp();}}};FreiChat.restore_drag_pos=function()
{var right=["208px","432px","658px","884px"];var i=0;while(i<4){$jn("#freicontain"+i).dragx({restore:true,id:freichatusers,right:right[i]});i++;}};FreiChat.make_url=function(name,dir)
{var backslash="/";if(name.charAt(0)=='/'){backslash="";}
dir=typeof dir!=='undefined'?dir:freidefines.SET.theme;return freidefines.GEN.url+"client/themes/"+dir+backslash+name;};FreiChat.buglog=function(func,mesg)
{if(FreiChat.debug==true)
{if(func=="log")
{console.log(mesg);}
else if(func=="info")
{console.info(mesg);}
else if(func=="error")
{console.error(mesg);}
else
{console.error("Worng parameter (684)");}}};FreiChat.getCookie=function(id)
{var boxstatus=null;var stat_str=null;var values=[];stat_str=Get_Cookie("frei_stat_"+id);if(stat_str==false||typeof stat_str=="undefined"||stat_str==null)
{stat_str=null+"&closed&min&clear";boxstatus=stat_str.split("&");}
else
{boxstatus=stat_str.split("&");}
values.language=boxstatus[0];values.chatwindow_1=boxstatus[1];values.chatwindow_2=boxstatus[2];values.message=boxstatus[3];values.pos_top=boxstatus[4];values.pos_left=boxstatus[5];return values;};FreiChat.setCookie=function(name,value)
{Set_Cookie(name,value);};FreiChat.toggle_image=function(imgid,imgsrc)
{imgid++;imgsrc++;};FreiChat.show_plugins=function(user,id)
{var pluginhtml='';if(freidefines.PLUGINS.show_file_send=='true')
{if(FreiChat.plugins.is_allowed("FILE"))
{pluginhtml='<span id="freifilesend'+id+'"><a href="javascript:void(0)" onClick="FreiChat.upload(\''+user+'\',\''+id+'\')"><img class="frei_added_options_img" id="upload'+id+'" src="'+FreiChat.make_url(freidefines.uploadimg)+'" title='+freidefines.titles_upload+' alt="upload" /> </a></span>';}}
var is_chatroom=(id==FreiChat.in_room);if(FreiChat.plugins.is_allowed("FORMATTER")&&is_chatroom){pluginhtml+=FreiChat.plugins.formatter.get_html();}
var save_opt_chatroom="&mode=chatroom";if(!is_chatroom){pluginhtml+='<a title="'+freidefines.titles_clrcht+'" href="javascript:void(0)" onmousedown="FreiChat.clrcht(\''+id+'\')">                <img class="frei_added_options_img" id="clrcht'+id+'" src="'+FreiChat.make_url(freidefines.deleteimg)+'" alt="-" />                </a>   ';save_opt_chatroom="";}
if(freidefines.PLUGINS.showsmiley=='enabled')
{if(FreiChat.plugins.is_allowed("SMILEY"))
{if(!is_chatroom)
pluginhtml+='<span id="freismilebox"><span id="frei_smileys_'+id+'" class="frei_smileys">'+FreiChat.smileylist(id)+'</span>   </span>';pluginhtml+='<a href="javascript:void(0)" title="'+freidefines.titles_smiley+'" onclick="FreiChat.smiley(\''+id+'\')">                <img class="frei_added_options_img" id="smile_'+id+'" src="'+FreiChat.make_url(freidefines.smileyimg)+'" alt="-" />                </a>   ';}}
if(freidefines.PLUGINS.showsave=='enabled')
{if(FreiChat.plugins.is_allowed("SAVE"))
{pluginhtml+='<span id="save'+id+'"><a href="'+freidefines.GEN.url+'client/plugins/save/save.php?toid='+id+'&toname='+user+save_opt_chatroom+'" target="_blank"><img class="frei_added_options_img" id="save'+id+'" src="'+FreiChat.make_url(freidefines.saveimg)+'" title="'+freidefines.titles_save+'" alt="save" /> </a></span>';}}
if(freidefines.PLUGINS.showmail=='enabled')
{if(FreiChat.plugins.is_allowed("MAIL"))
{pluginhtml+='<span id="mailsend'+id+'"><a href="javascript:void(0)" onClick="FreiChat.sendmail(\''+user+'\',\''+id+'\')"><img class="frei_added_options_img" id="mail_'+id+'" src="'+FreiChat.make_url(freidefines.mailimg)+'" title='+freidefines.titles_mail+' alt="upload" /> </a></span>';}}
if(freidefines.PLUGINS.showvideochat=='enabled'&&id!==FreiChat.in_room)
{if(FreiChat.plugins.is_allowed("VIDEOCHAT"))
{pluginhtml+='<span id="videosend'+id+'"><a href="javascript:void(0)" onClick="FreiChat.sendvideo(\''+user+'\',\''+id+'\',1)"><img class="frei_added_options_img" id="mail_'+id+'" src="'+FreiChat.make_url(freidefines.videoimg)+'" title='+freidefines.titles_videochat+' alt="upload" /> </a></span>';}}
return pluginhtml;};FreiChat.attach_document_events=function()
{$jn(document).mousemove(function()
{FreiChat.inact_time=0;var offline=0;if(FreiChat.inactive&&FreiChat.freistatus!=offline)
{FreiChat.freichatopt("goOnline");FreiChat.inactive=false;}}).mouseup(function(e)
{var container=$jn('#frei_smileys_'+FreiChat.current_smiley_selected);if(!$jn(e.target).hasClass("frei_added_options_img"))
{container.hide();}
var cnt=$jn("#frei_chatroom_cp");if(cnt.has(e.target).length===0){cnt.hide();}});};FreiChat.showXtools=function(id,box_count)
{if($jn(FreiChat.datadiv).data("isvisible")=="true")
{$jn('#addedoptions_'+id).hide();$jn(FreiChat.datadiv).data("isvisible","false");}
else
{$jn('#addedoptions_'+id).show();$jn(FreiChat.datadiv).data("isvisible","true");}
FreiChat.freicontain[box_count].css("height",$jn('#frei_'+id).height());FreiChat.change_to_old_title(id);};FreiChat.show_chatroom_options=function()
{FreiChat.options_div.fadeToggle();};FreiChat.is_allowed=function(index){var me=(~~freidefines.GEN.is_guest)?'guest':'user';return(freidefines["ACL"][index][me]==="allow");};FreiChat.selfInvoke=function(jQuery)
{if(freidefines.GEN.custom_error_handling=='YES'){function addHandler(obj,evnt,handler){if(obj.addEventListener){obj.addEventListener(evnt.replace(/^on/,''),handler,false);}else{if(obj[evnt]){var origHandler=obj[evnt];obj[evnt]=function(evt){origHandler(evt);handler(evt);}}else{obj[evnt]=function(evt){handler(evt);}}}}
addHandler(window,'onerror',function(msg){console.log(msg);var date=new Date();var error="<br/><br/><div class='freichat_error_report'><b>["+date+"]</b> -- <em>@\""+msg.filename+"\"</em>  <div><span style='color:red'>"+msg.type+": "+msg.message+" </span> -- on line no <b>"+msg.lineno+"</b></div></div>";if(typeof freidefines.freichat_error_report=="undefined"){var style="<style>body{background:#efefef;}.freichat_error_report {min-height: 20px;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border: 1px solid rgba(0, 0, 0, 0.05);border-radius: 4px;box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);}</style>";var desc="<div class='freichat_error_report'><b>BOOT:</b> "+freidefines.GEN.BOOT+"<br/><b>jQuery loaded forcefully:</b> "+freidefines.GEN.force_load_jquery+"</div> "
freidefines.freichat_error_report=style+"<h2 style='text-align:center;'>FREICHAT ERROR REPORT</h2><br/>"+desc+"<br/>";}
freidefines.freichat_error_report+=error;return true;});}
if(freidefines.mobile==1)
return;if(X_init==false)
{jQuery.noConflict(freidefines['jconflicts']);soundManager.url=freidefines.GEN.url+"client/jquery/img/";$jn=jQuery;$jn(window).load(function(){soundManager.onready(function()
{if(soundManager.supported())
{FreiChat.beep=soundManager.createSound({id:'mySound',url:freidefines.GEN.url+"client/jquery/img/newmsg.mp3"});}
else
{FreiChat.buglog("info","SoundManager does not support your system");}});FreiChat.oldtitle=document.title;FreiChat.attach_document_events();FreiChat.setInactivetime();FreiChat.init_process_freichatX();FreiChat.sound_enabled=Get_Cookie('frei_sound');});X_init=true;}}(jQuery);FreiChat.get_ie_ver=function(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null)
rv=parseFloat(RegExp.$1);}
return rv;};FreiChat.init_chatrooms=function()
{var auto_close=false;if(freidefines.PLUGINS.chatroom_autoclose=="true")
auto_close=true;FreiChat.chatroom.dcSlick({location:freidefines.PLUGINS.chatroom_location,classWrapper:'frei_chatroom',classContent:'frei_chatroom-content',align:'left',offset:freidefines.PLUGINS.chatroom_offset,speed:'slow',classTab:'frei_tab',tabText:freidefines.TRANS.chatroom_label,autoClose:auto_close});var frei_tab=$jn(".frei_tab");var position_shift="top";if(freidefines.PLUGINS.chatroom_location=="top"||freidefines.PLUGINS.chatroom_location=="bottom"){position_shift="left";}
var margin_direction="margin-left";$jn("#frei_chatroom_notify").css(freidefines.PLUGINS.chatroom_location,"100%").css("margin-"+freidefines.PLUGINS.chatroom_location,"4px");if(freidefines.PLUGINS.chatroom_location=="left"){margin_direction="margin-right";}
else if(freidefines.PLUGINS.chatroom_location=="top"){margin_direction="margin-bottom";}
else if(freidefines.PLUGINS.chatroom_location=="bottom"){margin_direction="margin-top";}
if(freidefines.PLUGINS.chatroom_rotate!="0"){var ie_ver=FreiChat.get_ie_ver();if(ie_ver===-1||(ie_ver!==-1&&ie_ver>8.0)){var degrees=freidefines.PLUGINS.chatroom_rotate;var delta=3;var margin_shift="-"+(2*frei_tab.outerHeight()+delta)+"px";frei_tab.css({'-webkit-transform':'rotate('+degrees+'deg)','-moz-transform':'rotate('+degrees+'deg)','-ms-transform':'rotate('+degrees+'deg)','-o-transform':'rotate('+degrees+'deg)','transform':'rotate('+degrees+'deg)','zoom':1}).css(margin_direction,margin_shift);}}
frei_tab.css(position_shift,freidefines.PLUGINS.chatroom_label_offset);var selected_chatroom=Get_Cookie('selected_chatroom');if(selected_chatroom==null){selected_chatroom=1;}
FreiChat.in_room=selected_chatroom;FreiChat.my_name="<div class='frei_room_n_online'>"+freidefines.chatroom_nolinemesg+"</div>";$jn('#frei_userpanel').html(FreiChat.my_name);FreiChat.set_smileys();$jn('#frei_chatroom_lobby_btn').click(function(){FreiChat.load_lobby();});FreiChat.frei_tab=$jn('.frei_tab');FreiChat.frei_tab.click(FreiChat.frei_tab_click);$jn('#frei_chatroom_back_btn').click(function(){$jn('.frei_tab').trigger("click");if(FreiChat.chatroom_notify_div.is(":visible")){FreiChat.chatroom_notify();}});FreiChat.options_div=$jn('#frei_chatroom_tools');$jn('.frei_chatroom_notify_close').click(function(){FreiChat.chatroom_notify();});FreiChat.frei_chatroom_cnt=$jn(".frei_chatroom-content");FreiChat.chatroom_notify_div=$jn("#frei_chatroom_notify");FreiChat.chatroom_notify_cnt=$jn(".frei_chatroom_notify_content");FreiChat.chatroom_notify_div.css({"width":0,"padding":0});FreiChat.frei_chatroom_cnt.hide();FreiChat.chatroom_notify_timer=false;$jn('#frei_create_chatroom').click(function(){$jn('#frei_roomtitle').html(freidefines.TRANS.create_chatroom_title);$jn('#frei_chatroom_creator').show();$jn('#frei_roompanel').hide();$jn('#frei_chatroom_creator_input').focus();});$jn('#frei_chatroom_creator_cancel').click(function(){$jn('#frei_chatroom_creator').hide();$jn('#frei_roompanel').show();});$jn('#frei_chatroom_creator_create').click(function(){FreiChat.create_chatroom(false);});$jn('#frei_chatroom_creator').hide();$jn("#frei_chatroom_creator_check").change(function(){if($jn(this).is(":checked")){$jn("#frei_chatroom_creator_password").show();}else{$jn("#frei_chatroom_creator_password").hide();}});$jn("#frei_chatroom_creator_password").hide();};FreiChat.create_chatroom=function(is_mobile){var name,password='';if($jn("#frei_chatroom_creator_check").is(":checked")){password=$jn("#frei_chatroom_creator_password").val();}
name=$jn.trim($jn('#frei_chatroom_creator_input').val());$jn.post(freidefines.GEN.url+"server/freichat.php?freimode=create_chatroom",{name:name,password:password,xhash:freidefines.xhash,id:freidefines.GEN.getid},function(id){if(id!="0"){$jn('#frei_chatroom_creator').hide();if(is_mobile){FreiChat.open_panel(name,id,'chatroom')}else{FreiChat.loadchatroom(name,id);}
$jn('#frei_chatroom_creator_input').val('');$jn("#frei_chatroom_creator_password").val('');$jn('#frei_chatroom_creator_error').hide();}else{$jn('#frei_chatroom_creator_error').show();}});};FreiChat.delete_chatroom=function(room_id,e){e.stopPropagation();$jn.post(freidefines.GEN.url+"server/freichat.php?freimode=delete_chatroom",{room_id:room_id,xhash:freidefines.xhash,id:freidefines.GEN.getid},function(){var obj="FreiChat";if(freidefines.mobile=="1"){obj="mobile";}
$jn('#frei_lobby_room_'+room_id).fadeIn().remove();var len=window[obj].room_array.length;for(var i=0;i<len;i++){if(window[obj].room_array[i].room_id==room_id){window[obj].room_array.splice(i,1);break;}}});return false;};FreiChat.validate_chatroom_pass=function(cht,password,is_mobile){$jn.post(freidefines.GEN.url+"server/freichat.php?freimode=validate_chatroom_password",{xhash:freidefines.xhash,id:freidefines.GEN.getid,password:password,room_id:cht[1]},function(data){if(data==="correct"){if(is_mobile){FreiChat.open_panel(cht[0],cht[1],cht[2],cht[3]);}else
FreiChat.loadchatroom(cht[0],cht[1],cht[2]);}else{alert("the entered password is wrong!");}});};FreiChat.frei_tab_click=function(){var hide=false;if(FreiChat.frei_tab.is(":visible")){FreiChat.frei_chatroom_cnt.show();}else{hide=true;}
FreiChat.frei_tab.fadeToggle(function(){if(FreiChat.jscrollers.indexOf("frei_chatroommsgcnt")===-1)
FreiChat.create_scrollbar("frei_chatroommsgcnt");if(hide){setTimeout(function(){FreiChat.frei_chatroom_cnt.hide()},100);}});};FreiChat.chatroom_notify=function(txt){var width=0,padding=0;if(typeof txt!=="undefined"){if(txt===""){txt=freidefines.TRANS.new_chatroom_message+"<br/>";txt+="&nbsp;<em>"+FreiChat.room_array[FreiChat.in_room].room_name+"</em>";}
FreiChat.chatroom_notify_cnt.html(txt);width="200px";padding="8px 10px 9px";}
FreiChat.chatroom_notify_div.animate({width:width,padding:padding},function(){FreiChat.chatroom_notify_timer=false;});if(width!==0&&!FreiChat.chatroom_notify_timer)
FreiChat.chatroom_notify_timer=setTimeout(function(){FreiChat.chatroom_notify();},3000);};FreiChat.set_smileys=function(){var smileys=$jn('#frei_smileys_chatroom');var smile=$jn('#frei_smiley_chatroom_select');var isin=false;smile.mouseenter(function(){isin=true;}).mouseleave(function(){isin=false;});$jn(document).click(function(){if(smileys.hasClass('inline')&&isin==false)
{smileys.css('display','none').removeClass('inline').addClass('none');}});};FreiChat.chatroom_off=function(){$jn("#dc-slick-9").hide();};FreiChat.send_chatroom_message=function(textarea_div){FreiChat.on_enter_press(null,textarea_div,FreiChat.in_room,null,'chatroom');};FreiChat.load_lobby=function(){$jn('#frei_lobby').show();$jn('#frei_chatroompanel').hide();$jn('#frei_roomtitle').html(freidefines.TRANS.chatroom_lobby);$jn('#frei_chatroom_lobby_btn').hide();$jn('#frei_roompanel').show();Set_Cookie('selected_chatroom',"-1");FreiChat.create_scrollbar("frei_roompanel");};FreiChat.loadchatroom=function(title,id,type,me)
{if((type==1||type==3)&&typeof me!=="undefined"){var reply=FreiChat.show_prompt("Enter chatroom password");if(reply){var cht=[title,id,type,me,false];FreiChat.validate_chatroom_pass(cht,reply,false);}
return;}
FreiChat.chatroom_changed=true;FreiChat.in_room=id;FreiChat.title=title;FreiChat.last_chatroom_usr_id=null;FreiChat.setCookie('selected_chatroom',id);$jn('#frei_roomtitle').html(FreiChat.title);$jn('#frei_lobby').hide();$jn('#frei_chatroompanel').show();$jn('#frei_chatroom_lobby_btn').show();$jn.getJSON(freidefines.GEN.url+"server/freichat.php?freimode=loadchatroom",{xhash:freidefines.xhash,id:freidefines.GEN.getid,first:FreiChat.first,time:FreiChat.time,chatroom_mesg_time:FreiChat.chatroom_mesg_time,custom_mesg:FreiChat.custom_mesg,in_room:id},function(data){if(data.time!=null)
{FreiChat.time=data.time;}
if(data.chatroom_mesg_time!=null)
{FreiChat.chatroom_mesg_time=data.chatroom_mesg_time;}
FreiChat.chatroom_users[data.in_room]=FreiChat.create_chatroom_users(data.chatroom_users_array);FreiChat.usercreator(data.in_room);if($jn('#dc-slick-9').hasClass('active')&&FreiChat.first!=false){FreiChat.append_chatroom_message_div(data.chatroom_messages,'clear');}},'json');FreiChat.roomcreator();var plugins=FreiChat.show_plugins(FreiChat.in_room,FreiChat.in_room);FreiChat.options_div.html(plugins);FreiChat.plugins.formatter.load();if(typeof me!=="undefined")
$jn('#chatroommessagearea').focus();};FreiChat.append_chatroom_message_div=function(messages,type){if(typeof type=='undefined'){type='nclear';}
var message_length=messages.length;var i=0;var message='';var scroll_to_top=false;var div=$jn("#frei_chatroommsgcnt .frei_content");var first_message=FreiChat.last_chatroom_msg_type[FreiChat.in_room];if(FreiChat.first_message==false){first_message=false;}else
{first_message=true;}
var local_in_room=FreiChat.in_room;var message_type=FreiChat.last_chatroom_msg_type[FreiChat.in_room];if(type=='clear'){div.html('');}
for(i=0;i<message_length;i++){FreiChat.chatroom_written[FreiChat.in_room]=true;if(first_message==true){message_type=true;}
if(messages[i].from==FreiChat.last_chatroom_usr_id&&FreiChat.chatroom_written[FreiChat.in_room]==true){$jn('#'+FreiChat.last_chatroom_msg_id).append("<br/>"+messages[i].message);scroll_to_top=true;}else
{var from_name=messages[i].from_name;if(from_name==freidefines.GEN.fromname){from_name=freidefines.TRANS.chat_message_me;}
message='<div id = "'+messages[i].room_id+'_chatroom_message"  class="frei_chatroom_message"><span style="display:none" id="'+local_in_room+'_message_type">LEFT</span>\n\
                <div class="chatroom_messagefrom_left"><span>'+from_name+'</span><span class="freichat_time" style="visibility:visible;padding-right:15px">'+FreiChat.getlocal_time(messages[i].GMT_time)+'</span></div>\n\
                <div id="room_msg_'+FreiChat.unique+'" class="frei_chatroom_msgcontent">'+messages[i].message+'</div>\n\
                </div>';div.append(message);scroll_to_top=true;FreiChat.last_chatroom_msg_id='room_msg_'+FreiChat.unique;FreiChat.unique++;first_message=false;FreiChat.last_chatroom_usr_id=messages[i].from;message_type=!message_type;}}
FreiChat.last_chatroom_msg_type[FreiChat.in_room]=message_type;if(scroll_to_top){FreiChat.scroll_down("frei_chatroommsgcnt",false);}
FreiChat.first_message=false;};FreiChat.usercreator=function(id)
{if(FreiChat.chatroom_users[id]){$jn('#frei_userpanel').html(FreiChat.chatroom_users[id]);}};FreiChat.create_chatroom_users=function(chatroom_users){var len=chatroom_users.length,i=0,userdiv='';userdiv='<div id="frei_userlist" class="frei_userlist frei_userlistme" >\n\
     <span class="freichat_userscontentname">'+freidefines.GEN.fromname+'</span>\n\
     </div>';for(i=0;i<len;i++){userdiv+='<div onmousedown=\'FreiChat.create_chat_window_mesg("'+chatroom_users[i]['username']+'","'+chatroom_users[i]['userid']+'")\' id="frei_userlist" class="frei_userlist" ">\n\
                            <span class="freichat_chatroom_avatar"><img src="'+chatroom_users[i]['avatar']+'"  alt="avatar" align="left" class="freichat_userscontentavatarimage"/></span>\n\
                            <span class="freichat_userscontentname">'+chatroom_users[i]['username']+'</span>\n\
                            <span >&nbsp;<img class ="freichat_userscontentstatus" src="'+chatroom_users[i]['img_url']+'" height="12" width="12" alt="status" /></span>\n\
                    </div>';}
return userdiv;};FreiChat.roomcreator=function()
{var sel_class='frei_lobby_room';var i=0;var rooms="";var del,lock,room_name;for(i=0;i<FreiChat.room_array.length;i++)
{del='';lock='';room_name=FreiChat.room_array[i].room_name.replace(/&#039;/g,"\\'");if(FreiChat.in_room==FreiChat.room_array[i].room_id&&FreiChat.in_room!=-1)
{sel_class='frei_selected_room';}
else{sel_class='frei_lobby_room';}
rooms+='<div id="frei_lobby_room_'+FreiChat.room_array[i].room_id+'" class="'+sel_class+'"  onclick="FreiChat.loadchatroom(\''+room_name+'\','+FreiChat.room_array[i].room_id+', '+FreiChat.room_array[i].room_type+', this)" >\n\
                    <span class="frei_lobby_room_1">'+FreiChat.room_array[i].room_name+'</span>';if(FreiChat.room_online_count[i].online_count==0&&FreiChat.in_room==FreiChat.room_array[i].room_id){rooms+='<span class="frei_lobby_room_2"><span id="room_new_messages_'+FreiChat.room_array[i].room_id+'">1</span> online</span>';}
else
{rooms+='<span class="frei_lobby_room_2"><span id="room_new_messages_'+FreiChat.room_array[i].room_id+'">'+FreiChat.room_online_count[i].online_count+'</span> online</span>';}
if(FreiChat.room_array[i].room_author==freidefines.GEN.fromid){del='<a onclick="FreiChat.delete_chatroom(\''+FreiChat.room_array[i].room_id+'\',event)">Delete</a>';}
if(FreiChat.room_array[i].room_type==1||FreiChat.room_array[i].room_type==3){lock="<img src='"+FreiChat.make_url(freidefines.lockedimg)+"' />";}
rooms+='<span class="frei_lobby_room_3">'+del+'</span>\n\
                    <span class="frei_lobby_room_4">'+lock+'</span>\n\
                    <div style="clear:both"></div></div>';}
$jn('#frei_roompanel .frei_content').html(rooms);};FreiChat.update_room_online_cnt=function(old_cnt,new_cnt,room_array){var len=new_cnt.length;var o_len=old_cnt.length;var container,cnt;var check=(len===o_len);for(var i=0;i<len;i++){container=$jn("#room_new_messages_"+room_array[i].room_id);cnt=new_cnt[i].online_count;if((check&&cnt!==old_cnt[i].online_count)||(!check)){container.html(cnt);}}};FreiChat.modify_room_array=function(obj){$jn.getJSON(freidefines.GEN.url+"server/freichat.php?freimode=get_rooms",{xhash:freidefines.xhash,id:freidefines.GEN.getid,},function(data){window[obj].room_array=data.rooms;window[obj].room_online_count=data.online_cnt;if(freidefines.mobile=="1"){fill_room_data();}else{FreiChat.roomcreator();}},'json');};
/* Updated 9 January 2014 8:26 am FreiChatX  V.9.6 */