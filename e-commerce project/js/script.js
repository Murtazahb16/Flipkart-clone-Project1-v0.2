

let preveiwContainer3 = document.querySelector('.products-preview');
let previewBox3 = preveiwContainer3.querySelectorAll('.preview');

document.querySelectorAll('.container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer3.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox3.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox3.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer3.style.display = 'none';
    };
});


let preveiwContainer2 = document.querySelector('.products-preview2');
let previewBox2 = preveiwContainer2.querySelectorAll('.preview');

document.querySelectorAll('.container2 .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer2.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox2.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox2.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer2.style.display = 'none';
    };
});

let preveiwContainer4 = document.querySelector('.products-preview3');
let previewBox4 = preveiwContainer4.querySelectorAll('.preview');

document.querySelectorAll('.products-container3 .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer4.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox4.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox4.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer4.style.display = 'none';
    };
})