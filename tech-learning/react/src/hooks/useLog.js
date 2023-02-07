
export const useLog = () =>
{

    return {
        logged: localStorage.getItem( "token" ) ? true: false,
    }
}