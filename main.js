import Articulo from "./Articulo.js";
import BThree from "./ArbolBinario.js";
class Main{
  constructor(){
    let arbol = new BThree();
    let div = document.querySelector("#order");
    let cont = document.querySelector("#cant");
    let resultado = document.querySelector("#resultado");
    document.querySelector("#btnAdd").addEventListener("click", () =>{
      let objArt = {
        codigo: parseInt(document.querySelector("#codigo").value),
        nombre: document.querySelector("#nombre").value,
        precio: document.querySelector("#precio").value,
        cantidad: document.querySelector("#cantidad").value,
        descripcion: document.querySelector("#descripcion").value
      }
      let articulo = new Articulo(objArt);
      arbol.agregarNodo(articulo);
      console.log(arbol._raiz);
    })
    document.querySelector("#btnSer").addEventListener("click", () =>{
      let codigo = parseInt(document.querySelector("#buscar").value);
      resultado.textContent = arbol.busqueda(codigo);
    })
    document.querySelector("#btnPre").addEventListener("click", () =>{
      div.innerHTML = " ";
      div.innerHTML = arbol.preOrder();
      cont.textContent = "Cantidad de Nodos: " + arbol._nodos;
    })
    document.querySelector("#btnIn").addEventListener("click", () =>{
      div.innerHTML = " ";
      div.innerHTML = arbol.inOrder();
      cont.textContent = "Cantidad de Nodos: " + arbol._nodos;
    })
    document.querySelector("#btnPost").addEventListener("click", () =>{
      div.innerHTML = " ";
      div.innerHTML = arbol.postOrder();
      cont.textContent = "Cantidad de Nodos: " + arbol._nodos;
    })
  }
}
let m = new Main();