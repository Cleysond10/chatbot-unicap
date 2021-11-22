import React from 'react';
import TableComponent from '../../components/table/Table';
import { DashboardWrapper } from './Dashboard.style';

export const Dashboard = () => {
  const customQuestions = [
    {
      id: 1,
      aluno: "Maria",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 2,
      aluno: "João",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    },
    {
      id: 3,
      aluno: "Maria",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 4,
      aluno: "Carlos",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 5,
      aluno: "José",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    },
    {
      id: 6,
      aluno: "Ana",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 7,
      aluno: "Ulisses",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    },
    {
      id: 8,
      aluno: "Rafael",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 9,
      aluno: "Bea",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 10,
      aluno: "Henrique",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    },
    {
      id: 11,
      aluno: "Aziz",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 12,
      aluno: "Rafaela",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 13,
      aluno: "Neto",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 14,
      aluno: "Joana",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 15,
      aluno: "Gerson",
      pergunta: "PIBIC conta como estágio?",
      resposta: " - "
    },
    {
      id: 16,
      aluno: "Cleyson",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
    {
      id: 17,
      aluno: "Fabiana",
      pergunta: "Preciso ter CR mínimo para estagiar?",
      resposta: " - "
    },
  ]

  return(
    <DashboardWrapper>
      <TableComponent customQuestions={customQuestions} />
    </DashboardWrapper>
  )
}