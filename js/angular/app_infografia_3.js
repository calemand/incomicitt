/* Jquery */

 $( function() {
    $( "#tabs" ).tabs();
  } );

 $( function() {
    $( "#myTab" ).tabs();
  } );

 $( function() {
    $( "#my_Tab" ).tabs();
  } );

  $( function() {
    $( "#myTabs" ).tabs();
  } );
  $( function() {
    $( "#tabsFactores" ).tabs();
  } );


var app = angular.module("app", []);

app.controller("MainCtrl", function($scope) {
	$scope.tab1 = 1;
  $scope.setTab = function(newTab){
    $scope.tab1 = newTab;

  };

  $scope.isSet = function(tabNum){
    return $scope.tab1 === tabNum;
  };

  $scope.tab2 = 1;
  $scope.setTab2 = function(newTab){
    $scope.tab2 = newTab;
  };

  $scope.isSet2 = function(tabNum){
    return $scope.tab2 === tabNum;
  };
  
/*chartACTInn();
chartACTInn2();*/
impInn();
impInnID();
/*noInn() ;*/
factNoInn();
factNoInnNo();
  function chartACTInn() {
    Highcharts.chart('actInn', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Actividades de innovación'
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: ['A cualquier tipo de innovación', 'Producto',  'Proceso', 'Organización',  'Comercialización']
      },
      yAxis: {
        title: {
          text: 'Cifras en millones de dolares'
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
              plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          var total = 0;
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
              total += this.y;
            }
          });if(cont>1){
            s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> "+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
          }
          var total = 0;
          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [
      {name:'I+D externa',  data:[  17.3, 58.1, 43.9, 20.3, 25.9]},
      {name:'Consultorías (para cambios novedosos)',  data:[  22.7, 13.3, 7,  2.3,  6.3]},
      {name:'Ingeniería y Diseño Industrial (in house)',  data:[  27.7, 29.5, 44.6, 7.9,  9.2]},
      {name:'Contratación de Tecnología (existente)',  data:[ 29.1, 13.1, 24.3, 28.8, 17.6]},
      {name:'Gestión (in house)',  data:[ 38.3, 12.8, 24.3, 26.8, 16.7]},
      {name:'Software',  data:[ 44.1, 17.3, 18.2, 9.9,  6.8]},
      {name:'Hardware',  data:[ 48.9, 16.7, 21.6, 6.1,  4.5]},
      {name:'Bienes de Capital (maquinaria y equipo)',  data:[  57.4, 22.7, 27.3, 18.2, 11.5]},
      {name:'Capacitación',  data:[ 66.6, 32.9, 46.6, 35.4, 22.7]},
      {name:'I+D interna',  data:[  70, 9,  12.4, 13.5, 7.2]}

      ]
    });
  }


function chartACTInn2() {
    Highcharts.chart('actInn2', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Actividades de innovación'
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: ['I+D externa', 'Consultorías (para cambios novedosos)',  'Ingeniería y Diseño Industrial (in house)',  'Contratación de Tecnología (existente)', 'Gestión (in house)', 'Software', 'Hardware', 'Bienes de Capital (maquinaria y equipo)',  'Capacitación', 'I+D interna'
]
      },
      yAxis: {
        title: {
          text: 'Cifras en millones de dolares'
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
              plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          var total = 0;
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
              total += this.y;
            }
          });if(cont>1){
            s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> "+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
          }
          var total = 0;
          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [

{name:'A cualquier tipo de innovación',  data:[ 17.3, 22.7, 27.7, 29.1, 38.3, 44.1, 48.9, 57.4, 66.6, 70]},
{name:'Producto',  data:[ 58.1, 13.3, 29.5, 13.1, 12.8, 17.3, 16.7, 22.7, 32.9, 9]},
{name:'Proceso',  data:[  43.9, 7,  44.6, 24.3, 24.3, 18.2, 21.6, 27.3, 46.6, 12.4]},
{name:'Organización',  data:[ 20.3, 2.3,  7.9,  28.8, 26.8, 9.9,  6.1,  18.2, 35.4, 13.5]},
{name:'Comercialización',  data:[ 25.9, 6.3,  9.2,  17.6, 16.7, 6.8,  4.5,  11.5, 22.7, 7.2]}


      ]
    });
  }

  




  function impInn() {
    Highcharts.chart('impInn', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Impacto de innovación'
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [ 'Mejoró la calidad de los productos', 'Amplió la gama de productos ofrecidos',  'Aumentó la capacidad productiva',  'Aumentó la flexibilidad de la producción', 'Redujo el consumo de materias primas e insumos', 'Redujo el consumo de energía', 'Redujo los costos de la mano de obra', 'Mejoró el aprovechamiento de las competencias del personal', 'Amplió la participación y creatividad de la fuerza laboral', 'Se mejoró la gestión de los procesos de innovación', 'Permitió mantener la participación de la empresa en el mercado', 'Amplió la participación de la empresa en el mercado',  'Permitió abrir nuevos mercados', 'Mejoró el impacto sobre aspectos relacionados con el ambiente, salud y/o seguridad', 'Alcanzó regulaciones o estándares nacionales', 'Alcanzó regulaciones o estándares internacionales',
 ]
      },
      yAxis: {
        title: {
          text: ''
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
              plotOptions: {
          column: {
            stacking: 'percent',
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          var total = 0;
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
              total += this.y;
            }
          });if(cont>1){
            s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> "+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
          }
          var total = 0;
          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [

{name:'Alta',  data:[ 65.6, 49.8, 50, 37, 22.4, 24.5, 22.6, 41, 38, 36.8, 68.6, 54.5, 41.7, 33.8, 24.9, 16.6]},
{name:'Media',  data:[  20.4, 26.4, 25.2, 32.2, 21.9, 23.1, 26.9, 34.9, 34.4, 38, 20.3, 29.6, 24.6, 28.5, 16.7, 9.8]},
{name:'Baja',  data:[ 6.3,  10.6, 13.2, 17.1, 24.8, 22.6, 24, 12, 15.9, 16.3, 7.2,  9.4,  19.8, 17.9, 12.8, 13.2]},
//{name:'Irrelevante',  data:[  7.7,  13.2, 11.5, 13.7, 30.8, 29.8, 26.4, 12, 11.8, 8.9,  3.9,  6.7,  14, 19.8, 45.7, 60.4]},



      ]
    });
  }

  function impInnID() {
    Highcharts.chart('impInnID', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Porcentaje de ventas dedicado a I+D'
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [ '2010' , '2011' , '2012' , '2013' ]
      },
      yAxis: {
        title: {
          text: ''
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          var total = 0;
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+" %</b></td></tr>";
              total += this.y;
            }
          });/*if(cont>1){
            s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> "+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
          }*/
          var total = 0;
          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [

{name:'Pequeñas',  data:[ 0.86, 0.73, 1.3,  1.4]},
{name:'Medianas',  data:[ 0.43, 0.44, 1.1,  1]},
{name:'Grandes',  data:[  0.36, 0.3,  0.72, 1.2]}




      ]
    });
  }
  function noInn() {
    Highcharts.chart('noInn', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Factores Alto No I+D'
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [ 'I+D es demasiado caro para la empresa',  'Falta de apoyo del Sector Público',  'Falta de acceso a crédito',  'Las fuentes externas de información son suficientes para la innovación', 'Mercados pequeños que no permiten la recuperación de las inversiones en I+D',  'Las inversiones en I+D son muy riesgosas', 'Dificultades para apropiarse de los resultados de la I+D', 'I+D no es necesario para las actividades de innovación de la empresa', 'La empresa no innova', 'Las universidades substituyen la I+D de la empresa', 'Los centros e institutos de investigación públicos substituyen la I+D de la empresa'
 ]
      },
      yAxis: {
        title: {
          text: ''
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
            
            }
          });

          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [

{name:'Empresas que Invirtieron en I+D',  data:[  55,9, 55.5, 48.8, 45.6, 43.8, 37.4, 32.4, 21.5, 17.4, 13.4, 10.4]},
{name:'Empresas que No Invirtieron en I+D',  data:[ 56,0, 49.2, 42.1, 34.4, 44.0, 34.4, 38.0, 34.4, 36.8, 12.8, 6.4]}
      ]
    });
  }

   function factNoInn() {
    Highcharts.chart('factNoInn', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Empresas que innovaron'
      },
      subtitle: {
        text: 'Obstáculos para innovar',
      },
      xAxis: {
        categories: [ 'Carencia de infraestructura física', 'Escaso desarrollo de instituciones relacionadas con ciencia y tecnología', 'Reducido tamaño del mercado',  'Políticas públicas inadecuadas para la promoción de C&T',  'Períodos de retorno inconvenientes' ]
      },
      yAxis: {
        title: {
          text: ''
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
            
            }
          });

          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [
{name:'Factor',  data:[ 41, 38.5, 33.3, 33.3, 33.3]}

      ]
    });
  }

 function factNoInnNo() {
    Highcharts.chart('factNoInnNo', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Empresas que no innovaron'
      },
      subtitle: {
        text: 'Obstáculos para innovar',
      },
      xAxis: {
        categories: ['Falta de recursos financieros propios', 'Facilidad de imitación por terceros',  'Escasez de personal capacitado', 'No consideraron necesario hacer ninguna innovación', 'Reducido tamaño del mercado' ]
            },
      yAxis: {
        title: {
          text: ''
        },

        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },

      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>"+this.x+"</center></strong><table>";
          
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
            
            }
          });

          return s+='</table>';
        },
        valueDecimals: 2
      },
      series: [
{name:'Porcentaje',  data:[ 43.3, 33.4, 30, 30, 26.7]}

      ]
    });
  }
});


