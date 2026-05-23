import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './framework/render.js';
import PointsModel from './model/points-model.js';
import {generateFilter} from './mock/filter.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteFilterElement = siteHeaderElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();

const filters = generateFilter(pointsModel.getPoints());

const boardPresenter = new BoardPresenter({
  boardContainer: siteEventsElement,
  pointsModel: pointsModel,
});

render(new FilterView({filters}), siteFilterElement);
boardPresenter.init();
