/* Jquery */
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
  
  chartACT();
  chartACTPais() 
  function chartACT() {
    Highcharts.chart('container-ACT1', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Gastos del ACT'
      },
      subtitle: {
        text: 'División de Gastos del ACT',
      },
      xAxis: {
        categories: ['2011',  '2012',  '2013',  '2014']
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
            s += "<tr><td style='color:#000'>Total de gastos en ACT: </td>" + "<td style='text-align: right'><b> $"+Highcharts.numberFormat(total,2,',','.')+"</b></td></tr>";
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
      {
        name: 'Gastos en EFCT',
        data: [343,425.8,427.75,645.27]
      },{
        name: 'Gastos en SCT',
        data: [192.7,205.5,282.85,359.41]
      },  {
        name: 'Gastos en I+D',
        data: [149.5,177.1,189.27,183.85]
      }, {
        name: 'Gastos no desagregados por actividad',
        data: [7.2, 1.8, 1.96, 0.36]
      }]
    });
  }



  function chartACTPais() {
    Highcharts.chart('containerACTPaises', {
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
{visible: false, name:'Argentina',  color:'#404040', data:[    0.52, 0.54, 0.54, 0.62, 0.61, 0.61, 0.67, 0.66, 0.64]},
{visible: false, name:'Brasil',  color:'#404040', data:[   1.26, 1.37, 1.46, 1.54, 1.60, 1.55, 1.62, 1.61, null]},
{visible: false, name:'Colombia',  color:'#404040', data:[   0.40, 0.45, 0.48, 0.45, 0.46, 0.47, 0.53, 0.61, 0.63]},
{visible: true, name:'Costa Rica',  color:'#ff0000', data:[   1.33, 1.32, 1.39, 1.96, 1.88, 1.81, 1.98, 2.01, 2.58]},
{visible: false, name:'Cuba',  color:'#404040', data:[   0.68, 0.72, 0.82, 1.02, 1.01, 0.45, 0.58, 0.79, 0.70]},
{visible: false, name:'México',  color:'#404040', data:[   0.65, 0.64, 0.69, 0.76, 0.74, 0.73, 0.73, 0.75, 0.87]},
{visible: false, name:'Panamá',  color:'#404040', data:[   0.75, 0.47, 0.46, 0.39, 0.41, 0.50, 0.30, 0.34, null]},
{visible: false, name:'El Salvador',  color:'#404040', data:[    null, 0.78, 0.87, 0.93, 0.98, 0.97, 1.08, 1.14, 1.11]},
{visible: false, name:'Trinidad y Tobago',  color:'#404040', data:[    0.11, 0.10, 0.07, 0.15, 0.11, 0.11, 0.11, 0.13, 0.19]},
{visible: false, name:'Uruguay',  color:'#404040', data:[    null, 0.65, 0.62, 0.72, 0.69, 0.59, 0.55, 0.51, 0.54]},
{visible: true, name:'América Latina y el Caribe',  color:'#0000ff', data:[   0.88, 0.98, 1.05, 1.13, 1.12, 1.07, 1.07, 1.05, 1.04]}
      ]
    });
}
});


