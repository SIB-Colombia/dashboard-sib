//funciones para ver referencias e info

function showDiv2(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement)
    .parent()
    .parent()
    .next('.referencia')
    .css('display', 'block');
}
function showDiv(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement).parent().next('.referencia').css('display', 'block');
}
function showDiv0(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement).next('.referencia').css('display', 'block');
}
function showDiv2nd(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement).parent().nextAll('.2nd').css('display', 'block');
}
function showDiv3rd(currentElement) {
  $('.referencia').css('display', 'none');
  $(currentElement).parent().nextAll('.3rd').css('display', 'block');
}
function hideDiv(currentElement) {
  $(currentElement).parent().css('display', 'none');
}
function hideDiv2(currentElement) {
  $(currentElement).parent().parent().parent().css('display', 'none');
}

//funciones para graficas de especies y de tercer nivel

function showDivGraph(currentElement) {
  $('.grapharea').css('display', 'none');
  $(currentElement).parent().next('.grapharea').css('display', 'block');

  // pie de literatura especies mamiferos

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(ChartMam1);

  function ChartMam1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 518]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam1b);

  function ChartMam1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 409],
      ['Especies sin datos SiB Colombia', 109]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam2);

  function ChartMam2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 5],
      ['En peligro', 10],
      ['Vulnerable', 25]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam2b);

  function ChartMam2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 23</div>'
      ],
      [
        'En peligro SiB',
        5,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 5</br>Registros: 44</div>'
      ],
      [
        'Vulnerable SiB',
        11,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 11</br>Registros: 574</div>'
      ],
      ['Especies sin datos SiB Colombia', 22, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam3);

  function ChartMam3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 33],
      ['Apéndice II', 67],
      ['Apéndice III', 11]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(ChartMam3b);

  function ChartMam3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        18,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 18</br>Registros: 797</div>'
      ],
      [
        'Apéndice II en SiB',
        28,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 28</br>Registros: 2403</div>'
      ],
      [
        'Apéndice III en SiB',
        11,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 11</br>Registros: 1204</div>'
      ],
      ['Especies sin datos SiB Colombia', 54, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmam3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies aves

  google.charts.setOnLoadCallback(Chartave1);

  function Chartave1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1937]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave1b);

  function Chartave1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1845],
      ['Especies sin datos SiB Colombia', 92]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave2);

  function Chartave2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 17],
      ['En peligro', 56],
      ['Vulnerable', 67]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave2b);

  function Chartave2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 17</br>Registros: 673</div>'
      ],
      [
        'En peligro SiB',
        5,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 44</br>Registros: 2.356</div>'
      ],
      [
        'Vulnerable SiB',
        11,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 50</br>Registros: 2.950</div>'
      ],
      ['Especies sin datos SiB Colombia', 29, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave3);

  function Chartave3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 11],
      ['Apéndice II', 306],
      ['Apéndice III', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartave3b);

  function Chartave3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        18,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 10</br>Registros: 937</div>'
      ],
      [
        'Apéndice II en SiB',
        28,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 266</br>Registros: 46.376</div>'
      ],
      [
        'Apéndice III en SiB',
        11,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 14</br>Registros: 2.710</div>'
      ],
      ['Especies sin datos SiB Colombia', 41, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutave3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies anfibios

  google.charts.setOnLoadCallback(Chartanfibio1);

  function Chartanfibio1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1937]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio1b);

  function Chartanfibio1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 692],
      ['Especies sin datos SiB Colombia', 113]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio2);

  function Chartanfibio2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 17],
      ['En peligro', 56],
      ['Vulnerable', 67]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio2b);

  function Chartanfibio2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 17</br>Registros: 673</div>'
      ],
      [
        'En peligro SiB',
        5,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 44</br>Registros: 2.356</div>'
      ],
      [
        'Vulnerable SiB',
        11,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 50</br>Registros: 2.950</div>'
      ],
      ['Especies sin datos SiB Colombia', 29, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio3);

  function Chartanfibio3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 11],
      ['Apéndice II', 306],
      ['Apéndice III', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartanfibio3b);

  function Chartanfibio3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        18,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 10</br>Registros: 937</div>'
      ],
      [
        'Apéndice II en SiB',
        28,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 266</br>Registros: 46.376</div>'
      ],
      [
        'Apéndice III en SiB',
        11,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 14</br>Registros: 2.710</div>'
      ],
      ['Especies sin datos SiB Colombia', 41, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutanfibio3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies reptiles

  google.charts.setOnLoadCallback(Chartreptil1);

  function Chartreptil1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 537]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil1b);

  function Chartreptil1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 520],
      ['Especies sin datos SiB Colombia', 17]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil2);

  function Chartreptil2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 11],
      ['En peligro', 16],
      ['Vulnerable', 17]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil2b);

  function Chartreptil2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        7,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 17</br>Registros: 538</div>'
      ],
      [
        'En peligro SiB',
        7,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 44</br>Registros: 1.560</div>'
      ],
      [
        'Vulnerable SiB',
        4,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 50</br>Registros: 31</div>'
      ],
      ['Especies sin datos SiB Colombia', 26, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil3);

  function Chartreptil3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 12],
      ['Apéndice II', 29],
      ['Apéndice III', 2]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartreptil3b);

  function Chartreptil3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        10,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 10</br>Registros: 652</div>'
      ],
      [
        'Apéndice II en SiB',
        27,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 266</br>Registros: 2.356</div>'
      ],
      [
        'Apéndice III en SiB',
        1,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 14</br>Registros: 75</div>'
      ],
      ['Especies sin datos SiB Colombia', 5, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutreptil3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies peces

  google.charts.setOnLoadCallback(Chartpeces1);

  function Chartpeces1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 2425]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces1b);

  function Chartpeces1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1960],
      ['Especies sin datos SiB Colombia', 465]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces2);

  function Chartpeces2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 7],
      ['En peligro', 11],
      ['Vulnerable', 91]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces2b);

  function Chartpeces2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        1,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 1987</div>'
      ],
      [
        'En peligro SiB',
        3,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 3</br>Registros: 37</div>'
      ],
      [
        'Vulnerable SiB',
        41,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 41</br>Registros: 1385</div>'
      ],
      ['Especies sin datos SiB Colombia', 64, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces3);

  function Chartpeces3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 3],
      ['Apéndice II', 12],
      ['Apéndice III', 3]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpeces3b);

  function Chartpeces3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        7,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 7</br>Registros: 12</div>'
      ],
      [
        'Apéndice III en SiB',
        3,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 3</br>Registros: 197</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpeces3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies insectos

  google.charts.setOnLoadCallback(Chartinsecto1);

  function Chartinsecto1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 65000]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto1b);

  function Chartinsecto1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 3463],
      ['Especies sin datos SiB Colombia', 61537]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto2);

  function Chartinsecto2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 5],
      ['En peligro', 11],
      ['Vulnerable', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto2b);

  function Chartinsecto2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        3,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 17</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'Vulnerable SiB',
        3,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 6</div>'
      ],
      ['Especies sin datos SiB Colombia', 23, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto3);

  function Chartinsecto3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartinsecto3b);

  function Chartinsecto3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 14</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutinsecto3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies aracnidos

  google.charts.setOnLoadCallback(Chartaracnidos1);

  function Chartaracnidos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1089]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos1b);

  function Chartaracnidos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 74],
      ['Especies sin datos SiB Colombia', 1015]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos2);

  function Chartaracnidos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 3],
      ['Vulnerable', 6]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos2b);

  function Chartaracnidos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        1,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 1</br>Registros: 70</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos3);

  function Chartaracnidos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartaracnidos3b);

  function Chartaracnidos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutaracnidos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies moluscos

  google.charts.setOnLoadCallback(Chartmolusco1);

  function Chartmolusco1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1900]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco1b);

  function Chartmolusco1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 694],
      ['Especies sin datos SiB Colombia', 1206]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco2);

  function Chartmolusco2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 14]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco2b);

  function Chartmolusco2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        5,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 5</br>Registros: 337</div>'
      ],
      ['Especies sin datos SiB Colombia', 9, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco3);

  function Chartmolusco3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 1],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmolusco3b);

  function Chartmolusco3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmolusco3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies decápodos

  google.charts.setOnLoadCallback(Chartdecapodo1);

  function Chartdecapodo1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1352]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo1b);

  function Chartdecapodo1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 393],
      ['Especies sin datos SiB Colombia', 959]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo2);

  function Chartdecapodo2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 25],
      ['Vulnerable', 8]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo2b);

  function Chartdecapodo2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        4,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 4</br>Registros: 14</div>'
      ],
      ['Especies sin datos SiB Colombia', 29, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo3);

  function Chartdecapodo3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartdecapodo3b);

  function Chartdecapodo3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutdecapodo3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies equinodermos

  google.charts.setOnLoadCallback(Chartequinodermo1);

  function Chartequinodermo1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 296]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo1b);

  function Chartequinodermo1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 106],
      ['Especies sin datos SiB Colombia', 190]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo2);

  function Chartequinodermo2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo2b);

  function Chartequinodermo2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo3);

  function Chartequinodermo3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 1]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartequinodermo3b);

  function Chartequinodermo3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutequinodermo3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies esponja marina

  google.charts.setOnLoadCallback(Chartesponjamarina1);

  function Chartesponjamarina1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 306]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina1b);

  function Chartesponjamarina1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 40],
      ['Especies sin datos SiB Colombia', 266]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina2);

  function Chartesponjamarina2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina2b);

  function Chartesponjamarina2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina3);

  function Chartesponjamarina3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartesponjamarina3b);

  function Chartesponjamarina3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutesponjamarina3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies corales afines

  google.charts.setOnLoadCallback(Chartcoralesafines1);

  function Chartcoralesafines1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 139]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines1b);

  function Chartcoralesafines1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 139],
      ['Especies sin datos SiB Colombia', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines2);

  function Chartcoralesafines2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 1],
      ['En peligro', 1],
      ['Vulnerable', 5]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines2b);

  function Chartcoralesafines2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        1,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 2</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 8</div>'
      ],
      [
        'Vulnerable SiB',
        4,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 4</br>Registros: 13</div>'
      ],
      ['Especies sin datos SiB Colombia', 1, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines3);

  function Chartcoralesafines3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 141],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcoralesafines3b);

  function Chartcoralesafines3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        59,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 59</br>Registros: 438</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 82, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcoralesafines3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies orquideas

  google.charts.setOnLoadCallback(Chartorquideas1);

  function Chartorquideas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 4270]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas1b);

  function Chartorquideas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1384],
      ['Especies sin datos SiB Colombia', 2886]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas2);

  function Chartorquideas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 6],
      ['En peligro', 64],
      ['Vulnerable', 137]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas2b);

  function Chartorquideas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        2,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 2</br>Registros: 3</div>'
      ],
      [
        'En peligro SiB',
        25,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 25</br>Registros: 124</div>'
      ],
      [
        'Vulnerable SiB',
        47,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 47</br>Registros: 156</div>'
      ],
      ['Especies sin datos SiB Colombia', 133, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas3);

  function Chartorquideas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 6],
      ['Apéndice II', 691],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartorquideas3b);

  function Chartorquideas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        4,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 4</br>Registros: 22</div>'
      ],
      [
        'Apéndice II en SiB',
        210,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 210</br>Registros: 1.128</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 483, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutorquideas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies magnolias y afines

  google.charts.setOnLoadCallback(Chartmagnolias1);

  function Chartmagnolias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 111]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias1b);

  function Chartmagnolias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 108],
      ['Especies sin datos SiB Colombia', 3]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias2);

  function Chartmagnolias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 12],
      ['En peligro', 22],
      ['Vulnerable', 10]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias2b);

  function Chartmagnolias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        9,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 9</br>Registros: 66</div>'
      ],
      [
        'En peligro SiB',
        18,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 18</br>Registros: 139</div>'
      ],
      [
        'Vulnerable SiB',
        10,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 10</br>Registros: 4.890</div>'
      ],
      ['Especies sin datos SiB Colombia', 7, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias3);

  function Chartmagnolias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmagnolias3b);

  function Chartmagnolias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmagnolias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies bromelias

  google.charts.setOnLoadCallback(Chartbromelias1);

  function Chartbromelias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 992]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias1b);

  function Chartbromelias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 672],
      ['Especies sin datos SiB Colombia', 320]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias2);

  function Chartbromelias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 47],
      ['En peligro', 94],
      ['Vulnerable', 114]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias2b);

  function Chartbromelias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        16,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 16</br>Registros: 159</div>'
      ],
      [
        'En peligro SiB',
        39,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 39</br>Registros: 203</div>'
      ],
      [
        'Vulnerable SiB',
        58,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 58</br>Registros: 539</div>'
      ],
      ['Especies sin datos SiB Colombia', 142, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias3);

  function Chartbromelias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartbromelias3b);

  function Chartbromelias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutbromelias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies palmas

  google.charts.setOnLoadCallback(Chartpalmas1);

  function Chartpalmas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 288]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas1b);

  function Chartpalmas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 232],
      ['Especies sin datos SiB Colombia', 56]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas2);

  function Chartpalmas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 6],
      ['En peligro', 17],
      ['Vulnerable', 16]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas2b);

  function Chartpalmas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        5,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 5</br>Registros: 141</div>'
      ],
      [
        'En peligro SiB',
        14,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 14</br>Registros: 733</div>'
      ],
      [
        'Vulnerable SiB',
        12,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 12</br>Registros: 200</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas3);

  function Chartpalmas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpalmas3b);

  function Chartpalmas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpalmas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies zamias

  google.charts.setOnLoadCallback(Chartzamias1);

  function Chartzamias1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 21]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias1b);

  function Chartzamias1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 19],
      ['Especies sin datos SiB Colombia', 2]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias2);

  function Chartzamias2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 9],
      ['Vulnerable', 4]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias2b);

  function Chartzamias2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        3,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 3</br>Registros: 282</div>'
      ],
      [
        'En peligro SiB',
        3,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 3</br>Registros: 16</div>'
      ],
      [
        'Vulnerable SiB',
        3,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 3</br>Registros: 31</div>'
      ],
      ['Especies sin datos SiB Colombia', 12, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias3);

  function Chartzamias3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 1],
      ['Apéndice II', 24],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartzamias3b);

  function Chartzamias3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        17,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 17</br>Registros: 412</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 8, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutzamias3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies frailejones

  google.charts.setOnLoadCallback(Chartfrailejones1);

  function Chartfrailejones1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 87]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones1b);

  function Chartfrailejones1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 68],
      ['Especies sin datos SiB Colombia', 19]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones2);

  function Chartfrailejones2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 20],
      ['En peligro', 36],
      ['Vulnerable', 32]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones2b);

  function Chartfrailejones2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        6,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 6</br>Registros: 33</div>'
      ],
      [
        'En peligro SiB',
        13,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 13</br>Registros: 583</div>'
      ],
      [
        'Vulnerable SiB',
        8,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 8</br>Registros: 622</div>'
      ],
      ['Especies sin datos SiB Colombia', 61, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones3);

  function Chartfrailejones3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfrailejones3b);

  function Chartfrailejones3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfrailejones3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies cactus

  google.charts.setOnLoadCallback(Chartcactus1);

  function Chartcactus1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 57]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus1b);

  function Chartcactus1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 45],
      ['Especies sin datos SiB Colombia', 12]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus2);

  function Chartcactus2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus2b);

  function Chartcactus2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus3);

  function Chartcactus3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 33],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcactus3b);

  function Chartcactus3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 33, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcactus3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies pinos

  google.charts.setOnLoadCallback(Chartpinos1);

  function Chartpinos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 22]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos1b);

  function Chartpinos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 21],
      ['Especies sin datos SiB Colombia', 1]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos2);

  function Chartpinos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos2b);

  function Chartpinos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos3);

  function Chartpinos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartpinos3b);

  function Chartpinos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpinos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies helechos

  google.charts.setOnLoadCallback(Charthelechos1);

  function Charthelechos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1534]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos1b);

  function Charthelechos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1278],
      ['Especies sin datos SiB Colombia', 256]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos2);

  function Charthelechos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos2b);

  function Charthelechos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos3);

  function Charthelechos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Charthelechos3b);

  function Charthelechos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donuthelechos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies fenerogamas

  google.charts.setOnLoadCallback(Chartfenerogamas1);

  function Chartfenerogamas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 265]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas1b);

  function Chartfenerogamas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 237],
      ['Especies sin datos SiB Colombia', 28]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas2);

  function Chartfenerogamas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 11],
      ['En peligro', 27],
      ['Vulnerable', 33]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas2b);

  function Chartfenerogamas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        6,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 6</br>Registros: 91</div>'
      ],
      [
        'En peligro SiB',
        18,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 18</br>Registros: 786</div>'
      ],
      [
        'Vulnerable SiB',
        24,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 24</br>Registros: 139</div>'
      ],
      ['Especies sin datos SiB Colombia', 23, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas3);

  function Chartfenerogamas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartfenerogamas3b);

  function Chartfenerogamas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutfenerogamas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies maderables

  google.charts.setOnLoadCallback(Chartmaderables1);

  function Chartmaderables1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 34]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables1b);

  function Chartmaderables1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 28],
      ['Especies sin datos SiB Colombia', 6]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables2);

  function Chartmaderables2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 16],
      ['Vulnerable', 10]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables2b);

  function Chartmaderables2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        8,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 8</br>Registros: 213</div>'
      ],
      [
        'En peligro SiB',
        12,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 12</br>Registros: 797</div>'
      ],
      [
        'Vulnerable SiB',
        8,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 8</br>Registros: 2.257</div>'
      ],
      ['Especies sin datos SiB Colombia', 6, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables3);

  function Chartmaderables3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 3],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmaderables3b);

  function Chartmaderables3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        3,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 3</br>Registros: 49</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmaderables3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies musgos

  google.charts.setOnLoadCallback(Chartmusgos1);

  function Chartmusgos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1691]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos1b);

  function Chartmusgos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 1349],
      ['Especies sin datos SiB Colombia', 342]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos2);

  function Chartmusgos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 8],
      ['En peligro', 5],
      ['Vulnerable', 86]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos2b);

  function Chartmusgos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        1,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 1</br>Registros: 1</div>'
      ],
      [
        'En peligro SiB',
        1,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 1</br>Registros: 38</div>'
      ],
      [
        'Vulnerable SiB',
        31,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 31</br>Registros: 85</div>'
      ],
      ['Especies sin datos SiB Colombia', 66, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos3);

  function Chartmusgos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmusgos3b);

  function Chartmusgos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 49</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmusgos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas marinas

  google.charts.setOnLoadCallback(Chartalgasmarinas1);

  function Chartalgasmarinas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 905]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas1b);

  function Chartalgasmarinas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 905]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas2);

  function Chartalgasmarinas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas2b);

  function Chartalgasmarinas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas3);

  function Chartalgasmarinas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasmarinas3b);

  function Chartalgasmarinas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasmarinas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas dulceacuícolas

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1);

  function Chartalgasdulceacuicolas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 604]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas1b);

  function Chartalgasdulceacuicolas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 604]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas2);

  function Chartalgasdulceacuicolas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas2b);

  function Chartalgasdulceacuicolas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3);

  function Chartalgasdulceacuicolas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasdulceacuicolas3b);

  function Chartalgasdulceacuicolas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasdulceacuicolas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies algas terrestres

  google.charts.setOnLoadCallback(Chartalgasterrestres1);

  function Chartalgasterrestres1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 16]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres1b);

  function Chartalgasterrestres1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 16]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres2);

  function Chartalgasterrestres2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres2b);

  function Chartalgasterrestres2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres3);

  function Chartalgasterrestres3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartalgasterrestres3b);

  function Chartalgasterrestres3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutalgasterrestres3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies otras algas

  google.charts.setOnLoadCallback(Chartotrasalgas1);

  function Chartotrasalgas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 128]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas1b);

  function Chartotrasalgas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 128]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas2);

  function Chartotrasalgas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas2b);

  function Chartotrasalgas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas3);

  function Chartotrasalgas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartotrasalgas3b);

  function Chartotrasalgas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutotrasalgas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies liquenes

  google.charts.setOnLoadCallback(Chartliquenes1);

  function Chartliquenes1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1464]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes1b);

  function Chartliquenes1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 60],
      ['Especies sin datos SiB Colombia', 1404]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes2);

  function Chartliquenes2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes2b);

  function Chartliquenes2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes3);

  function Chartliquenes3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartliquenes3b);

  function Chartliquenes3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutliquenes3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies macrohongos

  google.charts.setOnLoadCallback(Chartmacrohongos1);

  function Chartmacrohongos1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1239]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos1b);

  function Chartmacrohongos1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 69],
      ['Especies sin datos SiB Colombia', 1170]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos2);

  function Chartmacrohongos2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos2b);

  function Chartmacrohongos2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos3);

  function Chartmacrohongos3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartmacrohongos3b);

  function Chartmacrohongos3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutmacrohongos3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies royas

  google.charts.setOnLoadCallback(Chartroyas1);

  function Chartroyas1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 456]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas1b);

  function Chartroyas1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 456]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas2);

  function Chartroyas2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas2b);

  function Chartroyas2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas3);

  function Chartroyas3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartroyas3b);

  function Chartroyas3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutroyas3b')
    );
    chart.draw(data, options);
  }

  // pie de literatura especies carbones

  google.charts.setOnLoadCallback(Chartcarbones1);

  function Chartcarbones1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 71]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones1')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones1b);

  function Chartcarbones1b() {
    var data = google.visualization.arrayToDataTable([
      ['Titulo', 'SiB'],
      ['Especies con evidencia en el SiB Colombia', 0],
      ['Especies sin datos SiB Colombia', 71]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#2B4143' }, 1: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones1b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones2);

  function Chartcarbones2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 0],
      ['En peligro', 0],
      ['Vulnerable', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones2')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones2b);

  function Chartcarbones2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'En peligro crítico SiB',
        0,
        '<div class="pad10"><b>En peligro crítico SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'En peligro SiB',
        0,
        '<div class="pad10"><b>En peligro SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Vulnerable SiB',
        0,
        '<div class="pad10"><b>Vulnerable SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones2b')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones3);

  function Chartcarbones3() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Apéndice I', 0],
      ['Apéndice II', 0],
      ['Apéndice III', 0]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones3')
    );
    chart.draw(data, options);
  }

  google.charts.setOnLoadCallback(Chartcarbones3b);

  function Chartcarbones3b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'Especies');
    data.addColumn({ type: 'string', role: 'tooltip', p: { html: true } });
    data.addRows([
      [
        'Apéndice I en SiB',
        0,
        '<div class="pad10"><b>Apéndice I en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice II en SiB',
        0,
        '<div class="pad10"><b>Apéndice II en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      [
        'Apéndice III en SiB',
        0,
        '<div class="pad10"><b>Apéndice III en SiB Colombia</b></br>Especies: 0</br>Registros: 0</div>'
      ],
      ['Especies sin datos SiB Colombia', 0, '']
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#238ED9' },
        1: { color: '#A2C754' },
        2: { color: '#E8702F' },
        3: { color: '#e7e9ed' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutcarbones3b')
    );
    chart.draw(data, options);
  }
}

//final graficas

//funciones graficas de especies tercer nivel

$('.pecesback').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.peces').css('display', 'block');
});

$('.pecesm').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.pecesmgraph').css('display', 'block');

  // pie de literatura especies peces marinos

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm1);

  function Chartpecesm1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 990]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm1')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm1b);

  function Chartpecesm1b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm1b')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm2);

  function Chartpecesm2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 6],
      ['En peligro', 7],
      ['Vulnerable', 43]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm2')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesm2b);

  function Chartpecesm2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesm2b')
    );
    chart.draw(data, options);
  }
});

$('.pecesd').on('click', function() {
  $('.grapharea').css('display', 'none');
  $('.pecesdgraph').css('display', 'block');

  // pie de literatura especies peces dulces

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd1);

  function Chartpecesd1() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['Representatividad de especies', 1435]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#4BC0C0' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd1')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd1b);

  function Chartpecesd1b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd1b')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd2);

  function Chartpecesd2() {
    var data = google.visualization.arrayToDataTable([
      ['Especies estimadas', 'Número de especies'],
      ['En peligro crítico', 1],
      ['En peligro', 4],
      ['Vulnerable', 48]
    ]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.7,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '180', height: '180' },
      pieSliceBorderColor: 'none',
      slices: {
        0: { color: '#d51920' },
        1: { color: '#f47d20' },
        2: { color: '#f9ba1b' }
      },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd2')
    );
    chart.draw(data, options);
  }

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(Chartpecesd2b);

  function Chartpecesd2b() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Título');
    data.addColumn('number', 'SiB');
    data.addColumn({ type: 'string', role: 'tooltip' });
    data.addRows([['Sin dato', 100, 'Dato en construcción']]);

    var options = {
      titlePosition: 'none',
      pieHole: 0.9,
      backgroundColor: 'transparent',
      legend: { position: 'none' },
      chartArea: { width: '222', height: '222' },
      pieSliceBorderColor: 'none',
      slices: { 0: { color: '#e7e9ed' } },
      sliceVisibilityThreshold: '0',
      fontSize: '12',
      pieSliceText: 'none',
      tooltip: { isHtml: true, textStyle: { color: '#fff' } }
    };

    var chart = new google.visualization.PieChart(
      document.getElementById('donutpecesd2b')
    );
    chart.draw(data, options);
  }
});

//show hide otras graficas

function showDivspp1() {
  document.getElementById('chart_div_colecciones').style.display = 'none';
  document.getElementById('chart_div_observaciones').style.display = 'none';
  document.getElementById('chart_div_records').style.display = 'block';
}

function showDivspp2() {
  document.getElementById('chart_div_observaciones').style.display = 'none';
  document.getElementById('chart_div_records').style.display = 'none';
  document.getElementById('chart_div_colecciones').style.display = 'block';

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartColecciones);

  function drawChartColecciones() {
    var data = google.visualization.arrayToDataTable([
      ['Año', 'Plantae', 'Animalia', 'Otros'],
      ['2007', 19183, 5428, 1425],
      ['2008', 22075, 7568, 1580],
      ['2009', 23822, 10614, 1749],
      ['2010', 24337, 10771, 1815],
      ['2011', 24604, 12400, 1818],
      ['2012', 26088, 13921, 1963],
      ['2013', 28108, 14633, 2046],
      ['2014', 27495, 14525, 2184],
      ['2015', 30233, 18609, 2467],
      ['2016', 32302, 19882, 2571]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Año',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 10 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#FF6383', '#4BC0C0', '#FFCE56'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_colecciones')
    );
    chart.draw(data, options_chart);
  }
}

function showDivspp3() {
  document.getElementById('chart_div_records').style.display = 'none';
  document.getElementById('chart_div_colecciones').style.display = 'none';
  document.getElementById('chart_div_observaciones').style.display = 'block';

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartObservaciones);

  function drawChartObservaciones() {
    var data = google.visualization.arrayToDataTable([
      ['Año', 'Plantae', 'Animalia', 'Otros'],
      ['2007', , 67, 19],
      ['2008', , 839, 79],
      ['2009', 148, 910, 82],
      ['2010', 202, 1602, 97],
      ['2011', 2778, 3425, 117],
      ['2012', 2841, 3713, 118],
      ['2013', 3324, 3171, 203],
      ['2014', 3553, 3282, 201],
      ['2015', 4176, 3496, 210],
      ['2016', 4828, 4146, 327]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Año',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 10 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#FF6383', '#4BC0C0', '#FFCE56'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_observaciones')
    );
    chart.draw(data, options_chart);
  }
}

function showDivmap1() {
  document.getElementById('mapa2').style.display = 'none';
  document.getElementById('mapa1').style.display = 'block';
}

function showDivmap2() {
  document.getElementById('mapa1').style.display = 'none';
  document.getElementById('mapa2').style.display = 'block';

  //mapa departamentos registros

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawMarkersMap2);

  function drawMarkersMap2() {
    var data = google.visualization.arrayToDataTable([
      ['Departament', 'Nombre', 'Registros'],
      ['CO-DC', 'Bogotá Distrito Capital', 11735],
      ['CO-AMA', 'Amazonas', 54213],
      ['CO-ANT', 'Antioquia', 281436],
      ['CO-ARA', 'Arauca', 13013],
      ['CO-ATL', 'Atlántico', 3368],
      ['CO-BOL', 'Bolívar', 22618],
      ['CO-BOY', 'Boyacá', 90531],
      ['CO-CAL', 'Caldas', 54264],
      ['CO-CAQ', 'Caquetá', 36246],
      ['CO-CAS', 'Casanare', 41689],
      ['CO-CAU', 'Cauca', 41741],
      ['CO-CES', 'Cesar', 9764],
      ['CO-COR', 'Córdoba', 60897],
      ['CO-CUN', 'Cundinamarca', 26978],
      ['CO-CHO', 'Chocó', 113668],
      ['CO-GUA', 'Guainía', 8122],
      ['CO-GUV', 'Guaviare', 14388],
      ['CO-HUI', 'Huila', 15904],
      ['CO-LAG', 'La Guajira', 41931],
      ['CO-MAG', 'Magdalena', 71195],
      ['CO-MET', 'Meta', 52169],
      ['CO-NAR', 'Nariño', 393867],
      ['CO-NSA', 'Norte de Santander', 9279],
      ['CO-PUT', 'Putumayo', 11801],
      ['CO-QUI', 'Quindío', 34469],
      ['CO-RIS', 'Risaralda', 41979],
      ['CO-SAP', 'San Andrés, Providencia y Santa Catalina', 9192],
      ['CO-SAN', 'Santander', 57353],
      ['CO-SUC', 'Sucre', 50285],
      ['CO-TOL', 'Tolima', 41646],
      ['CO-VAC', 'Valle del Cauca', 135589],
      ['CO-VAU', 'Vaupés', 11272],
      ['CO-VID', 'Vichada', 18010]
    ]);

    var options = {
      region: 'CO',
      resolution: 'provinces',
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#F7E2AD', '#F7B000'],
      datalessRegionColor: 'transparent',
      width: '100%',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('chart_div2')
    );
    chart.draw(data, options);
  }
}

//graficas que cargan al inicio

$(document).ready(function() {
  // Tooltip only Text

  $('.masterTooltip')
    .hover(
      function() {
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
          .text(title)
          .appendTo('body')
          .fadeIn('fast');
      },
      function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
      }
    )
    .mousemove(function(e) {
      var mousex = e.pageX + 20;
      var mousey = e.pageY + 10;
      $('.tooltip').css({ top: mousey, left: mousex });
    });

  $('.masterTooltip2')
    .hover(
      function() {
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip2"></p>')
          .text(title)
          .appendTo('body')
          .fadeIn('fast');
      },
      function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip2').remove();
      }
    )
    .mousemove(function(e) {
      var mousex = e.pageX + 20;
      var mousey = e.pageY + 10;
      $('.tooltip2').css({ top: mousey, left: mousex });
    });

  //primer grafica de especies

  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChartRegisters);

  function drawChartRegisters() {
    var data = google.visualization.arrayToDataTable([
      ['Año', 'Plantae', 'Animalia', 'Fungi', 'Otros', 'Desconocido'],
      ['2007', 20448, 6534, 1550, 140, 5],
      ['2008', 22889, 8762, 1648, 209, 6],
      ['2009', 24560, 11709, 1810, 214, 8],
      ['2010', 25036, 12069, 1864, 247, 9],
      ['2011', 26190, 14352, 1886, 266, 9],
      ['2012', 26847, 15850, 2022, 272, 9],
      ['2013', 28785, 15657, 2106, 272, 9],
      ['2014', 28808, 18117, 2231, 346, 10],
      ['2015', 30923, 19781, 2389, 425, 12],
      ['2016', 32974, 21160, 2515, 552, 16]
    ]);

    var options_chart = {
      legend: 'none',
      hAxis: {
        title: 'Año',
        titleTextStyle: { color: '#6f6f6f' },
        gridlines: { color: '#fff', count: 8 },
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      vAxis: {
        title: 'Número especies observadas (en miles)',
        titleTextStyle: { color: '#6f6f6f' },
        minValue: 0,
        gridlines: { color: '#fff' },
        format: 'short',
        textStyle: { color: '#6f6f6f', fontSize: 12 }
      },
      isStacked: true,
      areaOpacity: 0.7,
      chartArea: {
        backgroundColor: '#E7E9ED',
        left: 70,
        top: 20,
        right: 50,
        width: '100%',
        height: 400
      },
      colors: ['#FF6383', '#4BC0C0', 'e3814d', '#FFCE56', '36a2eb'],
      width: '100%'
    };

    var chart = new google.visualization.AreaChart(
      document.getElementById('chart_div_records')
    );
    chart.draw(data, options_chart);
  }

  // tabs de graficas especies

  $('.databox input').on('click', function() {
    $('.databox .acttabbtn').removeClass('acttabbtn');
    $(this).addClass('acttabbtn');
  });

  //mapa paises

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Puesto'],
      ['Brazil', 1],
      ['Colombia', 2],
      ['Indonesia', 3],
      ['China', 4],
      ['Mexico', 5],
      ['Peru', 6],
      ['Australia', 7],
      ['India', 8],
      ['Ecuador', 9],
      ['Venezuela', 10],
      ['USA', 10]
    ]);

    var options = {
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#F7B000', '#F7F0DE'],
      datalessRegionColor: '#17557A',
      width: '90%',
      legend: 'none',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('regions_div')
    );

    chart.draw(data, options);
  }

  //mapa departamentos especies

  google.charts.load('current', { packages: ['geochart'] });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
      ['Departament', 'Nombre', 'Especies'],
      ['CO-DC', 'Bogotá Distrito Capital', 126],
      ['CO-AMA', 'Amazonas', 2363],
      ['CO-ANT', 'Antioquia', 5020],
      ['CO-ARA', 'Arauca', 213],
      ['CO-ATL', 'Atlántico', 388],
      ['CO-BOL', 'Bolívar', 451],
      ['CO-BOY', 'Boyacá', 1205],
      ['CO-CAL', 'Caldas', 439],
      ['CO-CAQ', 'Caquetá', 1588],
      ['CO-CAS', 'Casanare', 535],
      ['CO-CAU', 'Cauca', 1269],
      ['CO-CES', 'Cesar', 143],
      ['CO-COR', 'Córdoba', 1794],
      ['CO-CUN', 'Cundinamarca', 280],
      ['CO-CHO', 'Chocó', 2214],
      ['CO-GUA', 'Guainía', 559],
      ['CO-GUV', 'Guaviare', 365],
      ['CO-HUI', 'Huila', 400],
      ['CO-LAG', 'La Guajira', 460],
      ['CO-MAG', 'Magdalena', 782],
      ['CO-MET', 'Meta', 1149],
      ['CO-NAR', 'Nariño', 1637],
      ['CO-NSA', 'Norte de Santander', 382],
      ['CO-PUT', 'Putumayo', 621],
      ['CO-QUI', 'Quindío', 352],
      ['CO-RIS', 'Risaralda', 632],
      ['CO-SAP', 'San Andrés, Providencia y Santa Catalina', 467],
      ['CO-SAN', 'Santander', 1530],
      ['CO-SUC', 'Sucre', 179],
      ['CO-TOL', 'Tolima', 498],
      ['CO-VAC', 'Valle del Cauca', 2618],
      ['CO-VAU', 'Vaupés', 611],
      ['CO-VID', 'Vichada', 1700]
    ]);

    var options = {
      region: 'CO',
      resolution: 'provinces',
      displayMode: 'regions',
      enableRegionInteractivity: true,
      backgroundColor: 'transparent',
      colors: ['#3999C2', '#17557A'],
      datalessRegionColor: 'transparent',
      width: '100%',
      tooltip: {
        isHtml: true,
        textStyle: { color: '#fff', fontName: 'Open Sans' }
      }
    };

    var chart = new google.visualization.GeoChart(
      document.getElementById('chart_div')
    );
    chart.draw(data, options);
  }

  //tabs de mapa departamentos

  $('.mapsdep input').on('click', function() {
    $('.mapsdep .acttabbtn').removeClass('acttabbtn');
    $(this).addClass('acttabbtn');
  });
});
