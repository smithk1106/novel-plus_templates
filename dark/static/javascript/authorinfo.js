function getByPenName(authorName, callback) {
    var data = { penName: authorName};
    $.ajax({
        url: "/author/getByPenName",
        type: "get",
        dataType: 'json',
        async: false,
        data: data,
        cache: false,
        success: function (result) {
            if (result.data) {
                callback(result.data);
            } else {
                console.log("[E]Failed to get author data.", result);
            }
        }
    });;
}
