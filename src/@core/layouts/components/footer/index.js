// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://gruponorte.cl' target='_blank' rel='noopener noreferrer'>
          GRUPO NORTE
        </a>
        <span className='d-none d-sm-inline-block'>, Todos los derechos reservados</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        División | Soluciones en RRHH
      </span>
    </p>
  )
}

export default Footer
