function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalCount = evenCount + oddCount;
    const evenPercentage = (evenCount / totalCount) * 100;
    const oddPercentage = (oddCount / totalCount) * 100;

    console.log(`Кількість згенерованих чисел: ${totalCount}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: Парні - ${evenPercentage.toFixed(2)}%, Непарні - ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000);
