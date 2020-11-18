import 'bootstrap';
import $ from 'jquery';
import refs from '../js/refs.js';
import controlsGame from './ControlsGame';

const Modal = {
  showModal() {
    refs.score.innerHTML = controlsGame.points;
    $('.modals').modal('show');
  },

  closeModal() {
    $('.modals').modal('hide');
    refs.input.value = '';
  },
};

export default Modal;
