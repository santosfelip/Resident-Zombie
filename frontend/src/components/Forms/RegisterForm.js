import React, { useRef, useEffect, useState } from 'react'

//css
import './styles.css';

//Components
import Alert from '@material-ui/lab/Alert';

//Components form
import { Form } from '@unform/web';
import Input from './components/input';
import SelectItem from './components/SelectItem'

//Validaror to Form
import * as Yup from 'yup';

//Fucntions External
import { postPeople, getPeople } from '../RegisterSurvivor/service';
import { getLocationFalse } from '../../infra/utilities';


export default function Register( ) {
    const formRef = useRef(null);
    const [Alertmessage, setAlertmessage] = useState({
        name: '',
        visible: false,
        message: '',
        messageID: '',
    });

    const [items, setItems ] = useState([]);


    //Get Coordinates for user
    useEffect(( ) =>{
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          formRef.current.setData({ Latitude: latitude, Longitude: longitude });
        },
        (err) =>{
          console.log(err);
        },{
          timeout: 300000,
        }
      )
    });


    //this is function mounts the object to be saved in the database
    function Data( data ) {
        const newData = {
            name: data.name,
            age: Number(data.age),
            gender: data.gender,
            lonlat: String(getLocationFalse(data.Longitude)),
            infected: true,
            item: items,
            Latitude: data.Latitude,
            Longitude: data.Longitude
        }
        return newData;
    }

    async function handleSubmit(data, { reset }) {
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('the name is required'),
                age: Yup.string().required('the age is required'),
                gender: Yup.string().required('the gender is required'),
            });

            //to validate all fields and not just stop at one
            await schema.validate(data, {
                abortEarly: false,
            })

            //Add data
            const newData = Data(data);
            const messageReturn = await postPeople(newData);

            if(messageReturn === 'Sucesss'){
              //Search allPeople for get the Last People
              const ListPeople = await getPeople();

              setAlertmessage({ name:'success', visible:true, message:
                'Data saved successfully',
                messageID: `Data saved successfully, YOUR ID = ${ListPeople.data.pop().SurrogateKey}`
              });
            } else {
              setAlertmessage({ name:'error', visible:true, message:
                'Oh no! We need to see the servers there in the cave'
              });
            }

            formRef.current.setErrors({});
            reset();
        } catch (err) {
          /*If the error is not filling in the fields,
          it adds the error messages to the label*/
            if(err instanceof Yup.ValidationError) {
                const errorMessages = { };

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
      <div>
        {Alertmessage.visible ? (<h2>{Alertmessage.messageID}</h2>):null}
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input className="name" name="name" label="Full Name"/>
            <Input type="number" name="age" label="Age"/>
            <Input name="gender" label="Gender" placeholder="M or F"/>
            <SelectItem item={items} setItems={setItems}/>
            <h2>Your Location</h2>
            <Input type="number" step="any" name="Latitude" label={'Latitude'} />
            <Input type="number" step="any" name="Longitude" label={'Longitude'} />

            <button type="submit">Submit</button>
        </Form>
          {Alertmessage.visible ?(
          <Alert
             severity={`${Alertmessage.name}`}
             onClose={() => {setAlertmessage({...setAlertmessage,visible:false})}}
          >
              {`${Alertmessage.message}`}
            </Alert>):null}
        </div>
    )

}
