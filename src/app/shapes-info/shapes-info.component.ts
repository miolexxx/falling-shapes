import { ShapesInfoView } from './shapes-info.view';
import { ShapesInfoController } from './shapes-info.controller';

export class ShapesInfoComponent {
    protected shapesInfoView: ShapesInfoView;
    protected shapesInfoController: ShapesInfoController;

    constructor() {
        this.shapesInfoView = new ShapesInfoView();
        this.shapesInfoController = new ShapesInfoController(
            this.shapesInfoView,
        );
    }

    /**
     * @return - ShapesInfoController
     */
    get controller() {
        return this.shapesInfoController;
    }
}
