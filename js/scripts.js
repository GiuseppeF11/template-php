// Estraggo la funzione creatAppa dall'oggetto Vue
const {createApp} = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp ({
    data() {
        return {
            message: 'Template PHP + Css + Js + Vue + Axios',
        };
    }
    // Monto l'istanza di Vue in pagina
}).mount('#app');