 function filteredItemsHook (data, searchText){
    if (!searchText) return data; // Si no hay búsqueda, devuelve todo el array

    // Función para normalizar texto: quitar acentos y convertir a minúsculas
    const normalizeText = (text) => 
        //Quita los acentos y convierte a minúsculas
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const searchNormalized = normalizeText(searchText);

    return data.filter(item => normalizeText(item.title).includes(searchNormalized));
}

export default filteredItemsHook