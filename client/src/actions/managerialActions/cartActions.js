export const addToCart= (pizza, quantity, varient) => (dispatch, getState) => {//trb sa dispatch pizza, cantitate,varianta
//cu ajutorul payload trimitem obiectul cartItem
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        quantity: Number(quantity),
        varient: varient,
        unitPrice: pizza.prices[0][varient],
        price: pizza.prices[0][varient] * Number(quantity) //selector

}


if(cartItem.quantity>10)
{
    alert('You cannot add more than 10 quantities')
}
else{
    if(cartItem.quantity<0){
dispatch({type:'DELETE_FROM_CART',payload:pizza})
}
else{
    dispatch({type:'ADD_TO_CART',payload:cartItem})
}
const cartItems=getState().cartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems))

}}


export const addToCartOther= (item, quantity) => (dispatch, getState) => {//trb sa dispatch pizza, cantitate,varianta
    //cu ajutorul payload trimitem obiectul cartItem
    if(item.quantity !=null)

        if(item.varient!=null)
            var cartItem = {
                name: item.name,
                _id: item._id,
                image: item.image,
                quantity: Number(quantity),
                unitPrice: item.unitPrice,
                price: item.unitPrice * Number(quantity), //selector
                varient : item.varient
        
            }
        else
            var cartItem = {
                name: item.name,
                _id: item._id,
                image: item.image,
                quantity: Number(quantity),
                unitPrice: item.unitPrice,
                price: item.unitPrice * Number(quantity) //selector
        
            }
    else
    {
        var cartItem = {
            name: item.name,
            _id: item._id,
            image: item.image,
            quantity: Number(quantity),
            unitPrice: item.price,
            price: item.price //selector
    
    }
    }
    if(cartItem.quantity>10)
    {
        alert('Nu se pot adăuga mai mult de 10 produse de același fel')
    }
    else{
        if(cartItem.quantity<=0){
        dispatch({type:'DELETE_FROM_CART',payload:item})
    }
    else{
        dispatch({type:'ADD_TO_CART',payload:cartItem})
    }
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
    
}}




export const deleteFromCart=(item)=>(dispatch, getState)=>{

dispatch({type:'DELETE_FROM_CART',payload:item})
//dupa stergere trebuie updatat cosul:
const cartItems=getState().cartReducer.cartItems 
localStorage.setItem('cartItems',JSON.stringify(cartItems))

}


export const deleteEverythingFromCart=()=>(dispatch, getState)=>{
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    for(let i=0; i< cartItems.length;i++){
        dispatch({type:'DELETE_FROM_CART',payload:cartItems[i]})
    }
    //dupa stergere trebuie updatat cosul:
    const cartItemsAfter=getState().cartReducer.cartItems 
    localStorage.setItem('cartItems',JSON.stringify(cartItemsAfter))
    
    }

