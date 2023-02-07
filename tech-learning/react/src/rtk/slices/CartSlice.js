import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

const cartSlice = createSlice( {
    initialState: JSON.parse( localStorage.getItem( 'cartItems' ) ) || [],
    name: "cartSlice",
    reducers: {
        addToCart: ( state, action ) =>
        {
            const courses = action.payload;
            const selectedCourse = state.find( ( course ) => course.id === courses.id )
            if ( !selectedCourse )
            {
                state.push( action.payload )
                localStorage.setItem( "cartItems", JSON.stringify( state ) )
                toast.success( "successfuly added to the cart" )

            } else
            {
                Swal.fire( {
                    icon: 'error',
                    title: 'Sorry',
                    text: 'This course is already exist in your cart!',
                    background: "#121216",
                    confirmButtonColor: "#00e46c",
                    color: "white",
                    iconColor: "#00e46c",
                    timer: 2000
                } )
            }
        },
        removeFromCart: ( state, action ) =>
        {
            let data = state.filter( ( course ) => ( course.id !== action.payload.id ) );
            localStorage.setItem( "cartItems", JSON.stringify( data ) )
            toast.error( "successfuly removed !" )
            return data;
        },
        clearCart: ( state ) =>
        {
            state = []
            return state
        }
    }
} )
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;