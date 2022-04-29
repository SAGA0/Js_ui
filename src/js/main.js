import $ from './lib/lib'

$('button').on('click', function () {
    console.log($('div').eq(2));
});

// console.log($('div').eq(2).find('.some'))

console.log($('.some').eq(2).siblings())