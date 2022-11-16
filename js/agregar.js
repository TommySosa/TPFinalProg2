
//Declaro el array vacio de los productos
let arrayProductos = [];
let producto = {
    Nombre: "",
    Marca: "",
    Precio: "",
    Imagen: "",
    Categoria: ""
}
if (localStorage.getItem('productos')) {
    arrayProductos = JSON.parse(localStorage.getItem('productos'));
    console.log(arrayProductos);
} else {
    producto = {
        Nombre: "Buzo verde",
        Marca: "King of the kongo",
        Precio: 6000,
        Imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/f0df5c85-bd79-402d-8ac2-2955f0ace689-ee21f98b70bfa4ecea16657830486714-480-0.jpg",
        Categoria: "Buzo"
    }
    //Lo agrego al array
    arrayProductos.push(producto);

    producto = {
        Nombre: "Buzo verde 2",
        Marca: "King of the kongo",
        Precio: 8000,
        Imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/f2a3ca98-00a2-4155-81ab-681955cc6187-0c35d38b596977c93b16518851997502-480-0.jpg",
        Categoria: "Buzo"
    }
    arrayProductos.push(producto);
}
//Inserto los productos a la sección
document.querySelector("#producto").innerHTML = armaTemplate();

//funcion agregar que inserta los productos en la seccion productos
function agregar() {
    let nom = document.querySelector("#nombre-producto").value.trim();
    let mar = document.querySelector("#marca-producto").value.trim();
    let pre = document.querySelector("#precio-producto").value.trim();
    let img = document.querySelector("#imagen-producto").value.trim();
    let cat = document.querySelector("#categoria-producto").value.trim();
    //Validación para que ingrese algo
    if(nom.length === 0 || mar.length === 0 || pre.length === 0 || img.length === 0 || cat.length === 0) return;

    //armo el objeto
    producto = {
        Nombre: nom,
        Marca: mar,
        Precio: pre,
        Imagen: img,
        Categoria: cat
    }
    //agrego el producto al array
    arrayProductos.push(producto);
    console.log(arrayProductos);
    document.querySelector("#producto").innerHTML = armaTemplate();
}
//funcion que arma el template de articulos con los productos del array y retorna el template
function armaTemplate() {
    let template = '<div class="card-group w-auto">';
    for (let i = 0; i < arrayProductos.length; i++) {
        /*template += `<div>
                        <article>
                            <h3 class="nombre-producto">${arrayProductos[i].Nombre}</h3>
                            <p class="marca-producto">${arrayProductos[i].Marca}</p>
                            <p class="precio-producto">${arrayProductos[i].Precio}</p>
                            <img src="${arrayProductos[i].Imagen}" class="Imagen">
                            <p class="categoria-producto">${arrayProductos[i].Categoria}</p> 
                        </article>
                     <div>`*/

         template += `<div class="card">
                            <div class="trash" onclick="eliminarItem(${i})"><img src="../imagenes/basura.png" width="30"></div>     
                            <h3 class="nombre-producto card-title">${arrayProductos[i].Nombre}</h3>
                            <p class="marca-producto card-text">${arrayProductos[i].Marca}</p>
                            <p class="precio-producto cart-text">${arrayProductos[i].Precio}</p>
                            <img src="${arrayProductos[i].Imagen}" class="Imagen card-img-top" style="width:200">
                            <p class="categoria-producto card-text">${arrayProductos[i].Categoria}</p> 
                        </div>`
    }
    template += "</div>";
    return template;
}
function listado() {
    if(arrayProductos.length > 0) localStorage.setItem('productos', JSON.stringify(arrayProductos));
    window.location.href = '../html/productos.html';
}
function eliminarItem(nroProd){
    console.log("Click en el producto:",nroProd);
    arrayProductos.splice(nroProd,1);
    if(arrayProductos.length === 0) localStorage.removeItem('productos');
    document.querySelector("#producto").innerHTML = armaTemplate();
}
function editarItem(nroProd){
    document.querySelector("#producto").innerHTML = armaTemplateSinBtns();
    document.querySelector("#titulo").innerHTML = "Edición de producto"
}