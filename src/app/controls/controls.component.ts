import { ControlsModel } from './controls.model';
import { ControlsView } from './controls.view';
import { ControlsController } from './controls.controller';

export class ControlsComponent {
    model: ControlsModel;
    protected view: ControlsView;
    protected controller: ControlsController;

    // init model, view and controller
    constructor() {
        this.model = new ControlsModel();
        this.view = new ControlsView();
        this.controller = new ControlsController(this.model, this.view);
        this.view.setController(this.controller);
    }
}
