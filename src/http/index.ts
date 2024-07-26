import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias() {
  
  const resposta = await fetch('https://gist.githubusercontent.com/eduardovellutto/d78bfe4db827fe97e56837f765eac27d/raw/9b79373f3de670e571715fe818916e4d3f73baa1/categorias.json');

  const categorias:ICategoria[] = await resposta.json();

  return categorias;
}