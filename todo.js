function addDoneAction() {
    $("a[name='done']").click(function () {
        $(this).closest("div[name='parent']").remove();
    });
};

addDoneAction();

function addNewTodoItem() {
    var pri = $("#pri").val();
    var todo = $("#todo").val();
    if (todo !== "") {
        var newItem = pri + " " + todo;
        if (pri == "(A)") {
            prependTodoItem($("#priA"), newItem);
        }
        else if (pri == "(B)") {
            prependTodoItem($("#priB"), newItem);
        }
        else if (pri == "(C)") {
            prependTodoItem($("#priC"), newItem);
        }
        else {
            prependTodoItem($("#priNone"), newItem);
        }
        $("#pri").val("");
        $("#todo").val("");
    }
}

function prependTodoItem(htmlObject, todoItem) {
    var newItemHtml = '<div name="parent">' +
                      '<div class="col-xs-1">' +
                      '<h4><a class="label label-default" name="done" href="#">Done</a></h4>' +
                      '</div>' +
                      '<div class="col-xs-11">' +
                      '<h4>' + todoItem + '</h4>' +
                      '</div>' +
                      '</div>';
    var origHtml = htmlObject.html();
    htmlObject.html(newItemHtml + origHtml);
    addDoneAction();
}