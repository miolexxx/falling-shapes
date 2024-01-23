export class ShapesInfoView {
    protected shapesNumber: HTMLSpanElement;
    protected shapesArea: HTMLSpanElement;

    constructor() {
        this.shapesNumber = document.getElementById('shapes-number')!;
        this.shapesArea = document.getElementById('shapes-area')!;
    }

    /**
     * Update 'Shapes number' text
     * @param num - shapes number
     */
    setShapesNumber(num: number) {
        this.shapesNumber.innerText = num.toString();
    }

    /**
     * Update 'Occupied area' text
     * @param area - total shapes area
     */
    setShapesArea(area: number) {
        this.shapesArea.innerText = area.toFixed(0);
    }
}
