# Multiplica Talent test to apply for the position of front-end developer

**Author:** Camilo Gálvez Vidal

## English version

This application contains a color catalog, to facilitate access to other IT departments and designers. The main functionality is to provide an easy way to filter, obtain and copy any color within the catalog.

The catalogue has two formats:
    - Grid format
    - List format
In each of the formats, there is a filter to search by each of the parameters in the color list. These parameters are the name of the colour, the colour code, the year and the pantone value

As another feature, the application is responsive, that is, it supports the size for the screens of the mobile devices.

The color information is obtained using an HTTPS call to the following URL `https://reqres.in/api/colors`.

>To access this application you can do it in two ways
>- The short way: by accessing the following URL `https://elastic-borg-9f3530.netlify.app/`
>- The long way: download the attached repository and execute the following commands
>`cd multiplica-talent-frontend-test`
>`npm install -save`
>`ng serve -port=4200`
> Access the following URL `https://localhost:4200`

This project was generated with [Angular](https://github.com/angular/angular-cli) version 9.0.6.

**Use of the extra points:**
- Use some front end framework for the development of the application
> Angular version 9.0.6 was used for the development of this application.

- Modularize the components in an orderly fashion and with their corresponding CSS
> Angular works with components, within this existing application the following components with their respective styles: main panel component, color grid component, color list component, among others.

- Use flexbox for the grid
> For the squares component, we used Angular flex-layout, for the order of the squares, and to add the behavior and order for the mobile devices and devices with larger screen.

- Using Git as Version Control
> The project is stored in a public GitHub repository, specifically at [my account](https://github.com/cgalvezv/multiplica-talent-frontend-test-cgv).

- Deploy your application to a server (Netlify, Heroku, Zeit Now)
> The [application](https://elastic-borg-9f3530.netlify.app/) was deployed using Netlify.

- Use some CSS framework to decorate the application
> I don't know if they are considered as CSS frameworks, but I used Angular Material as a UI component library.

## Versión en Español

Esta aplicación contiene un catálogo de colores, para facilitar el acceso a los demás departamentos de TI y a los diseñadores. La principal funcionalidad es entregar una fácil manera de filtrar, obtener y copiar cualquier color dentro del catálogo.

El catalogo tiene dos formatos
    - Formato de Cuadrícula
    - Formato de lista
En cada uno de los formatos, existe un filtro para realizar búsqueda por cada uno de los parámetros existente en la lista de colores. Dichos parámetros son, el nombre del color, el código del color, el año y el valor pantone

Como otra característica, la aplicación es responsive, o sea, soporta las el tamaño para las pantallas de los dispositivos móviles.

La información de los colores se obtiene utilizando una llamada HTTPS al siguiente URL `https://reqres.in/api/colors`

>Para acceder a esta aplicación se puede hacer de dos maneras:
>- La vía corta: accediendo al siguiente URL `https://elastic-borg-9f3530.netlify.app/`
>- La vía larga: descargar el repositorio adjunto y executar los siguientes comandos:
>`cd multiplica-talent-frontend-test`
>`npm install —save`
>`ng serve —port=4200`
> Acceder a la siguiente URL `https://localhost:4200`

**Utilización de los puntos extras:**
- Utilizar algún framework de front end para el desarrollo de la aplicación
> Se utilizo Angular version 9.0.6 para el desarrollo de esta aplicación.

- Modularizar los componentes en forma ordenada y con su CSS correspondiente
> Angular funciona con componentes, dentro de esta aplicación existente los siguientes componentes con sus respectivos estilos: componente panel principal, componente cuadriculas de colores, componente cuadricula, componente lista de colores, entre otros.

- Utilizar flexbox para el grid
> Para el componente cuadriculas, se utilizo Angular flex-layout, para el orden de las cuadriculas, y para agregar el comportamiento y ordenamiento para los dispositivos mobiles y dispositivos con pantalla más grande.

- Utilizar git como control de versiones
> El proyecto se encuentra almacenado en un repositorio público de GitHub, en específico en [mi cuenta](https://github.com/cgalvezv/multiplica-talent-frontend-test-cgv).

- Hacer deploy de tu aplicación a un servidor (Netlify, Heroku, Zeit Now)
> Se realizó deploy de la [aplicación](https://elastic-borg-9f3530.netlify.app/) utilizando Netlify.

- Utilizar algún framework de CSS para decorar la aplicación
> No se si se considera como frameworks de CSS, pero utilicé Angular Material como librería de componentes UI.
