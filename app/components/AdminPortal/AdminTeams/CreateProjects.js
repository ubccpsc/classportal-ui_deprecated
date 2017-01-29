import React from 'react';
import { Form, FormField, Button } from 'elemental';
import Module from '../../Module';

function createProjects(e) {
  e.preventDefault();
  alert('Not yet implemented..');
}

const CreateProjects = () => (
  <Module id="create-projects-module" title="Create Projects" initialHideContent={false}>
    <Form onSubmit={createProjects}>
      <FormField id="text-center">
        <Button type="danger" size="sm" submit>Create Projects</Button>
      </FormField>
    </Form>
  </Module>
);

export default CreateProjects;
