import { useState } from 'react';
import { ChatBotWrapper } from './App.style';

function App() {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState(0);
  const [email, setEmail] = useState('');

  const steps = [
    {
      id: '0',
      message: 'Bem-vindo ao ChatBot sobre estágio da Unicap!',
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
        { value: 'b', label: 'Dúvidas sobre as partes envolvidas no estágio', trigger: 'dúvidas_partes' },   
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
      id: 'dúvidas_partes',
      message: 'Selecione uma opção abaixo:',
      trigger: 'perguntas_partes',
    },

    {
      id: 'perguntas_partes',
      options: [
        { value: 'a', label: 'Quem pode ser estagiário?', trigger: 'resp_3' },
        { value: 'b', label: 'Quem pode contratar estagiário?', trigger: 'resp_4' },
        { value: 'c', label: 'Dúvidas específicas sobre agente de integração.', trigger: 'chamada_agente' },
        { value: 'd', label: 'Dúvidas específicas sobre limitações para a contratação de estagiários em relação ao quadro pessoal da entidade concedente.', trigger: 'chamada_contratacao' },
        { value: 'e', label: 'Dúvidas específicas sobre estagiários em situação especial (deficiente, gestante, estrangeiro).', trigger: 'chamada_especial' },
      ]
    },
    {
      id: 'resp_3',
      message: 'Estudantes que estejam frequentando o ensino regular em instituições de educação superior, de educação profissional, de ensino médio, da educação especial e dos anos finais de ensino fundamental, na modalidade profissional da educação de jovens e adultos (art. 1º)',
      trigger: 'nova_pergunta',
    },

    {
      id: 'resp_4',
      message: 'As pessoas jurídicas de direito privado e os órgãos da administração pública direta, autárquica e fundacional de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios e os profissionais liberais de nível superior, devidamente registrados em seus respectivos conselhos de fiscalização profissional (caput do art. 9º).',
      trigger: 'nova_pergunta',
    },

    {
      id: 'chamada_agente',
      message: 'Selecione uma opção abaixo:',
      trigger: 'perguntas_agentes',
    },
    {
      id: 'perguntas_agentes',
      options: [
        { value: 'a', label: 'As instituições de ensino e as partes concedentes de estágio podem	utilizar-se dos serviços dos agentes de integração?', trigger: 'resp_10' },
        { value: 'b', label: 'Quais são as atribuições definidas na lei para os agentes de integração?', trigger: 'resp_11' },
        { value: 'c', label: 'Pode ser cobrado do estudante algum valor pelos serviços previstos na lei e prestados pelos agentes de integração?', trigger: 'resp_12' },
        { value: 'd', label: 'Os agentes de integração podem sofrer penalidades?', trigger: 'resp_13' },
      ]
    },
    {
      id: 'resp_10',
      message: 'Sim. As instituições de ensino e as partes concedentes de estágio podem, mediante condições acordadas em instrumento jurídico apropriado, recorrer aos serviços de agentes de integração públicos e privados. Em caso de contratação com recursos públicos, deverá ser observada a legislação de licitação, Lei no. 8.666/1993 (caput do art. 5º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_11',
      message: 'Cabe ao agente de integração, como auxiliar no processo de aperfeiçoamento do estágio: a) identificar as oportunidades de estágio; b) ajustar suas condições de realização; c) fazer o acompanhamento administrativo; d) encaminhar negociação de seguros contra acidentes pessoais; e e) cadastrar os estudantes. (incisos de I a V do § 1º, do art. 5º). Os agentes de integração podem, ainda, selecionar os locais de estágio e organizar o cadastro dos concedentes das oportunidades de estágio. (art. 6º)',
      trigger: 'nova_pergunta',
    },
    
    {
      id: 'resp_12',
      message: 'Não. É vedada a cobrança de qualquer valor aos estudantes, a título de remuneração pelos serviços dos agentes de integração, previstos na lei (§ 2º do art. 5º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_13',
      message: 'Sim. Os agentes de integração serão responsabilizados civilmente se indicarem estagiários: a) para atividades não compatíveis com a programação curricular do curso; e b) que estejam frequentando cursos em instituições de ensino para quais não há  previsão de estágio curricular. (§ 3º do art. 5º).',
      trigger: 'nova_pergunta',
    },

    {
      id: 'chamada_contratacao',
      message: 'Selecione uma opção abaixo:',
      trigger: 'perguntas_contratacao',
    },

    {
      id: 'perguntas_contratacao',
      options: [
        { value: 'a', label: 'Existe limitação para a contratação de estagiários em relação ao quadro de pessoal das entidades concedentes?', trigger: 'resp_37' },
        { value: 'b', label: 'A limitação para a contratação de estagiários em relação ao quadro de pessoal de concedentes se aplica aos estágios de nível superior e de nível médio profissional?', trigger: 'resp_38' },
        { value: 'c', label: 'O que se entende por quadro de pessoal para efeitos da lei de estágio?', trigger: 'resp_39' },
      ]
    },

    {
      id: 'resp_37',
      message: 'Sim. Para os estágios de ensino médio, de educação especial e dos anos finais do ensino fundamental, na modalidade profissional da educação de jovens e adultos. Nesses casos, o número máximo de estagiários deverá atender às seguintes proporções, em relação ao quadro de pessoal de concedente: a) de 1 (um) a 5 (cinco) empregados: 1 (um) estagiário; b) de 6 (seis) a 10 (dez) empregados: até 2 (dois) estagiários; c) de 11 (onze) a 25 (vinte e cinco) empregados: até 5 (cinco) estagiários; e d) acima de 25 (vinte e cinco) empregados, até 20% (vinte por cento) de estagiários (inciso I a IV do art. 17). Quando esse cálculo resultar em fração, poderá ser arredondado para o número inteiro imediatamente superior (§ 3º do art. 17)',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_38',
      message: 'Não. Essa limitação não se aplica aos estágios de nível superior e de nível médio profissional.',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_39',
      message: 'Para efeitos desta lei, considera-se quadro de pessoal o conjunto de trabalhadores empregados existentes no estabelecimento do estágio. Caso a concedente conte com várias filiais ou estabelecimentos, os quantitativos devem ser aplicados a cada um deles (§§1º e 2º, do art. 17).',
      trigger: 'nova_pergunta',
    },

    {
      id: 'chamada_especial',
      message: 'Selecione uma opção abaixo:',
      trigger: 'perguntas_especial',
    },

    {
      id: 'perguntas_especial',
      options: [
        { value: 'a', label: 'Qual o percentual de vagas asseguradas aos portadores de deficiência?', trigger: 'resp_40' },
        { value: 'b', label: 'A estudante gestante pode estagiar?', trigger: 'resp_41' },
        { value: 'c', label: 'O estudante estrangeiro pode estagiar?', trigger: 'resp_6' },
      ]
    },

    {
      id: 'resp_40',
      message: 'É assegurado às pessoas portadoras de deficiência o percentual de 10% (dez) por cento das vagas de estágio oferecidas pela parte concedente (§5º. do art. 17).',
      trigger: 'nova_pergunta',
    },

    {
      id: 'resp_41',
      message: 'Sim. Não há nenhum empecilho da estudante gestante estagiar. Como todo estágio, sujeita-se às regras da Lei 11.788/08.',
      trigger: 'nova_pergunta',
    },
    {
      id: 'resp_6',
      message: 'Sim, desde que o estudante estrangeiro esteja regularmente matriculado em curso superior no país autorizado ou reconhecido e seja observado o prazo do visto temporário de estudante, na forma da legislação aplicável (art. 4º).',
      trigger: 'nova_pergunta',
    },
    {
      id: 'satisfatorio',
      message: 'A sua dúvida foi sanada satisfatoriamente?',
      trigger: 'satisfatorio_resp',
    },
    {
      id: 'satisfatorio_resp',
      options: [
        { value: 'a', label: 'Sim', trigger: 'nova_pergunta' },
        { value: 'b', label: 'Não', trigger: 'chamada_perg_personalizada' },
      ]
    },
    {
      id: 'chamada_perg_personalizada',
      message: 'Deseja enviar a sua pergunta para o coordenador de estágio?',
      trigger: 'perg_personalizada',
    },
    {
      id: 'perg_personalizada',
      options: [
        { value: 'a', label: 'Sim', trigger: 'criacao_perg_pers' },
        { value: 'b', label: 'Não', trigger: 'nova_pergunta' },
      ]
    },
    {
      id: 'criacao_perg_pers',
      message: 'Sua pergunta será recebida e enviada ao coordenador num futuro update do programa. (falta implementar)',
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
      message: 'Obrigado por utilizar o Chatbot sobre estágio da UNICAP!',
      end: true,
    },
  ];

  return (    
    <div >
      <ChatBotWrapper steps={steps} />
    </div>
  );
}

export default App;
