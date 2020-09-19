import React, { useRef, useState } from 'react'

//css
import './styles.css';

//Components
import Alert from '@material-ui/lab/Alert';

//Components form
import { Form } from '@unform/web';
import Input from './components/input';

//Validaror to Form
import * as Yup from 'yup';

//Fucntions External
import { postCliente, putCliente } from '../../infra/service';


export default function Register( { DataInicial, tituloBotao }) {
    const formRef = useRef(null);
    const [Alertmessage, setAlertmessage] = useState({
        name: '',
        visible: false,
        message: '',
        messageID: '',
    });

    const TituloBotao = tituloBotao? tituloBotao : 'Cadastrar';

    //função que monta o objeto para ser salvo no banco de dados
    function Data( {
      nome,
      email,
      identificacao,
      telefone,
      bairro,
      estado,
      numero,
      logradouro,
      cep,
      cidade
    } ) {
        const newData = {
          nome: nome,
          email: email,
          identificacao:identificacao,
          telefone: telefone,
          bairro: bairro,
          estado: estado,
          numero: numero,
          logradouro: logradouro,
          cep: cep,
          cidade: cidade
        }
        return newData;
    }

    async function handleSubmit(data, { reset }) {
        try{
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome é obrigatório'),
                email: Yup.string().required('E-mail é obrigatório'),
                identificacao: Yup.string().required('CPF/CNPJ é obrigatório'),
                telefone: Yup.string().required('Telefone é obrigatório'),
                bairro: Yup.string().required('Bairro é obrigatório'),
                cidade: Yup.string().required('Cidade é obrigatório'),
                cep: Yup.string().required('CEP é obrigatório'),
                estado: Yup.string().required('Estado é obrigatório'),
            });

            //to validate all fields and not just stop at one
            await schema.validate(data, {
                abortEarly: false,
            })

            //Add data
            const newData = Data(data);
            const messageReturn = await postCliente(newData);

            if(messageReturn === 'Sucesss'){

              setAlertmessage({ name:'success', visible:true, message:
                'Data saved successfully',
                messageID: 'Cliente cadastrado com sucesso'
              });
            } else {
              setAlertmessage({ name:'error', visible:true, message:
                'Erro ao gravar os dados'
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

    async function Alterar(data){
      const resp = await putCliente(DataInicial._id, data);
      if(resp === 'Sucess') {
        alert("Cliente Alterado com sucesso!");
        window.location.reload();
      }else {
        alert("Erro ao Alterar Cliente!");
      }
    }

    return (
      <div>
        {Alertmessage.visible ? (<h2>{Alertmessage.messageID}</h2>):null}
        <Form ref={formRef} initialData={DataInicial} onSubmit={
            TituloBotao === 'Alterar' ? Alterar : handleSubmit
        }>
            <Input name="nome" label="Nome Completo*" />
            <Input name="email" label="E-mail*" />
            <Input name="identificacao" label="CPF ou CNPJ*" />
            <Input name="telefone" label="Telefone*" />
            <Input name="cep" label="CEP *" />
            <Input name="logradouro" label="Logradouro " />
            <Input name="numero" label="Número " />
            <Input name="bairro" label="Bairro*" />
            <Input name="cidade" label="Cidade*" />
            <Input name="estado" label="Estado*" />


        <button type="submit">{`${TituloBotao}`}</button>
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
