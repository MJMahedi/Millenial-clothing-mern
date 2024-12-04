// Initial State
export const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [], // Load basket from localStorage
    shippingCost: 60, // Default value
    user: null,
};

// Utility function to update `localStorage`
const updateLocalStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket));
};

// Selector
export const getTotal = (basket) => {
    return (
        basket?.reduce((amount, item) => {
            const discountAmount = Math.round((item.price * item.discount) / 100);
            const updatedPrice = Math.round((item.price - discountAmount) * item.quantity);
            return amount + updatedPrice;
        }, 0) || 0
    );
};

// Calculate the total discount for the basket
export const getBasketDiscountTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        const discountAmount = Math.round((item.price * item.discount) / 100);
        return amount + discountAmount * item.quantity;
    }, 0);
};

// Calculate the total price without discount for the basket
export const getBasketPriceTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        return amount + item.price * item.quantity;
    }, 0);
};

// Calculate item total including discount for the basket
export const getItemPriceTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    if (item) {
        const discountAmount = Math.round((item.price * item.discount) / 100);
        const totalPrice = Math.round((item.price - discountAmount) * item.quantity);
        return totalPrice;
    }
    return 0;
};

export const getItemDiscountTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    return item ? (item.discount * item.quantity) || 0 : 0;
};

export const getItemTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    if (item) {
        const totalPrice = Math.round((item.price * item.quantity) - (item.discount * item.quantity));
        return totalPrice;
    }
    return 0;
};

// Reducer Function
const reducer = (state, action) => {
    console.log('action in reducer : ', state);
    switch (action.type) {
        case "ADD_TO_BASKET": {
            const existingIndex = state.basket.findIndex((item) => item._id === action.item._id);
            let updatedBasket;

            if (existingIndex >= 0) {
                // Update quantity if item already exists in basket
                updatedBasket = [...state.basket];
                updatedBasket[existingIndex].quantity += 0;
            } else {
                // Add new item to basket
                updatedBasket = [...state.basket, action.item];
            }

            updateLocalStorage(updatedBasket); // Save to localStorage
            return { ...state, basket: updatedBasket };
        }

        case 'REMOVE_FROM_BASKET': {
            const index = state.basket.findIndex((basketItem) => basketItem._id === action.item._id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cannot remove product (id: ${action.item._id}) as it's not in the basket`);
            }

            updateLocalStorage(newBasket); // Save to localStorage
            return { ...state, basket: newBasket };
        }

        case 'SET_USER':
            return { ...state, user: action.user };

        case 'EMPTY_BASKET': {
            localStorage.removeItem('basket'); // Clear localStorage
            return { ...state, basket: [] };
        }

        case 'increment': {
            const updatedBasket = state.basket.map((item) =>
                item._id === action.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            updateLocalStorage(updatedBasket); // Save to localStorage
            return { ...state, basket: updatedBasket };
        }

        case 'decrement': {
            const updatedBasket = state.basket.map((item) =>
                item._id === action.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            );
            updateLocalStorage(updatedBasket); // Save to localStorage
            return { ...state, basket: updatedBasket };
        }
        case "SET_SHIPPING_COST":
            return {
                ...state,
                shippingCost: action.shippingCost,
            };


        default:
            return state;
    }
};

export default reducer;
