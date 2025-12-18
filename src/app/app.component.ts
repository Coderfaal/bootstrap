import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'bootstrap';

  router: any;



  renderHome(home: string) {
this.router.navigate([home]);
}


renderAboutUs(aboutus: string) {
this.router.navigate([aboutus]);
}


renderRegister(register: string) {
this.router.navigate([register]);
}
  
}
