export default class Articulo {
  constructor(objCons) {
    this._codigo = objCons.codigo;
    this._nombre = objCons.nombre;
    this._precio = objCons.precio;
    this._cantidad = objCons.cantidad;
    this._descripcion = objCons.descripcion;
    this._derecha = null;
    this._izquierda = null;
    this._raiz = null;
  }
  get codigo() {
    return this._codigo;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  get descripcion() {
    return this._descripcion;
  }
  get derecha() {
    return this._derecha;
  }
  get izquierda() {
    return this._izquierda;
  }
  get raiz() {
    return this._raiz;
  }
  set codigo(newCodigo) {
    this._precio = newCodigo;
  }
  set nombre(newNombre) {
    this._precio = newNombre;
  }
  set precio(newPrecio) {
    this._precio = newPrecio;
  }
  set cantidad(newCantidad) {
    this._precio = newCantidad;
  }
  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }
  set derecha(newDerecha) {
    this._derecha = newDerecha;
  }
  set izquierda(newIzquierda) {
    this._izquierda = newIzquierda;
  }
  set raiz(newRaiz) {
    this._raiz = newRaiz;
  }
  toString() {
    return `Codigo: ${this._codigo}, Nombre: ${this._nombre}, Precio: ${this._precio}, Cantidad: ${this._cantidad}, Descripcion: ${this._descripcion}`
  }
}