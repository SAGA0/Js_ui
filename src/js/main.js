import $ from './lib/lib'

$('button').on('click', function () {
    $(this).toggleAttr('data-bitch', 'big');
});