import React from 'react';
import Card from '../../UIElements/Card';
import Button from '../../FormElements/Button';
import ClientItem from './ClientItem';

import './ClientList.css';

const ClientList = props => {
    
    

    if (props.items.lengt === 0) {
        return <div className="place-list center">
            <Card>
                <h2>Nu exista clienti inregistrati</h2>
                <Button to="/clients/new" />
            </Card>
        </div>
    }

    return (
        <ul className="place-list">
            {props.items.map(client => {
                return <ClientItem 
                        key= {client._id}
                        id={client._id}
                        subsemnatul={client.subsemnatul}
                        cnp_nif={client.cnp_nif}
                    />
            })}
        </ul>
    );
};  

export default ClientList;