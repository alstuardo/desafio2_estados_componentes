
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Formulario {
  nombre:string;
  email:string;
  password:string;
  confirmPassword:string;
}

const Formulario: React.FC = () => {
  const [formulario, setFormulario] =useState<Formulario>({
    nombre: '',
    email:'',
    password:'',
    confirmPassword:''
  })

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>o usa tu email para registrarte</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirma tu contraseña" />
      </Form.Group>
    
      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario