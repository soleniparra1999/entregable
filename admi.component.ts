import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.sass']
})
export class AdmiComponent implements OnInit  {
  // Declarar variables para almacenar respuestas de la encuesta
  respuesta1: string = '';
  respuesta2: number = 0;
  respuesta3: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Inicializar datos si es necesario
  }

  // Método para enviar respuestas de la encuesta
  enviarEncuesta() {
    // Aquí puedes enviar las respuestas a tu backend o realizar acciones necesarias
    console.log('Respuesta 1:', this.respuesta1);
    console.log('Respuesta 2:', this.respuesta2);
    console.log('Respuesta 3:', this.respuesta3);

    // Puedes resetear las respuestas después de enviarlas si es necesario
    this.resetearRespuestas();
  }

  // Método para resetear las respuestas
  resetearRespuestas() {
    this.respuesta1 = '';
    this.respuesta2 = 0;
    this.respuesta3 = false;
  }
}


 

