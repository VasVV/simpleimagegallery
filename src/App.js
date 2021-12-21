
import './App.css';
import {useState} from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; 
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
  Nineth,
  Tenth
} from './img';

const imgArr = [First, Third, Fifth, Seventh, Nineth];
const img2Arr = [Second, Fourth, Sixth, Eighth, Tenth]

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setLiked(false);
    addComment([]);
    setCurrCommentary('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [liked, setLiked] = useState(false);
  const [comments, addComment] = useState([]);
  const [currCommentary, setCurrCommentary] = useState('');

  return (
    <div className="App">
      <h1>Simple React Gallery</h1>
      <Container >
        {
          imgArr.map((e,i) => {
            return (
              <>
            <Row className='justify-content-start row' >
              <Col className='my-col col-sm'>
                <img src={e} onClick={handleShow} className="grid-image" />
              
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton />
                  <Modal.Body>
                    <img src={e} className="modal-image" />
                    <div className="modal-like">
                            <FontAwesomeIcon className="fa-lg" icon={liked ? faHeart : farHeart} onClick={() => setLiked(!liked)} />
                    </div> 
                  </Modal.Body>
                  <Modal.Footer>
                          <div className="modal-commentary">
                            {
                              comments.map(e => <div className="commentary">
                                  <div> {e[0]} </div>
                                  <div>{e[1].toTimeString().replace(/GMT.+$/, '')} </div>
                              </div>)
                            }
                   <div className="modal-commentary-send">
                              <input type="text" className="modal-commentary-add" placeholder="Add your commentary..." onChange={(e) => setCurrCommentary(e.target.value)}/>
                              <Button variant="secondary" onClick={() => addComment([...comments, [currCommentary, new Date()]])} className="modal-commentary-btn">Post Commentary</Button>
                    </div>
                    </div>
                  </Modal.Footer>
                </Modal>
              
              </Col>
              <Col className='my-col'><img src={img2Arr[i]} /></Col>
            </Row>  
            </>
            )
          })
        }
      </Container>
    </div>
  );
}

export default App;
