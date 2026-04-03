import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  init(boardContainer) {
    this.boardContainer = boardContainer;

    render(this.sortComponent, this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(new EventEditView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.eventListComponent.getElement());
    }
  }
}
