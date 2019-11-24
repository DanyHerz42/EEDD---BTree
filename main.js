import Articulo from "./Articulo.js";
import BThree from "./ArbolBinario.js";
class Main{
  constructor(){
    let arbol = new BThree();

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
    document.querySelector("#btnPre").addEventListener("click", () =>{
      
    })
  }
}
let m = new Main();