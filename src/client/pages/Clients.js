import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../hooks/http-hook';
import ErrorModal from '../../UIElements/ErrorModal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import NoItem from '../components/NoItem';


const Clients = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedClients, setLoadedClients] = useState();
    
    // useEffect(() => {
    //     const fetchClients = async () => {
    //         try {
    //             const responseData = await sendRequest('http://localhost:5000/api/clients');
    //             setLoadedClients(responseData.clients);
              
    //         } catch (err) {}
    //     };
    //     fetchClients();
    // }, [sendRequest]);

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {
                isLoading && (
                    <div className="center">
                        <LoadingSpinner />
                    </div>
                )
            }
            <NoItem/>
        </React.Fragment>
    );
}

export default Clients;