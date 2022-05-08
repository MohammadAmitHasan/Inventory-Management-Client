import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://nim-server.herokuapp.com/login', {
                    email
                })
                setToken(data.token)
                localStorage.setItem('access_token', data.token)
            }
        }
        getToken();
    }, [user]);
    return [token]
}

export default useToken;