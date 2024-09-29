import axios from 'axios'; 
import { store } from '../redux/store/store';
const axiosApi = (url, method,  formData, success, error) =>{
    var state = store.getState() 
    axios({
        // Endpoint to send files
        url: url,
        method: method,
        headers: {
            // Add any auth token here
            authorization: state.jwt?state.jwt:"null",
        },

        // Attaching the form data
        data: formData,
    })
        // Handle the response from backend here
        .then(success)

        // Catch errors if any
        .catch(error);
}

export default axiosApi