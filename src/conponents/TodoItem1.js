function TodoItem1() {
    let todoName = "Gym";
    let todoDate = "4/10/2023"
    return (
    <div className="container">
        <div className="row app-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
                <button type="button" class="btn btn-danger app-btn">
                    Delete
                </button>
            </div>
        </div>
    </div>
    );
}

export default TodoItem1;

