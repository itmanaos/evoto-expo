export const tipoOcorrencias = [
  {
    categ: 'sec',
    key: 'sec001',
    label: 'Arrombamento',
    icon: require('src/assets/sec_arrombamento.png'),
  },
  {
    categ: 'sec',
    key: 'sec002',
    label: 'Cadaver',
    icon: require('src/assets/sec_assassinato.png'),
  },
  { categ: 'sec', key: 'sec003', label: 'Briga', icon: require('src/assets/sec_briga.png') },
  {
    categ: 'sec',
    key: 'sec004',
    label: 'Menor Abandonado',
    icon: require('src/assets/sec_crianca.png'),
  },
  {
    categ: 'sec',
    key: 'sec005',
    label: 'Conflito Domestica',
    icon: require('src/assets/sec_domestico.png'),
  },
  { categ: 'sec', key: 'sec006', label: 'Tráfico', icon: require('src/assets/sec_drogas.png') },
  { categ: 'sec', key: 'sec007', label: 'Roubo', icon: require('src/assets/sec_roubo.png') },
  { categ: 'sec', key: 'sec008', label: 'Suspeito', icon: require('src/assets/sec_suspeito.png') },
  {
    categ: 'sec',
    key: 'sec009',
    label: 'Perda de Documento',
    icon: require('src/assets/sec-doc-lost.png'),
  },
  { categ: 'sec', key: 'sec010', label: 'Arma', icon: require('src/assets/sec_arma.png') },

  {
    categ: 'trn',
    key: 'trn001',
    label: 'Abalrroamento',
    icon: require('src/assets/trn-batida.png'),
  },
  { categ: 'trn', key: 'trn002', label: 'Buraco', icon: require('src/assets/trn-buraco.png') },
  {
    categ: 'trn',
    key: 'trn003',
    label: 'Engarrafamento',
    icon: require('src/assets/trn-engarrafamento.png'),
  },
  { categ: 'trn', key: 'trn004', label: 'Obras', icon: require('src/assets/trn-obras.png') },
  { categ: 'trn', key: 'trn005', label: 'Reboque', icon: require('src/assets/trn-prego.png') },
  { categ: 'trn', key: 'trn006', label: 'Semaforo', icon: require('src/assets/trn-semaforo.png') },

  { categ: 'soc', key: 'soc001', label: 'Apoio Social', icon: require('src/assets/soc-apoio.png') },
  { categ: 'soc', key: 'soc002', label: 'Familia', icon: require('src/assets/soc-familia.png') },
  { categ: 'soc', key: 'soc003', label: 'Desaparecido', icon: require('src/assets/soc-lost.png') },
  { categ: 'soc', key: 'soc004', label: 'PCD', icon: require('src/assets/soc-pcd.png') },

  { categ: 'amb', key: 'amb001', label: 'Poda', icon: require('src/assets/amb-poda.png') },
  { categ: 'amb', key: 'amb002', label: 'Iluminação', icon: require('src/assets/amb-luz.png') },
  { categ: 'amb', key: 'amb003', label: 'Resgate Pet', icon: require('src/assets/amb-pet.png') },
  {
    categ: 'amb',
    key: 'amb004',
    label: 'Desmatamento',
    icon: require('src/assets/amb-desmatamento.png'),
  },
  { categ: 'amb', key: 'amb006', label: 'Tráfico', icon: require('src/assets/amb-trafico.png') },
  {
    categ: 'amb',
    key: 'amb005',
    label: 'animal silvestre',
    icon: require('src/assets/amb-silvestre.png'),
  },
  {
    categ: 'amb',
    key: 'amb006',
    label: 'Reclicagem',
    icon: require('src/assets/amb-recicla.png'),
  },
  {
    categ: 'amb',
    key: 'amb007',
    label: 'Falta d´agua',
    icon: require('src/assets/amb-no-agua.png'),
  },
  {
    categ: 'amb',
    key: 'amb008',
    label: 'Vazamento d´agua',
    icon: require('src/assets/amb-vazamento.png'),
  },
  {
    categ: 'amb',
    key: 'amb009',
    label: 'Lixeira',
    icon: require('src/assets/amb-lixeira.png'),
  },
  {
    categ: 'sos',
    key: 'sos001',
    label: 'Alagamento',
    icon: require('src/assets/sos_alagamento.png'),
  },
  {
    categ: 'sos',
    key: 'sos002',
    label: 'Ambulância',
    icon: require('src/assets/sos_ambulancia.png'),
  },
  {
    categ: 'sos',
    key: 'sos003',
    label: 'Desabamento',
    icon: require('src/assets/sos_desabamento.png'),
  },
  { categ: 'sos', key: 'sos004', label: 'Incêndio', icon: require('src/assets/sos_incendio.png') },
  { categ: 'sos', key: 'sos005', label: 'Acidente', icon: require('src/assets/sos_morte.png') },
  {
    categ: 'sos',
    key: 'sos006',
    label: 'Acidente Moto',
    icon: require('src/assets/sos_acid_moto.png'),
  },

  { categ: 'main', key: 'sec', label: 'Segurança', icon: require('src/assets/sec-police.png') },
  { categ: 'main', key: 'trn', label: 'Transito', icon: require('src/assets/trn-park.png') },
  { categ: 'main', key: 'soc', label: 'Social', icon: require('src/assets/soc-apoio.png') },
  { categ: 'main', key: 'amb', label: 'Ambiental', icon: require('src/assets/amb-flora.png') },
  {
    categ: 'main',
    key: 'sos',
    label: 'Emergência',
    icon: require('src/assets/sos_emergencia.png'),
  },

  {
    categ: 'vot',
    key: 'vot001',
    label: 'Boca de Urna',
    icon: require('src/assets/vot-boca-urna.png'),
  },
  {
    categ: 'vot',
    key: 'vot002',
    label: 'Compra de Voto',
    icon: require('src/assets/vot-compra.png'),
  },
  {
    categ: 'vot',
    key: 'vot003',
    label: 'Propaganda Irregular',
    icon: require('src/assets/vot-propaganda.png'),
  },
  {
    categ: 'vot',
    key: 'vot004',
    label: 'Transporte',
    icon: require('src/assets/vot-transporte.png'),
  },
];
