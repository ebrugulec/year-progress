const now = new Date();
const startDate = new Date(now.getFullYear(), 0, 1);
const endDate = new Date(now.getFullYear() + 1, 0, 1);
const progressOfThisYear = (now-startDate) / (endDate-startDate);

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readMe = `Year progress ${generateProgressBar()} ${(progressOfThisYear * 100).toFixed(2)} %`

console.log(readMe)
