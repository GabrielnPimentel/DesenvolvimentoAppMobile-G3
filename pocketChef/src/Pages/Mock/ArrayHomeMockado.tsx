import bolo from "../../Assets/boloChocolate.jpg";
import prato from "../../Assets/prato.jpg"

const endereco = 'https://voalzira.com/wp-content/uploads/2020/12/Bolo-de-Festa-de-Chocolate-com-Confete-e-Bis-scaled.jpg'



export const categorias = [
    { id: 1, title: "Café da manhã" },
    { id: 2, title: "Lanches" },
    { id: 3, title: "Sobremesas" },
    { id: 4, title: "Almoço" },
    { id: 5, title: "Janta" },
  ];

  export const pratos = [
    {id: 1, title: "Pure de batata com fritas", image: {uri: endereco}, time: "40min", n: "2"},
    {id: 2, title: "Pure de batata com fritas", image: {uri: endereco}, time: "40min", n: "2"},
    {id: 3, title: "Pure de batata com fritas", image: {uri: endereco}, time: "40min", n: "2"},
    {id: 4, title: "Pure de batata com fritas", image: {uri: endereco}, time: "40min", n: "2"},
  ];

  export const pratosPop = [
    { id: 1, title: "Bolo de chocolate", image: bolo },
    { id: 2, title: "Bolo de chocolate", image: bolo },
    { id: 3, title: "Bolo de chocolate", image: bolo },
    { id: 4, title: "Bolo de chocolate", image: bolo },
  ];