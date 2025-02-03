// Template literals

type Dia = `${0 | 1 | 2}${number}` | "30" | "31"; // Días válidos: 01-31
type Mes = `${0}${number}` | "10" | "11" | "12"; // Meses válidos: 01-12
type Año = `${number}${number}${number}${number}`; // Años válidos: 0000-9999

type FechaFormato = `${Dia}-${Mes}-${Año}`; // Formato: "dd-mm-YYYY"

// Ejemplos de uso
const fechaValida: FechaFormato = "25-12-2023"; // Válido
const fechaInvalida: FechaFormato = "32-13-2023"; 
   
type funcionFecha = (fecha: FechaFormato) => Date; // Una función que sólo acepta una fecha válida y devuelve objeto DATE

type lang = "es" | "en" | "fr" | "de"; // Lenguajes válidos

type traduccion = `${lang}-${lang}`; // Traducción de un idioma a otro hacer mouseover encima de traduccion

type funcionTraduccion = (idioma1: lang, idioma2: lang) => {
    texto: string,
    codigoIdiomas: traduccion
}; // Una función que sólo acepta dos idiomas válidos y devuelve una traducción





