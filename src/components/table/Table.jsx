import React from 'react';
import { TableWrapper } from './Table.style';

const TableComponent = (({ children, customQuestions }) => {
  return (
    <TableWrapper>
      <table>
        <caption> {children} </caption>
        <tr>
          <th>Aluno</th>
          <th>Pergunta</th>
          <th>Resposta</th>
        </tr>
          {customQuestions.map(question => (
            <tr>
              <td> {question.aluno} </td>
              <td> {question.pergunta} </td>
              <td> {question.resposta} </td>
            </tr>
          ))}
      </table>
    </TableWrapper>
  )
});

export default TableComponent;