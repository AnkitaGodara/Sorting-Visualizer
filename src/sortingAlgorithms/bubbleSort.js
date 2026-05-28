export function bubbleSort(array) {

    const animations = [];
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {

            animations.push([j, j + 1, "compare"]);

            if (arr[j] > arr[j + 1]) {

                animations.push([
                    j,
                    arr[j + 1],
                    "swap"
                ]);

                animations.push([
                    j + 1,
                    arr[j],
                    "swap"
                ]);

                let temp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            animations.push([j, j + 1, "revert"]);
        }
    }

    return animations;
}