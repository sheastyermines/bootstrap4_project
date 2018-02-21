$(document).ready(function(){
    $("#player").click(function(){
        $("#myModal").modal("show");
    });
        $("#myModal").on('show.bs.modal', function () {
            //var player = document.getElementById("player").innerHTML;
            //var player = $(this).data('nombre');
            var player = $(event.target).closest('div').data('nombre');
            document.getElementById("modalName").innerHTML=player;
            document.getElementById("player-picture").src="images/" + player + ".jpeg";
    });
});