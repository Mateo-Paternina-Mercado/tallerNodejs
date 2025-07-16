# 🐶 Consulta de Razas y Imágenes de Perros

## 🎯 Descripción del problema

Conocer las distintas razas de perros puede ser complejo, ya que la información está dispersa en diferentes sitios. Además, visualizar cómo lucen estas razas de forma interactiva desde la consola no es algo que esté disponible fácilmente.

### ❓ ¿Qué resuelve esta aplicación?

Esta herramienta permite:

- Buscar información detallada de razas de perros (temperamento, origen, esperanza de vida).
- Visualizar una imagen aleatoria de perros directamente en consola.
- Navegar fácilmente con un menú interactivo amigable.

---

## 💡 Justificación de librerías seleccionadas

Para resolver el problema propuesto, se utilizaron las siguientes librerías de NPM:

| Librería | Uso en el proyecto |
| --- | --- |
| [axios](https://www.npmjs.com/package/axios) | Realiza peticiones HTTP a The Dog API para obtener datos en tiempo real. |
| [inquirer](https://www.npmjs.com/package/inquirer) | Crea un menú interactivo de selección en consola. |
| [chalk](https://www.npmjs.com/package/chalk) | Mejora la experiencia visual en consola aplicando colores a los textos. |

Estas herramientas hacen posible una experiencia fluida, intuitiva y dinámica desde la terminal.

---

## ⚙️ Instrucciones de instalación y uso

### 📦 Requisitos

- Tener [Node.js](https://nodejs.org/) y [nvm](https://github.com/coreybutler/nvm-windows/releases) instalado.

### 🛠️ Instalación

1. Descarga los archivos del proyecto y ubícalos en una carpeta local.
2. Abre una terminal en esa carpeta.
3. Ejecuta el siguiente comando para instalar las dependencias:
    
    ```bash
    npm install axios
    npm install chalk@4
    npm install inquirer@8
    ```
    
4. Luego corre el programa con:
    
    ```bash
    node app.js
    ```
    

---

## 🧠 ¿Cómo funciona la aplicación?

Al iniciar la app, el usuario accede a un menú con 3 opciones:

1. **Consultar una raza de perro**
    
    Se muestra una lista interactiva de razas y al seleccionar una, se despliega información como:
    
    - Temperamento
    - Esperanza de vida
    - Origen
2. **Ver una imagen aleatoria de un perro**
    
    Obtiene una foto aleatoria desde la API y muestra la URL en consola.
    
3. **Salir del programa**
    
    Termina la ejecución limpia y con mensaje personalizado.
    

---

## 🎬 Video demostrativo

📺 Mira cómo funciona el proyecto:

🔗 [Ver video en YouTube](https://youtu.be/72KO_9PRHsM)

---

## 📁 Estructura del proyecto

```
go
CopyEdit
📦 consulta-perros
 ┣ 📜 app.js
 ┗ 📜 README.md

```
---

## 🚀 Autor

- 👤 Mateo Paternina
- 🏫 Proyecto para **Campuslands**
- 📆 Entrega: **Miércoles 16 de Julio de 2025 – 11:59 p.m.**