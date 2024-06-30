// test/calcularAniosDobleEdad.test.js
import { describe } from 'vitest';
import { calcularAniosDobleEdad } from '../src/calcularedad.js';

const test = new ViTest();

describe('calcularAniosDobleEdad', () => {
    it('debería devolver la diferencia de años correctamente', () => {
        const result1 = calcularAniosDobleEdad(30, 15); // padre: 30, hijo: 15
        const result2 = calcularAniosDobleEdad(40, 20); // padre: 40, hijo: 20
        
        return test.expect(result1).toEqual(30 - 15 * 2) 
            && test.expect(result2).toEqual(40 - 20 * 2);
    });

    it('debería manejar correctamente las edades menores o iguales a cero', () => {
        const result1 = calcularAniosDobleEdad(-1, 10); // Edad del padre negativa
        const result2 = calcularAniosDobleEdad(20, 0); // Edad del hijo igual a cero
        const result3 = calcularAniosDobleEdad(0, -5); // Ambas edades negativas
        
        return test.expect(result1).toEqual('Las edades deben ser mayores que cero.')
            && test.expect(result2).toEqual('Las edades deben ser mayores que cero.')
            && test.expect(result3).toEqual('Las edades deben ser mayores que cero.');
    });

    it('debería devolver el mensaje correcto cuando el hijo aún no tiene edad suficiente', () => {
        const result = calcularAniosDobleEdad(20, 0); // Edad del hijo igual a cero
        return test.expect(result).toEqual('El hijo aún no tiene edad suficiente para duplicar la edad del padre.');
    });

    it('debería devolver 0 cuando la edad del padre es igual al doble de la edad del hijo', () => {
        const result = calcularAniosDobleEdad(25, 12.5); // padre: 25, hijo: 12.5
        return test.expect(result).toEqual(0);
    });
});



