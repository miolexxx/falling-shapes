import { ShapesInfoView } from './shapes-info.view';

export class ShapesInfoController {
    protected shapesInfoView: ShapesInfoView;

    constructor(view: ShapesInfoView) {
        this.shapesInfoView = view;
    }

    update(num: number, area: number) {
        this.shapesInfoView.setShapesNumber(num);
        this.shapesInfoView.setShapesArea(area);
    }
}
