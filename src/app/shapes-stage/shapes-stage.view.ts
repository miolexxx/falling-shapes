import { Shape } from '../shapes/shapes';
import { Application, Container, Sprite, Texture } from 'pixi.js';
import { ShapesStageController } from './shapes-stage.controller';

export class ShapesStageView extends Container {
    protected app: Application;
    protected background: Sprite;
    protected controller: ShapesStageController;

    constructor(app: Application) {
        super();
        this.app = app;
    }

    setController(controller: ShapesStageController) {
        this.controller = controller;
    }

    addShape(shape: Shape) {
        this.addChild(shape);
    }

    removeShape(shape: Shape) {
        shape.destroy();
    }

    init() {
        this.background = new Sprite(Texture.WHITE);
        this.background.tint = 0xfafafa;
        this.background.width = this.app.screen.width;
        this.background.height = this.app.screen.height;
        this.background.eventMode = 'static';
        this.background.on('click', (e) => this.controller.addShapeOnClick(e));
        this.addChild(this.background);
    }
}
