function template(data) {
    var html = '<ul>';
    $.each(data, function (index, item) {
        html += '<li>' + item + '</li>';
    });
    html += '</ul>';
    return html;
}

function log(content) {
    window.console && console.log(content);
}

$(function () {
    var container = $('#pagination-bar');

    container.pagination({
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        pageRange: 1,
        showPrevious: true,
        pageSize: 2,
        autoHidePrevious: true,
        autoHideNext: false,
        callback: function (data, pagination) {
            var html = template(data);
            $('#pagination-data-container').html(html);
        }
    });

});