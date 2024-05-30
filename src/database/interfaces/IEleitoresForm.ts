import * as yup from 'yup';

export type IEleitoresForm = {
  status: number;
  geometry: string;
  id: number;
  nome: string;
  email: string;
  telefone: string;
  datanasc?: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cpf: string;
  nrotitulo: number;
  zona: number;
  secao: number;
  local?: string;
  naturalidade: string;
  nacionalidade: string;
  estado: string;
  cidade: string;
  genero: string;
  estcivil: string;
  ocupacao: string;
  grupofamiliar: number;
  definiencia: string;
};

export type IEleitoresPessoaisForm = {
  nome: string;
  email: string;
  telefone: string;
  datanasc?: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  estado: string;
  cidade: string;
};

export const formDadosSchema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email Inválido!'),
  telefone: yup.string().required('Telefone é obrigatório'),
  cep: yup.string().required('CEP é obrigatório'),
  datanasc: yup.string().optional(),
  logradouro: yup.string().required('Logradouro é obrigatório'),
  numero: yup.string().required('Número é obrigatório'),
  complemento: yup.string().optional(),
  bairro: yup.string().required('Bairro é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatório'),
  estado: yup.string().required('Estado é obrigatório'),
});

export type IEleitoresDocsForm = {
  cpf: string;
  nrotitulo?: number;
  zona?: number;
  secao?: number;
  local?: string;
};

export const formDocsSchema = yup.object({
  cpf: yup.string().required('CPF é obrigatório'),
  nrotitulo: yup.number().optional(),
  zona: yup.number().optional(),
  secao: yup.number().optional(),
  local: yup.string().optional(),
});

export type IEleitoresInfoForm = {
  naturalidade: string;
  nacionalidade: string;
  genero: string;
  estcivil: string;
  ocupacao: string;
  grupofamiliar: number;
  definiencia?: string;
};

export const formInfoSchema = yup.object({
  naturalidade: yup.string().required('Naturalidade é obrigatório'),
  nacionalidade: yup.string().required('Nacionalidade é obrigatório'),
  genero: yup.string().required('Genero é obrigatório'),
  estcivil: yup.string().required('Estado Civil é obrigatório'),
  ocupacao: yup.string().required('Ocupação é obrigatório'),
  grupofamiliar: yup.number().required('Informe o tamanho do Grupo Familiar'),
  definiencia: yup.string().optional(),
});
