import { ControlsModel } from './controls.model';
import { ControlsView } from './controls.view';

export class ControlsController {
    protected model: ControlsModel;
    protected view: ControlsView;

    constructor(model: ControlsModel, view: ControlsView) {
        this.model = model;
        this.view = view;
    }

    setGravity(gravity: number) {
        this.model.gravity = gravity;
    }

    setShapesPerSecond(shapesPerSecond: number) {
        this.model.shapesPerSecond = shapesPerSecond;
    }
}
