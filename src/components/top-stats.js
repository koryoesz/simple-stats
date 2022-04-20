export const LastHour = ({data}) => {

    console.log(data[0], ",,, passed data")

    return (
        <div class="top-stats">
        {data.map((dt, index) => (
            <div class="top-stat-column">
                <h3>Errors: {dt.code} </h3>
                <h5>Average: {dt.count}%</h5>
            </div>
          ))}   
        </div>
    );
}

export default LastHour;