import './Formulario.css'
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
        <Form.Label className='subtitle'>o usa tu email para registrarte</Form.Label>
        <Form.Control className='input' type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='input' type="email" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className='input' type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Control className='input' type="password" placeholder="Confirma tu contraseña" />
      </Form.Group>
    
      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario