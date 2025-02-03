// Generics <T> en TypeScript se usa para trabajar con un dato genérico, es decir, se lo defino cuando uso la función o clase.
function identidad<T>(valor: T): T {
    return valor;
  }
  
  let numero = identidad<number>(42);
  let texto = identidad<string>("Hola");


  // Se usa sobretodo en Promsesas y Observables principalmente
  // VEAMOS EJEMPLO
  function fetchData<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        try {
          const data = { mensaje: "Datos obtenidos", exito: true } as T;
          resolve(data);
        } catch (error) {
          reject("Error al obtener los datos");
        }
      }, 1000);
    });
  }
  
  // Uso con un tipo específico, por ejemplo, se que tipo de dato voy a recibir del back
  interface UserStatus {
    email: string;
    verified: boolean;
  }
  
  // Autollamo la promesa y vemos como resultado ya ha inferido el tipo de dato UserStatus correctamente
  (async ()=>{
    const resultado =  await fetchData<UserStatus>("https://api.example.com/data")
    console.log('resultado', resultado); })()

    