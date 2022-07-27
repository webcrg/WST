import React from 'react';
import { Layout } from '@/common/components/layout';
import { Table } from './table';
import { Form } from './form';
import { SaveJson } from './save-json';

function Main() {
  return (
    <Layout>
      <Form />
      <Table />
      <SaveJson />
    </Layout>
  );
}

export { Main };
