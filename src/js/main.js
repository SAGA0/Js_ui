import $ from './lib/lib'

$('button').on('click', function () {
    console.log($('div').eq(2).find('some'));
});

console.log($('div').eq(2).find('.some'))