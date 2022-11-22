import { useEffect } from "react";
import { useState } from "react";

export const UseToken = (email) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-sayem92.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("token", data);
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken)
                    }
                })
        }

    }, [email]);

    return [token];
};