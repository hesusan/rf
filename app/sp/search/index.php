<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="UTF-8">
<title>プロジェクトを探す | READYFOR</title>
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

  <section class="Page-body Bg-0">

    <h1 class="Search-heading">
      <div class="Search-heading__txt">（プロジェクト名）</div>
      <div class="Search-heading__icon"></div>
    </h1>

    <!-- @NOTE 表示する場合はCSSを切り替え -->
    <nav class="Search-nav" style="display: none">
      <h1 class="u-d_none">ナビゲーション</h1>

      <section class="Search-nav__menu">
        <h1 class="Search-nav__menu-h">
          <span class="Search-nav__menu-h-icon Icon-search"></span><span class="Search-nav__menu-h-txt">プロジェクトをさがす</span>
        </h1>

        <ul class="Search-nav__menu-list">
          <li class="Search-nav__menu-list-i">
            <a href="#" class="Search-nav__menu-list-a">
              <div class="u-flex">人気のプロジェクト</div>
            </a>
          </li>
          <li class="Search-nav__menu-list-i">
            <a href="#" class="Search-nav__menu-list-a">
              <div class="u-flex">あとひと押しプロジェクト</div>
            </a>
          </li>
          <li class="Search-nav__menu-list-i">
            <a href="#" class="Search-nav__menu-list-a">
              <div class="u-flex">支援金額の多いプロジェクト</div>
            </a>
          </li>
          <li class="Search-nav__menu-list-i">
            <a href="#" class="Search-nav__menu-list-a">
              <div class="u-flex">新着プロジェクト</div>
            </a>
          </li>
          <li class="Search-nav__menu-list-i">
            <a href="#" class="Search-nav__menu-list-a">
              <div class="u-flex">成立済みプロジェクト</div>
            </a>
          </li>
        </ul>
      </section>

      <section class="Search-nav__menu">
        <h1 class="Search-nav__menu-h">
          <span class="Search-nav__menu-h-icon Icon-tag-2"></span><span class="Search-nav__menu-h-txt">カテゴリから探す</span>
        </h1>

        <div class="Search-nav__menu-table">
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">地域活性化</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">文化支援</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">国際協力</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">食べ物</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">子供支援</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">アート</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">音楽・パフォーマンス</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">スポーツ</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">災害支援</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">映画・映像・アニメ</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">イベント・講座</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">図書館・学校</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">本・コミック</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">環境・動物</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">教育・研究</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">ウェブ・IT・テクノロジ</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">デザイン・ものづくり</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">旅</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">人権</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">スタートアップ・ビジネス</a>
            </li>
          </ul>
          <ul class="Search-nav__menu-table-r">
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">医療・福祉</a>
            </li>
            <li class="Search-nav__menu-table-td">
              <a href="#" class="Search-nav__menu-table-a">写真・ジャーナリズム</a>
            </li>
          </ul>
        </div>
      </section>

    </nav>

    <div class="Search-body">
      <div class="Search-kw">
        <form>
          <div class="Search-kw__inner">
            <div class="u-flex">
              <input type="text" class="Search-kw__input u-fit" placeholder="キーワード検索">
            </div>
            <div>
              <button class="Search-kw__btn">検索</button>
            </div>
          </div>
        </form>
      </div>
      <div class="Search-entries">
        <article class="Entry">
          <a href="#" class="Entry__inner">
            <div class="Entry__img is-type0">
              <img src="../images/common/thumb310x180.jpg" alt="" class="u-fit-img-h">
            </div>
            <div class="Entry__body">
              <h1 class="Entry__h is-hide-line2-fixed">
                2行を超えると消える&&2行の高さが保証されますようにしてあります。必要ない場合は所定のクラスを外してください。
              </h1>
              <div class="Entry__condition">
                <dl class="Entry__condition-sum">
                  <dt class="Entry__condition-sum-dt">達成金額</dt><dd class="Entry__condition-sum-dd">5,081,000円</dd>
                </dl>
              </div>

              <dl class="Entry__gauge Gauge-set">
                <dt class="Gauge-set__txt">124%</dt>
                <dd class="Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

            </div>
          </a>
        </article>
        <article class="Entry">
          <a href="#" class="Entry__inner">
            <div class="Entry__img is-type0">
              <img src="../images/common/thumb310x180.jpg" alt="" class="u-fit-img-h">
            </div>
            <div class="Entry__body">
              <h1 class="Entry__h is-hide-line2-fixed">
                2行を超えると消える&&2行の高さが保証されますようにしてあります。必要ない場合は所定のクラスを外してください。
              </h1>
              <div class="Entry__condition">
                <dl class="Entry__condition-sum">
                  <dt class="Entry__condition-sum-dt">達成金額</dt><dd class="Entry__condition-sum-dd">5,081,000円</dd>
                </dl>
              </div>

              <dl class="Entry__gauge Gauge-set">
                <dt class="Gauge-set__txt">124%</dt>
                <dd class="Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

            </div>
          </a>
        </article>
        <article class="Entry">
          <a href="#" class="Entry__inner">
            <div class="Entry__img is-type0">
              <img src="../images/common/thumb310x180.jpg" alt="" class="u-fit-img-h">
            </div>
            <div class="Entry__body">
              <h1 class="Entry__h is-hide-line2-fixed">
                2行を超えると消える&&2行の高さが保証されますようにしてあります。必要ない場合は所定のクラスを外してください。
              </h1>
              <div class="Entry__condition">
                <dl class="Entry__condition-sum">
                  <dt class="Entry__condition-sum-dt">達成金額</dt><dd class="Entry__condition-sum-dd">5,081,000円</dd>
                </dl>
              </div>

              <dl class="Entry__gauge Gauge-set">
                <dt class="Gauge-set__txt">124%</dt>
                <dd class="Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

            </div>
          </a>
        </article>
        <article class="Entry">
          <a href="#" class="Entry__inner">
            <div class="Entry__img is-type0">
              <img src="../images/common/thumb310x180.jpg" alt="" class="u-fit-img-h">
            </div>
            <div class="Entry__body">
              <h1 class="Entry__h is-hide-line2-fixed">
                2行を超えると消える&&2行の高さが保証されますようにしてあります。必要ない場合は所定のクラスを外してください。
              </h1>
              <div class="Entry__condition">
                <dl class="Entry__condition-sum">
                  <dt class="Entry__condition-sum-dt">達成金額</dt><dd class="Entry__condition-sum-dd">5,081,000円</dd>
                </dl>
              </div>

              <dl class="Entry__gauge Gauge-set">
                <dt class="Gauge-set__txt">124%</dt>
                <dd class="Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

            </div>
          </a>
        </article>
        <article class="Entry">
          <a href="#" class="Entry__inner">
            <div class="Entry__img is-type0">
              <img src="../images/common/thumb310x180.jpg" alt="" class="u-fit-img-h">
            </div>
            <div class="Entry__body">
              <h1 class="Entry__h is-hide-line2-fixed">
                2行を超えると消える&&2行の高さが保証されますようにしてあります。必要ない場合は所定のクラスを外してください。
              </h1>
              <div class="Entry__condition">
                <dl class="Entry__condition-sum">
                  <dt class="Entry__condition-sum-dt">達成金額</dt><dd class="Entry__condition-sum-dd">5,081,000円</dd>
                </dl>
              </div>

              <dl class="Entry__gauge Gauge-set">
                <dt class="Gauge-set__txt">124%</dt>
                <dd class="Gauge-set__gauge Gauge">
                  <div class="Gauge__obj is-1" style="width:75%"></div>
                  <div class="Gauge__obj is-0" style="width:50%"></div>
                </dd>
              </dl>

            </div>
          </a>
        </article>
      </div>
      <a href="#" class="Btn-0 is-l">
        <span class="Btn-0__inner">
          <span class="Btn-0__content">
            <span class="Btn-0__txt">&gt;&gt; もっと見る</span>
          </span>
        </span>
      </a>
    </div>

  </section>

  <? require_once '../php/scroller.php' ?>
  <? require_once '../php/footer.php'; ?>

</div>

<? require_once '../php/common_script.php'; ?>
</body>
</html>