var data = {
	"amount": 1188.8,
	"famount": 1188.8,
	"label": "Actividades científicas y tecnológicas",
	"level":1 ,
	"shortLabel": "ACT",
	"id": "root",
	"color": "#ffffff",
	"stroke":"#0657a4",
	"strokewidth": 10,
	"children" : [
	{
		"amount": 359.41,
		"famount": 359.41,
		"label": "Servicios Científicos y Tecnológico",
		"level":2 ,
		"shortLabel": "SCT",
		"description": "<p class='text1'>Actividades relacionadas con la investigación y el desarrollo experimental que contribuyen a la generación, la difusión y la aplicación de los conocimientos científicos y tecnológicos. A continuación se detallan algunas de estas: </p><ul><l1>•	Bibliotecas, los archivos, los centros de información y documentación, los servicios de consulta, los centros de congresos científicos</li><l1>•	Museos de ciencias y/o tecnología, de los jardines botánicos y de los parques zoológicos</li><l1>•	Traducción y edición de libros y publicaciones periódicas de ciencia y tecnología</li><l1>•	Los levantamientos topográficos, geológicos e hidrológicos, las observaciones astronómicas, meteorológicas y sismológicas.</li><l1>•	La localización y determinación de recursos petroleros y minerales.</li><l1>•	Servicio de censos demográficos; las estadísticas de producción, distribución y consumo; los estudios de mercado; las estadísticas sociales y culturales.</li></ul>",
		"color":"#0077bb",
		"icon": "./bubbletree/assets/styles/icons/communication.svg",
		"children" : [
		{
			"amount": 266.18,
			"famount": 266.18,
			"label": "Sector Público",
			"level":3 ,
			"shortLabel": "",
			"icon":"./bubbletree/assets/styles/icons/Edificios.svg",
			"children" : []
		},
		{
			"amount": 89.34,
			"famount": 89.34,
			"label": "Sector Académico",
			"level":3 ,
			"shortLabel": "",
			"icon":"./bubbletree/assets/styles/icons/books.svg",
			"children" : []
		},
		{
			"amount": 3.88,
			"famount": 3.88,
			"label": "Organizaciones sin Fines de Lucro",
			"level":3 ,
			"shortLabel": "OSFL",
			"children" : []
		}
		]
	},
	{
		"amount": 645.27,
		"famount": 645.27,
		"label": "Enseñanza y Formación Científica y Tecnológica",
		"level":2 ,
		"shortLabel": "EFCT",	
		"description": "<p class='text1'>Incluye las actividades de enseñanza y de formación de nivel superior no universitario especializado, de enseñanza y de formación de nivel superior que conduzcan a la obtención de un título profesional y grado académico universitario, de formación y de perfeccionamiento post-universitarios y de formación permanente organizada de científicos e ingenieros.</p>",
		"color":"#76aadb",	
		"icon": "./bubbletree/assets/styles/icons/planning.svg",
		"children" : [
		{
			"amount": 0,
			"famount": 0,
			"label": "Sector Público",
			"level":3 ,
			"shortLabel": "Sector Público",
			"icon":"./bubbletree/assets/styles/icons/Edificios.svg",
			"children" : []
		},
		{
			"amount": 645.27,
			"famount": 645.27,
			"label": "Sector Académico",
			"level":3 ,
			"shortLabel": "Sector Académico",
			"icon":"./bubbletree/assets/styles/icons/books.svg",
			"children" : []
		},
		{
			"amount": 0,
			"famount": 0,
			"label": "Organizaciones sin Fines de Lucro",
			"level":3 ,
			"shortLabel": "OSFL",
			"children" : []
		}
		]
	},
	{
		"amount": 183.85,
		"famount": 183.85,
		"label": "Investigación y Desarrollo Experimental",
		"level":2 ,
		"shortLabel": "I+D",
		"description": "<p class='text1'>Comprenden el trabajo creativo llevado a cabo para incrementar el volumen de conocimientos, incluido el conocimiento de la humanidad la cultura y la sociedad, y el uso de esos conocimientos para crear nuevas aplicaciones. Es decisivo para estos trabajos la presencia de la creatividad e innovación, por lo que existen cuatro elementos esenciales que las caracterizan:</p><ul><li> i) El elemento de creatividad.</li><li> ii) El empleo del método científico.</li><li>iii) El elemento de novedad o innovación.</li><li> iv) La generación de nuevos conocimientos</li></ul>", 
		"icon":"./bubbletree/assets/styles/icons/microscope.svg",
		"color":"#008942",
		"children" : [
		{
			"amount": 77.87,
			"famount": 77.87,
			"label": "Sector Público",
			"level":3 ,
			"shortLabel": "Sector Público",
			"icon":"./bubbletree/assets/styles/icons/Edificios.svg",
			"children" : []
		},
		{
			"amount": 103.55,
			"famount": 103.55,
			"label": "Sector Académico",
			"level":3 ,
			"shortLabel": "Sector Académico",
			"icon":"./bubbletree/assets/styles/icons/books.svg",
			"children" : []
		},
		{
			"amount": 3.88,
			"famount": 3.88,
			"label": "Organizaciones sin Fines de Lucro",
			"level":3 ,
			"shortLabel": "OSFL",
			"children" : []
		}
		]
	}
	]
};
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


/*	$.ajax({
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
	});*/
	new BubbleTree({
		autoColors: true,
		data: data,
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
});




