const Sidebar = () => {

    return (
        <>
            <div className='sidebar'>
                Create a Task.
                <div className='inputbox'>
                    <p>Title:</p>
                    <input placeholder="enter Title" />
                </div>
                <div className='inputbox'>
                    <p>Description:</p>
                    <input placeholder="enter Description" />
                </div>
                <div className='inputbox'>
                    <p>Status:</p>
                    <select name="taskStatus" id="taskStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className='inputbox'>
                    <button> Submit </button>
                </div>
            </div>
        </>
    );

};

export default Sidebar;