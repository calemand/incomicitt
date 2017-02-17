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
        categories: ['1990' , '1991',  '1992',  '1993',  '1994',  '1995',  '1996',  '1997',  '1998',  '1999',  '2000',  '2001',  '2002',  '2003',  '2004',  '2005',  '2006',  '2007',  '2008',  '2009',  '2010',  '2011',  '2012',  '2013',  '2014']
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
      tooltip: { 
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
      {name:'Argentina',  color:'#404040', data:[    0.33, 0.34, 0.38, 0.43, 0.44, 0.49, 0.5,  0.5,  0.5,  0.52, 0.5,  0.48, 0.44, 0.46, 0.45, 0.48, 0.52, 0.55, 0.54, 0.63, 0.61, 0.61, 0.68, 0.66, 0.64, ]},
      {name:'Bolivia',  color:'#404040', data:[   null, null, null, null, null, null, null, 0.58, 0.54, 0.55, 0.54, 0.52, 0.51, null, null, null, null, null, null, 0.16, null, null, null, null, null, ]},
      {name:'Brasil',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, 1.3,  1.33, 1.3,  1.31, 1.3,  1.3,  1.27, 1.38, 1.46, 1.54, 1.6,  1.56, 1.62, 1.61, null, ]},
      {name:'Canadá',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Chile',  color:'#404040', data:[   null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Colombia',  color:'#404040', data:[    null, null, null, null, null, 0.55, 0.56, 0.53, null, null, 0.31, 0.28, 0.31, 0.41, 0.43, 0.44, 0.4,  0.46, 0.49, 0.45, 0.47, 0.48, 0.54, 0.61, 0.64, ]},
      {name:'Costa Rica',  color:'#000099', data:[    0.73, 0.81, 0.97, 1.11, 0.97, 0.98, 1.49, 1.4,  1.28, 0.9,  0.93, null, null, 0.84, 1,  null, 1.33, 1.33, 1.39, 1.97, 1.86, 1.77, 1.98, 2.01, null, ]},
      {name:'Cuba',  color:'#404040', data:[    1.09, 1.16, 1.66, 1.32, 0.98, 0.87, 0.78, 0.82, 0.93, 1.01, 0.89, 0.98, 0.88, 0.94, 0.93, 0.84, 0.69, 0.72, 0.83, 1.02, 1.01, 0.45, 0.59, 0.79, 0.71, ]},
      {name:'Ecuador',  color:'#404040', data:[   null, null, null, null, null, null, 0.2,  0.26, 0.27, null, null, 0.15, 0.17, 0.18, null, null, 0.2,  0.23, 0.38, 0.44, 0.47, 0.4,  null, null, null, ]},
      {name:'España',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Guatemala',  color:'#404040', data:[   null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Honduras',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, 0.05, 0.05, 0.05, 0.05, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Jamaica',  color:'#404040', data:[   null, null, null, null, null, null, null, null, null, null, null, 0.73, 0.74, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'México',  color:'#404040', data:[    0.28, 0.33, 0.32, 0.37, 0.41, 0.35, 0.35, 0.42, 0.46, 0.41, 0.42, 0.41, 0.36, 0.73, 0.69, 0.71, 0.65, 0.65, 0.69, 0.76, 0.75, 0.74, 0.73, 0.75, 0.87, ]},
      {name:'Nicaragua',  color:'#404040', data:[   null, null, null, null, null, null, null, 0.09, null, null, null, null, 0.06, null, 0.06, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Panamá',  color:'#404040', data:[    0.63, 0.67, 0.63, 0.71, 0.72, 0.76, 0.85, 0.92, 0.89, 0.94, 0.91, 1.03, 0.85, 0.78, 0.91, 0.77, 0.76, 0.47, 0.46, 0.39, 0.41, 0.51, 0.31, 0.35, null, ]},
      {name:'Perú',  color:'#404040', data:[    null, null, null, 0.76, 0.64, 0.88, 0.91, 0.99, 1.12, 1.25, 1.3,  1.45, 1.41, 1.2,  null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Puerto Rico',  color:'#404040', data:[   null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Portugal',  color:'#404040', data:[    null, null, null, null, null, 0.9,  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Paraguay',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, null, 1.1,  1.17, 0.9,  0.85, 0.63, null, null, 0.41, null, null, 0.37, 0.35, null, 0.31, ]},
      {name:'El Salvador',  color:'#404040', data:[   null, null, null, null, 0.3,  0.3,  0.31, 0.31, 0.83, null, null, null, null, null, null, null, null, 0.79, 0.87, 0.94, 0.99, 0.98, 1.09, 1.15, 1.12, ]},
      {name:'Trinidad y Tobago',  color:'#404040', data:[   null, null, null, null, null, null, 0.28, 0.3,  0.33, 0.34, 0.3,  0.26, 0.27, 0.23, 0.21, 0.19, 0.12, 0.1,  0.08, 0.15, 0.12, 0.11, 0.12, 0.13, 0.2,  ]},
      {name:'Estados Unidos',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      {name:'Uruguay',  color:'#404040', data:[   null, null, null, null, null, null, null, null, null, null, null, null, 0.25, null, null, null, null, 0.65, 0.62, 0.72, 0.69, 0.6,  0.55, 0.51, 0.54, ]},
      {name:'Venezuela',  color:'#404040', data:[   0.37, 0.39, 0.49, 0.47, 0.58, null, null, 0.43, 0.39, 0.39, 0.38, 0.5,  0.43, 0.31, 0.25, 0.35, 1.78, 2.69, 2.54, 2.36, null, null, null, null, null, ]},
      {name:'América Latina y el Caribe',  color:'#ff0000', data:[    0.69, 0.65, 0.63, 0.66, 0.7,  0.77, 0.78, 0.85, 0.84, 0.76, 0.74, 0.72, 0.68, 0.84, 0.8,  0.83, 0.88, 0.99, 1.06, 1.13, 1.13, 1.07, 1.08, 1.06, 1.05, ]},
      {name:'Iberoamérica',  color:'#404040', data:[    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ]},
      ]
    });
}
});


