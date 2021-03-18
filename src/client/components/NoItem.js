import React from 'react';
import Card from '../../UIElements/Card';
import Button from '../../FormElements/Button';

import './ClientItem.css';
import './ClientList.css';

const NoItem = props => {
    
    return (
        <React.Fragment>
            <ul className="place-list">
            <li className="place-item">
                <Card className="place-item__content">
                            <div className="place-item__info">
                                Va rugam sa apasati butonul de mai jos pentru a aduga datele dumneavoastra
                            </div>
                            <div className="place-item__actions">
                                <Button inverse to={`/clienti/new`}>Adauga datele</Button>
                            </div>
                </Card>
            </li>
            </ul>
        </React.Fragment>
    );
};  

export default NoItem;