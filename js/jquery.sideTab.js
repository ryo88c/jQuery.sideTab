/*!
 * jQuery.sideTab 0.0.1
 * http://spais.co.jp/
 *
 * Copyright 2010, SPaiS Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function($){
 	$.extend($.prototype, {
		sideTab: function(settings){
			settings = $.extend({
				tabPadding:2
			}, settings);
			var $dt = this.children('dt'), $dd = this.children('dd'), ci = $dt.index($('dt.current'));
			
			var dth = 0;
			for(var i = 0; i < $dt.length; i ++){
				$dt.eq(i).css('top', dth + settings.tabPadding);
				dth += $dt.eq(i).outerHeight() + settings.tabPadding;
			}
			
			var ddh = dth;
			for(var i = 0; i < $dd.length; i ++){
				if(ddh < $dd.eq(i).height()){
					ddh = $dd.eq(i).height();
				}
			}
			
			$(this).append($dt.eq(ci).clone().removeClass('current').addClass('shadow'));
			$dd.hide().css('min-height', ddh + 'px').eq(ci).show();
			
			$dt.hover(function(){
				$(this).addClass('hover');
			}, function(){
				$(this).removeClass('hover');
			}).click(function(){
				var $dt = $(this).parent().children('dt');
				$dt.removeClass('current').filter('dt.shadow').css('top', $(this).css('top')).height($(this).height());
				$(this).addClass('current');
				$(this).parent().children('dd').hide().eq($dt.index(this)).show();
			});
		}
	});
	
})(jQuery);