const GET_MISSION_DATA = 'mission/missions/GET_MISSION_DATA';
const MEMBERSHIP = 'mission/missions/MISSION'
const url ='https://api.spacexdata.com/v3/missions'

const defaultMission = []
const missionReducer = (state = defaultMission, action)=>{
    switch(action.type){
       case GET_MISSION_DATA:
        return action.payload;
        case MEMBERSHIP:
        return state.map(element =>{
            if(element.id === action.id){
                return {
                    ...element,
                    status: !element.status
                }
            }else{
                return element
            }
        })
        // return state
    
        default:
            return state
    

    }
}
export const getMission =  () => async (dispatch) => { 
    const response =  await fetch(url);
    const data = await response.json()
    const missions = [];
     data.forEach(mission => {
        const newMission = {
              id: mission.mission_id,
              status: false,
              name: mission.mission_name,
              description: mission.description

        }
        missions.push(newMission)
    } )
    dispatch({
        type: GET_MISSION_DATA,
        payload: missions
    })

}
export const joinMembership =(id)=>{
   
    return{
        type: MEMBERSHIP,
        id,
    }
}
export default missionReducer