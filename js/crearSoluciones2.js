let trabajo= `240 minutos de trabajo`;
let tp= `100 minutos hacer trabajos prácticos`;
let estudio= `100 minutos de estudio`;
let homework= `30 minutos de cosas de la casa`;
let descanso = `10 minutos de descanso`;

console.log(`TAREAS`);

for (i=1; i<=14;i++) {
    if (i==1) {
        console.groupCollapsed(`Semana 1`)
    }
    if (i==8) {
        console.groupEnd()
        console.groupCollapsed(`Semana 2`)
    }
console.groupCollapsed(`Dia ${i}`);
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd()


}
