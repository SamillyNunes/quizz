export function shuffle(elements: any): any[]{
    // Primeiro mapeia cada elemento e transforma em um objeto com um numero aleatorio e o proprio elemento
    // Depois ordena cada elemento seguindo o numero aleatorio
    // Depois mapeia novamente para pegar so o valor
    return elements.map((e: any) => ({value: e, random: Math.random()}))
        .sort((obj1: any, obj2:any) => obj1.random-obj2.random)
        .map((e: any) => e.value);
}