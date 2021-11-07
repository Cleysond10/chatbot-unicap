import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function App() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState(0);
  const [email, setEmail] = useState('');

  const steps = [
    {
      id: '0',
      message: 'Bem-vindo ao ChatBot Unicap!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Você é aluno ou coordenador ?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 'a', label: 'Aluno', trigger: 'aluno-response' },
        { value: 'c', label: 'Coordenador', trigger: 'coord-response' },
      ]
    },
    {
      id: 'coord-response',
      message: 'Verifique o seu e-mail para receber as perguntas.',
      end: true,
    },
    {
      id: 'aluno-response',
      message: 'Informe seu nome:',
      trigger: 'input-name',
    },
    {
      id: 'input-name',
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
          setNome(value);
          return true;
        }
        else {
          return 'Por favor, digite apenas letras.';
        }
      },
      trigger: 'matricula',
    },
    {
      id: 'matricula',
      message: 'Informe sua matrícula:',
      trigger: 'input-matricula',
    },
    {
      id: 'input-matricula',
      user: true,
      validator: (value) => {
        if (/^[0-9]*$/.test(value)) {
          setMatricula(value);
          return true;
        }
        else {
          return 'Por favor, digite apenas números.';
        }
      },
      trigger: 'email',
    },
    {
      id: 'email',
      message: 'Informe seu E-mail:',
      trigger: 'input-email',
    },
    {
      id: 'input-email',
      user: true,
      validator: (value) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          setEmail(value);
          return true;
        }
        else {
          return 'Por favor, digite um e-mail válido.';
        }
      },
      trigger: 'perguntas_principais',
    },
    {
      id: 'perguntas_principais',
      message: 'Categorias principais de perguntas. Selecione uma opção abaixo:',
      trigger: 'perguntas_1',
    },
    {
      id: 'perguntas_1',
      options: [
        { value: 'a', label: 'Dúvidas gerais sobre estágio', trigger: 'dúvidas_gerais' },
        { value: 'b', label: 'Dúvidas sobre as partes envolvidas no estágio', trigger: 'coord-response' }, // coord-response não é o trigger, não foi desenvolvido ainda.  
        { value: 'c', label: 'Dúvidas sobre contrato de estágio', trigger: 'coord-response' }, // coord-response não é o trigger, não foi desenvolvido ainda. 
        { value: 'd', label: 'Dúvidas sobre as atividades desenvolvidas durante o estágio', trigger: 'coord-response' },// coord-response não é o trigger, não foi desenvolvido ainda. 
        { value: 'e', label: 'Dúvidas sobre direito dos estagiários', trigger: 'coord-response' },// coord-response não é o trigger, não foi desenvolvido ainda. 
        { value: 'f', label: 'Dúvidas sobre o termo de compromisso de estágio', trigger: 'coord-response' }, // coord-response não é o trigger, não foi desenvolvido ainda. 
      ]
    },
    {
      id: 'dúvidas_gerais',
      message: 'Selecione uma opção abaixo:',
      trigger: 'perguntas_gerais',
    },
    {
      id: 'perguntas_gerais',
      options: [
        { value: 'a', label: 'O que é o estágio?', trigger: 'resp_1' },
        { value: 'b', label: 'Quais são as modalidades de estágio?', trigger: 'resp_2' },
        { value: 'c', label: 'As atividades desenvolvidas pelo estudante de extensão, de monitorias e de iniciação científica na educação superior podem ser equiparadas ao estágio?', trigger: 'resp_5' },
      ]
    },
    {
      id: 'resp_1',
      message: 'Estágio é ato educativo escolar supervisionado, desenvolvido no ambiente de trabalho, que visa à preparação para o trabalho produtivo de estudantes. O estágio integra o itinerário formativo do estudante e faz parte do projeto pedagógico do curso (art. 1º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_2',
      message: 'Estágio obrigatório, que é aquele definido como tal no projeto do curso, cuja carga horária é requisito para aprovação e obtenção do diploma, e estágio não obrigatório, que é aquele desenvolvido como atividade opcional, acrescida à carga horária regular e obrigatória (§§ 1º e 2º do art. 2º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_5',
      message: 'sim, desde que previstas no projeto pedagógico do curso (§ 3º do art. 2º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'nova_pergunta',
      message: 'Deseja tirar uma nova dúvida?.',
      trigger: 'resp_nova_pergunta',
    },
    {
      id: 'resp_nova_pergunta',
      options: [
        { value: 'a', label: 'Sim', trigger: 'perguntas_principais' },
        { value: 'b', label: 'Não', trigger: 'finalizacao' },
      ]
    },
    {
      id: 'finalizacao',
      message: 'Obrigado por utilizar o Chatbot!',
      end: true,
    },
    ];

  return (    
    <div >
      <ChatBot steps={steps} />
    </div>
  );
}

export default App;
