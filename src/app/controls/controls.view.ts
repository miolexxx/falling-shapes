import { ControlsController } from './controls.controller';

export class ControlsView {
    protected controller: ControlsController;
    protected gravityPlus: HTMLInputElement;
    protected gravityMinus: HTMLInputElement;
    protected shapesPerSecondPlus: HTMLInputElement;
    protected shapesPerSecondMinus: HTMLInputElement;
    protected shapesPerSecond: HTMLInputElement;
    protected gravity: HTMLInputElement;

    constructor() {
        this.shapesPerSecondPlus = document.getElementById(
            'shapes-per-second-plus'
        ) as HTMLInputElement;
        this.shapesPerSecondMinus = document.getElementById(
            'shapes-per-second-minus'
        ) as HTMLInputElement;
        this.gravityPlus = document.getElementById(
            'gravity-plus'
        ) as HTMLInputElement;
        this.gravityMinus = document.getElementById(
            'gravity-minus'
        ) as HTMLInputElement;
        this.shapesPerSecond = document.getElementById(
            'shapes-per-second'
        ) as HTMLInputElement;
        this.gravity = document.getElementById('gravity') as HTMLInputElement;

        this.initHandlers();
    }

    setController(controller: ControlsController) {
        this.controller = controller;
    }

    protected initHandlers() {
        this.shapesPerSecondPlus.addEventListener('click', () => {
            const num = Number.parseInt(this.shapesPerSecond.value);
            this.controller?.setShapesPerSecond(num);
        });

        this.shapesPerSecondMinus.addEventListener('click', () => {
            const num = Number.parseInt(this.shapesPerSecond.value);
            this.controller?.setShapesPerSecond(num);
        });

        this.gravityMinus.addEventListener('click', () => {
            const num = Number.parseInt(this.gravity.value);
            this.controller?.setGravity(num);
        });

        this.gravityPlus.addEventListener('click', () => {
            const num = Number.parseInt(this.gravity.value);
            this.controller?.setGravity(num);
        });
    }
}
