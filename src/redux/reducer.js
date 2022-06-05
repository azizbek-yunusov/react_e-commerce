const initialState = {
  order: localStorage.getItem("order")
    ? JSON.parse(localStorage.getItem("order"))
    : [],
  favorite: [],
  isBasketShow: false,
  isShowToastify: false,
  // isGoBasketShow: false,
  isFavoritesShow: false
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "ADD_TO_BASKET": 
      console.log("maxsulot savatchaga tushdi") 
      const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id);
      let newOrder = null
      if(itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder =([...state.order, newItem])
      }
      else {
        newOrder = state.order.map((orderItem, index) => {
          if(index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }
          }
          else {
            return orderItem 
          }
        })
      }
      localStorage.setItem("order", JSON.stringify(state.order));
      return {
        ...state,
        order: newOrder,
        isShowToastify: true
        // isGoBasketShow: !state.isGoBasketShow
      }
    case "TOGGLE_BASKET_SHOW":
      console.log("basketlist ishlamoqda")
      return {
        ...state,
        isBasketShow: !state.isBasketShow
      }
    case "INCREMENT_QUANTITY":
      console.log("qoshilyapti")
      localStorage.setItem("order", JSON.stringify(state.order));
      return {
        ...state,
        order: state.order.map(el => {
          if(el.id === payload.id) {
            const newQuantity = el.quantity + 1
            return {
              ...el,
              quantity: newQuantity
            }
          }
          else {
            return el
          }
        })
      }
    case "DECREMENT_QUANTITY" : 
    console.log("kamayapti")
    localStorage.setItem("order", JSON.stringify(state.order));
    return {
      ...state,
      order: state.order.map(el => {
        if(el.id === payload.id) {
          const newQuantity = el.quantity - 1
          return {
            ...el,
            quantity: newQuantity >= 1 ? newQuantity: 1
          }
        }
        else {
          return el
        }
      })
      }
    case "REMOVE_FROM_BASKET" : {
      localStorage.setItem("order", JSON.stringify(state.order));
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id)
      }
    }
    case "CLOSE_TOASTIFY" : {
      return {
        ...state,
        isShowToastify: !state.isShowToastify
      }
    }
    default:
      return state
  }
}
export default reducer




// case "ADD_TO_FAVORITES" : {
    //   const likeIndex = state.favorite.findIndex(favoriteItem => favoriteItem.id === payload.id);
    //   let newFavorite = null
    //   if(likeIndex < 0) {
    //     const newItem = {
    //       ...payload,
    //       liked: 1
    //     }
    //   newFavorite =([...state.favorite, newItem])
    //   }
    //   else {
    //     newFavorite = state.favorite.map((favoriteItem, index) => {
    //       if(likeIndex === index) {
    //         return {
    //           ...favoriteItem,
    //           liked: favoriteItem.liked - 1
    //         }
    //       }
    //       else {
    //         return {
    //           favoriteItem
    //         }
    //       }
    //     })
    //   }
    //   return {
    //     ...state,
    //     favorite: newFavorite
    //   }
    //   }
    // case "TOGGlE_FAVORITES_SHOW": {
    //   return {
    //     ...state,
    //     isFavoritesShow: !state.isFavoritesShow
    //   }
    //   }