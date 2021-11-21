import React from 'react';
import TableComponent from '../../components/table/Table';
import { DashboardWrapper } from './Dashboard.style';

export const Dashboard = () => {
  const customQuestions = [
    {
      aluno: "Maria",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      aluno: "João",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    }
  ]
  return(
    <DashboardWrapper>
      <TableComponent customQuestions={customQuestions} > PERGUNTAS DOS ALUNOS </TableComponent>
    </DashboardWrapper>
  )
}