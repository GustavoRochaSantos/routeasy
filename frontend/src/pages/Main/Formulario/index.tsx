import React, { useRef, useState } from 'react'
import Input from '../../../components/Input';
import Button from '../../../components/Button'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import {FiSearch} from 'react-icons/fi'
import {Client} from "@googlemaps/google-maps-services-js";
import api from '../../../services/api';
import * as Yup from 'yup'
import getValidationError from '../../../utils/getValidationErrors';

import { Container } from './style'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Params { 
  handleLoad():void;
  handleRemoveData():void;
}

interface FormData {
  clienteNome: string;
  peso: string;
  enderecoCompleto: string;
  endereco: object;
  latitude: string;
  longitude: string;
}

toast.configure()

const Formulario:React.FC<Params> = ({handleLoad, handleRemoveData}) =>{
  const formRef = useRef<FormHandles>(null)
  const [parsedEndereco, setParsedEndereco] = useState({})
  const client = new Client({})

    async function handleIconClick(){
    
    const endereco = formRef.current?.getFieldValue('enderecoCompleto')
    
    client.geocode({
      params:{
        key: 'AIzaSyAJwTL_WQK7sIhlccPw7XhSLL_uoqlu_ic',
        address: endereco
      }
    })
    .then(response=>{

      console.log(response)

      if(response.data.status !== 'OK'){
        toast.error('Ocorreu um erro na pesquisa. Verifique o endereço novamente.')
      } else { 
        const { address_components } = response.data.results[0]
        const { lat, lng } = response.data.results[0].geometry.location

        const newDelivery = {
          numero: parseInt(address_components[0].long_name),
          logradouro: address_components[1].long_name,
          bairro: address_components[2].long_name,
          cidade: address_components[3].long_name,
          estado: address_components[4].short_name,
          pais: address_components[5].long_name,
          geolocalizacao:{
            latitude: lat,
            longitude: lng
          }
        }

        formRef.current?.setFieldValue('latitude', lat)
        formRef.current?.setFieldValue('longitude', lng)
        setParsedEndereco(newDelivery)
      }
    })
    .catch(error=>{
      console.log(error)
      toast.error(error)
    })

  }
  async function handleSubmit(data: FormData) {
console.log(data)

    console.log(parsedEndereco)

    formRef.current?.setErrors({})
    const schema = Yup.object().shape({
      clienteNome: Yup.string().required('Nome do Cliente é obrigatório! Verifique.'),
      peso: Yup.string().required('Peso é obrigatório! Verifique.'),
      enderecoCompleto: Yup.string().required('Endereço é obrigatório! Verifique.')
    })

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/', data)

      if(response.status === 200){
        formRef.current?.reset()
        handleLoad()
      }else{ 
        console.log(response)
      }
      
    } catch (error) {
      //-- Limpo os erros
      console.log(error)
      const errors = getValidationError(error)

      //-- Envio para o formulario
      formRef.current?.setErrors(errors)
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Nova Entrega</h2>
        <Input name="clienteNome" placeholder="Nome Cliente" />
        <Input name="peso" type="number" step="0.01"placeholder="Peso da Entrega (kg)" />
        <Input name="enderecoCompleto" placeholder="Endereço Cliente" icon={FiSearch} handleIconClick={handleIconClick}/>
        <Input name="latitude" placeholder="Latitude" disabled/>
        <Input name="longitude" placeholder="Longitude" disabled/>

        <div>
          <Button type="submit">Cadastrar Cliente</Button>
          <Button type="button" secondary onClick={()=>handleRemoveData()}>
            Resetar Cadastro
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Formulario