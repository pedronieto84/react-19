// Veamos el uso de la keyword "IN" en otro ejemplo de objeto complejo
type Estados = "pendiente" | "aprobado" | "rechazado";

type Pedidos = {
  [estado in Estados]: number;
};

const pedidos: Pedidos = {
  pendiente: 10,
  aprobado: 5,
  rechazado: 2,
  australia: 2
};