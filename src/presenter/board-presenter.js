import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventEditView from '../view/event-edit-view.js';
import PointView from '../view/point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = this.pointsModel.getDestinations();
    this.offers = this.pointsModel.getOffers();

    render(this.sortComponent, this.boardContainer);
    render(this.eventListComponent, this.boardContainer);

    render(
      new EventEditView({
        point: this.boardPoints[0],
        pointDestinations: this.destinations,
        pointOffers: this.offers
      }),
      this.eventListComponent.getElement()
    );

    for (let i = 1; i < this.boardPoints.length; i++) {
      const pointDestination = this.destinations.find((d) => d.id === this.boardPoints[i].destination);
      const pointOffers = this.offers.find((o) => o.type === this.boardPoints[i].type).offers.filter((o) => this.boardPoints[i].offers.includes(o.id));

      render(
        new PointView({
          point: this.boardPoints[i],
          pointDestination: pointDestination,
          pointOffers: pointOffers
        }),
        this.eventListComponent.getElement()
      );
    }
  }
}
