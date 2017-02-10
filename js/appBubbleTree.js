		$(function() {
			var randomNames = ['Burgis', 'Pascal', 'Lysann', 'Theo', 'Julia', 'Barnabas', 'Immanuel', 'Marisa', 'Folker', 'Hadumod', 'Friedegunde', 'Marco', 'Otto', 'Sonnhardt', 'Arntraud', 'Andree', 'Wiltrudis', 'Astrid', 'Kathrein', 'Raoul', 'Vivien', 'Ole', 'Leo', 'Dankward', 'David', 'Ferfried', 'Sonngard', 'Fabio', 'Hansjakob', 'Huberta', 'Doro', 'Gordian', 'Sturmius', 'Sturmhard', 'Reintraud', 'Sabine', 'Georg', 'Sylvia', 'Ann', 'Editha', 'Gunhard', 'Etienne', 'Hildtraud', 'Noah', 'Margarete', 'Stilla', 'Brian', 'Pauline', 'Edgar', 'Kathrin'];
			var nodeCount = 1;
			function generateRandomData(node, level) {
				if (!level) level = 1;
				var numChildren = 10; //3+Math.round(Math.random()*6);
				node.children = [];
				var amount = node.amount;
				for (var i=0; i<numChildren; i++) {
					nodeCount ++;
					var child = {
						label: randomNames[Number(String(level-1)+String(i))],
						amount: i+1 < numChildren ? amount*Math.random()*.6 : amount
					};
					if (level == 1) child.color = vis4color.fromHSL(i/numChildren*360, .7, .5).x;
					if (level == 2) child.color = vis4color.fromHex(node.color).lightness('*'+(.5+Math.random()*.5)).x;
					amount -= child.amount;
					node.children.push(child);
					if (level < 3) generateRandomData(child, level+1);
				}
				return node;
			}
			var data = generateRandomData({
				label: 'Random Names, Random Amounts',
				amount: 100000000
			});
			new BubbleTree({
				data: data,
				container: '.bubbletree'
			});
		});
