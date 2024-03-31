
const produtos = [
    { id: 1, nombre: "Iphone 8 Plus", precio: 280, img: "8plus.jpg" },
    { id: 2, nombre: "Iphone XR", precio: 320, img: "iphoneXr.png" },
    { id: 3, nombre: "Iphone 11", precio: 420, img: "Iphone11.jpg" },
    { id: 4, nombre: "Iphone 11 Pro", precio: 510, img: "11pro.png" },
    { id: 5, nombre: "Iphone 12", precio: 480, img: "iphone12.jpg" },
    { id: 6, nombre: "Iphone 13", precio: 600, img: "iphone13.jpg" },
    { id: 7, nombre: "Iphone 13 Pro Max", precio: 850, img: "13ProMax.webp" },
    { id: 8, nombre: "Iphone 14 Pro", precio: 1170, img: "14pro.jpg" },
    { id: 9, nombre: "Iphone 15 Pro", precio: 1250, img: "15pro.jpg" },
];
function crearMain(arr) {
    contenedor.innerHTML = "";
    //validar qué pasa cuando no recibo ningun array
    let html;
    for (const el of arr) {
        html = `<div class="card">
                <img src=" ../img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                    <div class="card-action">
                <button class="btn btn-success" id="${el.id}">Agregar</button>
                    </div>
                </div>`;
        //se la agrego al contenedor
        contenedor.innerHTML = contenedor.innerHTML + html;
    }
}
crearMain(produtos);


