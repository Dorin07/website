var numarTask = 1;

function adaugareTask() {
    var task = $('#task').val();
    var task2 = $('#task2').val();
    var task3 = $('#task3').val();
    var e_Urgent = $("#Urgent").is(':checked');
    var divClass = "card";
    if (e_Urgent) {
        divClass += " alert-success";
        task += "&#128526;";
    }
    $('#lista').append('<div class="alert alert-success alert-dismissible fade show" role="alert"><h4>Felicitări!</h4> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span>  </button></div><div class="' + divClass + '" id = "' + numarTask + '"> <div class="card-body"> <div class="card-body">  <h5> Numele: ' + task + "<br> Email: " + task2 + "<br>  Tel: " + task3 + ' </h5><div class="card-footer text-muted">  <a href="#" class="btn btn-danger" onclick = "return stergereTask(' + numarTask + ');">  <i class="las la-trash"> ' + "RENUNȚĂ" + '</i></a> <h4>' + "Felicitari! O sa fi contactat în curand de catre noi!" + ' </h4></div> </div> </div> </div> ');
    // $('#lista').append('<div class="' + divClass + '" id = "' + numarTask + '"> <div class="card-body"> <div class="card-body">  <h5> ' +  ' </h5><div class="card-footer text-muted">  <a href="#" class="btn btn-danger" onclick = "return stergereTask(' + numarTask + ');">  <i class="las la-trash"></i> </a> </div> </div> </div> </div> ');
    ++numarTask;
    return false;
}

function stergereTask(idTask) {
    $('#' + idTask).remove();
    return false;
}