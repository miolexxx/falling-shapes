export class ShapesInfoView {
    protected shapesNumber: HTMLSpanElement;
    protected shapesArea: HTMLSpanElement;

    constructor() {
        this.shapesNumber = document.getElementById('shapes-number')!;
        this.shapesArea = document.getElementById('shapes-area')!;
    }

    setShapesNumber(num: number) {
        this.shapesNumber.innerText = num.toString();
    }

    setShapesArea(area: number) {
        this.shapesArea.innerText = area.toFixed(0);
    }
}
