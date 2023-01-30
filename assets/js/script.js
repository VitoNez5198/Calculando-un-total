const calcular = () =>{
    const cantidad = document.querySelector('#cantidad').value;
    const precio = document.querySelector('#precio').innerHTML;
    const color = document.querySelector('#color').value;

    document.querySelector('#resumen_total').innerHTML = cantidad * precio;
    document.querySelector('#resumen_cantidad').innerHTML = cantidad;
    document.querySelector('#resumen_color').style.backgroundColor = color;
};

document.querySelector('#btn').addEventListener('click', calcular);