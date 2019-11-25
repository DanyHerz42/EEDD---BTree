import Articulo from "./Articulo.js";
export default class BThree{
  constructor(){
    this._raiz = null;
    this._nodos = 0;
    this._cadena = " ";
  }
  busqueda(codigo){
    return this.buscarNodo(codigo,this._raiz);
  }
  buscarNodo(codigo,comp){
    if(codigo === comp.codigo){
      return comp.toString();
    }else{
      if(codigo > comp.codigo){
        if(comp.derecha === null){
          return "No se encontró.";
        }else{
          this.buscarNodo(codigo,comp.derecha);
        }
      }else if(codigo < comp){
        if(comp.izquierda === null){
          return "No se encontró.";
        }else{
          this.buscarNodo(codigo,comp.izquierda);
        } 
      }
    }
  }
  inOrder(){
    this._cadena = " ";
    this.sacarInOrder(this._raiz);
    return this._cadena;
  }
  sacarInOrder(raiz){
    if(raiz === null){
      return;
    }else{
      this.sacarInOrder(raiz.izquierda);
      this._cadena += raiz.toString() + " <br> ";
      this.sacarInOrder(raiz.derecha);
    }
  }
  postOrder(){
    this._cadena = " ";
    this.sacarPostOrder(this._raiz);
    return this._cadena;
  }
  sacarPostOrder(raiz){
    if(raiz === null){
      return;
    }else{
      this.sacarPostOrder(raiz.izquierda);
      this.sacarPostOrder(raiz.derecha);
      this._cadena += raiz.toString() + " <br> ";
    }
  }
  preOrder(){
    this._cadena = " ";
    this.sacarPreOrder(this._raiz);
    return this._cadena;
  }
  sacarPreOrder(raiz){
    if(raiz === null){
      return;
    }else{
      this._cadena += raiz.toString() + " <br> ";
      this.sacarPreOrder(raiz.izquierda);
      this.sacarPreOrder(raiz.derecha);
    }
  }
  agregarNodo(nodo){
    if(!this._raiz){
      this.agregarPrimerRaiz(nodo);
      this._nodos++;
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
      this._nodos++;
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
      this._nodos++;
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