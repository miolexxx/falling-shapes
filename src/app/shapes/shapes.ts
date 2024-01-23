import { Graphics } from 'pixi.js';

export abstract class Shape extends Graphics {
    protected constructor(color: number) {
        super();
        this.beginFill(color);
    }

    abstract draw(): void; // draw shape

    abstract getArea(): number; // get shape area
}

export class Triangle extends Shape {
    protected sideLength: number;

    constructor(color: number, sideLength: number) {
        super(color);
        this.sideLength = sideLength;
    }

    draw(): void {
        const height = (Math.sqrt(3) / 2) * this.sideLength;

        this.moveTo(0, 0);
        this.lineTo(this.sideLength / 2, height);
        this.lineTo(-this.sideLength / 2, height);
        this.closePath();
        this.endFill();
        this.pivot.set(this.sideLength / 2, 0);
        this.position.set(this.position.x, -height);
    }

    getArea(): number {
        return (Math.sqrt(3) / 4) * Math.pow(this.sideLength, 2);
    }
}

export class Rectangle extends Shape {
    protected rectWidth: number;
    protected rectHeight: number;

    constructor(color: number, width: number, height: number) {
        super(color);
        this.rectWidth = width;
        this.rectHeight = height;
    }

    draw(): void {
        this.drawRect(0, 0, this.rectWidth, this.rectHeight);
        this.pivot.set(this.rectWidth, 0);
        this.position.set(this.position.x, -this.rectHeight);
    }

    getArea(): number {
        return this.rectWidth * this.rectHeight;
    }
}

export class Pentagon extends Shape {
    private sideLength: number;

    constructor(color: number, sideLength: number) {
        super(color);
        this.sideLength = sideLength;
    }

    draw(): void {
        const angleIncrement = (Math.PI * 2) / 5;

        for (let i = 0; i < 6; i++) {
            const angle = i * angleIncrement;
            const x = Math.cos(angle) * this.sideLength;
            const y = Math.sin(angle) * this.sideLength;
            this.lineTo(x, y);
        }

        this.closePath();
        this.endFill();

        this.pivot.set(this.sideLength, -this.sideLength);
        this.position.set(this.position.x, -this.sideLength * 2);
    }

    getArea(): number {
        return (
            (1 / 4) *
            Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) *
            Math.pow(this.sideLength, 2)
        );
    }
}

export class Hexagon extends Shape {
    private sideLength: number;

    constructor(color: number, sideLength: number) {
        super(color);
        this.sideLength = sideLength;
    }

    draw(): void {
        const angleIncrement = (Math.PI * 2) / 6;

        this.moveTo(0, 0);
        for (let i = 0; i < 7; i++) {
            const angle = i * angleIncrement;
            const x = Math.cos(angle) * this.sideLength;
            const y = Math.sin(angle) * this.sideLength;
            this.lineTo(x, y);
        }

        this.closePath();
        this.endFill();

        this.pivot.set(this.sideLength, -this.sideLength);
        this.position.set(this.position.x, -this.sideLength * 2);
    }

    getArea(): number {
        return (3 / 2) * Math.sqrt(3) * Math.pow(this.sideLength, 2);
    }
}

export class Circle extends Shape {
    private radius: number;

    constructor(color: number, radius: number) {
        super(color);
        this.radius = radius;
    }

    draw(): void {
        this.drawCircle(0, 0, this.radius);
        this.pivot.set(this.radius, -this.radius);
        this.position.set(this.position.x, -this.radius * 2);
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

export class Ellipse extends Shape {
    private radiusX: number;
    private radiusY: number;

    constructor(color: number, radiusX: number, radiusY: number) {
        super(color);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
    }

    draw(): void {
        this.drawEllipse(0, 0, this.radiusX, this.radiusY);
        this.pivot.set(this.radiusX, -this.radiusY);
        this.position.set(this.position.x, -this.radiusY * 2);
    }

    getArea(): number {
        return Math.PI * this.radiusX * this.radiusY;
    }
}

export class Star extends Shape {
    private outerRadius: number;
    private innerRadius: number;
    private points: number;

    constructor(color: number, radius: number) {
        super(color);
        this.outerRadius = radius * 2;
        this.innerRadius = radius;
        this.points = 5;
    }

    draw(): void {
        let step = (Math.PI * 2) / this.points;
        let halfStep = step / 2;
        let start = Math.PI;
        let n, dx, dy;
        this.moveTo(
            Math.cos(start) * this.outerRadius,
            Math.sin(start) * this.outerRadius,
        );

        for (n = 1; n <= this.points; ++n) {
            dx = Math.cos(start + step * n - halfStep) * this.innerRadius;
            dy = Math.sin(start + step * n - halfStep) * this.innerRadius;
            this.lineTo(dx, dy);
            dx = Math.cos(start + step * n) * this.outerRadius;
            dy = Math.sin(start + step * n) * this.outerRadius;
            this.lineTo(dx, dy);
        }

        this.pivot.set(this.outerRadius, -this.outerRadius);
        this.position.set(this.position.x, -this.outerRadius * 2);
    }

    getArea(): number {
        const outerPentagonArea = this.pentagonArea(this.outerRadius);
        const innerPentagonArea = this.pentagonArea(this.innerRadius);

        return outerPentagonArea - innerPentagonArea;
    }

    private pentagonArea(side: number): number {
        return 0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * side ** 2;
    }
}

export const SHAPE_TYPES = [
    Triangle,
    Rectangle,
    Pentagon,
    Hexagon,
    Circle,
    Ellipse,
    Star,
];
