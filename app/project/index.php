<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>XXXXXXXXXXX | READYFOR</title>
<meta name="viewport" content="width=device-width">
<meta name="keywords" content="READYFOR,レディーフォー,クラウドファンディング,ソーシャルファンディング,資金調達,クリエーター">
<meta name="description" content="READYFORは日本で最初のそして最大のクラウドファンディングサービスです。共感をテーマに、社会をよくするクリエイティブな活動や新しいことに挑戦する人々を応援するプラットフォームです。">

<meta property="og:title" content="READYFOR (レディーフォー)">
<meta property="og:site_name" content="READYFOR (レディーフォー)">
<meta property="og:type" content="website">
<meta property="og:url" content="https://readyfor.jp/">
<meta property="og:image" content="https://readyfor.jp/images/screenshot-20150417.png">
<meta property="og:description" content="READYFORは日本で最初のそして最大のクラウドファンディングサービスです。共感をテーマに、社会をよくするクリエイティブな活動や新しいことに挑戦する人々を応援するプラットフォームです。">

<link rel="stylesheet" href="/css/style.css">
<!--[if lt IE 9]>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->
</head>

<body>
<div class="Site-container" data-page-container>

  <? require_once '../php/header.php'; ?>

  <div class="Overlay">
    <? require_once '../php/signup_modal.php'; ?>
    <? require_once '../php/login_modal.php'; ?>
  </div>

  <article class="Page-body">

    <div class="Project-visual Container u-mb_40 u-clrfix">
      <div class="Project-visual__main u-clrfix">
        <div class="Project-visual__img">
          <div class="Project-visual__img-mask">
            <img src="../images/common/thumb_sample.jpg" alt="">
          </div>
        </div>
        <div class="Project-visual__body">

          <div class="Project-visual__conditions">

            <!-- サポーターありの場合
            <dl class="Project-visual__condition u-fs_20">
              <dt class="Project-visual__condition-dt is-sum">達成金額</dt>
              <dd class="Project-visual__condition-dd is-sum">500,000円</dd>
            </dl>
            -->

            <!-- サポーター無の場合 -->
            <dl class="Project-visual__condition u-fs_20">
              <dt class="Project-visual__condition-dt is-sum">達成金額</dt>
              <dd class="Project-visual__condition-dd is-nosupporter">
                <a href="#">支援者になる</a>
              </dd>
            </dl>
            <!-- /サポーター無の場合 -->

            <div>
              <dl class="Project-visual__condition u-fs_16">
                <dt class="Project-visual__condition-dt">
                  <span class="Icon-notachivement u-mr_10"></span><span class="u-valign_m">目標金額</span>
                </dt>
                <dd class="Project-visual__condition-dd u-font-en">2,000,000円</dd>
              </dl>
              <dl class="Project-visual__condition u-fs_16">
                <dt class="Project-visual__condition-dt">
                  <span class="Icon-achivement u-mr_10"></span><span class="u-valign_m">第一目標金額</span>
                </dt>
                <dd class="Project-visual__condition-dd u-em u-font-en">2,000,000円</dd>
              </dl>
            </div>

            <div class="u-mt_20">
              <dl class="Project-visual__condition u-fs_16">
                <dt class="Project-visual__condition-dt">支援者数</dt>
                <dd class="Project-visual__condition-dd u-font-en">432人</dd>
              </dl>
              <dl class="Project-visual__condition u-fs_16">
                <dt class="Project-visual__condition-dt">残り日数</dt>
                <dd class="Project-visual__condition-dd u-font-en">5日</dd>
              </dl>
            </div>

          </div>

          <div class="Project-visual__gauge Gauge u-mt_20">
            <div class="Gauge__obj is-1" style="width:75%"></div>
            <div class="Gauge__obj is-0" style="width:50%"></div>
            <div class="Gauge__txt">124%</div>
          </div>

          <a href="#" class="Btn-1 is-no-shadow u-fit-w u-mt_30">
            <div class="Btn-1__inner">
              <div class="Btn-1__content">
                <div class="Btn-1__txt u-fs_20">このプロジェクトを支援する</div>
              </div>
            </div>
          </a>

          <div class="u-em u-fs_18 u-font_b u-align_c u-mt_20">
            <span class="Icon-plus u-mr_5"></span><span class="u-valign_m">気になるリストに追加する</span>
          </div>

          <!--
          失敗時
          <div class="Project-visual__alert is-miss u-mt_30">
            <span class="u-fs_20 u-font_b">プロジェクトは終了しました</span><br>
            <span class="u-fs_16">2015年8月31日に成立</span>
          </div>

          成功時
          <div class="Project-visual__alert is-complete u-mt_30">
            <span class="u-fs_20 u-font_b">プロジェクトは終了しました</span><br>
            <span class="u-fs_16">2015年8月31日に成立</span>
          </div>
          -->

        </div>
      </div>
      <h1 class="Project-visual__title">
        月刊誌「視覚障害」の廃刊危機を乗り越え継続して発刊したい！
      </h1>
    </div>

    <footer class="Project-addition Container u-mb_30">
      <aside class="Project-addition__item is-0 Project-addition__sns u-clrfix">
        <!-- sns code -->
      </aside>
      <div class="Project-addition__item is-1">
        <p class="Project-addition__conditon">
        このプロジェクトは7月23日（木）午後11:00の時点で、12,000,000円以上集まった場合のみ、決済が完了されます。
      </p>
      </div>
    </footer>

    <div class="Container">

      <div class="Page-main is-type0 u-fl_l" role="main">

        <!-- Tab -->
        <div class="Project-tab Tab">

          <!-- Tab__menu -->
          <ul class="Project-tab__menu Tab__menu u-clrfix">
            <li class="Tab__menu-i">
              <a href="#" class="Tab__menu-a is-active">
                <span class="Tab__menu-txt">プロジェクト概要</span>
              </a>
            </li>
            <li class="Tab__menu-i">
              <a href="#" class="Tab__menu-a is-inactive">
                <span class="Tab__menu-txt">更新情報</span><span class="Tab__menu-icon Icon-num">14</span>
              </a>
            </li>
            <li class="Tab__menu-i">
              <a href="#" class="Tab__menu-a is-inactive">
                <span class="Tab__menu-txt">応援コメント</span><span class="Tab__menu-icon Icon-num">148</span>
              </a>
            </li>
          </ul>
          <!-- /Tab__menu -->

          <!-- Tab__contents -->
          <div class="Tab__contents">
            <!-- 概要 -->
            <section class="Project-outline Tab__content">
              <h1 class="u-d_none">プロジェクト概要</h1>

              <h2 class="u-font_b u-mb_35">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h2>
              <p class="u-mb_35">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <h2 class="u-font_b u-mb_35">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h2>
              <p class="u-mb_35">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <h2 class="u-font_b u-mb_35">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h2>
              <p class="u-mb_35">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <figure class="u-mb_35">
                <img src="../images/project/project_outline_sample.jpg" width="610" height="458" alt="">
                <figcaption class="u-mt_15">キャプションキャプションキャプションキャプションキャプション</figcaption>
              </figure>

              <h2 class="u-font_b u-mb_35">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h2>
              <p class="u-mb_35">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

            </section>
            <!-- /概要 -->

            <!-- 更新情報 -->
            <section class="Project-update Tab__content">
              <h1 class="u-d_none">更新情報</h1>

              <article class="Project-update__main">
                <header class="Project-update__header">
                  <time pubdate="2015-6-16" class="Project-update__header-date">2015年6月16日</time>
                  <h1 class="Project-update__header-h u-em">大阪でのコンサートの報告です</h1>
                </header>
                <div class="Project-update__sns u-mb_30 u-clrfix">
                  sns code
                </div>
                <div class="Project-update__content">
                  <p class="u-mb_30">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                  <figure class="u-mb_30">
                    <img src="../images/project/project_update_sample.jpg" width="610" height="408" alt="">
                  </figure>
                  <figure class="u-mb_30">
                    <img src="../images/project/project_update_sample.jpg" width="610" height="408" alt="">
                  </figure>
                  <figure class="u-mb_30">
                    <img src="../images/project/project_update_sample.jpg" width="610" height="408" alt="">
                  </figure>
                  <p class="u-mb_30">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="Project-update__sns u-mb_30 u-clrfix">
                  sns code
                </div>

                <div class="fb-comments" data-href="https://readyfor.jp/" data-numposts="5" data-width="100%"></div>

              </article>

              <aside class="Project-update__related">
                <article class="Project-update__related-item Media">
                  <div class="Project-update__related-item-img Media__img">
                    <img src="../images/project/project_update_related_sample.jpg" width="120" height="120" alt="">
                  </div>
                  <div class="Project-update__related-item-main Media__body">
                    <header class="Project-update__related-item-header">
                      <time pubdate="2015-6-30" class="Project-update__related-item-header-date">2015年06月30日</time>
                      <h1 class="Project-update__related-item-header-h">
                        <a href="#" class="u-font_b">タイトルタイトルタイトル</a>
                      </h1>
                    </header>
                    <div  class="Project-update__related-item-body">
                      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    </div>
                    <footer class="Project-update__related-item-footer">
                      <a href="#">続きを見る</a> / <a href="#">コメントする</a>
                    </footer>
                  </div>
                </article>
                <article class="Project-update__related-item Media">
                  <div class="Project-update__related-item-img Media__img">
                    <img src="../images/project/project_update_related_sample.jpg" width="120" height="120" alt="">
                  </div>
                  <div class="Project-update__related-item-main Media__body">
                    <header class="Project-update__related-item-header">
                      <time pubdate="2015-6-30" class="Project-update__related-item-header-date">2015年06月30日</time>
                      <h1 class="Project-update__related-item-header-h">
                        <a href="#" class="u-font_b">タイトルタイトルタイトル</a>
                      </h1>
                    </header>
                    <div  class="Project-update__related-item-body">
                      <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                    </div>
                    <footer class="Project-update__related-item-footer">
                      <a href="#">続きを見る</a> / <a href="#">コメントする</a>
                    </footer>
                  </div>
                </article>
              </aside>

            </section>
            <!-- /更新情報 -->

            <!-- 応援コメント -->
            <section class="Project-cheer Tab__content">
              <h1 class="u-d_none">応援コメント</h1>
              <article class="Project-cheer__comment Media">
                <div class="Project-cheer__comment-img Media__img">
                  <img src="../images/project/project_cheer_icon_default_0.jpg" width="60" height="60" alt="">
                </div>
                <div class="Project-cheer__comment-main Media__body">
                  <header class="Project-cheer__comment-header u-clrfix">
                    <h1 class="u-d_ib"><b class="u-em">sankyoh</b>さん</h1>
                    <time pubdate="2015-6-30">2015年06月30日</time>
                    <div class="u-fl_r">
                      <span class="Icon-plus u-mr_5"></span>他に5個のプロジェクトを支援中！
                    </div>
                  </header>
                  <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
              </article>
              <article class="Project-cheer__comment Media">
                <div class="Project-cheer__comment-img Media__img">
                  <img src="../images/project/project_cheer_icon_default_0.jpg" width="60" height="60" alt="">
                </div>
                <div class="Project-cheer__comment-main Media__body">
                  <header class="Project-cheer__comment-header u-clrfix">
                    <h1 class="u-d_ib"><b class="u-em">sankyoh</b>さん</h1>
                    <time pubdate="2015-6-30">2015年06月30日</time>
                    <div class="u-fl_r">
                      <span class="Icon-plus u-mr_5"></span>他に5個のプロジェクトを支援中！
                    </div>
                  </header>
                  <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
              </article>
            </section>
            <!-- /応援コメント -->

          </div>
          <!-- /Tab__contents -->

        </div>
        <!-- /Tab -->

      </div>

      <div class="Sidebar is-type0 u-fl_r">

        <aside class="Project-promoter Side-area-0 u-mb_20">
          <h1 class="u-d_none">プロモーター</h1>
          <div class="Project-promoter__media Media">
            <div class="Project-promoter__media-img Media__img">
              <img src="../images/project/project_author_sample.jpg" width="110" height="110" alt="">
            </div>
            <div class="Project-promoter__media-body Media__body">
              <a href="#">
                <h1 class="u-fs_18 u-font_b">今村彩子</h1>
                <p>メッセージを送る</p>
              </a>
            </div>
          </div>
          <p class="Project-promoter__outline">
            映画監督。20歳の時からドキュメンタリー映画を撮り続けている。自転車とボルダリングが好き。
          </p>
        </aside>

        <section class="Project-return Side-area-1 u-mb_20">
          <h1 class="u-mb_15">
            <b class="u-fs_20 u-font-en u-font_b">&yen;3,000</b> <span class="u-fs_16">のリターン</span>
          </h1>
          <p class="u-fs_16 u-mb_15">
            リターンのタイトルが入ります。リターンのタイトルが入ります。リターンのタイトルが入ります。
          </p>
          <div class="u-mb_15">
            <img src="../images/project/project_return_sample.jpg" width="300" height="225" alt="">
          </div>
          <p class="u-mb_30">
            詳細説明が入ります。詳細説明が入ります。
            詳細説明が入ります。詳細説明が入ります。
            詳細説明が入ります。詳細説明が入ります。
          </p>
          <ul class="Project-return__condition">
            <li class="u-mb_10">
              <span class="Icon-supporter u-mr_10"></span><span class="u-valign_m">33人が支援中 / 在庫制限無し</span>
            </li>
            <li class="u-mb_10">
              <span class="Icon-shipment u-mr_10"></span><span class="u-valign_m">2015年12月発送予定</span>
            </li>
          </ul>
          <a href="#" class="Btn-1 is-no-shadow u-fit-w u-mt_20">
            <div class="Btn-1__inner">
              <div class="Btn-1__content">
                <div class="Btn-1__txt">このリターンを購入する</div>
              </div>
            </div>
          </a>
        </section>

        <section class="Project-return Side-area-1">
          <h1 class="u-mb_15">
            <b class="u-fs_20 u-font-en u-font_b">&yen;3,000</b> <span class="u-fs_16">のリターン</span>
          </h1>
          <p class="u-fs_16 u-mb_15">
            リターンのタイトルが入ります。リターンのタイトルが入ります。リターンのタイトルが入ります。
          </p>
          <div class="u-mb_15">
            <img src="../images/project/project_return_sample.jpg" width="300" height="225" alt="">
          </div>
          <p class="u-mb_30">
            詳細説明が入ります。詳細説明が入ります。
            詳細説明が入ります。詳細説明が入ります。
            詳細説明が入ります。詳細説明が入ります。
          </p>
          <ul class="Project-return__condition">
            <li class="u-mb_10">
              <span class="Icon-supporter u-mr_10"></span><span class="u-valign_m">33人が支援中 / 在庫制限無し</span>
            </li>
            <li class="u-mb_10">
              <span class="Icon-shipment u-mr_10"></span><span class="u-valign_m">2015年12月発送予定</span>
            </li>
          </ul>
          <a href="#" class="Btn-1 is-no-shadow u-fit-w u-mt_20">
            <div class="Btn-1__inner">
              <div class="Btn-1__content">
                <div class="Btn-1__txt">このリターンを購入する</div>
              </div>
            </div>
          </a>
        </section>

      </div>

    </div>

  </article>

  <div class="Site-scroller Container">
    <div class="Site-scroller__main is-type1">
      <div class="Site-scroller__set">
        <a href="#" class="Site-scroller__return">リターンを選択</a>

        <div class="Site-scroller__sns">
          <!-- @FIX_ME 該当ページのURLを指定してください -->
          <div class="Site-scroller__sns-fb">
            <a class="fb-like" data-href="https://readyfor.jp/" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false">
              facebookでシェア
            </a>
          </div>
          <div class="Site-scroller__sns-tw">
            <a href="https://twitter.com/share" class="twitter-share-button" data-text="READYFOR?（レディーフォー）は実行者を支援する日本初のクラウドファンディングです。" data-url="https://readyfor.jp/" data-count="vertical" data-via="ready_for" data-lang="ja">Tweet</a>
          </div>
        </div>

      </div>
      <a href="#" class="Site-scroller__pagetop is-type1">このページのTOPへ</a>
    </div>
  </div>

  <? require_once '../php/footer.php'; ?>

</div>

<? require_once '../php/common_script.php'; ?>
</body>
</html>