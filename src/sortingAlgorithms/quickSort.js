export function quickSort(array) {

    const animations = [];
    const arr = [...array];

    quickSortHelper(
        arr,
        0,
        arr.length - 1,
        animations
    );

    return animations;
}

function quickSortHelper(
    arr,
    low,
    high,
    animations
) {

    if (low < high) {

        const pivotIndex =
            partition(arr, low, high, animations);

        quickSortHelper(
            arr,
            low,
            pivotIndex - 1,
            animations
        );

        quickSortHelper(
            arr,
            pivotIndex + 1,
            high,
            animations
        );
    }
}

function partition(
    arr,
    low,
    high,
    animations
) {

    const pivot = arr[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {

        animations.push([j, high, "compare"]);

        if (arr[j] < pivot) {

            i++;

            animations.push([
                i,
                arr[j],
                "swap"
            ]);

            animations.push([
                j,
                arr[i],
                "swap"
            ]);

            [arr[i], arr[j]] =
                [arr[j], arr[i]];
        }

        animations.push([j, high, "revert"]);
    }

    animations.push([
        i + 1,
        arr[high],
        "swap"
    ]);

    animations.push([
        high,
        arr[i + 1],
        "swap"
    ]);

    [arr[i + 1], arr[high]] =
        [arr[high], arr[i + 1]];

    return i + 1;
}