import { ShapesStageView } from './shapes-stage.view';
import { Shape } from '../shapes/shapes';
import { ShapesGenerator } from '../shapes/shapes-generator';
import { Application, FederatedPointerEvent } from 'pixi.js';
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

        setInterval(this.generateShapes.bind(this), 1000); // set shapes create interval

        this.app.ticker.add(this.update.bind(this)); // game loop
    }

    /**
     * Create new Shape on click with pointer position
     * @param e - FederatedPointerEvent (need to set x and y)
     */
    addShapeOnClick(e: FederatedPointerEvent) {
        const shape = this.createRandomShape();
        shape.position.set(
            e.global.x + shape.width / 2,
            e.global.y - shape.height / 2,
        );
        this.addShape(shape);
    }

    /**
     * @return - Total shapes area
     * @protected
     */
    protected getShapesArea(): number {
        return this.shapes.reduce(
            (totalArea, shape) => totalArea + shape.getArea(),
            0,
        );
    }

    /**
     * @return - Total shapes number
     * @protected
     */
    protected getShapesNumber(): number {
        return this.shapes.length;
    }


    /**
     * Remove shape from view and 'shapes' array
     * @param shape - Shape to remove
     * @protected
     */
    protected removeShape(shape: Shape) {
        const shapeIndex = this.shapes.findIndex((s) => s == shape);
        this.shapes.splice(shapeIndex, 1);
        this.view.removeShape(shape);
    }

    /**
     * Game loop
     * @param delta - ticker dela time
     * @protected
     */
    protected update(delta: number) {
        // process each shape in array 'shapes'
        this.shapes.forEach((shape) => {
            this.processShape(shape);
        });
        // updated displayed shapes info (shapes number, shapes total area)
        this.shapesInfo.controller.update(this.getShapesNumber(), this.getShapesArea());
    }

    /**
     * Process shape
     * @param shape Shape to process
     * @protected
     */
    protected processShape(shape: Shape) {
        shape.y += this.controls.model.gravity; // move it down by gravity value
        // remove Shape if it out of stage borders
        if (shape.y > this.app.screen.height) {
            this.removeShape(shape);
        }
    }

    /**
     * Create needed amount of new shapes
     * @protected
     */
    protected generateShapes() {
        for (let i = 0; i < this.controls.model.shapesPerSecond; i++) {
            const shape = this.createRandomShape();
            this.addShape(shape);
        }
    }

    /**
     * Create random shape and return it instance
     * @return - Shape instance
     * @protected
     */
    protected createRandomShape(): Shape {
        const shape = ShapesGenerator.generateRandomShape();
        shape.position.set(
            Math.random() * this.app.screen.width,
            0,
        );
        shape.draw();
        shape.eventMode = 'static';
        shape.cursor = 'pointer';
        shape.on('click', () => this.removeShape(shape));
        return shape;
    }

    /**
     * Add shape to view and shapes array
     * @param shape - shape to add
     * @protected
     */
    protected addShape(shape: Shape) {
        this.shapes.push(shape);
        this.view.addShape(shape);
    }
}
