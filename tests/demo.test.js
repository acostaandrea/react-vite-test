describe('Pruebas en demo', () => {
    test('demo', () => {
        // inicializacion
        const message1 = 'Hola Mundo';
        //estimulo
        const message2 = message1.trim();
        //observacion del comportamiento esperado
        expect(message1).toBe(message2);

    });
});