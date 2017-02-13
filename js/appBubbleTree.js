$(function() {
	var arrarBubbleTree = [];
	var formatNumber = function (n) {
		var prefix = '';
		if (n < 0) {
			n = n * -1;
			prefix = '-';
		}
		if (n >= 1000000000000) return prefix + Math.floor(n / 10000000000) / 100 + 'trillones';
		if (n >= 1000000000) return prefix + Math.floor(n / 10000000) / 100 + ' billones';
		if (n >= 1000000) return prefix + Math.floor(n / 10000) / 100 + ' millones';
		if (n >= 1000) return prefix + Math.floor(n / 10) / 100 + ' mil';
		else return prefix + n;
	};

	var initTooltip = function(node, domnode) {
		domnode.setAttribute('tooltip', node.shortLabel+' &nbsp;<br /><big><b> $ '+node.famount+'</br></big>'+node.label);
		$(domnode).tooltip({ delay: 10, bodyHandler: getTooltip });
	};

	var $tooltip = $('<div class="tooltip">Tooltip</div>');

	$('.bubbletree').append($tooltip);
	$tooltip.hide();


	$.ajax({
		url : './json/Division_Gastos_ACT.json',
		data : {},
		type : 'GET',
		dataType : 'json',
		success : function(json) {
			           	new BubbleTree({
                		autoColors: true,
                		data: json,
                		sortBy: 'amount',
                		container: '.bubbletree',
                		bubbleType: 'icon',
                		maxNodesPerLevel: 100,
                		tooltip: {
                			qtip: true,
                			delay: 200,
                			content: function(node) {
                				return [node.shortLabel,
                				'<div class="desc"></div><div class="amount"> $ ' + node.amount +'<br><br>'+node.label +'</div>'];
                			}
                		}
                	});
		},
		error : function(xhr, status) {
			console.log('Disculpe, existió un problema');
		},
		complete : function(xhr, status) {
			console.log('Petición realizada');
		}
	});
});




