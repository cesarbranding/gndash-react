// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
// import TableExpandable from './TableExpandable'
// import TableZeroConfig from './TableZeroConfig'
// import TableMultilingual from './TableMultilingual'
// import DataTablesReOrder from './TableColumnReorder'
import TableWithButtons from './TableWithButtons'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Listado de Colaboradores' data={[{ title: 'Datatables' }, { title: 'Listado' }]} />
      <Row>
        {/* <Col sm='12'>
          <TableZeroConfig />
        </Col>
        <Col sm='12'>
          <DataTablesReOrder />
        </Col> */}
        <Col sm='12'>
          <TableWithButtons />
        </Col>
        {/* <Col sm='12'>
          <TableExpandable />
        </Col>
        <Col sm='12'>
          <TableMultilingual />
        </Col> */}
      </Row>
    </Fragment>
  )
}

export default Tables
