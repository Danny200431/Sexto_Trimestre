import { Routes } from '@angular/router';
import { Inicio} from './pages/inicio/inicio';
import { Ejercicio} from './pages/ejercicio/ejercicio';
import { Contacto} from './pages/contacto/contacto';

export const routes: Routes = [
  { 
    path: ' Inicio', 
    component: Inicio

  }
  { 
    path: ' Ejercicio', 
    component: Ejercicio

  }
  { 
    path: ' Contacto', 
    component: Contacto

  }

];

