const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Clave de API para The Dog API (debes registrarte en su página para obtenerla)
const dogApiKey = 'live_R8nRR3gtTv0vWufDFWXrmy0W0ywCv2z41vbHVgS98QrX2DNf1E9Srmlw4IHJ1HHK';
const dogApiUrl = 'https://api.thedogapi.com/v1/';

// Menú interactivo
const menu = async () => {
    const respuestas = await inquirer.prompt([
        {
            type: 'list',
            name: 'accion',
            message: chalk.green('Selecciona una opción:'),
            choices: [
                chalk.blue('Obtener información sobre una raza de perro'),
                chalk.yellow('Ver una imagen aleatoria de un perro'),
                chalk.red('Salir')
            ]
        }
    ]);

    switch (respuestas.accion) {
       case chalk.blue('Obtener información sobre una raza de perro'):
    try {
        const respuesta = await axios.get(`${dogApiUrl}breeds`, {
            headers: {
                'x-api-key': dogApiKey
            }
        });

        const razas = respuesta.data.map(raza => raza.name);

        const { razaSeleccionada } = await inquirer.prompt([
            {
                type: 'list',
                name: 'razaSeleccionada',
                message: chalk.blue('Selecciona una raza:'),
                choices: razas
            }
        ]);

        const razaEncontrada = respuesta.data.find(dog => dog.name === razaSeleccionada);

        if (razaEncontrada) {
            console.log(chalk.green(`Información sobre la raza: ${razaEncontrada.name}`));
            console.log(chalk.yellow(`Temperamento: ${razaEncontrada.temperament}`));
            console.log(chalk.cyan(`Vida útil promedio: ${razaEncontrada.life_span}`));
            console.log(chalk.magenta(`Origen: ${razaEncontrada.origin || 'Desconocido'}`));
        } else {
            console.log(chalk.red('Raza no encontrada.'));
        }

    } catch (error) {
        console.log(chalk.red('Error al obtener la información de las razas.'));
    }
    break;
        case chalk.yellow('Ver una imagen aleatoria de un perro'):
            try {
                const respuesta = await axios.get(`${dogApiUrl}images/search`, {
                    headers: {
                        'x-api-key': dogApiKey
                    }
                });
                const imagen = respuesta.data[0].url;
                console.log(chalk.green('Aquí tienes una imagen de un perro:'));
                console.log(chalk.blue(imagen));
            } catch (error) {
                console.log(chalk.red('Error al obtener la imagen del perro.'));
            }
            break;

        case chalk.red('Salir'):
            console.log(chalk.green('¡Hasta luego!'));
            process.exit();
            break;

        default:
            console.log(chalk.red('Opción no válida.'));
    }

    menu(); // Volver a mostrar el menú después de cada acción
};

// Iniciar la aplicación
menu();
