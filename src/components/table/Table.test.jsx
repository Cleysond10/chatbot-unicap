import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import TableComponent from "./Table"

const propsMock = [
  {
    id: 1,
    aluno: "Ana",
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
]

describe('Test Table Component', () => {
  it('Should render table', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    const table = screen.getByTestId("table");

    expect(table).toBeInTheDocument();
  });

  it('Should show all table headers', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    expect(screen.getByText("#")).toBeVisible();
    expect(screen.getByText("Aluno")).toBeVisible();
    expect(screen.getByText("Pergunta")).toBeVisible();
    expect(screen.getByText("Resposta")).toBeVisible();
  });

  it('Should show table body', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    const tableBody = screen.getByTestId("table-body");

    expect(tableBody).toBeInTheDocument();
  });

  it('Should show all rows in table body', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    const rows = screen.queryAllByTestId("table-body-row");

    expect(rows.length).toEqual(3);
  });

  it('Should show student custom question', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    expect(screen.getByText("João")).toBeVisible();
    expect(screen.getByText("PIBIC conta como estágio?")).toBeVisible();
  });

  it('Should show table pagination', () => {
    render(
      <TableComponent customQuestions={propsMock} />
    );

    const tablePagination = screen.getByTestId("table-pagination");

    expect(tablePagination).toBeInTheDocument();
    expect(tablePagination).toHaveTextContent("Rows per page:101-3 of 3");
  });
});