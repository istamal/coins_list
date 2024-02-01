import React, { EventHandler, SyntheticEvent, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Table from './components/Table/Table';
import { PersonData } from './components/Table/Table';
import Drawer, { DailyStars, Series } from "./components/Drawer/Drawer";

import './App.css';
import Pagination from './components/Pagination/Pagination';
import UserService from './api/UserService';

const getUsers = (data: Array<PersonData>, page: number, limit: number): Array<PersonData> => {
  let users: Array<PersonData> = [];
  for (let i = (page - 1) * limit; i < (page * limit); i++) {
    users.push(data[i]);
  }

  return users;
}

function App() {
  const [tableData, setTableData] = useState<PersonData[]>([]);
  const [chartData, setChartData] = useState<Series[]>([]);
  const [page, setPage] = useState(1);
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFromLowerSort, setIsFromLowerSort] = useState(true);
  
  const limit = 10;

  const handlePageToggle = (value: string | number) => {
    if (typeof value === "number") {
      setPage(value);
    } else if (value === "... ") {
      setPage(1);
    } else if (value === " ...") {
      setPage(totalPages);
    } else if (value === "&laquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&raquo;") {
      if (page !== totalPages) {
        setPage(page + 1);
      }
    } else {
      setPage(Number(value));
    }
  }

  useEffect(() => {
    UserService.getUsers()
      .then((response) => {
        setTableData(response.data.data);
      });
  }, []);

  const handleSearch = async ({ target }: SyntheticEvent) => {
    const { value } = target as HTMLInputElement;
    const { data } = await UserService.getUsers({ search: value });

    setInputValue(value);
    setTableData(data.data);
  }

  const handleTableItemClick =  async (evt: any) => {
    setIsOpened(true);
    const label = tableData?.find(user => user.id === evt.target.dataset.id)?.email || "unknown";
    const userInfo = await UserService.getUserTransations(evt.target.dataset.id)
    setChartData([{label, data: userInfo.data}]);
  }

  const handleSort = async () => {
    const { data } = await UserService.getUsers({ orderBy: isFromLowerSort ? "tokens:asc" : "tokens:desc" });
    setTableData(data.data);
    setIsFromLowerSort(!isFromLowerSort);
  }

  const totalPages = Math.ceil(tableData.length / limit);

  return (
    <div className="App">
      <Header />
      {isOpened && chartData.length && <Drawer onClose={() => setIsOpened(false)} data={chartData} />}
      <Card title="Моя организация">
        <input onChange={handleSearch} value={inputValue} className="search" type="text" placeholder="&#x1F50E;&#xFE0E; Поиск" />
        {tableData.length > 0 && <Table sortMode={isFromLowerSort} onSort={handleSort} itemClick={handleTableItemClick} data={getUsers(tableData, page, limit)} />}
      </Card>
      <Pagination onSwitchPage={handlePageToggle} totalPages={totalPages} limit={limit} page={page} siblings={1} />
    </div>
  );
}

export default App;
