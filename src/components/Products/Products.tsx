import React from "react";
import { Row, Col, Table } from 'reactstrap';
import * as Styled from "./products.styled";
import { ProductItem } from "./ProductItem";

const Products = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Wrapper>
    <Row>
      <Col xl={12} lg={12} md={12} className="mt-2 mb-2" >
        <Table size="sm" bordered>
          <thead>
            <tr>
              <th className="text-center text-white">No</th>
              <th className="text-center text-white">Customer Name</th>
              <th className="text-center text-white">Cook Name</th>
              <th className="text-center text-white">Destination</th>
              <th className="text-center text-white">Price</th>
              <th className="text-center text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Styled.Wrapper>
);

Products.ProductItem = ProductItem;

export default Products;
