class Operacion {
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;

    constructor(){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }

    set ValorA(value:number){
        this.valorA=value;
    }

    set ValorB(value:number){
        this.valorB=value;
    }

    get Resultado():number{
        return this.resultado;
    }

}

class Suma extends Operacion{

    Suma(){
        this.resultado=this.valorA+this.ValorB;
    }
}

class Resta extends Operacion{

    Resta(){
        this.resultado=this.valorA-this.ValorB;
    }
}

let operacionS = new Suma();
operacionS.ValorA=45;
operacionS.ValorB=10;
operacionS.Suma();
console.log("El resultado de la suma es:" + operacionS.Resultado);