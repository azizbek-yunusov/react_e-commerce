export const addToBasket = (item) => {
  return {
    type: "ADD_TO_BASKET",
    payload: item
  }
}

export const handeleBasketShow = () => {
  return {
    type: "TOGGLE_BASKET_SHOW",
  }
}

export const incrementQuantity = (itemID) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: {id: itemID}
  }
}

export const decrementQuantity = (itemID) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: {id: itemID}
  }
}

export const romoveFromBasket = (itemID) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: {id: itemID}
  }
}
export const closeToastify = () => {
  return {
    type: "CLOSE_TOASTIFY"
  }
}
export const handleSideBar  = () => {
  return {
    type: "TOGGLE_SIDEBAR_SHOW"
  }
}

export const handleSignIn  = () => {
  return {
    type: "TOGGLE_SIGNIN_SHOW"
  }
}
export const handleSignUp  = () => {
  return {
    type: "TOGGLE_SIGNUP_SHOW"
  }
}

















// export const addToFavorites = (item) => {
//   return {
//     type: "ADD_TO_FAVORITES",
//     payload: item
//   }
// }

// export const handleFavoritesShow = () => {
//   return {
//     type: "TOGGlE_FAVORITES_SHOW"
//   }
// }