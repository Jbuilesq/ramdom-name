const nombres = ["Sergio", "Camila", "Pedro", "Ricardo","Sebastian","Elsa"];
const apellidos = ["Perez", "Builes", "Cortes", "Londoño","Porico"]

export function ramdomName()
{
    const ramdomNumber = Math.floor(Math.random() * nombres.length );
    return nombres[ramdomNumber]
}

export function ramdomLastname() {
    const ramdomNumber = Math.floor(Math.random() * apellidos.length);
    return apellidos[ramdomNumber]
}

export function ramdomFullname() {
    const fullName = ramdomName() + " " + ramdomLastname();
    return fullName;
}