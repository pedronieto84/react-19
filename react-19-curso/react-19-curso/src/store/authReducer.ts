

const initialState = {
  user: null as User | null, // Usuario autenticado o null
  loading: true, // Indicador de carga inicial
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: {email: 'a@a.es'}, loading: false };
    case "LOGOUT":
      return { ...state, user: null, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default authReducer;
