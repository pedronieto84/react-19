// Esto será el texto de la acción que veré en react-devtools
export const INCREMENT = 'Incrementar' 
export const DECREMENT = "Decrementar";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});