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

              <p> Для получения астро-кода, поддержите наш проект на 490 рублей:
              </p>

              <p>

                <iframe
                    src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B0%D1%81%D1%82%D1%80%D0%BE-%D0%BA%D0%BE%D0%B4&targets-hint=&default-sum=490&button-text=12&payment-type-choice=on&mail=on&hint=&successURL=&quickpay=shop&account=410011978122069"
                    width="40%" height="222" frameBorder="0" allowTransparency="true" scrolling="no"></iframe>
              </p>

              <p>Поосле клика по кнопке «Отправить», Вы будете перенаправлены на сайт Яндекс.Денег.
                Там вы сможете указать свою почту и провести оплату. </p>
               <p> После оплаты, Вы получите астро-код, которых позволит Вам загрузить результат расчета. Дополнительно, мы вышлем результат к Вам на почту в pdf файле
              </p>

              <p><b>Важно!</b> Астро-код будет открывать карту опасностей, рассчитанную для следующих людей:</p>
              <p>Паша 21 ноября 1991</p>
              <p>Толя 22 октября 1990</p>
              <p>Саша 10 декабря 1993</p>
              <p>Вася 14 января 1993</p>
              <p>Жора 12 февраля 1965</p>








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


