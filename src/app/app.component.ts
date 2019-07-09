import { Component } from '@angular/core';
import { NotasModels } from './core/models/notas.models';
import { NotasProvider } from './core/providers/notas.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  notas: NotasModels[] = [];

  constructor(private notasProvider: NotasProvider) { 
  }
  
    ngOnInit() { this.traerNotas();}
    traerNotas(){ 
      this.notasProvider.getNotas()
      .subscribe((data: any) => this.notas = data)
    }
  }
