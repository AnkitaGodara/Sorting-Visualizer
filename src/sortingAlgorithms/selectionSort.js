export function selectionSort(array) {

    const animations = [];
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {

        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {

            animations.push([minIdx, j, "compare"]);

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }

            animations.push([minIdx, j, "revert"]);
        }

        animations.push([
            i,
            arr[minIdx],
            "swap"
        ]);

        animations.push([
            minIdx,
            arr[i],
            "swap"
        ]);

        [arr[i], arr[minIdx]] =
            [arr[minIdx], arr[i]];
    }

    return animations;
}