export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]){
    return lista1.every((itemLista1) => { 
        return lista2.includes(itemLista1)
    })
}