function addNewTodoItem() {
    var pri = $("#pri").val();
    var todo = $("#todo").val();
    if (todo !== "") {
        alert(pri + " " + todo);
        $("#pri").val("");
        $("#todo").val("");
    }
}