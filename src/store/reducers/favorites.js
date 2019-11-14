import produce from 'immer';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  favorites: [],
}

function reducer(state = INITIAL_STATE.favorites, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
        /*  */
        return produce(state, draft => {
          /* Verificando duplicação de de propriedades */
          const propertyIsSet = state.filter(p => p.property.id === action.property.property.id)
                    
          if (propertyIsSet.length >= 1) {
            toast.error('⛔️ Opa! este imóvel já foi adicionado')
            console.log('erro')
          } else {
            draft.push(action.property)
            toast.success('⭐️ Parabéns imóvel adicionado');
            window.localStorage.setItem("favorites", draft);
          }

        });
    case 'REMOVE_TO_FAVORITES':
      return produce(state, draft => {
        const propertyFav = draft.findIndex(p => p.property.id === action.id)

        if (propertyFav >= 0) {
          draft.splice(propertyFav, 1)
          toast.error('😔 O imóvel foi removido dos favoritos')
        }

        console.log(propertyFav)
      })
    default:
      return state;
  }
}

export default reducer;