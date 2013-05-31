$(document).ready(function(){


  formats = {
    text: ['font-family', 'font-size', 'font-weight', 'color'],
    button: ['font-family', 'padding', 'color', 'background']
  }

  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  for(var key in formats){
    $(".content .element[data-type="+key+"]").each(function(index, item){
      var props = [];
      for(var i = 0; i < formats[key].length; i++){
        var element = $(item).children()[0];
        var property = $(element).css(formats[key][i]);
        if (formats[key][i] == 'color' && property.toString().indexOf("rgb(") != -1){
          property = rgb2hex(property);
        }
        prop = '<span class="selector">'+formats[key][i]+'</span>: <span class="css-rule">'+property+'</span>';
        props.push(prop);
      }
      $(item).closest("tr").find(".property").html(props.join("<br />"))
    });
  }

 });