'use strict';

$(function() {
  if(!localStorage.getItem('pics')) {
    populateStorge();
    console.log('yups')
  } else {
    console.log('yup')
  }
  var Cats = function() {

  }
  var pics;

  //Pull images from the images URL using AJAX
  $.ajax({
    url:'https://api.imgur.com/3/album/DDoWy.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 940f3a2950b0186'
    }
  }).done(function(res) {
    pics = res.data.images;
    console.log(pics);
  }).fail(function(err) {
    console.log(err);
    return err;
  })

  // Populate local storage
  function populateStorge() {
    localStorage.setItem('pics', pics);
  }

  // Display random photos
  function showFromImgur() {
    var rand = Math.floor(Math.random() * pics.length);
    var displayPic = '<img src="' + pics[rand].link + '">';
    $('#picContainer').html(displayPic);
  }

  // Get button and run showFromImgur function
  var button = document.getElementById('another');
    button.addEventListener('click', function() {
    showFromImgur();
  })

  // Load Chart.js and make a graph
  var options = {
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop: true,
    //String - The colour of the label backdrop
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero: true,
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY: 2,
    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX: 2,
    //Boolean - Show line for each value in the scale
    scaleShowLine: true,
    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke: true,
    //String - The colour of the stroke on each segement.
    segmentStrokeColor: "#fff",
    //Number - The width of the stroke value in pixels
    segmentStrokeWidth: 2,
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect.
    animationEasing: "easeOutBounce",
    //Boolean - Whether to animate the rotation of the chart
    animateRotate: true,
    //Boolean - Whether to animate scaling the chart from the centre
    animateScale: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
  }

  // Set the data for what the chart looks like
  var data = [
    {
      value: 300,
      color: "#F7464A",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 50,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 100,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Yellow"
    }
  ]

  var ctx = $("#canv").get(0).getContext("2d");
  var myNewChart = new Chart(ctx).Pie(data, options);
});
