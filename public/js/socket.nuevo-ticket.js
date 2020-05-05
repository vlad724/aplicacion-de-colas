var socket = io();
var label = $('#lblNuevoTicket'); //cuando se utiliza mucho un elemento html se debe dejar en una var


socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('desconectado del servidor');
});

socket.on('estadoActual', function(resp) {

    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);


    });

}); //evento listener de jquery