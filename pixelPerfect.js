/*
	*pixelPerfect Tool v1.0
	*https://github.com/dshongphuc/pixelPerfect-tool
	*Copyright (c) 2017 Phuc H. under MIT license;
*/
	if (typeof jQuery === 'undefined') {
  		console.log("jQuery is required for this tool");
	}else{
		var pixelPerfect = {
			fullWidth: true,
			gridUrl: "http://res.cloudinary.com/veseylab/image/upload/v1504350101/vesey-grid_v4rxhr.png",
			Start: function(){				
				var columnType = this.fullWidth ? "container-fluid" : "container";		
				var widthSize = this.fullWidth ? "calc(8.33333% - 30px)" : "calc((1140px/100) * 8.33333 - 27.3px)";
				$('head').append("<style> body{position:relative;}body:after{position:fixed;width:auto;height:auto;z-index:9999;content:'';display:fixed;pointer-events:none;top:0;right:0;bottom:0;left:0;background:url("+this.gridUrl+") center;} #vesey-columns .col-lg-1 div{height:100vh;background:pink;position:fixed;opacity:.5;width:"+widthSize+";margin:0 auto;z-index:22222}.grid-hide::after{display: none;}.column-hide{display: none;}.all-hide::before, .all-hide::after, .all-hide #vesey-columns{display: none;} .ruler-show{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#vesey-ruler{border:1px dotted #000;position:fixed;z-index:200000}#ruler-information{background:rgba(0,0,0,.7);width:120px;height:60px;font-size:14px;position:fixed;border-radius:5px;padding:10px;z-index:200000;color:#fff}#ruler-information #ruler-width,#ruler-information #ruler-height{padding:3px 0;display:block}#ruler-information #ruler-width::before{content:'Width : '}#ruler-information #ruler-height::before{content:'Height : '}#ruler-information #ruler-width::after,#ruler-information #ruler-height::after{content:'px'}</style>");				
				$('body').prepend("<div id='vesey-ruler' hidden></div><div id='ruler-information' hidden><span id='ruler-width'></span><span id='ruler-height'></span></div>");
				$('body').prepend(" <div id='vesey-columns'><div class='"+columnType+"'> <div class='row'> <div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div><div class='col-lg-1 col-md-1 col-sm-1'><div></div></div></div></div></div>");
				var rulerShow = false;
				$(document).on("keypress", function(key){
					if(key.which == 103 || key.which == 71){
						$("body").toggleClass("grid-hide");
					}
					if(key.which == 99 || key.which == 67){
						$("#vesey-columns").toggleClass("column-hide");
					}
					if(key.which == 97 || key.which == 65){
						$("body").toggleClass("all-hide");			
					}	
					if(key.which == 114 || key.which == 82){			
						$("body").toggleClass("ruler-show");
						if(rulerShow === false){
							$("body").css("user-select","none");
							rulerShow = true;
						}else{
							$("body").css("user-select","auto");
							rulerShow = false;				
						}
					}								
				});

				//------ Handle the ruler function ------//
				var veseyRuler = document.getElementById('vesey-ruler'), x1 = 0, y1 = 0, x2 = 0, y2 = 0,
				 	rulerBox = document.getElementById("ruler-information"),
					heightInfo = document.getElementById("ruler-height"),
					widthInfo = document.getElementById("ruler-width");
				function drawRuler() {
				    var x3 = Math.min(x1,x2);
				    var x4 = Math.max(x1,x2);
				    var y3 = Math.min(y1,y2);
				    var y4 = Math.max(y1,y2);
				    veseyRuler.style.left = x3 + 'px';
				    veseyRuler.style.top = y3 + 'px';
				    veseyRuler.style.width = x4 - x3 + 'px';
				    veseyRuler.style.height = y4 - y3 + 'px';
				    widthInfo.innerHTML = x4 - x3;
				    heightInfo.innerHTML = y4 - y3;
				}
				onmousedown = function(e) {
					if(rulerShow == true){
				    veseyRuler.hidden = 0;
				    rulerBox.hidden = 0;
				    x1 = e.clientX;
				    y1 = e.clientY;
				    drawRuler();
				    }
				};
				onmousemove = function(e) {
				    x2 = e.clientX;
				    y2 = e.clientY;
				    drawRuler();
				};
				onmouseup = function(e) {
				    veseyRuler.hidden = 1;
				    rulerBox.hidden = 1;
				};	
			}
		}
}



