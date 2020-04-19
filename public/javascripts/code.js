var rp = require('request-promise');
var Highcharts = require('highcharts');

var options = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Coronavirus/daily/201912100/2020041800',
  json: true,

};

var options2 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Virus/daily/201912100/2020041800',
  json: true,

};

var options3 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Hydroxychloroquine/daily/201912100/2020041800',
  json: true,

};

var arrData2 = [];
var year2, month2, day2;

var arrData3 = [];
var year3, month3, day3;

rp(options2)
.then((parseBody) => {
  
  for (i = 0; i < parseBody.items.length; i++) {
    year2 = parseBody.items[i].timestamp.slice(0, 4);
    month2 = parseBody.items[i].timestamp.slice(4, 6);
    day2 = parseBody.items[i].timestamp.slice(6, 8);

    arrData2.push([new Date(year2 + '-' + month2 + '-' + day2).toDateString(), parseBody.items[i].views]);
  }


  year2 = parseBody.items[0].timestamp.slice(0, 4);
  month2 = parseBody.items[0].timestamp.slice(4, 6);
  day2 = parseBody.items[0].timestamp.slice(6, 8);
});

rp(options3)
.then((parseBody) => {
  
  for (i = 0; i < parseBody.items.length; i++) {
    year3 = parseBody.items[i].timestamp.slice(0, 4);
    month3 = parseBody.items[i].timestamp.slice(4, 6);
    day3= parseBody.items[i].timestamp.slice(6, 8);

    arrData3.push([new Date(year3 + '-' + month3 + '-' + day3).toDateString(), parseBody.items[i].views]);
  }

  year3 = parseBody.items[0].timestamp.slice(0, 4);
  month3 = parseBody.items[0].timestamp.slice(4, 6);
  day3 = parseBody.items[0].timestamp.slice(6, 8);
});

rp(options)
  .then((parseBody) => {
    var arrData = [];
    var year, month, day;

    for (i = 0; i < parseBody.items.length; i++) {
      year = parseBody.items[i].timestamp.slice(0, 4);
      month = parseBody.items[i].timestamp.slice(4, 6);
      day = parseBody.items[i].timestamp.slice(6, 8);

      arrData.push([new Date(year + '-' + month + '-' + day).toDateString(), parseBody.items[i].views]);
    }


    year = parseBody.items[0].timestamp.slice(0, 4);
    month = parseBody.items[0].timestamp.slice(4, 6);
    day = parseBody.items[0].timestamp.slice(6, 8);

    // Create the chart    
    Highcharts.chart('container', {

      title: {
        text: 'Title'
      },

      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%y/%b/%e'
        }
      },

      yAxis: {
        title: {
          text: 'Number of Views'
        }
      },

      series: [{
        name: 'views',
        data: arrData, 
        pointStart: Date.UTC(year, month, day),
        pointInterval: 24 * 3600 * 1000 // one day
      }, {
        name: 'views2',
        data: arrData2, 
        pointStart: Date.UTC(year2, month2, day2),
        pointInterval: 24 * 3600 * 1000 // one day
      },{
        name: 'views3',
        data: arrData3, 
        pointStart: Date.UTC(year3, month3, day3),
        pointInterval: 24 * 3600 * 1000 // one day
      }] 
    });
  });