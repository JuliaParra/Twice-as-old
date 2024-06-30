

export function calcularAniosDobleEdad(padre, hijo) {
    if (padre <= 0 || hijo <= 0) {
        return 'Las edades deben ser mayores que cero.';
    }

    const edadDoble = hijo * 2;

    if (hijo === 0) {
        return 'El hijo aún no tiene edad suficiente para duplicar la edad del padre.';
    }

    if (padre < edadDoble) {
        return edadDoble - padre;
    } else if (padre > edadDoble) {
        return padre - edadDoble;
    } else {
        return 0;
    }
}



