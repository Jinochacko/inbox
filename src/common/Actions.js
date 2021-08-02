import {GET_SIMLIST, GET_SIMLIST_SUCCESS,GET_SIMLIST_ERROR} from './constants';

export const getSimList = ({search= null, operator= null, type= null}) => async dispatch => {
    try{
        dispatch({type: GET_SIMLIST});
        let sentData = {
            search: search,
            operator: operator,
            type: type
        };
        
        const resp = await fetch('http://web.newagesme.com:7788/users/simcardlist', {
                                method: "POST",
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json'
                                  },
                                body: JSON.stringify(sentData)
                            });
        resp.json().then(respData=>{
            dispatch({type: GET_SIMLIST_SUCCESS, payload: respData});
        });
    } catch (error){
        dispatch({type: GET_SIMLIST_ERROR})
    }
}

export const getPlanType = (plan_type) => {
    let returnVal = {};
    switch(plan_type){
        case 'prepaid':
            returnVal = { name: "Pre Paid", image: 'https://raw.githubusercontent.com/smbteam4/NASRN_app/master/assets/images/prepaid.png?token=ABTEBTD3MKB5BLHM6OLBFMTAHPBXW', key: plan_type};
            break;
        case 'postpaid':
            returnVal = { name: "Post Paid", image: 'https://raw.githubusercontent.com/smbteam4/NASRN_app/master/assets/images/postpaid.png?token=ABTEBTA4G6R6H3YSZZKHNKDAHPBQI', key: plan_type};
            break;
        case 'broadband':
            returnVal = { name: "Broadband", image: 'https://raw.githubusercontent.com/smbteam4/NASRN_app/master/assets/images/broadband.png?token=ABTEBTE6GUXLDF6LOY25YCTAHPBBW', key: plan_type};
            break;
        default: 
            returnVal = { name: "", image: "", key: ""};
    }
    return returnVal;
}