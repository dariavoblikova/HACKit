var rp = require('request-promise');
var Highcharts = require('highcharts');

var options = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Coronavirus/daily/20200101/20200401',
  json: true,

};

var options2 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Spanish_flu/daily/20200101/20200401',
  json: true,

};

var options3 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Hydroxychloroquine/daily/20200101/20200401',
  json: true,

};

var rand1 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Martial_law/daily/20200101/20200401',
  json: true,

};

var rand2 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Stock_market/daily/20200101/20200401',
  json: true,

};

var rand3 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Lockdown/daily/20200101/20200401',
  json: true,

};

var name1 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Boris_Johnson/daily/20200101/20200401',
  json: true,

};

var name2 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Joe_Exotic/daily/20200101/20200401',
  json: true,

};

var name3 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Carole_Baskin/daily/20200101/20200401',
  json: true,

};

var name4 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Andrew_Cuomo/daily/20200101/20200401',
  json: true,

};

var name5 = {
  method: 'GET',
  uri: 'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Jay_Inslee/daily/20200101/20200401',
  json: true,

};

var arrData = [];
var arrData2 = [];
var arrData3 = [];
var year, year2, year3;
var month, month2, month3;
var day, day2, day3;

var name1ArrData = [];
var name2ArrData = [];
var name3ArrData = [];
var name4ArrData = [];
var name5ArrData = [];
var name1Year, name2Year, name3Year, name4Year, name5Year;
var name1Month, name2Month, name3Month, name4Month, name5Month;
var name1Day, name2Day, name3Day, name4Day, name5Day;

var rand1ArrData = [];
var rand2ArrData = [];
var rand3ArrData = [];
var rand4ArrData = [];
var name5ArrData = [];
var rand1Year, rand2Year, rand3Year, rand4Year, rand5Year;
var rand1Month, rand2Month, rand3Month, rand4Month, rand5Month;
var rand1Day, rand2Day, rand3Day, rand4Day, rand5Day;

rp(name1)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    name1Year = parseBody.items[i].timestamp.slice(0, 4);
    name1Month = parseBody.items[i].timestamp.slice(4, 6);
    name1Day = parseBody.items[i].timestamp.slice(6, 8);

    name1ArrData.push([new Date(name1Year + '-' + name1Month + '-' + name1Day).toDateString(), parseBody.items[i].views]);
  }

  name1Year = parseBody.items[0].timestamp.slice(0, 4);
  name1Month = parseBody.items[0].timestamp.slice(4, 6);
  name1Day = parseBody.items[0].timestamp.slice(6, 8);
});

rp(name2)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    name2Year = parseBody.items[i].timestamp.slice(0, 4);
    name2Month = parseBody.items[i].timestamp.slice(4, 6);
    name2Day = parseBody.items[i].timestamp.slice(6, 8);

    name2ArrData.push([new Date(name2Year + '-' + name2Month + '-' + name2Day).toDateString(), parseBody.items[i].views]);
  }

  name2Year = parseBody.items[0].timestamp.slice(0, 4);
  name2Month = parseBody.items[0].timestamp.slice(4, 6);
  name2Day = parseBody.items[0].timestamp.slice(6, 8);
});

rp(name3)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    name3Year = parseBody.items[i].timestamp.slice(0, 4);
    name3Month = parseBody.items[i].timestamp.slice(4, 6);
    name3Day = parseBody.items[i].timestamp.slice(6, 8);

    name3ArrData.push([new Date(name3Year + '-' + name3Month + '-' + name3Day).toDateString(), parseBody.items[i].views]);
  }

  name3Year = parseBody.items[0].timestamp.slice(0, 4);
  name3Month = parseBody.items[0].timestamp.slice(4, 6);
  name3Day = parseBody.items[0].timestamp.slice(6, 8);
});

rp(name4)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    name4Year = parseBody.items[i].timestamp.slice(0, 4);
    name4Month = parseBody.items[i].timestamp.slice(4, 6);
    name4Day = parseBody.items[i].timestamp.slice(6, 8);

    name4ArrData.push([new Date(name4Year + '-' + name4Month + '-' + name4Day).toDateString(), parseBody.items[i].views]);
  }

  name4Year = parseBody.items[0].timestamp.slice(0, 4);
  name4Month = parseBody.items[0].timestamp.slice(4, 6);
  name4Day = parseBody.items[0].timestamp.slice(6, 8);
});

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
        text: 'Disease Related Wikipedia Searches'
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
        name: 'Coronavirus',
        data: arrData,
        pointStart: Date.UTC(year, month, day),
        pointInterval: 24 * 3600 * 1000 // one day
      }, {
        name: 'Spanish flu',
        data: arrData2,
        pointStart: Date.UTC(year2, month2, day2),
        pointInterval: 24 * 3600 * 1000 // one day
      },{
        name: 'Hydroxychloroquine',
        data: arrData3,
        pointStart: Date.UTC(year3, month3, day3),
        pointInterval: 24 * 3600 * 1000 // one day
      }]
    });
  });


rp(name5)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    name5Year = parseBody.items[i].timestamp.slice(0, 4);
    name5Month = parseBody.items[i].timestamp.slice(4, 6);
    name5Day = parseBody.items[i].timestamp.slice(6, 8);

    name5ArrData.push([new Date(name5Year + '-' + name5Month + '-' + name5Day).toDateString(), parseBody.items[i].views]);
  }

  name5Year = parseBody.items[0].timestamp.slice(0, 4);
  name5Month = parseBody.items[0].timestamp.slice(4, 6);
  name5Day = parseBody.items[0].timestamp.slice(6, 8);

  // Create the chart
  Highcharts.chart('container2', {

    title: {
      text: 'People'
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
      name: 'Boris Johnson',
      data: name1ArrData,
      pointStart: Date.UTC(year, month, day),
      pointInterval: 24 * 3600 * 1000 // one day
    }, {
      name: 'Joe Exotic',
      data: name2ArrData,
      pointStart: Date.UTC(year2, month2, day2),
      pointInterval: 24 * 3600 * 1000 // one day
    },{
      name: 'Carole Baskin',
      data: name3ArrData,
      pointStart: Date.UTC(year3, month3, day3),
      pointInterval: 24 * 3600 * 1000 // one day
    }, {
      name: 'Andrew Cuomo',
      data: name4ArrData,
      pointStart: Date.UTC(year2, month2, day2),
      pointInterval: 24 * 3600 * 1000 // one day
    }, {
      name: 'Jay Inslee',
      data: name5ArrData,
      pointStart: Date.UTC(year2, month2, day2),
      pointInterval: 24 * 3600 * 1000 // one day
    }]
  });
});

rp(rand1)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    rand1Year = parseBody.items[i].timestamp.slice(0, 4);
    rand1Month = parseBody.items[i].timestamp.slice(4, 6);
    rand1Day = parseBody.items[i].timestamp.slice(6, 8);

    rand1ArrData.push([new Date(rand1Year + '-' + rand1Month + '-' + rand1Day).toDateString(), parseBody.items[i].views]);
  }


  rand1Year = parseBody.items[0].timestamp.slice(0, 4);
  rand1Month = parseBody.items[0].timestamp.slice(4, 6);
  rand1Day = parseBody.items[0].timestamp.slice(6, 8);
});

rp(rand2)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    rand2Year = parseBody.items[i].timestamp.slice(0, 4);
    rand2Month = parseBody.items[i].timestamp.slice(4, 6);
    rand2Day = parseBody.items[i].timestamp.slice(6, 8);

    rand2ArrData.push([new Date(rand2Year + '-' + rand2Month + '-' + rand2Day).toDateString(), parseBody.items[i].views]);
  }


  rand2Year = parseBody.items[0].timestamp.slice(0, 4);
  rand2Month = parseBody.items[0].timestamp.slice(4, 6);
  rand2Day = parseBody.items[0].timestamp.slice(6, 8);
});

rp(rand3)
.then((parseBody) => {

  for (i = 0; i < parseBody.items.length; i++) {
    rand3Year = parseBody.items[i].timestamp.slice(0, 4);
    rand3Month = parseBody.items[i].timestamp.slice(4, 6);
    rand3Day = parseBody.items[i].timestamp.slice(6, 8);

    rand3ArrData.push([new Date(rand3Year + '-' + rand3Month + '-' + rand3Day).toDateString(), parseBody.items[i].views]);
  }


  rand3Year = parseBody.items[0].timestamp.slice(0, 4);
  rand3Month = parseBody.items[0].timestamp.slice(4, 6);
  rand3Day = parseBody.items[0].timestamp.slice(6, 8);

    // Create the chart
    Highcharts.chart('container3', {

      title: {
        text: 'Other Wikipedia Searches'
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
        name: 'Martial law',
        data: rand1ArrData,
        pointStart: Date.UTC(year, month, day),
        pointInterval: 24 * 3600 * 1000 // one day
      }, {
        name: 'Stock market',
        data: rand2ArrData,
        pointStart: Date.UTC(year2, month2, day2),
        pointInterval: 24 * 3600 * 1000 // one day
      },{
        name: 'Lockdown',
        data: rand3ArrData,
        pointStart: Date.UTC(year3, month3, day3),
        pointInterval: 24 * 3600 * 1000 // one day
      }]
    });
  });