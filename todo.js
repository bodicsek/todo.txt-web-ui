function addNewTodoItem() {
    var pri = $("#pri").val();
    var todo = pri + " " + $("#todo").val();
    if (todo !== "") {
        if (pri == "(A)") {
            prependTodoItem($("#priA"), todo);
        }
        else if (pri == "(B)") {
            prependTodoItem($("#priB"), todo);
        }
        else if (pri == "(C)") {
            prependTodoItem($("#priC"), todo);
        }
        else {
            prependTodoItem($("#priNone"), todo);
        }
        $("#pri").val("");
        $("#todo").val("");
    }
}

function prependTodoItem(htmlObject, todoItem) {
    var newItemHtml = '<h4 class="prepended-item">' + todoItem + '</h4>';
    var origHtml = htmlObject.html();
    htmlObject.html(newItemHtml + origHtml);
}