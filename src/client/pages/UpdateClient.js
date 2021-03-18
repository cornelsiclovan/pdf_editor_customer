import { logDOM } from '@testing-library/react';
import React, {useEffect, useState, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../FormElements/Button';
import Input from '../../FormElements/Input';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import Card from '../../UIElements/Card';
import ErrorModal from '../../UIElements/ErrorModal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../util/validators';

const UpdateClient = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedClient, setLoadedClient] = useState();
    const clientId = useParams().clientId;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm({
        tribunalul: {
            value: "",
            isValid: false
        },
        subsemnatul: {
            value: '',
            isValid: false
        },
        domiciliat: {
            value: '',
            isValid: false,
        },
        strada: {
            value: '',
            isValid: false,
        },
        numar: {
            value: '',
            isValid: false
        },
        bloc: {
            value: '',
            isValid: false
        },
        scara: {
            value: '',
            isValid: false
        },
        etaj: {
            value: '',
            isValid: false
        },
        apartament: {
            value: '',
            isValid: false
        },
        judet: {
            value: '',
            isValid: false
        },
        telefon: {
            value: '',
            isValid: false
        },
        act_ident: {
            value: '',
            isValid: false
        },
        act_ident_seria: {
            value: '',
            isValid: false
        }, 
        act_ident_numar: {
            value: '',
            isValid: false
        },
        cnp_nif: {
            value: '',
            isValid: false
        },
        eliberat: {
            value: '',
            isValid: false
        },
        eliberat_data: {
            value: '',
            isValid: false
        },
        calitate: {
            value: '',
            isValid: false
        },
        firma: {
            value: '',
            isValid: false
        },
        nr_ordine_rc: {
            value: '',
            isValid: false
        },
        cui: {
            value: '',
            isValid: false
        },
        sediu_domiciliat: {
            value: '',
            isValid: false
        },
        sediu_strada: {
            value: '',
            isValid: false
        },
        sediu_numar: {
            value: '',
            isValid: false
        }, 
        sediu_bloc: {
            value: '',
            isValid: false
        },
        sediu_scara: {
            value: '',
            isValid: false
        }, 
        sediu_etaj: {
            value: '',
            isValid: false
        },
        sediu_apartament: {
            value: '',
            isValid: false
        },
        sediu_judet: {
            value: '',
            isValid: false
        },
        sediu_cod: {
            value: '',
            isValid: false
        },
        sediu_cod_post: {   
            value: '',
            isValid: false
        },
        sediu_telefon: {
            value: '',
            isValid: false
        },
        sediu_telefon1: {
            value: '',
            isValid: false
        },
        sediu_fax: {
            value: '',
            isValid: false
        },
        sediu_fax1: {
            value: '',
            isValid: false
        },
        sediu_mail: {
            value: '',
            isValid: false
        },
        sediu_web: {
            value: '',
            isValid: false
        },
        declar_0: {
            value: '',
            isValid: false
        },
        declar_1: {
            value: '',
            isValid: false
        },
        declar_2: {
            value: '',
            isValid: false
        },
        declar_3: {
            value: '',
            isValid: false
        }, 
        data: {
            value: '',
            isValid: false
        }
    }, 
    false
    );

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/clients/${clientId}`);
                setLoadedClient(responseData.client);

                console.log(responseData.client.subsemnatul);
                setFormData(
                    {
                        tribunalul : {
                            value: responseData.client.tribunalul,
                            isValid: true
                        },
                        subsemnatul: {
                            value: responseData.client.subsemnatul,
                            isValid: true
                        },
                        domiciliat: {
                            value: responseData.client.domiciliat,
                            isValid: true,
                        },
                        strada: {
                            value: responseData.client.strada,
                            isValid: true,
                        },
                        numar: {
                            value: responseData.client.numar,
                            isValid: true
                        },
                        bloc: {
                            value: responseData.client.bloc,
                            isValid: true
                        },
                        scara: {
                            value: responseData.client.scara,
                            isValid: true
                        },
                        etaj: {
                            value: responseData.client.etaj,
                            isValid: true
                        },
                        apartament: {
                            value: responseData.client.apartament,
                            isValid: true
                        },
                        judet: {
                            value: responseData.client.judet,
                            isValid: true
                        },
                        telefon: {
                            value: responseData.client.telefon,
                            isValid: true
                        },
                        act_ident: {
                            value: responseData.client.act_ident,
                            isValid: true
                        },
                        act_ident_seria: {
                            value: responseData.client.act_ident_seria,
                            isValid: true
                        }, 
                        act_ident_numar: {
                            value: responseData.client.act_ident_numar,
                            isValid: true
                        },
                        cnp_nif: {
                            value: responseData.client.cnp_nif,
                            isValid: true
                        },
                        eliberat: {
                            value: responseData.client.eliberat,
                            isValid: true
                        },
                        eliberat_data: {
                            value: responseData.client.eliberat_data,
                            isValid: true
                        },
                        calitate: {
                            value: responseData.client.calitate,
                            isValid: true
                        },
                        firma: {
                            value: responseData.client.firma,
                            isValid: true
                        },
                        nr_ordine_rc: {
                            value: responseData.client.nr_ordine_rc,
                            isValid: true
                        },
                        cui: {
                            value: responseData.client.cui,
                            isValid: true
                        },
                        sediu_domiciliat: {
                            value: responseData.client.sediu_domiciliat,
                            isValid: true
                        },
                        sediu_strada: {
                            value: responseData.client.sediu_strada,
                            isValid: true
                        },
                        sediu_numar: {
                            value: responseData.client.sediu_numar,
                            isValid: true
                        }, 
                        sediu_bloc: {
                            value: responseData.client.sediu_bloc,
                            isValid: true
                        },
                        sediu_scara: {
                            value: responseData.client.sediu_scara,
                            isValid: true
                        }, 
                        sediu_etaj: {
                            value: responseData.client.sediu_etaj,
                            isValid: true
                        },
                        sediu_apartament: {
                            value: responseData.client.sediu_apartament,
                            isValid: true
                        },
                        sediu_judet: {
                            value: responseData.client.sediu_judet,
                            isValid: true
                        },
                        sediu_cod: {
                            value: responseData.client.sediu_cod,
                            isValid: true
                        },
                        sediu_cod_post: {   
                            value: responseData.client.sediu_cod_post,
                            isValid: true
                        },
                        sediu_telefon: {
                            value: responseData.client.sediu_telefon,
                            isValid: true
                        },
                        sediu_telefon1: {
                            value: responseData.client.sediu_telefon1,
                            isValid: true
                        },
                        sediu_fax: {
                            value: responseData.client.sediu_fax,
                            isValid: true
                        },
                        sediu_fax1: {
                            value: responseData.client.sediu_fax1,
                            isValid: true
                        },
                        sediu_mail: {
                            value: responseData.client.sediu_mail,
                            isValid: true
                        },
                        sediu_web: {
                            value: responseData.client.sediu_mail,
                            isValid: true
                        },
                        declar_0: {
                            value: responseData.client.declar_0,
                            isValid: true
                        },
                        declar_1: {
                            value: responseData.client.declar_1,
                            isValid: true
                        },
                        declar_2: {
                            value: responseData.client.declar_2,
                            isValid: true
                        },
                        declar_3: {
                            value: responseData.client.declar_3,
                            isValid: true
                        }, 
                        data: {
                            value: responseData.client.data,
                            isValid: true
                        }
                    },
                    true
                );
            } catch(err) {

            }
        };

        fetchClient();
    }, [sendRequest, clientId, setFormData]);

    const clientUpdateSubmitHandler = async event => {
        event.preventDefault();

        try {
            await sendRequest(`http://localhost:5000/api/clients/${clientId}`, 
                              'PATCH',
                              JSON.stringify({
                                "tribunalul": formState.inputs.tribunalul.value,
                                "subsemnatul": formState.inputs.subsemnatul.value,
                                "domiciliat": formState.inputs.domiciliat.value,
                                "strada": formState.inputs.strada.value,
                                "numar": formState.inputs.numar.value,
                                "bloc": formState.inputs.bloc.value,
                                "scara": formState.inputs.scara.value,
                                "etaj": formState.inputs.etaj.value,
                                "apartament": formState.inputs.apartament.value,
                                "judet": formState.inputs.judet.value,
                                "telefon": formState.inputs.telefon.value,
                                "act_ident": formState.inputs.act_ident.value,
                                "act_ident_numar": formState.inputs.act_ident_numar.value,
                                "act_ident_seria": formState.inputs.act_ident_seria.value,
                                "cnp_nif": formState.inputs.cnp_nif.value,
                                "eliberat": formState.inputs.eliberat.value,
                                "eliberat_data": formState.inputs.eliberat_data.value,
                                "calitate": formState.inputs.calitate.value,
                                "firma": formState.inputs.firma.value,
                                "nr_ordine_rc": formState.inputs.nr_ordine_rc.value,
                                "cui": formState.inputs.cui.value,
                                "sediu_domiciliat": formState.inputs.sediu_domiciliat.value,
                                "sediu_strada": formState.inputs.sediu_strada.value,
                                "sediu_numar": formState.inputs.sediu_numar.value,
                                "sediu_bloc": formState.inputs.sediu_bloc.value,
                                "sediu_scara": formState.inputs.sediu_scara.value,
                                "sediu_etaj": formState.inputs.sediu_etaj.value,
                                "sediu_apartament": formState.inputs.sediu_apartament.value,
                                "sediu_judet": formState.inputs.sediu_judet.value,
                                "sediu_cod": formState.inputs.sediu_cod.value,
                                "sediu_cod_post": formState.inputs.sediu_cod_post.value,
                                "sediu_telefon": formState.inputs.sediu_telefon.value,
                                "sediu_telefon1": formState.inputs.sediu_telefon1.value,
                                "sediu_fax": formState.inputs.sediu_fax.value,
                                "sediu_fax1": formState.inputs.sediu_fax1.value,
                                "sediu_mail": formState.inputs.sediu_mail.value,
                                "sediu_web": formState.inputs.sediu_web.value,
                                "declar_0": formState.inputs.declar_0.value,
                                "declar_1": formState.inputs.declar_1.value,
                                "declar_2": formState.inputs.declar_2.value,
                                "declar_3": formState.inputs.declar_3.value,
                                "data": formState.inputs.data.value
                              }), {
                                  'Content-Type': 'application/json'
                              }
            );
            history.push('/');
        } catch(err) {}
    }

    if(isLoading) {
        return (
            <div className="center">
                <LoadingSpinner />
            </div>
        )
    }

    if(!loadedClient && error) {
        return (
            <div className="center">
                <Card>
                    <h2>
                        Could not find client!
                    </h2>
                </Card>
            </div>
        );
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>

            {!isLoading && loadedClient &&
                <form className="client-form" onSubmit={clientUpdateSubmitHandler}>
                <Input 
                    id="tribunalul"
                    element="input"
                    type="text"
                    label="Tribunalul"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un tribunal valid"
                    initialValue={loadedClient.tribunalul}
                    onInput={inputHandler}
                />
                <Input 
                    id="subsemnatul"
                    element="input"
                    type="text"
                    label="Subsemnatul"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un nume valid"
                    initialValue={loadedClient.subsemnatul}
                    onInput={inputHandler}
                />
                <Input 
                    id="domiciliat"
                    element="input"
                    type="text"
                    label="domiciliat"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un domiciliu valid"
                    initialValue={loadedClient.domiciliat}
                    onInput={inputHandler}
                />
                <Input 
                    id="strada"
                    element="input"
                    type="text"
                    label="Strada"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o strada valida"
                    initialValue={loadedClient.strada}
                    onInput={inputHandler}
                />
                <Input 
                    id="numar"
                    element="input"
                    type="text"
                    label="Numar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    initialValue={loadedClient.numar}
                    onInput={inputHandler}
                />
                <Input 
                    id="bloc"
                    element="input"
                    type="text"
                    label="Bloc"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un bloc valid"
                    initialValue={loadedClient.bloc}
                    onInput={inputHandler}
                />
                <Input 
                    id="scara"
                    element="input"
                    type="text"
                    label="Scara"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o scara valida"
                    initialValue={loadedClient.scara}
                    onInput={inputHandler}
                />
                <Input 
                    id="etaj"
                    element="input"
                    type="text"
                    label="etaj"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un etaj valid"
                    initialValue={loadedClient.etaj}
                    onInput={inputHandler}
                />
                <Input 
                    id="apartament"
                    element="input"
                    type="text"
                    label="Apartament"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un apartament valid"
                    initialValue={loadedClient.apartament}
                    onInput={inputHandler}
                />
                <Input
                    id="judet"
                    element="input"
                    type="text"
                    label="Judet"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un judet valid"
                    initialValue={loadedClient.judet}
                    onInput={inputHandler} 
                />
                <Input 
                    id="telefon"
                    element="input"
                    type="text"
                    label="Telefon"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar de telefon valid"
                    initialValue={loadedClient.telefon}
                    onInput={inputHandler}
                />

                <Input 
                    id="act_ident"
                    element="input"
                    type="text"
                    label="Act identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un act de identitate valid"
                    initialValue={loadedClient.act_ident}
                    onInput={inputHandler}
                />
                <Input 
                    id="act_ident_seria"
                    element="input"
                    type="text"
                    label="Seria actului de identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o serie valida"
                    initialValue={loadedClient.act_ident_seria}
                    onInput={inputHandler}
                />
                <Input 
                    id="act_ident_numar"
                    element="input"
                    type="text"
                    label="Numarul actului de identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    initialValue={loadedClient.act_ident_numar}
                    onInput={inputHandler}
                />
                <Input 
                    id="cnp_nif"
                    element="input"
                    type="text"
                    label="CNP/NIF"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cnp/nif valid"
                    initialValue={loadedClient.cnp_nif}
                    onInput={inputHandler}
                />
                <Input 
                    id="eliberat"
                    element="input"
                    type="text"
                    label="eliberat de"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un ipj valid"
                    initialValue={loadedClient.eliberat}
                    onInput={inputHandler}
                />
                <Input
                    id="eliberat_data"
                    element="input"
                    type="text"
                    label="la data"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o data valida"
                    initialValue={loadedClient.eliberat_data}
                    onInput={inputHandler}
                />
                <Input 
                    id="calitate"
                    element="input"
                    type="text"
                    label="Calitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o calitate valida"
                    initialValue={loadedClient.calitate}
                    onInput={inputHandler}
                />
                <Input 
                    id="firma"
                    element="input"
                    type="text"
                    label="Firma"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o firma valida"
                    initialValue={loadedClient.firma}
                    onInput={inputHandler}
                />
                <Input 
                    id="nr_ordine_rc"
                    element="input"
                    type="text"
                    label="Numar ordine RC"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un nr ordine valid"
                    initialValue={loadedClient.nr_ordine_rc}
                    onInput={inputHandler}
                />
                <Input 
                    id="cui"
                    element="input"
                    type="text"
                    label="CUI"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cui valid"
                    initialValue={loadedClient.cui}
                    onInput={inputHandler}
                />

                <Input 
                    id="sediu_domiciliat"
                    element="input"
                    type="text"
                    label="Sediu domiciliat"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un sediu valid"
                    initialValue={loadedClient.sediu_domiciliat}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_strada"
                    element="input"
                    type="text"
                    label="strada"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o strada valid"
                    initialValue={loadedClient.sediu_strada}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_numar"
                    element="input"
                    type="text"
                    label="numar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    initialValue={loadedClient.sediu_numar}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_bloc"
                    element="input"
                    type="text"
                    label="bloc"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un bloc valid"
                    initialValue={loadedClient.sediu_bloc}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_scara"
                    element="input"
                    type="text"
                    label="scara"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o scara valida"
                    initialValue={loadedClient.sediu_scara}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_etaj"
                    element="input"
                    type="text"
                    label="etaj"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un etaj valid"
                    initialValue={loadedClient.sediu_etaj}
                    onInput={inputHandler}
                />
                <Input
                    id="sediu_apartament"
                    element="input"
                    type="text"
                    label="apartament"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un apartament valid"
                    initialValue={loadedClient.sediu_apartament}
                    onInput={inputHandler} 
                />
                <Input 
                    id="sediu_judet"
                    element="input"
                    type="text"
                    label="judet"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un judet valid"
                    initialValue={loadedClient.sediu_judet}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_cod"
                    element="input"
                    type="text"
                    label="cod"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cod valid"
                    initialValue={loadedClient.sediu_cod}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_cod_post"
                    element="input"
                    type="text"
                    label="cod postal"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cod postal valid"
                    initialValue={loadedClient.sediu_cod_post}
                    onInput={inputHandler}
                />

                <Input 
                    id="sediu_telefon"
                    element="input"
                    type="text"
                    label="telefon"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un telefon valid"
                    initialValue={loadedClient.sediu_telefon}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_telefon1"
                    element="input"
                    type="text"
                    label="telefon suplimentar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un telefon valid"
                    initialValue={loadedClient.sediu_telefon1}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_fax"
                    element="input"
                    type="text"
                    label="fax"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un fax valid"
                    initialValue={loadedClient.sediu_fax}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_fax1"
                    element="input"
                    type="text"
                    label="fax auxiliar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un fax valid"
                    initialValue={loadedClient.sediu_fax1}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_mail"
                    element="input"
                    type="text"
                    label="email"
                    validators={[VALIDATOR_REQUIRE, VALIDATOR_EMAIL]}
                    errorText="Va rugam introduceti un email valid"
                    initialValue={loadedClient.sediu_mail}
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_web"
                    element="input"
                    type="text"
                    label="website"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un website valid"
                    initialValue={loadedClient.sediu_web}
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_0"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    initialValue={loadedClient.declar_0}
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_1"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    initialValue={loadedClient.declar_1}
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_2"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    initialValue={loadedClient.declar_2}
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_3"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    initialValue={loadedClient.declar_3}
                    onInput={inputHandler}
                />
                <Input 
                    id="data"
                    element="input"
                    type="text"
                    label="data"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o data valida"
                    onInput={inputHandler}
                    initialValue={loadedClient.data}
                />
                <Button type="submit" disabled={!formState.isValid}>MODIFICA</Button>
                </form>
            }
        </React.Fragment>
    );
}

export default UpdateClient;