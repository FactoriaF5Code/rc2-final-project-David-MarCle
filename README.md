

1. [Logo](#Logo)
2. [Introducción](#Introducción)
3. [Tecnologías](#Tecnologías)
4. [Instalación](#Instalación)
5. [Estructura de Carpetas](#Estructura-de-Carpetas)
6. [Desarrollo](#Desarrollo)
7. [Estado](#Estado)
8. [Imágenes](#Imágenes)
9. [Créditos](#créditos)
 
 

# Logo
![Logo](/frontend/src/presentation/assets/logoFilmNecting.png)


# Introducción
Red social para estudiantes de Cine de España y Latinoamérica.

Una red donde los estudiantes y profesionales noveles, puedan compartir sus trabajos y experiencias en proyectos realizados. Y poder crear sinergias entre estudiantes, profesionales y empresas.
Catálogo de cortometrajes, mediometrajes y largometrajes.
Ficha personal de cada usuario (profesional y empresas)
Sistema de match
Sistema de recomendaciones
Chat
Anuncios laborales


# Tecnologías

## Frontend:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Vite ](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## Backend:
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)

## Control de Versiones:
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## Otros:
![PostgreSQL](    https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)


---

# Instalación

### REPOSITORIO

Clonar el repositorio:

```
https://github.com/FactoriaF5Code/rc2-final-project-David-MarCle.git

```


### FRONTEND
Para instalar módulos de node en carpeta frontend, ejecutar:

```
cd frontend
npm install 
```
Para ejecutar la aplicación en la carpeta de Frontend:
```
npm run dev
```

Para instalar librería en la carpeta frontend, ejecutar:
```
npm install react-router-dom

```

### BACKEND
Para ejecutar la aplicación en el Bakcend:
```
cd filmnectingproject 
mvn spring-boot:run
```
La BD para ejecutar el backend:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/Filmnecting
spring.datasource.username=postgres
spring.datasource.password=greenfield
```



# Estructura de carpetas
```

rc2-final-project-David-MarCle
├─ filmnectingproject
│  ├─ src
│  │  │  │ └─ filmnectingproject
│  │  │  │   ├─ CONTROLLERS
│  │  │  │   ├─ MODELS
│  │  │  │   ├─ REPOSITORY
│  │  │  │   └─ SERVICES
│  │  │  └─ resources
│  │  │     ├─ application.properties
├─ frontend
│  ├─ json_server
│  ├─ src
│  │  ├─ MIDDELWARE
│  │  │  ├─ context
│  │  │  └─ router
│  │  ├─ PRESENTATION
│  │  │  ├─ components
│  │  │  │     └─ Componentes reutilizables
│  │  │  └─ pages
│  │  │     ├─ Páginas del router
│  │  └─ SERVICES
│  │     └─ Servicios conexión Backend

```

# Desarrollo

En este documento esta desarrollado el Mockup, el User Journey y las historias de usuario

```
[Mural](https://app.mural.co/t/filmnecting3812/m/filmnecting3812/1710244357695/76e0dccd272de465e0935e20d4bb9fe9ff9040c0?sender=udc62f149699db215ac6d3412)
```

# Estado
El proyecto esta desarollado hasta Historia de Usuario 1

# Imágenes

![01](/frontend/public/img/HeroCTA.jpg)
![01](/frontend/public/img/Cards.jpg)
![01](/frontend/public/img/FilmsPage.jpg)
![01](/frontend/public/img/FilmsList.jpg)
![01](/frontend/public/img/Showfilms.jpg)
![01](/frontend/public/img/Login.jpg)


# Creditos

Este es un proyecto de David Martinez Clemente
[Linkedin](https://www.linkedin.com/in/david-martinez-clemente-fullstack-developer/)

