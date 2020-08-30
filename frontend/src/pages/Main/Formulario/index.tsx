/**
 * Formulário de inclusão de dados
 */

import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiSearch } from 'react-icons/fi';
import { Client } from '@googlemaps/google-maps-services-js';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import getValidationError from '../../../utils/getValidationErrors';
import { Container } from './style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import 'react-toastify/dist/ReactToastify.css';

// -- Criação das interfaces
interface Params {
  handleLoad(): void;
  handleRemoveData(): void;
}

interface DeliveryEnderecoData {
  geolocalizacao: {
    longitude: number;
    latitude: number;
  };
  logradouro: string;
  numero: number;
  bairro: string;
  complemento: string;
  cidade: string;
  estado: string;
  pais: string;
}

interface FormData {
  clienteNome: string;
  peso: string;
  enderecoCompleto: string;
  endereco: DeliveryEnderecoData;
  latitude: string;
  longitude: string;
}

// -- Habilita o Toast Notifications
toast.configure();

const Formulario: React.FC<Params> = ({ handleLoad, handleRemoveData }) => {
  // -- Cria as variáveis de controle
  const formRef = useRef<FormHandles>(null);
  const [parsedEndereco, setParsedEndereco] = useState<DeliveryEnderecoData>(
    {} as DeliveryEnderecoData,
  );
  const client = new Client({});

  // -- Busca o geocode com a api da Google
  async function handleIconClick() {
    // -- Busca o endereço do formulário
    const endereco = formRef.current?.getFieldValue('enderecoCompleto');

    // -- Executa a busca do geoCode pelo endereço
    client
      .geocode({
        params: {
          key: 'AIzaSyAJwTL_WQK7sIhlccPw7XhSLL_uoqlu_ic',
          address: endereco,
        },
      })
      .then(response => {
        // -- Se deu algum erro no retorno, informa o usuário
        if (response.data.status !== 'OK') {
          toast.error(
            'Ocorreu um erro na pesquisa. Verifique o endereço novamente.',
          );
        } else {
          // -- Processar o retorno
          const { address_components } = response.data.results[0];
          const { lat, lng } = response.data.results[0].geometry.location;

          // -- Percorre o retorno, separando cada campo
          const novoEndereco = address_components.reduce(
            (newDelivery, item) => {
              const types = JSON.stringify(item.types);

              if (types.indexOf('subpremise') !== -1) {
                newDelivery.complemento = item.long_name;
              } else if (types.indexOf('street_number') !== -1) {
                newDelivery.numero = parseInt(item.short_name);
              } else if (types.indexOf('route') !== -1) {
                newDelivery.logradouro = item.long_name;
              } else if (types.indexOf('sublocality') !== -1) {
                newDelivery.bairro = item.long_name;
              } else if (types.indexOf('administrative_area_level_2') !== -1) {
                newDelivery.cidade = item.long_name;
              } else if (types.indexOf('administrative_area_level_1') !== -1) {
                newDelivery.estado = item.short_name;
              } else if (types.indexOf('country') !== -1) {
                newDelivery.pais = item.long_name;
              }

              return newDelivery;
            },
            {
              numero: 0,
              logradouro: '',
              bairro: '',
              cidade: '',
              estado: '',
              pais: '',
              complemento: '',
              geolocalizacao: {
                latitude: lat,
                longitude: lng,
              },
            },
          );

          // -- Seta os campos na tela
          formRef.current?.setFieldValue('latitude', lat);
          formRef.current?.setFieldValue('longitude', lng);
          setParsedEndereco(novoEndereco);
        }
      })
      .catch(error => {
        // -- Caso dê algum erro, informa usuário
        toast.error(error);
      });
  }

  // -- Trata o envio do formulário para o backend
  async function handleSubmit(data: FormData) {
    // -- Limpa os erros do formulário
    formRef.current?.setErrors({});

    // -- Cria o schema de validação do Yup
    const schema = Yup.object().shape({
      clienteNome: Yup.string().required(
        'Nome do Cliente é obrigatório! Verifique.',
      ),
      peso: Yup.string().required('Peso é obrigatório! Verifique.'),
      enderecoCompleto: Yup.string().required(
        'Endereço é obrigatório! Verifique.',
      ),
    });

    // -- Cria um bloco para testar o schema de validação
    try {
      // -- Aguarda a validação. Caso dê algum erro, já cai no catch
      await schema.validate(data, {
        abortEarly: false,
      });

      // -- Se o usuário ainda não clicou para buscar o geoCode, informa.
      if (parsedEndereco.geolocalizacao === undefined) {
        toast.error(
          'Latitude/Longitude do endereço não encontrado! Por favor, clique no botão de pesquisa.',
        );
      } else {
        // -- Adiciona o endereço completo aos dados do Formulário
        data.endereco = parsedEndereco;

        // -- Envia para API
        const response = await api.post('/', data);

        // -- Caso de certo, limpa o formulário e recarrega os dados
        if (response.status === 200) {
          formRef.current?.reset();
          handleLoad();
        } else {
          // -- Caso de erro, informa ao usuário
          toast.error(response.statusText);
        }
      }
    } catch (error) {
      // -- Crio uma variável com os erros acumulados
      const errors = getValidationError(error);

      // -- Envio para o formulario
      formRef.current?.setErrors(errors);
    }
  }

  // -- Retorna o componente
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Nova Entrega</h2>
        <Input name="clienteNome" placeholder="Nome Cliente" />
        <Input
          name="peso"
          type="number"
          step="0.01"
          placeholder="Peso da Entrega (kg)"
        />
        <Input
          name="enderecoCompleto"
          placeholder="Endereço Cliente"
          icon={FiSearch}
          handleIconClick={handleIconClick}
        />
        <Input name="latitude" placeholder="Latitude" disabled />
        <Input name="longitude" placeholder="Longitude" disabled />
        <div>
          <Button type="submit">Cadastrar Cliente</Button>
          <Button type="button" secondary onClick={() => handleRemoveData()}>
            Resetar Cadastro
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Formulario;
