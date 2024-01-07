import React from "react"

export default class Task extends React.Component {

    constructor() {
        super();
        this.state = {
            myTasks: []
        };
    }

    handler = () => {
        let task = document.getElementById("task1").value;
        let duration = document.getElementById("dur").value;
        var obj = {
            task: task,
            duration: duration
        }
        var newArr = this.state.myTasks;
        newArr.push(obj);
        this.setState({
            myTasks: newArr
        })
    }

    render() {

        return (
            <>
                Task Name:<input type="text" id="task1" name="task1"></input><br /><br />
                Duration:<input type="text" id="dur" name="dur"></input><br /><br />
                <button onClick={this.handler}>Add List</button>
                &nbsp;

                {/* <div style={{ color: "red" }}> */}
                    <table id="table" className="table table-striped" width="70%" align="center" border={2} cellPadding={10} >
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Duration</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.myTasks.map((o) => <tr>
                                    <td>{o.task}</td>
                                    <td>{o.duration}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                {/* </div> */}
            </>
        )
    }

}