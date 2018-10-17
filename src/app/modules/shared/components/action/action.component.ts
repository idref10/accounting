import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionService } from '../../services/action/action.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [MessageService]
})
export class ActionComponent implements OnInit {

  constructor(private actionService: ActionService, private messageService: MessageService) { }

  @Input()
  actionType: string;

  @Input()
  action: string;

  @Input()
  buttonIcon: string;

  @Input()
  selectedValues: string;

  @Output() onLoadingActions = new EventEmitter();

  @Input()
  loading;

  ngOnInit() {
  }

  onClickAction() {
    if(!this.loading && this.selectedValues.length > 0){
      this.onLoadingActions.emit(true);

      this.actionService
        .startAction(this.actionType, this.action, this.selectedValues)
        .subscribe(
          (response) => this.onActionSuccess(response.message),
          (response) => this.onActionError(response.message));
    }
  }

  onActionSuccess(message) {
    this.onLoadingActions.emit(false);
    this.messageService.add({severity:'success', summary:'Service Message', detail: message});
  }

  onActionError(message) {
    this.onLoadingActions.emit(false);
    this.messageService.add({severity:'error', summary:'Service Message', detail: message});
  }
}
