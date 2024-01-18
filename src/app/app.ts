import { Application } from 'pixi.js';
import { ShapesStageComponent } from './shapes-stage/shapes-stage.component';

export class App {
    protected app: Application;
    protected shapesStage: ShapesStageComponent;

    constructor() {
        this.init();
    }

    protected init() {
        this.initApp();
        this.initShapeStage();
    }

    protected initApp() {
        const appContainer = document.getElementById('app');
        this.app = new Application({
            width: appContainer?.clientWidth,
            height: appContainer?.clientHeight,
            backgroundColor: 0xffffff,
            antialias: true,
        });

        appContainer?.appendChild(this.app.view as HTMLCanvasElement);
    }

    protected initShapeStage() {
        this.shapesStage = new ShapesStageComponent(this.app);
        this.app.stage.addChild(this.shapesStage.view);
    }
}
