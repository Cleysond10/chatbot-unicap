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
