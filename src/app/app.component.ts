import { Component } from '@angular/core';
const { version: appVersion } = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * @author Camilo Gálvez Vidal
 */
export class AppComponent {
  // The application title
  title = 'multiplica-talent-frontend-test';
  // The aplication versión
  appVersion = appVersion;
}
