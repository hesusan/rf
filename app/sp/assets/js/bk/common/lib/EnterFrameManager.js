//---------------------------------------------------------
//	▼ EnterFrameManager ▼
//---------------------------------------------------------
var EnterFrameManager = {

	$window : null,
	_length : 0,
	_functions : [],
	_addLastFunc : null,
	_isInit : false,
	_timer : null,
	_timePerUpdate : 0,
	_bool : true,
	startTime : 0,
	nowTime : 0,
	ftp : 30,
	scrollTop : 0,
	scrollBottom : 0,
  round: Math.round,

	requestAnimationFrame : null,

	$fps : null,
	
	//---------------------------------------------------------
	//	initialize
	//---------------------------------------------------------
	init : function(){
		
		EnterFrameManager._isInit = true;

		EnterFrameManager.$window = $( window );

		EnterFrameManager.startTime = Date.now();
		EnterFrameManager.nowTime = 0;

		EnterFrameManager._timePerUpdate = EnterFrameManager.round( 1000 / EnterFrameManager.ftp );

		if( window.requestAnimationFrame ) {
			EnterFrameManager.requestAnimationFrame = function( i_callback ){ window.requestAnimationFrame( i_callback ); };
		}else {
			EnterFrameManager.requestAnimationFrame = function( i_callback ){ setTimeout( i_callback, EnterFrameManager._timePerUpdate ); };
		}
		

		EnterFrameManager.update();
		
	},

	//---------------------------------------------------------
	//	set fps
	//---------------------------------------------------------
	setFps : function( $i_fps ) {

		EnterFrameManager.$fps = $i_fps;

	},
	
	//---------------------------------------------------------
	//	EnterFrame
	//---------------------------------------------------------
	update : function() {

		//前回のtime
		var lastTime = EnterFrameManager.nowTime;
		//今回のtime
		var nowTime = Date.now() - EnterFrameManager.startTime;
		
		//前回のフレームより、何ミリ秒経過したかを計算
		var distTime = nowTime - lastTime;

		//設定fps未満の時
		if( distTime < EnterFrameManager._timePerUpdate ) {
			EnterFrameManager.requestAnimationFrame( EnterFrameManager.update );
			return;
		}


		EnterFrameManager.nowTime = nowTime;

		if( EnterFrameManager.$fps ) {

			var fps = 1000 / ( distTime );
			EnterFrameManager.$fps.text( EnterFrameManager.round( fps ) );

		}
		
		
		for( var i = 0; i < EnterFrameManager._length; i++ ) {
		
			var f = EnterFrameManager._functions[i];
			f( EnterFrameManager.nowTime );
		
		}


		if( EnterFrameManager._addLastFunc ) {
			EnterFrameManager._addLastFunc( EnterFrameManager.nowTime );
		}
		

		EnterFrameManager.requestAnimationFrame( EnterFrameManager.update );
	
	},

	//---------------------------------------------------------
	//	イベント追加
	//---------------------------------------------------------
	add : function( i_func ) {
	
		for( var i = 0; i < EnterFrameManager._length; i++ ) {
		
			var f = EnterFrameManager._functions[i];
			if( f == i_func ) {
				return;
			}
		
		}
	
		EnterFrameManager._functions.push( i_func );
		EnterFrameManager._length = EnterFrameManager._functions.length;
		
	},

	//---------------------------------------------------------
	//	Enterframeの最後に実行されるファンクションを登録
	//---------------------------------------------------------
	addLastFunc : function( i_func ) {

		EnterFrameManager._addLastFunc = i_func;

	},
	
	//---------------------------------------------------------
	//	イベント解除
	//---------------------------------------------------------
	remove : function( i_func ) {
			
		for( var i = 0; i < EnterFrameManager._length; i++ ) {
		
			var f = EnterFrameManager._functions[i];
			if( f == i_func ) {
				EnterFrameManager._functions.splice( i, 1 );
				break;
			}
		
		}
		EnterFrameManager._length = EnterFrameManager._functions.length;
		
	}

}
//---------------------------------------------------------
//	▲ EnterFrameManager ▲
//---------------------------------------------------------
