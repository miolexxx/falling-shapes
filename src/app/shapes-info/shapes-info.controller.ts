import { ShapesInfoView } from './shapes-info.view';

export class ShapesInfoController {
    protected shapesInfoView: ShapesInfoView;

    constructor(view: ShapesInfoView) {
        this.shapesInfoView = view;
    }

    /**
     * Update number of shapes and total area fields
     * @param num - number of shapes
     * @param area - total shapes area
     */
    update(num: number, area: number) {
        this.shapesInfoView.setShapesNumber(num);
        this.shapesInfoView.setShapesArea(area);
    }
}
