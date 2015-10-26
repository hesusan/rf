<!--
  @TO_DO
  現行サイトの流用です。
  トラッキングコード等は別途コピーをお願いします
-->
<script>
  window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
  }(document, "script", "twitter-wjs"));

  // Wait for the asynchronous resources to load
  twttr.ready(function(twttr) {
    //_ga.trackTwitter(); //Google Analytics tracking
  });
</script>

<!--
  @NOTE
  最新バージョンになっているため、旧バージョンの機能を使う場合は変更を
-->
<div id="fb-root"></div>
<script>
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.4";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>

<script src="/sp/js/common.js"></script>