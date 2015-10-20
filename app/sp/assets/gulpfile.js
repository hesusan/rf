var path = require( "path" );
var fs = require( "fs" );
var gulp = require( "gulp" );
var spritesmith = require( "gulp.spritesmith" );
var concat = require( "gulp-concat" );
var uglify = require( "gulp-uglify" );
var sass = require( "gulp-ruby-sass" );
var autoprefixer = require( "gulp-autoprefixer" );
var plumber = require( "gulp-plumber" );
var jsonminify = require( "gulp-jsonminify" );

var exec = require( "child_process" ).execSync;

//var imagemin = require( "gulp-imagemin" );
//var pngquant = require( "imagemin-pngquant" );
//var jpegoptim = require( "imagemin-jpegoptim" );

//バージョン
var VERSION = "";

//どのJSを連結するかのデータ
var JS = {

/*
  "common" : [
    "js/common/lib/jquery-1.11.0.min.js",
    "js/common/lib/plugin.js",
    "js/common/lib/Version.js",
    "js/common/lib/UAManager.js",
    "js/common/lib/Util.js",
    "js/common/lib/EnterFrameManager.js",
    "js/common/lib/ResizeManager.js",
    "js/common/lib/ScrollManager.js",
    "js/common/lib/PageScroller.js",
    //"js/lib/PageNav.js",
    "js/common/lib/Config.js",
    "js/common/Common.js"
  ]
*/

}

gulp.task( "js", function(){

  var fileName;
  var src;
  var data;

  //バージョン情報
  var javascript = [
    'window.VERSION = "?v=' + VERSION + '";'
  ];

  fs.writeFileSync( "js/common/lib/Version.js", javascript.join( "" ), { "mode":"0775" } );


  for( var s in JS ) {

    createJs( s );

  }

} );

function createJs( i_name ) {

  var data = JS[i_name];

  if( !data ) {
    console.log( i_name + "はないよ" );
    return;
  }

  //jsのファイル名
  fileName = i_name + ".js";
  //ソース取得
  src = gulp.src( JS[i_name] );
  //連結
  data = src.pipe( concat( fileName ) );
  //圧縮
  data = data.pipe( uglify( { "preserveComments":"some" } ) );

  //書き出し
  data.pipe( gulp.dest( "../js/" ) );

  console.log( "create = " + i_name + ".js" );

}

gulp.task( "css", function(){

  //バージョン情報
  var scss = [
    "$version:'?v=" + VERSION + "';"
  ];

  fs.writeFileSync( "css/_version.scss", scss.join( "\n" ), { "mode":"0775" } );


  var files = "css/*.scss";

  var sassData = {
    "style":"compressed",
    "sourcemap=none": true
  }

  //sassData["style"] = "compressed";

  var css = gulp.src( files ).pipe( plumber() ).pipe( sass( sassData ) );

  css
    .pipe(autoprefixer({
      browsers: ['ios >= 6', 'android >= 2.3']
    }))
    .pipe( gulp.dest( "../css/" ) );

} );

//--------------------------------------------------------------
// ▼ sprite画像を圧縮する
//--------------------------------------------------------------

gulp.task( "image-min", function(){

  var dir = "../images/";

  fs.readdir( dir, function( i_error, i_files ){

    var l = i_files.length;
    for( var i = 0; i < l; i++ ) {

      var file = i_files[i];
      filePath = dir + file;
      spriteMinForDir( filePath );

    }

  } );

} );

//フォルダの中丸ごと、圧縮
function spriteMinForDir( i_path ) {

  //png
  gulp.src( i_path + "/*.png" ).pipe( imagemin( { use:[pngquant({ "quality":"50" })] } ) ).pipe( gulp.dest( i_path ) );

  //jpeg
  gulp.src( i_path + "/*.jpg" ).pipe( imagemin( { use:[jpegoptim( { "progressive":true, "max":50 } )] } ) ).pipe( gulp.dest( i_path ) );

}


//ファイル単体
function spriteMin( i_dir, i_file ) {

  /*
  if( IS_DISABLE_MIN ) {
    console.log( "skip min task = ", i_dir, i_file );
    return;
  }
  */

  //png
  var pngPath = i_dir + i_file + ".png";
  if( fs.existsSync( pngPath ) ) {
    gulp.src( pngPath ).pipe( imagemin( { use:[pngquant({ "quality":"50" })] } ) ).pipe( gulp.dest( i_dir ) );
  }

  //json
  var jsonPath = i_dir + i_file + ".json";
  if( fs.existsSync( jsonPath ) ) {
    gulp.src( jsonPath ).pipe( jsonminify() ).pipe( gulp.dest( i_dir ) );
  }

}
//--------------------------------------------------------------
// ▲ sprite画像を圧縮する
//--------------------------------------------------------------


//--------------------------------------------------------------
// ▼ htmlのsprite画像を作成する
//--------------------------------------------------------------
gulp.task( "sprite", function(){

  var dir = "images/";

  var imageFiles = fs.readdirSync( dir );
  var l = imageFiles.length;
  for( var i = 0; i < l; i++ ) {

    var imageFile = imageFiles[i];
    var spriteDir = dir + imageFile + "/sprite";


    //sprite画像フォルダがない時
    if( !fs.existsSync( spriteDir ) ) {
      continue;
    }

    var spriteFiles = fs.readdirSync( spriteDir );
    var ll = spriteFiles.length;
    for( var ii = 0; ii < ll; ii++ ) {

      var spriteFile = spriteFiles[ii];
      var spriteImage = spriteDir + "/" + spriteFile;

      //ディレクトリではない時
      var stat = fs.statSync( spriteImage );
      if( !stat.isDirectory() ) {
        continue;
      }

      createSprite( spriteImage );

    }

  }


} );

function createSprite( i_path ) {

  var fileName = path.basename( i_path );
  var dir = i_path.replace( fileName, "" );
  var scssName = i_path.replace( "images/", "" ).replace( /\//g, "-" );
  var dest = "../" + dir;

  var spriteData = gulp.src( i_path + "/*.png" ).pipe( spritesmith( {

    "imgName" : fileName + ".png",
    "cssName" : "_" + scssName + ".scss",
    "imgPath" : "../" + i_path + ".png",
    "cssFormat" : "scss",
    "padding" : 4,
    "algorithm" : "binary-tree",
    "cssFormat" : "scss",
    "cssOpts" : {
      "functions" : false
    }

  } ) );

  //画像書き出し
  spriteData.img.pipe( gulp.dest( dest ) ).on( "end", function(){
    //spriteMin( dest, fileName );
  } );
  //scss書き出し
  spriteData.css.pipe( gulp.dest( "css/sprite/" ) );

}
//--------------------------------------------------------------
// ▲ htmlのsprite画像を作成する
//--------------------------------------------------------------


gulp.task( "empty", function(){

});

gulp.task( "watch", ["css"], function(){

  //var jsDir = "js/**/*.js";
  /*
  gulp.watch( jsDir, function( i_event ){

    var jsDir = __dirname + "/js/";

    //for windows
    //i_event["path"] = i_event["path"].replace("\\", "/");

    var filePath = i_event["path"].replace( jsDir, "" );

    var name = filePath.match( /^(.+?)\//, filePath );

    if( !name ) {
      console.log( name + " = がない" );
      return;
    }

    name = name[1];

    if( name == "lib" ) {

      for( var s in JS ) {

        createJs( s );

      }

    }else {
      createJs( name );
    }

  } );
  */


  var cssDir = "css/**/*.scss";
  gulp.watch( cssDir, ["css"] );


} );

gulp.task( "default", [ "sprite", "css" ], function(){
} );
