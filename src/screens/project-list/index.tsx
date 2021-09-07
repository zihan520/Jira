import React from 'react';
import {SearchPanel} from './search-panel';
import {List} from './list';
import {useState, useEffect} from 'react';
import {cleanObject, useMount, useDebounce} from '../../utils';
// useMount
import {stringify} from 'qs';

const apiURL = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 1000);
  console.log('changed:');
  console.log(debouncedParam);
  useEffect(() => {
    fetch(`${apiURL}/projects?${stringify(cleanObject(debouncedParam))}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, [debouncedParam]);
  useMount(() => {
    fetch(`${apiURL}/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
    // const student = {name:"zhangs",age:28,school:"关塘中学"}
    // let newStudent = Object.assign({tel:1829403029},student)
    // newStudent.school = "天长四中"
    // console.log(student);
    // console.log("======")
    // console.log(newStudent);
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users}></List>
    </div>
  );
};
