import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardCheck from './CardCheck';

const Checkout = () => {

    
    const data = [{
        srcimg: "./img/keyboard1.png",
        product: "Keyboard & mouse bundle",
        cost: "$39"
    },{
        srcimg: "./img/intel1.png",
        product: "Intel Core I7-12700F 12-Core",
        cost: "$359"
    },{
        srcimg: "./img/keyboard1.png",
        product: "Keyboard & mouse bundle",
        cost: "$39"
    },{
        srcimg: "./img/intel1.png",
        product: "Intel Core I7-12700F 12-Core",
        cost: "$359"
    }]

return (
    <Container>
        <Row xs="auto">
            <Col>
            <h3>
                Shopping car items
            </h3>
            </Col>
        </Row>
        {/* <Row>
            <Col>
            <Card>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Shopping car items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
            </Col>
        </Row> */}

        <Row>
            <CardCheck {...data[0]}/>
            <CardCheck srcimg={data[1].srcimg} product={data[1].product} cost={data[1].cost}/>
            <CardCheck {...data[2]}/>
            <CardCheck {...data[3]}/>
        </Row>
        {/* <Row>
            <Col>
                <img src="./img/keyboard1.png" height="100px"/>
            </Col>
            <Col>Keyboard & mouse bundle</Col>
            <Col>$39</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row>
        <Row>
            <Col>
                <img src="./img/intel1.png" height="100px"/>
            </Col>
            <Col>Intel Core I7-12700F 12-Core</Col>
            <Col>$359</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row>
        <Row>
            <Col>
                <img src="./img/keyboard1.png" height="100px"/>
            </Col>
            <Col>Keyboard & mouse bundle</Col>
            <Col>$39</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row>
        <Row>
            <Col>
                <img src="./img/intel1.png" height="100px"/>
            </Col>
            <Col>Intel Core I7-12700F 12-Core</Col>
            <Col>$359</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row>
        <Row>
            <Col>
                <img src="./img/keyboard1.png" height="100px"/>
            </Col>
            <Col>Keyboard & mouse bundle</Col>
            <Col>$39</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row> */}
    </Container>
)
}

export default Checkout;