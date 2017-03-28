/* Jquery 
$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
   chartTipos();
  chartProyectos();
  chart_ID_ACT();
})
*/
 $( function() {
    $( "#tabs" ).tabs();
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
  
 chartTipos();
  chartProyectos();
  chart_ID_ACT();
  function chartTipos() {
    Highcharts.chart('containerTipos', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Tipos de investigación'
      },
      subtitle: {
        text: 'Inverción por tipos de investigación según año',
      },
      xAxis: {
        categories: ['2010','2011',  '2012',  '2013',  '2014']
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
      tooltip: { 
        valueSuffix: "$", 
        valuePrefix: "",
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
        formatter: function () {
          var s = "<center><strong>Año "+this.x+"</center></strong><table>";
          var total = 0;
          var cont = 0;
          $.each(this.points, function () {
            cont++;
            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b> $"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
              total += this.y;
            }
          });if(cont>1){
            s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> $"+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
          }
          var total = 0;
          return s+='</table>';
        },
        valueDecimals: 2
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: [
      { name: 'Investigación Aplicada',  data: [ 1657, 2218, 2146, 1566, 1492]},
      { name: 'Investigación básica',  data: [  1054, 1149, 1128, 1195, 1108]},
      { name: 'Investigación Experimental',  data: [  722,  653,  366,  371,  352]},
      { name: 'Sin especificar',  data: [ 552,  592,  438,  232,  309]}
      ]
    });
  }

  function chartProyectos() {
    Highcharts.chart('containerProyectos', {
     chart: {
      type: 'column'
    },
    title: {
      text: 'Proyectos por Area Científicas'
    },
    subtitle: {
      text: 'Inverción en proyectos según área científica 2010-2014',
    },
    xAxis: {
      categories: ['2010','2011',  '2012',  '2013',  '2014']
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
    tooltip: { 
      valueSuffix: "$", 
      valuePrefix: "",
      borderRadius: 10,
      borderWidth: 3,
      shared: true,
      useHTML: true,
      formatter: function () {
        var s = "<center><strong>Año "+this.x+"</center></strong><table>";
        var total = 0;
        var cont = 0;
        $.each(this.points, function () {
          cont++;
          if(this.y!=0){
            s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b> $"+Highcharts.numberFormat(this.y, 2,',','.')+"</b></td></tr>";
            total += this.y;
          }
        });if(cont>1){
          s += "<tr><td style='color:#000'>Total: </td>" + "<td style='text-align: right'><b> $"+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
        }
        var total = 0;
        return s+='</table>';
      },
      valueDecimals: 2
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: 
    [
    { name: 'Ciencias agrícolas',  data: [  1281, 1383, 1016, 786,  853]},
    { name: 'Ciencias exactas y naturales',  data: [  765,  753,  710,  688,  620]},
    { name: 'Ciencias médicas',  data: [  505,  1116, 1007, 501,  394]},
    { name: 'Ciencias sociales',  data: [ 695,  714,  721,  691,  800]},
    { name: 'Humanidades',  data: [ 168,  146,  139,  145,  139]},
    { name: 'Ingeniería y tecnología',  data: [ 423,  346,  358,  332,  423]},
    { name: 'No desagregados',  data: [ 148,  154,  127,  191,  7]},
    { name: 'Otras',  data: [ null,  null,  null,  30, 25]}
    ]
  });
  }

  function chart_ID_ACT() {
    Highcharts.chart('container_ID_ACT', {
      chart: {
        type: 'line',
        zoomType: 'x'
      },
      title: {
        text: 'Costa Riva vs Latinoamérica'
      },
      subtitle: {
        text: 'PIB vs ACT Paises',
      },
      xAxis: {
        categories: [  '2006',  '2007',  '2008',  '2009',  '2010',  '2011',  '2012',  '2013',  '2014']
      },
      yAxis: {
        title: {
          text: 'Porcentaje del PIB'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
  /*      tooltip: { 
        borderRadius: 10,
        borderWidth: 3,
        shared: true,
        useHTML: true,
      formatter: function () {
          var s = "<center><strong>Año "+this.x+"</center></strong><table>";

          $.each(this.points, function () {

            if(this.y!=0){
              s += "<tr><td style='color:"+this.series.color+"'>"+this.series.name+": </td>" + "<td style='text-align: right'><b>"+Highcharts.numberFormat(this.y, 2,',','.')+"%</b></td></tr>";
              
            }
          });
          return s+='</table>';
        },
        valueDecimals: 2
      },*/
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
          }
        }
      },
      series: 
      [
      { name:'Argentina',  color:'#404040', data:[ 86, 84, 86, 93, 92, 92, 94, 94, 92]},
      { name:'Brasil',  color:'#404040', data:[  78, 79, 77, 73, 72, 73, 71, 74, null,]},
      { name:'Colombia' , color:'#404040', data:[  37, 39, 39, 42, 40, 42, 41, 44, 39]},
      { name:'Costa Rica' , color:'#ff0000', data:[  32, 27, 29, 28, 26, 27, 29, 28, 22]},
      { name:'Cuba',  color:'#404040', data:[  60, 60, 60, 60, 60, 60, 70, 60, 60]},
      { name:'México',  color:'#404040', data:[  57, 67, 68, 68, 72, 70, 67, 67, 62]},
      { name:'Panamá' , color:'#404040', data:[  37, 39, 41, 35, 36, 38, 30, 21, null,]},
      { name:'El Salvador',  color:'#404040', data:[ null,,  11, 12, 8,  7,  3,  3,  5,  8]},
      { name:'Trinidad y Tobago',  color:'#404040', data:[ 47, 45, 39, 36, 40, 36, 38, 41, 42]},
      { name:'Uruguay',  color:'#404040', data:[ null,,  65, 61, 59, 51, 59, 61, 62, 62]},
      { name:'América Latina y el Caribe',  color:'#404040', data:[  61, 61, 61, 61, 64, 67, 65, 68, 67]}
      ]
    });
  }
});


