import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {



  //Input para pasar información del padre al hijo. (CARD saca información de RENDER).
  @Input() img: string = '';
  //Para que el output envie eventos al padre, devemos declarar el EventEmitter en el Output.(Indicarle que cargue ese evento que queremos.)
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/img/default.png';

  constructor() {
    //before render. (El constructor corre antes del render)
    //NO async --> once time. async = (peticiones,fetch, subscribe)
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before render
    //change inputs --> times 
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //before render 
    //async - fetch, etc. -- once time.
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');
  }

  //Declaramos un evento para nuestro componente.
  imgError() {
    //Le decimos : si hay un error, ve a imageDefault porque en internet no hay una imagen.
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    //Aca le decimos que este evento, vamos a emitirlo.
    this.loaded.emit(this.img);
  }

}
