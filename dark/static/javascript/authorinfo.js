function getByPenName(authorName, callback) {
    $.ajax({
        url: "/author/getByPenName",
        type: "get",
        dataType: 'json',
        async: true,
        data: { penName: authorName },
        cache: false,
        success: function (result) {
            if (result.data) {
                callback(result.data);
            } else {
                console.log("[E]Failed to get author data.", result);
            }
        }
    });
}
