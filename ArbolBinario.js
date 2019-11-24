import Articulo from "./Articulo.js";
export default class BThree{
  constructor(){
    this._raiz = null;
    this._nodos = 0;
  }
  agregarNodo(nodo){
    if(!this._raiz){
      this.agregarPrimerRaiz(nodo);
    }else{
      if(nodo.codigo < this._raiz.codigo){
        this.agregarIzquierda(nodo,this._raiz);
      }else{
        this.agregarDerecha(nodo,this._raiz);
      }
    }
  }
  agregarDerecha(nodo,raiz){
    if(raiz.derecha === null){
      raiz.derecha = nodo;
    }else{
      if(nodo.codigo < raiz.derecha.codigo){
        this.agregarIzquierda(nodo,raiz.derecha);
      }else{
        this.agregarDerecha(nodo,raiz.derecha);
      }
    }
  }
  agregarIzquierda(nodo,raiz){
    if(raiz.izquierda === null){
      raiz.izquierda = nodo;
    }else{
      if(nodo.codigo > raiz.izquierda.codigo){
        this.agregarDerecha(nodo,raiz.izquierda);
      }else{
        this.agregarIzquierda(nodo,raiz.izquierda);
      }
    }
  }  
  agregarPrimerRaiz(nodo){
    this._raiz = nodo;
  }
}