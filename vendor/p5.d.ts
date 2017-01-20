declare function random(from: number): number;
declare function random(from: number, to: number): number;

declare function collideCircleCircle(x1: number, y1: number, d1: number, x2: number, y2: number, d2: number): boolean;

declare function createCanvas(width: number, height: number): void;

declare function background(rgb: number): void;
declare function ellipse(x: number, y: number, r1: number, r2: number): void;
declare function fill(r: number, g: number, b: number): void;
declare function fill(rgb: number): void;
declare function textSize(size: number): void;
declare function text(text: string, x: number, y: number): void;
declare function textAlign(align: string): void;

declare function keyIsDown(key: number): boolean;

declare const LEFT: string;
declare const CENTER: string;

declare const LEFT_ARROW: number;
declare const UP_ARROW: number;
declare const RIGHT_ARROW: number;
declare const DOWN_ARROW: number;