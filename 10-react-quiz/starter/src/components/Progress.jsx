function Progress({index, numQuestions, points, maxPoints}) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index}></progress>
            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points} / {maxPoints}</strong></p>
        </header>
    )
}

export default Progress
