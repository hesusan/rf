<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="UTF-8">
<title>プロジェクトページサンプル | READYFOR</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<meta name="keywords" content="READYFOR,レディーフォー,クラウドファンディング,ソーシャルファンディング,資金調達,クリエーター">
<meta name="description" content="READYFORは日本で最初のそして最大のクラウドファンディングサービスです。共感をテーマに、社会をよくするクリエイティブな活動や新しいことに挑戦する人々を応援するプラットフォームです。">

<meta property="og:title" content="READYFOR (レディーフォー)">
<meta property="og:site_name" content="READYFOR (レディーフォー)">
<meta property="og:type" content="website">
<meta property="og:url" content="https://readyfor.jp/">
<meta property="og:image" content="https://readyfor.jp/images/screenshot-20150417.png">
<meta property="og:description" content="READYFORは日本で最初のそして最大のクラウドファンディングサービスです。共感をテーマに、社会をよくするクリエイティブな活動や新しいことに挑戦する人々を応援するプラットフォームです。">

<link rel="stylesheet" href="../css/style.css">
</head>

<body>
<div class="Site-container" data-page-container>

  <? require_once '../php/header.php'; ?>

  <div class="Overlay u-d_none">
    <? require_once '../php/signup_modal.php'; ?>
    <? require_once '../php/login_modal.php'; ?>
  </div>

  <section class="Page-body">

    <h1 class="u-d_none">プロジェクト</h1><!-- @TO_DO プロジェクトのタイトルを入れてください -->

    <div class="Project-tab Tab">

      <!-- Tab__menu -->
      <ul class="Project-tab__menu Tab__menu u-clrfix">
        <li class="Tab__menu-i">
          <a href="#" class="Tab__menu-a is-active">
            <span class="Tab__menu-txt">概要</span>
          </a>
        </li>
        <li class="Tab__menu-i">
          <a href="#" class="Tab__menu-a is-inactive">
            <span class="Tab__menu-txt">更新情報</span><span class="Tab__menu-icon Icon-num">14</span>
          </a>
        </li>
        <li class="Tab__menu-i">
          <a href="#" class="Tab__menu-a is-inactive">
            <span class="Tab__menu-txt">コメント</span><span class="Tab__menu-icon Icon-num">148</span>
          </a>
        </li>
      </ul>
      <!-- /Tab__menu -->

      <!-- Tab__contents -->
      <div class="Tab__contents">

        <!-- 概要 -->
        <section class="Project-outline Tab__content">

          <h1 class="u-d_none">プロジェクト概要</h1>

          <div class="Project-outline__main">

            <div class="Project-outline__visual">
              <!-- エントリーイメージ -->
              <img src="../images/project/project_outline_sample.jpg" class="Project-outline__visual-img u-fit-img-w">
              <!-- リサイズに使用 -->
              <img src="../images/common/common_img300x180.png" class="u-fit-img-w">
              <div class="Project-outline__visual-body">
                月刊誌「視覚障害」の廃刊危機を乗り越え継続して発刊したい！
              </div>
            </div>

            <div class="Container">
              <dl class="Project-outline__condition">
                <dt class="Project-outline__condition-dt">達成金額</dt>
                <dd class="Project-outline__condition-dd u-font-en u-fs_22">
                  <a href="#" class="u-link2">支援者になる</a>
                </dd>
              </dl>
              <dl class="Project-outline__condition">
                <dt class="Project-outline__condition-dt">達成金額</dt>
                <dd class="Project-outline__condition-dd u-font-en u-fs_22">
                  5,081,000円
                </dd>
              </dl>
              <dl class="Project-outline__condition">
                <dt class="Project-outline__condition-dt">目標金額</dt>
                <dd class="Project-outline__condition-dd u-font-en">
                  5,081,000円
                </dd>
              </dl>
               <dl class="Project-outline__condition">
                <dt class="Project-outline__condition-dt">第一目標金額</dt>
                <dd class="Project-outline__condition-dd u-font-en u-em">
                  5,081,000円
                </dd>
              </dl>

              <dl class="Project-outline__gauge-set Gauge-set">
                <dt class="Project-outline__gauge-set__txt Gauge-set__txt">124%</dt>
                <dd class="Project-outline__gauge-set__gauge Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

              <div class="u-align_c">
                <a href="#" class="Btn-1 is-h_l">
                  <div class="Btn-1__inner">
                    <div class="Btn-1__content">
                      <div class="Btn-1__txt u-fs_16">このプロジェクトを支援する</div>
                    </div>
                  </div>
                </a>
              </div>

              <div class="Project-outline__watch">
                <a href="javascript:void(0)">
                  <span class="Icon-plus u-mr_5"></span><span class="u-valign_m">気になるリストに追加する</span>
                </a>
              </div>

              <div class="Project-outline__alert is-miss u-mt_20">
                <span class="Project-outline__alert-h">プロジェクトは終了しました</span><br>
                <span class="Project-outline__alert-txt">2015年8月31日に終了</span>
              </div>

              <div class="Project-outline__alert is-complete u-mt_20">
                <span class="Project-outline__alert-h">プロジェクトは達成されました</span><br>
                <span class="Project-outline__alert-txt">2015年8月31日に成立</span>
              </div>

              <aside class="Project-outline__promoter Media">
                <h1 class="u-d_none">プロモーター</h1>
                <div class="Project-outline__promoter-img Media-img">
                  <img src="../images/project/project_author_sample.jpg" width="50" height="50" alt="">
                </div>
                <div class="Project-outline__promoter-body Media-body">
                  <p class="Project-outline__promoter-name">今村彩子</p>
                  <p class="Project-outline__promoter-desc">
                    映画監督。２０歳の時からドキュメンタリー映画を撮り続けている。自転車と
                  </p>
                </div>
              </aside>
            </div>

          </div>

          <div class="Project-outline__sub">

            <div class="Project-outline__more">
              <a href="javascript:void(0)" class="Btn-3">
                <div class="Btn-3__inner">
                  <div class="Btn-3__content">
                    もっと見る
                  </div>
                </div>
              </a>
            </div>

            <div class="Project-sns u-clrfix u-mt_15 u-mb_25">
              <ul class="Sns-list">
                <li class="Sns-list__i is-fb">
                  <div class="fb-like" data-href="https://readyfor.jp/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                </li>
                <li class="Sns-list__i is-tw">
                  <a href="https://twitter.com/share" class="twitter-share-button" data-lang="ja" data-dnt="true">ツイート</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="u-font_b u-mb_25">視覚障害者と晴眼者の橋渡を担ってきた月刊誌「視覚障害」の廃刊危機を乗り切り、発展させる。 </h2>
              <p class="u-mb_25">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <h2 class="u-font_b u-mb_25">視覚障害者と晴眼者の橋渡を担ってきた月刊誌「視覚障害」の廃刊危機を乗り切り、発展させる。 </h2>
              <p class="u-mb_25">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <h2 class="u-font_b u-mb_25">視覚障害者と晴眼者の橋渡を担ってきた月刊誌「視覚障害」の廃刊危機を乗り切り、発展させる。 </h2>
              <p class="u-mb_25">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <figure class="u-mb_25">
                <img src="../images/project/project_outline_sample.jpg" alt="" class="u-fit-img-w">
                <figcaption class="u-mt_15">キャプションキャプションキャプションキャプションキャプション</figcaption>
              </figure>

              <h2 class="u-font_b u-mb_25">視覚障害者と晴眼者の橋渡を担ってきた月刊誌「視覚障害」の廃刊危機を乗り切り、発展させる。 </h2>
              <p class="u-mb_25">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>

          </div>

          <section class="Project-outline__sub-2">

            <h1 class="u-d_none">リターン</h1>

            <section class="Project-outline__return">
              <div class="Project-outline__return-toggle">開く/閉じる</div>

              <header class="Project-outline__return-header">
                <a href="javascript:void(0)" class="u-link-area">
                  <h1 class="Project-outline__return-h-0">
                    <img width="40" height="40" class="Project-outline__return-h-0-img">
                    リターンのタイトルが入ります。
                  </h1>
                  <ul class="Project-outline__return-condition-0">
                    <li class="Project-outline__return-condition-0-i is-num">
                      <span class="Icon-supporter u-mr_10"></span>33人/制限なし
                    </li>
                    <li class="Project-outline__return-condition-0-i u-font-en is-yen">&yen;3,000</li>
                  </ul>
                </a>
              </header>
              <div class="Project-outline__return-body" style="display:none;">
                <p class="Project-outline__return-h-1">リターンのタイトルが入ります。</p>
                <p class="Project-outline__return-img">
                  <img src="../images/project/project_return_sample.jpg" width="260" height="160" alt="" class="u-fit-img-w">
                </p>
                <p class="Project-outline__return-desc">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>

                <ul class="Project-outline__return-condition-1">
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-supporter u-mr_10"></span>13人/15個
                  </li>
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-shipment u-mr_10"></span>2015年12月発送予定
                  </li>
                </ul>

                <p class="Project-outline__return-yen u-font-en">&yen;40,000</p>

                <div class="u-align_c">
                  <a href="#" class="Btn-1 is-h_l-2">
                    <div class="Btn-1__inner">
                      <div class="Btn-1__content">
                        <div class="Btn-1__txt u-fs_18">購入する</div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </section>

            <section class="Project-outline__return">
              <div class="Project-outline__return-toggle">開く/閉じる</div>

              <header class="Project-outline__return-header">
                <a href="javascript:void(0)" class="u-link-area">
                  <h1 class="Project-outline__return-h-0">
                    <img width="40" height="40" class="Project-outline__return-h-0-img">
                    リターンのタイトルが入ります。
                  </h1>
                  <ul class="Project-outline__return-condition-0">
                    <li class="Project-outline__return-condition-0-i is-num">
                      <span class="Icon-supporter u-mr_10"></span>33人/制限なし
                    </li>
                    <li class="Project-outline__return-condition-0-i u-font-en is-yen">&yen;3,000</li>
                  </ul>
                </a>
              </header>
              <div class="Project-outline__return-body" style="display:none;">
                <p class="Project-outline__return-h-1">リターンのタイトルが入ります。</p>
                <p class="Project-outline__return-img">
                  <img src="../images/project/project_return_sample.jpg" width="260" height="160" alt="" class="u-fit-img-w">
                </p>
                <p class="Project-outline__return-desc">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>

                <ul class="Project-outline__return-condition-1">
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-supporter u-mr_10"></span>13人/15個
                  </li>
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-shipment u-mr_10"></span>2015年12月発送予定
                  </li>
                </ul>

                <p class="Project-outline__return-yen u-font-en">&yen;40,000</p>

                <div class="u-align_c">
                  <a href="#" class="Btn-1 is-h_l-2">
                    <div class="Btn-1__inner">
                      <div class="Btn-1__content">
                        <div class="Btn-1__txt u-fs_18">購入する</div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </section>

            <section class="Project-outline__return">
              <div class="Project-outline__return-toggle">開く/閉じる</div>

              <header class="Project-outline__return-header">
                <a href="javascript:void(0)" class="u-link-area">
                  <h1 class="Project-outline__return-h-0">
                    <img width="40" height="40" class="Project-outline__return-h-0-img">
                    リターンのタイトルが入ります。
                  </h1>
                  <ul class="Project-outline__return-condition-0">
                    <li class="Project-outline__return-condition-0-i is-num">
                      <span class="Icon-supporter u-mr_10"></span>33人/制限なし
                    </li>
                    <li class="Project-outline__return-condition-0-i u-font-en is-yen">&yen;3,000</li>
                  </ul>
                </a>
              </header>
              <div class="Project-outline__return-body" style="display:none;">
                <p class="Project-outline__return-h-1">リターンのタイトルが入ります。</p>
                <p class="Project-outline__return-img">
                  <img src="../images/project/project_return_sample.jpg" width="260" height="160" alt="" class="u-fit-img-w">
                </p>
                <p class="Project-outline__return-desc">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>

                <ul class="Project-outline__return-condition-1">
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-supporter u-mr_10"></span>13人/15個
                  </li>
                  <li class="Project-outline__return-condition-1-i">
                    <span class="Icon-shipment u-mr_10"></span>2015年12月発送予定
                  </li>
                </ul>

                <p class="Project-outline__return-yen u-font-en">&yen;40,000</p>

                <div class="u-align_c">
                  <a href="#" class="Btn-1 is-h_l-2">
                    <div class="Btn-1__inner">
                      <div class="Btn-1__content">
                        <div class="Btn-1__txt u-fs_18">購入する</div>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </section>

          </section>

        </section>
        <!-- /概要 -->

        <!-- 更新情報 -->
        <section class="Project-update Tab__content u-d_none">
          <h1 class="u-d_none">更新情報</h1>

          <article class="Project-update__main">

            <header class="Project-update__header">
              <time pubdate="2015-6-16" class="Project-update__header-date">2015年6月16日</time>
              <h1 class="Project-update__header-h">タイトルタイトル</h1>
            </header>

            <div class="Project-update__content">

              <div class="Project-sns u-clrfix u-mt_15 u-mb_25">
                <ul class="Sns-list">
                  <li class="Sns-list__i is-fb">
                    <div class="fb-like" data-href="https://readyfor.jp/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                  </li>
                  <li class="Sns-list__i is-tw">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-lang="ja" data-dnt="true">ツイート</a>
                  </li>
                </ul>
              </div>

              <p class="u-mb_15">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>

              <figure class="u-mb_10">
                <img src="../images/project/project_update_sample.jpg" class="u-fit-img-w" alt="">
              </figure>
              <figure class="u-mb_10">
                <img src="../images/project/project_update_sample.jpg" class="u-fit-img-w" alt="">
              </figure>
              <figure class="u-mb_10">
                <img src="../images/project/project_update_sample.jpg" class="u-fit-img-w" alt="">
              </figure>

              <p class="u-mb_15">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

              <div class="Project-sns u-clrfix u-mt_20">
                <ul class="Sns-list">
                  <li class="Sns-list__i is-fb">
                    <div class="fb-like" data-href="https://readyfor.jp/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                  </li>
                  <li class="Sns-list__i is-tw">
                    <a href="https://twitter.com/share" class="twitter-share-button" data-lang="ja" data-dnt="true">ツイート</a>
                  </li>
                </ul>
              </div>

              <div class="Project-update__support u-mt_60 u-align_c">
                <a href="#" class="Btn-1 is-h_l">
                  <div class="Btn-1__inner">
                    <div class="Btn-1__content">
                      <div class="Btn-1__txt u-fs_16">このプロジェクトを支援する</div>
                    </div>
                  </div>
                </a>
              </div>

            </div>

          </article>

          <aside class="Project-update__related">
            <article class="Project-update__related-item Media">
              <div class="Project-update__related-item-img Media__img">
                <img src="../images/project/project_update_related_sample.jpg" width="90" height="70" alt="">
              </div>
              <div class="Project-update__related-item-main Media__body">
                <header class="Project-update__related-item-header">
                  <time pubdate="2015-6-30" class="Project-update__related-item-header-date">2015年06月30日</time>
                  <h1 class="Project-update__related-item-header-h">
                    テキストテキスト
                  </h1>
                </header>
                <footer class="Project-update__related-item-footer">
                  <a href="#">&gt;&gt;続きを見る</a>
                </footer>
              </div>
            </article>
            <article class="Project-update__related-item Media">
              <div class="Project-update__related-item-img Media__img">
                <img src="../images/project/project_update_related_sample.jpg" width="90" height="70" alt="">
              </div>
              <div class="Project-update__related-item-main Media__body">
                <header class="Project-update__related-item-header">
                  <time pubdate="2015-6-30" class="Project-update__related-item-header-date">2015年06月30日</time>
                  <h1 class="Project-update__related-item-header-h">
                    テキストテキストテキストテキストテキストテキスト
                  </h1>
                </header>
                <footer class="Project-update__related-item-footer">
                  <a href="#">&gt;&gt;続きを見る</a>
                </footer>
              </div>
            </article>
            <article class="Project-update__related-item Media">
              <div class="Project-update__related-item-img Media__img">
                <img src="../images/project/project_update_related_sample.jpg" width="90" height="70" alt="">
              </div>
              <div class="Project-update__related-item-main Media__body">
                <header class="Project-update__related-item-header">
                  <time pubdate="2015-6-30" class="Project-update__related-item-header-date">2015年06月30日</time>
                  <h1 class="Project-update__related-item-header-h">
                    テキストテキストテキストテキストテキストテキスト
                  </h1>
                </header>
                <footer class="Project-update__related-item-footer">
                  <a href="#">&gt;&gt;続きを見る</a>
                </footer>
              </div>
            </article>
          </aside>

        </section>
        <!-- /更新情報 -->

        <!-- 応援コメント -->
        <section class="Project-cheer Tab__content u-d_none">
          <h1 class="u-d_none">応援コメント</h1>
          <article class="Project-cheer__comment Media">
            <div class="Project-cheer__comment-img Media__img">
              <img src="../images/project/project_cheer_icon_default_0.jpg" width="60" height="60" alt="">
            </div>
            <div class="Project-cheer__comment-main Media__body">
              <header class="Project-cheer__comment-header u-clrfix">
                <h1 class="Project-cheer__comment-name u-d_ib"><b class="u-em">sankyoh</b>さん</h1>
                <time pubdate="2015-6-30" class="Project-cheer__comment-date">2015年06月30日</time>
              </header>
              <div class="Project-cheer__comment-body">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
              <div class="Project-cheer__comment-support">
                <span class="Icon-plus u-mr_5"></span>他に5個のプロジェクトを支援中！
              </div>
            </div>
          </article>
          <article class="Project-cheer__comment Media">
            <div class="Project-cheer__comment-img Media__img">
              <img src="../images/project/project_cheer_icon_default_0.jpg" width="60" height="60" alt="">
            </div>
            <div class="Project-cheer__comment-main Media__body">
              <header class="Project-cheer__comment-header u-clrfix">
                <h1 class="Project-cheer__comment-name u-d_ib"><b class="u-em">sankyoh</b>さん</h1>
                <time pubdate="2015-6-30" class="Project-cheer__comment-date">2015年06月30日</time>
              </header>
              <div class="Project-cheer__comment-body">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
              <div class="Project-cheer__comment-support">
                <span class="Icon-plus u-mr_5"></span>他に5個のプロジェクトを支援中！
              </div>
            </div>
          </article>
          <article class="Project-cheer__comment Media">
            <div class="Project-cheer__comment-img Media__img">
              <img src="../images/project/project_cheer_icon_default_0.jpg" width="60" height="60" alt="">
            </div>
            <div class="Project-cheer__comment-main Media__body">
              <header class="Project-cheer__comment-header u-clrfix">
                <h1 class="Project-cheer__comment-name u-d_ib"><b class="u-em">sankyoh</b>さん</h1>
                <time pubdate="2015-6-30" class="Project-cheer__comment-date">2015年06月30日</time>
              </header>
              <div class="Project-cheer__comment-body">
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
              <div class="Project-cheer__comment-support">
                <span class="Icon-plus u-mr_5"></span>他に5個のプロジェクトを支援中！
              </div>
            </div>
          </article>
          <div class="Project-cheer__more">
            <a href="javascript:void(0)" class="Btn-3">
              <div class="Btn-3__inner">
                <div class="Btn-3__content">
                  もっと見る
                </div>
              </div>
            </a>
          </div>
        </section>
        <!-- /応援コメント -->

      </div>
          <!-- /Tab__contents -->

    </div>
  </section>

  <? require_once '../php/scroller.php' ?>
  <? require_once '../php/footer.php'; ?>

</div>

<? require_once '../php/common_script.php'; ?>
</body>
</html>