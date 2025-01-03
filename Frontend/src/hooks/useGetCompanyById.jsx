import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetCompanyById(companyId) {

    const dispatch = useDispatch();

    useEffect(() => {

        const fetchSingleCompnay = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {withCredentials:true});
                console.log(res.data.company);
                if(res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompnay();
    }, [companyId, dispatch])
}

export default useGetCompanyById