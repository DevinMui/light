// let there be light
var window_y = $('body').height()
var window_x = $('body').width() + 100
var points = 0

function generate_light(){
	var x = Math.floor((Math.random() * window_x) + 1)
	var y = Math.floor((Math.random() * window_y) + 1)
	return "<div id='light_switch' style='z-index: 3; color: #000; position: absolute; left: " + x + "px; top: " + y + "px;'><h1><i class='glyphicon glyphicon-off'></i></h1></div>"
}

$('#light').append(generate_light())

$('#light').on('click', '#light_switch', function(){
	$('#light_switch').remove()
	$('#light').append(generate_light())
	points++
	$('#points').text(points)
	$('#switch')[0].play()
})

$(document).mousemove(function(e) {
    var mouse_x = e.pageX - 75;
    var mouse_y = e.pageY - 75;
    $('#circle').remove()
    $('#light').append("<div id='circle' style='left: " + mouse_x + "px; top: " + mouse_y + "px'></div>")
});