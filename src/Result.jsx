
function Result({ result }) {
    return (
        <div>
            <h2>查询结果</h2>
            <p>姓名：{result.name}</p>
            <p>座次：{result.seat}</p>
        </div>
    )
}

export default Result