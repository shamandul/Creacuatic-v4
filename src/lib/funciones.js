module.exports = {
    pasarEstadoColor(estado) {
        const respuesta = {
            color: '#d11820',
            msg: 'nuevo'
        };
        switch (estado){
            case 1:
                // estado 1, Proximamente
                respuesta.color = '#fbdd05';
                respuesta.msg = 'Proximamente';
                break;
            case 2:
                // estado 2, Empezado
                respuesta.color = '#05f140';
                respuesta.msg = 'Abierto';
                break;
            case 3:
                // estado 3, Terminado
                respuesta.color = '#d11820';
                respuesta.msg = 'Cerrado';
                break;
            default:
                // estado 0 o por defecto
                respuesta.color = '#ffffff';
                respuesta.msg = '';
        }
        return respuesta;
    }
}
