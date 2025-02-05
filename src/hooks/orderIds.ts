// Este hook se encarga de crear un string único que identifica la conversacion entre 2 personas

export const useOrderIds = (userId1:string, userId2:string | null):string => {
  // Ordenar los strings alfabéticamente
  const stringsOrdenados = [userId1, userId2].sort();

  // Unir los strings ordenados con un guion
  const resultado = stringsOrdenados.join('-');

  return resultado;
}
