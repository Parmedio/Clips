import { Component} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(
    public modal: ModalService) {  }
  
  openModal(e: Event) {
    e.preventDefault();

    this.modal.toggleModal(modal.AUTH_MODAL_ID);
  }
}
