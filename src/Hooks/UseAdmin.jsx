import { useContext } from "react";
import axiosSecure from "./axiosSecure";
import { AuthContext } from "../Authentication/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const UseAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecurity = axiosSecure()

    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecurity.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }
    })

    return [isAdmin]
};

export default UseAdmin;