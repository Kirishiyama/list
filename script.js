$(function () {
    $('button.addCase')
        .click(function () {
            var createCase = $(
                '<div class="list">' +
                    '<div id="caseName" class="case">' +
                        '<div id="cont-text" class="case_description">' +
                        '</div>' +
                        '<button id="buttonDel" class="delete">' + '</button>' +
                        '<button id="buttonMore" class="list-more">' + '</button>' +
                    '</div>' +
                    '<div id="caseMore" class="more">' +
                        '<p id="des-case">' + '</p>' +
                    '</div>' +
                '</div>'
            );

            var inp_text = $('div.name-case input').val();
            var inpDes_text = $('div.description-case textarea').val();
            var outName = $('<p>' + inp_text + '</p>');
            var outDes = $('<p>' + inpDes_text + '</p>');

            createCase.find('.case_description').prepend(outName);
            createCase.find('.more').prepend(outDes);

            $('.left-case').append(createCase);

            $('div.name-case input').val('').focus();
            $('div.description-case textarea').val('').focus();


            createCase.find('.list-more').click(function () {
                var moreButton = $(this);
                moreButton.addClass('style')
                var moreCase = $(this).parent().parent().find('div.more');
                if(moreCase.is(':visible')){
                    moreCase.slideUp(800, function () {
                        moreButton.removeClass("style");
                    });
                }
                else {
                    moreCase.slideDown(800, function () {
                        moreButton.addClass("style");
                    });
                }
            });
            createCase.find('.delete')
                .click(function () {
                    var deleteCase = $(this).parent().parent();
                    if(deleteCase.is(':visible')){
                        deleteCase.slideUp(800);
                    }
                    var deleteMore = $('div.more');
                    if(deleteMore.is(':visible')){
                        deleteMore.slideUp(600);
                    }
                    var deleteName = $(this).parent().find('div:first-child');
                    if(deleteName.is(':visible')){
                        deleteName.slideUp(800);
                    }
                });
        });
