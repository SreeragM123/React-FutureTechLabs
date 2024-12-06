import React from 'react';

const Json = () => {
    const color = [
        {
            id: 0,
            color: "red",
            value: "#f00"
        },
        {
            id: 1,
            color: "green",
            value: "#0f0"
        },
        {
            id: 2,
            color: "blue",
            value: "#00f"
        },
        {
            id: 3,
            color: "cyan",
            value: "#0ff"
        },
        {
            id: 4,
            color: "magenta",
            value: "#f0f"
        },
        {
            id: 5,
            color: "yellow",
            value: "#ff0"
        },
    ];

    return (
        <div>
            <h2>Table Details</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Color</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        color.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.color}</td>
                                <td>{data.value}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Json;
