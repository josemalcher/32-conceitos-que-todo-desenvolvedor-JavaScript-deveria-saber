class Subject {
    constructor() {
        this.observadores = [];
    }
    assinarObservavel(observador){
        this.observadores.push(observador);
    }

    notificarObservavel(observador) {
        const index = this.observadores.indexOf(observador);
        if (index > -1) {
            this.observadores[index].notificar(index);
        }else{
            console.log('Esse observador não existe');
        }
    }

    notificarTodosObservadores() {
        this.observadores.forEach((observador, index) =>{
            observador.notificar(index)
        })
    }
}

class Observer {
    notificar(index) {
        console.log(`Observador ${index} foi modificado!`);
    }
}

const subject = new Subject();
const observador0 = new Observer();
const observador1 = new Observer();
const observador2 = new Observer();
const observador3 = new Observer();

subject.assinarObservavel(observador0)
subject.assinarObservavel(observador1)
subject.assinarObservavel(observador2)
subject.assinarObservavel(observador3)

subject.notificarObservavel(observador1);
subject.notificarTodosObservadores();
/*
    Observador 1 foi modificado!
    Observador 0 foi modificado!
    Observador 1 foi modificado!
    Observador 2 foi modificado!
    Observador 3 foi modificado!
*/
