import axios from "axios/index";

export default function (state, action) {
    switch (action.type){
        case "DATA_SUBMITTED":

                return axios.post('/api/reservations',  {reservation: action.payload})
                    .then(response => {
            state = response
        })
            .catch(error => {
                console.log(error.response)
            });

            break;
    }
    return null;

}

