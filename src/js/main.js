import $ from './lib/lib'

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800)
})

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800)
})

$('button')
    .eq(2)
    .on('click', () => {
        $('.w-500').fadeToggle(800)
    })

$('#success').on('click', () => {
    $('.w-500').fadeToggle(800)
})

$('.wrap').html(`
<div class="dropdown">
<button
    class="btn btn-primary dropdown-toggle"
    id="dropdownMenuButton"
>
    Dropdown Button
</button>
         <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
             <a href="#" class="dropdown-item">Action#1</a>
            <a href="#" class="dropdown-item">Action#2</a>
            <a href="#" class="dropdown-item">Action#3</a>
        </div>
    </div>
</div>
`)

$('.dropdown-toggle').dropdown()

$('#trigger').click(() =>
    $('#trigger').createModal({
        text: {
            title: 'Modal',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis?',
        },

        btns: {
            count: 3,
            settings: [
                ['Close', ['btn-danger', 'mr-10'], 'true'],
                [
                    'Save',
                    ['btn-sucess'],
                    'false',
                    () => {
                        alert('ur data saved')
                    },
                ],
                [
                    'Anth',
                    ['btn-warning', 'ml-10'],
                    'false',
                    () => {
                        alert('wtf is yellow')
                    },
                ],
            ],
        },
    }),
)

$("#example2")
    .createCarousel({
        width: 850,
        height: 500,
        slides: [{
                src: "https://tushlar.ru/wp-content/uploads/2021/02/tushda-mashina-1.jpg",
                alt: "white-car",
            },
            {
                src: "https://img1.goodfon.ru/original/1280x720/6/a1/lamborghini-aventador-1634.jpg",
                alt: "red-car",
            },
            {
                src: "https://img2.goodfon.ru/original/1280x720/7/99/lamborghini-murcielago-5124.jpg",
                alt: "yellow-car",
            },
        ],
    })
    .carousel();