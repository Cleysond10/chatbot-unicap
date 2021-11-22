import React, { useState } from 'react';
import { Table, TableCell } from './Table.style';
import { TableContainer, TableHead, TableBody, TableRow, TablePagination } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";

const TableComponent = (({ customQuestions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell >#</TableCell >
            <TableCell >Aluno</TableCell >
            <TableCell >Pergunta</TableCell >
            <TableCell >Resposta</TableCell >
          </TableRow>
        </TableHead>
        <TableBody>
          {customQuestions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(question => (
            <TableRow hover key={question.id}>
              <TableCell > {question.id} </TableCell >
              <TableCell > {question.aluno} </TableCell >
              <TableCell > {question.pergunta} </TableCell >
              <TableCell > {question.resposta} </TableCell >
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={customQuestions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
});

export default TableComponent;