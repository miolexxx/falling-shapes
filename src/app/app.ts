import { Application } from 'pixi.js';
import { ShapesStageComponent } from './shapes-stage/shapes-stage.component';

export class App {
    protected app: Application;
    protected shapesStage: ShapesStageComponent;

    /**
     * Init App instance
     */
    init() {
        this.initApp();
        this.initShapeStage();
    }

    /**
     * Creape PIXI Application and add it to page
     * @protected
     */
    protected initApp() {
        const appContainer = document.getElementById('app');
        this.app = new Application({
            width: appContainer?.clientWidth,
            height: appContainer?.clientHeight,
            backgroundColor: 0xffffff,
            antialias: true,
        });
        // globalThis.__PIXI_APP__ = this.app;

        appContainer?.appendChild(this.app.view as HTMLCanvasElement);
    }

    /**
     * Init ShapesStageComponent
     * @protected
     */
    protected initShapeStage() {
        this.shapesStage = new ShapesStageComponent(this.app);
        this.app.stage.addChild(this.shapesStage.view);
    }
}
