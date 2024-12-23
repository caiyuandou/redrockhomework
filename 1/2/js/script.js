//登陆
$(function(){
	$('.top_denglu').hover(function(){
			$('.m-tlist').css('display','block');
		},function(){
			$('.m-tlist').css('display','none');
		})
});
//轮播
			$(function (){
				var n = 0; 
				var t;
				function picImg(num){
					clearTimeout(t);
					if(typeof num == "number"){
						n = num;
					}else{
						n++;
					}
					if(n > 6){n = 0;}
					$('#pic .picbox').css("margin-left",n*-730+"px");
					$('#pic li.active').removeClass('active');
					$('#pic li').eq(n).addClass('active');
					if(typeof num != "number"){
						t=setTimeout(function(){
							picImg();
						},2000);
					}
				}
				t=setTimeout(function(){
					picImg();
				},2000);
				$('#pic').hover(function(){
					clearTimeout(t);
				},function(){
					t=setTimeout(function(){
						picImg();
					},2000);
				})
				$('#pic li').mouseover(function(){
					var n = $(this).index('#pic li');
					picImg(n);
				})
			});
			var a = 1;
			$(function(){
				$('.right').click(function(){
					$('.picbox').css('margin-left',a*-730+'px');
					
					// if(a >5){
					// 	a=-1;
					// }
					// a++;
					if(typeof num == "number"){
						a = num;
					}else{
						a++;
					}
					if(a > 6){a = 0;}
				}),
				$('.left').click(function(){
					var cc=-a+2
					$('.picbox').css('margin-left',cc*730+'px');
					// if(cc>6){
					// 	cc=0;
					// };
					if(typeof num == "number"){
						a = num;
					}else{
						a--;
					}
					if(a > 6 ){a = 0;}
					// cc++;
				})
			});


//backtop
	document.onscroll=function(){
		var rights = document.getElementById('backtop');
		var jl = document.body.scrollTop || document.documentElement.scrollTop;
		var bdH = document.documentElement.clientHeight;
		// console.log(bdH);
		if(jl > bdH){
			rights.style.display='block';		
			rights.style.top= (bdH/3*2+jl)+'px'
		}else{
			rights.style.display='none';
		}
		}
		$(function(){
		$('#backtop').click(function(){
			$('body,html').animate({"scrollTop":'0px'},250);
		})});
//热碟上架
$(function(){
	$('.xd').hover(function(){
		var x = $(this).index('.xd');
			$('.plays').eq(x).css('display','block');
		},function(){
			$('.plays').css('display','none');
		})
});
//热碟上架切换
// function bb(){
//             var dl = document.getElementsByClassName("bgc_left_three2_ul");
//             dl.style.left = -645 + "px";
//         }
//         function cc(){
//             var dl = document.getElementsByClassName("bgc_left_three2_ul");
//             dl.style.left = 0;
//         }
$(function(){
	$('.zuo').click(function(){
		$('.bgc_left_three2_ul').show();
		$('.show').hide();
		
		})
	$('.you').click(function(){
		$('.bgc_left_three2_ul').hide();
		$('.show').show();
			})
		});
//

$(function(){
	$('.liaaa').hover(function(){
		var x = $(this).index('.liaaa');
			$('.oper').eq(x).css('display','block');
		},function(){
			$('.oper').css('display','none');
		})
});

//登陆
$(function(){
	var visHeight=document.documentElement.clientHeight;
	$('.onebtn').click(function(){
		$('#hydl').fadeIn(500);
		var h=$(".hydl1").height();
			
		$(".hydl1").css({top:(visHeight-h)/2});
		$(".Close").click(function(){
			$("#hydl").fadeOut(500);
		});
	});
	});
	//
$(function(){
	var visHeight=document.documentElement.clientHeight;
	$('.hoverss').click(function(){
		$('#hydl').fadeIn(500);
		var h=$(".hydl1").height();
			
		$(".hydl1").css({top:(visHeight-h)/2});
		$(".Close").click(function(){
			$("#hydl").fadeOut(500);
		});
	});
	});
//
$(function(){
	$('.music_bottom').hover(function(){
			$('.music_bottom').css('margin-bottom','0');
		},function(){
			$('.music_bottom').css('margin-bottom','-98px');
		})
});
$(function(){
	$('.music_bottom1').hover(function(){
			$('.music_bottom1').css('margin-bottom','0');
		},function(){
			$('.music_bottom1').css('margin-bottom','-98px');
		})
});