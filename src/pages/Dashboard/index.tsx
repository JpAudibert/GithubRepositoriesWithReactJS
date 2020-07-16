import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoSvg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoSvg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do Repo" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40406325?s=460&u=2546cc90394937a3217e099eab030e713c8eaa6b&v=4"
            alt="Profile"
          />
          <div>
            <strong>JpAudibert/superheroes</strong>
            <p>Yay super heroes</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40406325?s=460&u=2546cc90394937a3217e099eab030e713c8eaa6b&v=4"
            alt="Profile"
          />
          <div>
            <strong>JpAudibert/superheroes</strong>
            <p>Yay super heroes</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40406325?s=460&u=2546cc90394937a3217e099eab030e713c8eaa6b&v=4"
            alt="Profile"
          />
          <div>
            <strong>JpAudibert/superheroes</strong>
            <p>Yay super heroes</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
