import { 
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
/**
 * It is the component that contains a paginator, it manages its corresponding events
 * @author Camilo Gálvez Vidal
 */
export class PaginatorComponent {
  // Input: Is the length of the maximum elements that will support the paginator
  @Input() length: number;
  // Input: Is the length of the elements that will support the pagination, for each page
  @Input() pageSize: number;
  // Ouput: Is the new information on the recently changed page
  @Output() pageChangeEvent: EventEmitter<any> = new EventEmitter();
  // Is the paginator options
  pageSizeOptions: number[] = [3, 9, 12];

  /**
   * Method that emits through the output, the information just obtained, after the pager emits an event
   * @param event is the paginator event
   * @author Camilo Gálvez Vidal
   */
  getData(event) {
    this.pageChangeEvent.emit(event);
  }
}
