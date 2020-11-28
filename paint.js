const paint = (draw, x, y, color) => {
    const invalidArgs =
        !draw ||
        (y < 0 || x < 0) ||
        (draw.length === 0 || (draw.length - 1) < y) ||
        (draw[0].length === 0 || (draw[0].length - 1) < x);

    if (invalidArgs) return;

    const limits = {
        x: {
            left: 0,
            right: draw[x].length - 1,
        },
        y: {
            up: 0,
            down: draw.length - 1,
        },
    }

    const originalColor = draw[y][x];

    const canPaint = (pX, pY) => {
        const colorOk = draw[pY][pX] === originalColor;
        const positionOk =
            (pY === y && pX === x) ||
            (pY - 1 >= limits.y.up && draw[pY - 1][pX] === color) ||
            (pY + 1 <= limits.y.down && draw[pY + 1][pX] === color) ||
            (pX - 1 >= limits.x.left && draw[pY][pX - 1] === color) ||
            (pX + 1 <= limits.x.right && draw[pY][pX + 1] === color)

        return colorOk && positionOk;
    };

    const tryPaint = (x, y) => {
        if (canPaint(x, y)) {
            draw[y][x] = color;
            return 1;
        }
        return 0;
    };

    let count;

    do {
        count = 0;

        for (let yUp = y; yUp >= limits.y.up; yUp--) {
            for (let xLeft = x; xLeft >= limits.x.left; xLeft--) {
                count += tryPaint(xLeft, yUp);
            }

            for (let xRight = x; xRight <= limits.x.right; xRight++) {
                count += tryPaint(xRight, yUp);
            }
        }

        for (let yDown = y; yDown <= limits.y.down; yDown++) {
            for (let xLeft = x; xLeft >= limits.x.left; xLeft--) {
                count += tryPaint(xLeft, yDown);
            }

            for (let xRight = x; xRight <= limits.x.right; xRight++) {
                count += tryPaint(xRight, yDown);
            }
        }
    } while (count > 0);
};

module.exports = paint;
