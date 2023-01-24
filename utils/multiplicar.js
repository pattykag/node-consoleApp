const fs = require('fs');
const colors = require('colors');

const fileCreation = async (base, listar, hasta = 10) => {
    try {
        let salida = '', consoleColors = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consoleColors += `${base} ${'x'.green} ${i} ${'='.green} ${colors.cyan(base * i)}\n`;
        }


        /****** maneja el error mediante un callback, el cual hay que meter obligado
        fs.writeFile(`Tabla${base}.txt`, salida, err => {
            if (err) throw err;
        
            console.log('Tabla5.txt creada');
        });
        ******/
        if (listar) console.log(consoleColors);

        fs.writeFileSync(`./salida/Tabla${base}.txt`, salida);

        console.log(`Tabla${base}.txt creada`.cyan.underline);

        return `Tabla${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    fileCreation
}