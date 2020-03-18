import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBuyFullHazard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modal : false
    }
  }


  render() {


    const {
      modal
    } = this.state


 const toggle = () => {

      this.setState({
        modal: !modal
      })
    }



    return (
        <div>
          <button className="btn btn-outline-secondary" onClick={toggle}>Открыть карту</button>

          <Modal
              isOpen={modal}
              toggle={toggle}
              className="modal-dialog modal-lg"
          >

            <ModalHeader toggle={toggle}>Поддержите проект</ModalHeader>

            <ModalBody>

              <p> Если ранее Вы уже поддерживали проект и у Вас есть код,
                то введите его в поле ниже, что бы открыть ранее рассчитанную карту опасностей </p>

               <p><input
                   type="text"
                   className="form-control"
                   placeholder="Введите астро-код"

               >
            </input></p>

              <p> <Button color="primary" onClick={toggle}>Открыть карту опасностей</Button> </p>

              <p> Тут ссылка на яндекс</p>

              <p> <Button color="primary" onClick={toggle}>Купить астро-код</Button> </p>

              <p>По клику на кнопку «Купить» вы будете перенаправлены на сайт Яндекс.Денег.
                Там вы сможете указать свою почту и провести оплату. </p>
               <p> После оплаты Вы получите астро-код, которых позволит Вам загрузить результат расчета. Дополнительно, мы вышлем результат к Вам на почту в pdf файле
              </p>

              <p><b>Важно!</b> Проверьте, что все люди, по которым мы будем рассчитывать, указаны правильно:</p>
              <p>Паша</p>
              <p>Толя</p>
              <p>Саша</p>
              <p>Вася</p>
              <p>Жора</p>








              <p>Если что-то пошло не так, напишите нам на email, мы отвечаем в течении 24 часов</p>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </Modal>
        </div>
    );
  }
}


export default ModalBuyFullHazard


