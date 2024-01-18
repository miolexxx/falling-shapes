import { ShapesStageView } from './shapes-stage.view';
import { ShapesStageController } from './shapes-stage.controller';
import { Application } from 'pixi.js';

export class ShapesStageComponent {
    view: ShapesStageView;
    protected controller: ShapesStageController;

    constructor(app: Application) {
        this.view = new ShapesStageView(app);
        this.controller = new ShapesStageController(this.view, app);
        this.view.setController(this.controller);
        this.view.init();
    }
}
