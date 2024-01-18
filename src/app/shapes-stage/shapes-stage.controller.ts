import { ShapesStageView } from './shapes-stage.view';
import { Shape } from '../shapes/shapes';
import { ShapesGenerator } from '../shapes/shapes-generator';
import { Application } from 'pixi.js';
import { ControlsComponent } from '../controls/controls.component';
import { ShapesInfoComponent } from '../shapes-info/shapes-info.component';

export class ShapesStageController {
    protected view: ShapesStageView;
    protected app: Application;
    protected shapes: Shape[] = [];
    protected controls: ControlsComponent;
    protected shapesInfo: ShapesInfoComponent;

    constructor(ShapesStageView: ShapesStageView, app: Application) {
        this.view = ShapesStageView;
        this.app = app;
        this.controls = new ControlsComponent();
        this.shapesInfo = new ShapesInfoComponent();

        setInterval(this.generateShapes.bind(this), 1000);

        this.app.ticker.add(this.update.bind(this));
    }

    addShapeOnClick(e: any) {
        const shape = this.addRandomShape();
        shape.position.set(
            e.data.global.x + shape.width / 2,
            e.data.global.y - shape.height / 2
        );
    }

    protected getShapesArea(): number {
        return this.shapes.reduce(
            (totalArea, shape) => totalArea + shape.getArea(),
            0
        );
    }

    protected getShapesNumber(): number {
        return this.shapes.length;
    }

    protected onShapeClick(shape: Shape) {
        this.removeShape(shape);
    }

    protected removeShape(shape: Shape) {
        const shapeIndex = this.shapes.findIndex((s) => s == shape);
        this.shapes.splice(shapeIndex, 1);
        this.view.removeShape(shape);
    }

    protected update(delta: number) {
        this.shapes.forEach((shape) => {
            this.processShape(shape);
        });
        this.shapesInfo.update(this.getShapesNumber(), this.getShapesArea());
    }

    protected processShape(shape: Shape) {
        shape.y += this.controls.model.gravity;
        if (shape.y > this.app.screen.height) {
            this.removeShape(shape);
        }
    }

    protected generateShapes() {
        for (let i = 0; i < this.controls.model.shapesPerSecond; i++) {
            this.addRandomShape();
        }
    }

    protected addRandomShape(): Shape {
        const shape = ShapesGenerator.generateRandomShape();
        shape.position.set(
            Math.random() * this.app.screen.width,
            -shape.height
        );
        shape.draw();
        shape.eventMode = 'static';
        shape.cursor = 'pointer';
        shape.on('click', () => this.onShapeClick(shape));
        this.addShape(shape);
        return shape;
    }

    protected addShape(shape: Shape) {
        this.shapes.push(shape);
        this.view.addShape(shape);
    }
}
