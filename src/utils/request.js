import axios from "axios";
import Config from "react-native-config";

export const request = ({url, method, data }) => {
    return axios({
        method: method || 'get',
        url: `http://listicle.deegeehub.com/api${url}`,
        data
    })
}