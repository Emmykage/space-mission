const GET_ROCKET_DATA = 'spacetrip/rockets/GET_ROCKET_DATA'
const RESERVATION = 'spacetrip/rockets/TOGGLE_RESERVATION'
const url = 'https://api.spacexdata.com/v3/rockets'

// export function getData (payload){
//     return{
//         type: GET_ROCKET_DATA,
//         payload
//     }
// }

const defaultState = [];

export default function Rocketreducer (state = [], action){
    switch (action.type) {
        case GET_ROCKET_DATA:
            return action.payload.map(r =>{
                return{
                    ...r,
                    reservation: false
                }
            })
            //code
            case RESERVATION:
                return state.map(rocket =>{
                    if(rocket.id === action.id){
                        return {
                            ...rocket,
                            reservation: !rocket.reservation
                        }
                    }
                    else {
                        return rocket
                    }
                })

            
            
        default:
            return state
         
    }
}

export const getRocketData = ()=> async (dispatch) =>{
    const response = await fetch(url);
    const data =  await response.json();
    const rockets = [];
    data.forEach(rocket =>{
        const newRocketTrip = {
            id: rocket.id,
            title: rocket.rocket_name,
            description: rocket.description,
            image: rocket.flickr_images[0],
            

        }
        rockets.push(newRocketTrip)
    })
    dispatch({
        type: GET_ROCKET_DATA,
        payload: rockets
    })
}
export const  toggleReservation =(id) =>{
    console.log(id)
    return {
        type: RESERVATION,
        id
    }
}