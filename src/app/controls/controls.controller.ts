import { ControlsModel } from './controls.model';
import { ControlsView } from './controls.view';

export class ControlsController {
    protected model: ControlsModel;
    protected view: ControlsView;

    constructor(model: ControlsModel, view: ControlsView) {
        this.model = model;
        this.view = view;
    }

    /**
     * Update model gravity field
     * @param gravity - gravity value
     */
    setGravity(gravity: number) {
        this.model.gravity = gravity;
    }

    /**
     * Update model shapesPerSecond field
     * @param shapesPerSecond - shapes per second value
     */
    setShapesPerSecond(shapesPerSecond: number) {
        this.model.shapesPerSecond = shapesPerSecond;
    }
}
