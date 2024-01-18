import {
    Hexagon,
    Pentagon,
    Rectangle,
    Shape,
    SHAPE_TYPES,
    Star,
    Triangle,
    Circle,
    Ellipse,
} from './shapes';
import { SHAPE_SIZE_LIMIT } from '../config';

export class ShapesGenerator {
    static generateRandomShape(): Shape {
        const randomShapeType =
            SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)];
        const randomColor = Math.floor(Math.random() * 0xffffff);
        switch (randomShapeType) {
            case Triangle:
                return new Triangle(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE)
                );
            case Rectangle:
                return new Rectangle(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE),
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE)
                );
            case Pentagon:
                return new Pentagon(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE)
                );
            case Hexagon:
                return new Hexagon(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE)
                );
            case Circle:
                return new Circle(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE) / 2
                );
            case Ellipse:
                return new Ellipse(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE) / 2,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE) / 2
                );
            case Star:
                return new Star(
                    randomColor,
                    this.getRandomSize(SHAPE_SIZE_LIMIT.SIZE) / 2
                );
            default:
                throw new Error('Invalid shape type');
        }
    }

    private static getRandomSize(sizeLimit: {
        MIN: number;
        MAX: number;
    }): number {
        return Math.random() * (sizeLimit.MAX - sizeLimit.MIN) + sizeLimit.MIN;
    }
}
