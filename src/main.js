import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';
import {render} from './render.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const boardContainer = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

render(new FilterView(), filtersContainer);

const boardPresenter = new BoardPresenter({
  boardContainer: boardContainer,
  pointsModel: pointsModel
});
boardPresenter.init();
