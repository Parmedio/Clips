import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];
  
  constructor() { }
  
  register(id: string) {
    this.modals.push({
      id,
      visible : false
    })
  }

  isModalOpen(id: string) : boolean {
    return Boolean(this.modals.find(x => x.id === id)?.visible);
  }

  toggleModal(id: string) {
    const modal = this.modals.find(x => x.id === id);

    if (modal)
      modal.visible = !modal.visible;
  }
}
